let existingDataStatus = 'newData'; // Variable to identify if the data will be saved as a new data in the google sheet or as an existing data
let websiteUserUniqueNumber = 'newUniqueNumber'; // Variable to identify if the website user code number will be increased or no


let allGoogleSheetScriptURL = 'https://script.google.com/macros/s/AKfycbw-wlTzrQqXujyV_VlXezvx5HNkMgK05ZVXfXCV-2wmwl7frFHX4PYxYMg5NGqaC1Aj/exec';


let form = document.forms['save-package'];

function submitFormAndSaveData() {
    return new Promise((resolve, reject) => { // Added Promise


        /* Get the package user name scode to store it as a reference when importing */
        let googleSheetNewSaveDataNameInput = document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText;

        let newObject = {
            name: googleSheetNewSaveDataNameInput,
            content: {},
            status: existingDataStatus
        };

        let divIds = [
            'downloaded_pdf_clint_data_page',
            'downloaded_pdf_package_including_data_page',
            'downloaded_pdf_flight_data_page',
            'downloaded_pdf_hotel_data_page',
            'downloaded_pdf_clint_movements_data_page',
            'downloaded_pdf_total_price_data_page'
        ];

        divIds.forEach(divId => {
            let element = document.getElementById(divId);
            if (element && element.style.display !== 'none' && element.offsetWidth > 0 && element.offsetHeight > 0) {
                newObject.content[divId] = cleanHTML(element.innerHTML);
            }
        });



        fetch(allGoogleSheetScriptURL, {
            method: 'POST',
            body: JSON.stringify(newObject),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors'
        })
            .then(() => {

                updateDataBaseSavedDataNames();


                // Change the value of 'existingDataStatus' for editing old data mode
                existingDataStatus = 'existingData';
                document.getElementById('website_users_name_input_id').disabled = true;
                websiteUserUniqueNumber = 'existingUniqueNumber';


                /* Re-enable the p element for saving the current package data in the same saved pakcage user code */
                document.getElementById('use_website_user_code_name_as_downloaded_pdf_file_name_p_id').style.pointerEvents = 'auto';

                resolve(); // Ensures the promise resolves only after all tasks are done
            })
            .catch(error => reject(error)); // Added error handling
    });
}










/* Function to store the package in the Supabase database */
async function sendDataToSupabase() {
    return new Promise(async (resolve, reject) => {
        try {

            // 🔹 REQUIRED: Ensure `formattedName` is defined
            const formattedName = document.getElementById("package_user_code_name_for_later_import_reference_p_id")?.innerText.trim();


            // Clean HTML sections
            const downloaded_pdf_clint_data_page = cleanHTML(document.getElementById("downloaded_pdf_clint_data_page")?.innerHTML || "");
            const downloaded_pdf_flight_data_page = cleanHTML(document.getElementById("downloaded_pdf_flight_data_page")?.innerHTML || "");
            const downloaded_pdf_hotel_data_page = cleanHTML(document.getElementById("downloaded_pdf_hotel_data_page")?.innerHTML || "");
            const downloaded_pdf_clint_movements_data_page = cleanHTML(document.getElementById("downloaded_pdf_clint_movements_data_page")?.innerHTML || "");
            const downloaded_pdf_package_including_data_page = cleanHTML(document.getElementById("downloaded_pdf_package_including_data_page")?.innerHTML || "");
            const downloaded_pdf_total_price_data_page = cleanHTML(document.getElementById("downloaded_pdf_total_price_data_page")?.innerHTML || "");

            // Fine the lastFoundMonthName value
            const arabicToEnglish = {
                "يناير": "January", "فبراير": "February", "مارس": "March", "أبريل": "April", "مايو": "May", "يونيو": "June",
                "يوليو": "July", "أغسطس": "August", "سبتمبر": "September", "أكتوبر": "October", "نوفمبر": "November", "ديسمبر": "December"
            };

            // Find the lastFoundMonthName value
            const rawDate = document.getElementById("whole_package_end_date_input_id")?.value.trim();
            const parts = rawDate.split(" ").filter(Boolean);

            // Get month short name from Arabic word
            const foundArabicMonth = parts.find(word => arabicToEnglish[word]);
            const fullMonthName = arabicToEnglish[foundArabicMonth] || "Invalid";

            // Extract year or use current year if missing
            let foundYear = parts.find(part => /^\d{4}$/.test(part));
            if (!foundYear) {
                foundYear = new Date().getFullYear();
            }

            const package_thai_last_month_date = `${fullMonthName} ${foundYear}`;



            // Current timestamp
            const package_thai_user_current_date = new Date().toISOString();

            const rowData = {
                name: formattedName,
                downloaded_pdf_clint_data_page,
                downloaded_pdf_flight_data_page,
                downloaded_pdf_hotel_data_page,
                downloaded_pdf_clint_movements_data_page,
                downloaded_pdf_package_including_data_page,
                downloaded_pdf_total_price_data_page,
                package_thai_user_current_date,
                package_thai_last_month_date
            };

            if (existingDataStatus === "newData") {
                const { error } = await supabase
                    .from('en_all_package_thai')
                    .insert([rowData])
                    .select();

                if (error) {
                    console.error("❌ Insert failed:", error);
                    reject(error);
                    return;
                }

            } else if (existingDataStatus === "existingData") {
                const { data, error } = await supabase
                    .from('en_all_package_thai')
                    .update(rowData)
                    .eq('name', formattedName)
                    .select();

                if (error) {
                    console.error("❌ Update failed:", error);
                    reject(error);
                    return;
                }

                if (data.length === 0) {
                    console.warn("⚠️ No row updated. Name might not exist:", formattedName);
                    reject("No matching row found to update.");
                    return;
                }

            } else {
                console.error("❌ Invalid existingDataStatus value:", existingDataStatus);
                reject("Invalid existingDataStatus value.");
                return;
            }



            updateDataBaseSavedDataNames();

            existingDataStatus = 'existingData';
            document.getElementById('website_users_name_input_id').disabled = true;
            websiteUserUniqueNumber = 'existingUniqueNumber';

            document.getElementById('use_website_user_code_name_as_downloaded_pdf_file_name_p_id').style.pointerEvents = 'auto';



            resolve();
        } catch (error) {
            console.error("❌ Unexpected error in sendDataToSupabase:", error);
            reject(error);
        }
    });
}









// Function to clean HTML by removing unnecessary attributes and tags
function cleanHTML(html) {
    // Remove HTML comments
    html = html.replace(/<!--[\s\S]*?-->/g, '');

    // Trim excessive spaces
    return html.replace(/\s+/g, ' ').trim();
}





















let allPackagesGoogleSheetURL = 'https://script.google.com/macros/s/AKfycbw-wlTzrQqXujyV_VlXezvx5HNkMgK05ZVXfXCV-2wmwl7frFHX4PYxYMg5NGqaC1Aj/exec';

/* Create object to store all the google sheet data for later use (when importing) */
let sheetData = [];

let totalRivPackageNumberForUpdatingNewRivPackage = null;

/* Objects to store the user packages away from each other */
let googleSheet_ss_PackageNames = [];
let googleSheet_mm_PackageNames = [];
let googleSheet_oo_PackageNames = [];
let googleSheet_tt_PackageNames = [];
let googleSheet_ww_PackageNames = [];
let googleSheet_aa_PackageNames = [];
let googleSheet_zz_PackageNames = [];
let googleSheet_hh_PackageNames = [];
let googleSheet_kk_PackageNames = [];
let googleSheet_yy_PackageNames = [];
let googleSheet_bb_PackageNames = [];

/* Fetch the data from google sheet in 5 times (300 rows in each time) */
function updateDataBaseSavedDataNames() {
    let allGoogleSheetStoredDataNamesForImportingDataDiv = document.getElementById('all_google_sheet_stored_data_names_for_importing_data_div');

    allGoogleSheetStoredDataNamesForImportingDataDiv.innerHTML = '';
    clearPackageNameArrays();

    // First fetch: Fetch the last 300 rows from the sheet
    fetch(`${allPackagesGoogleSheetURL}?fetchType=1`)
        .then(response => response.json())
        .then(data => {

            // Proceed to the second fetch
            secondTimefetchSheetData();

            // Append fetched rows to sheetData
            sheetData.push(...data.values);

            filterAndStorePackageNames(sheetData, 'prepend');
            hideAllH3Elements();
            enablePointerEventsForFilters();
            updateSearchFilterFunctionality();
        })
        .catch(error => console.error(error));
}

function secondTimefetchSheetData() {
    fetch(`${allPackagesGoogleSheetURL}?fetchType=2`)
        .then(response => response.json())
        .then(data => {

            thirdTimefetchSheetData();

            // Append fetched rows to sheetData
            sheetData.push(...data.values);

            filterAndStorePackageNames(sheetData, 'append');
            hideAllH3Elements();
            enablePointerEventsForFilters();
            updateSearchFilterFunctionality();
        })
        .catch(error => console.error(error));
}

function thirdTimefetchSheetData() {
    fetch(`${allPackagesGoogleSheetURL}?fetchType=3`)
        .then(response => response.json())
        .then(data => {

            fourthTimefetchSheetData();

            // Append fetched rows to sheetData
            sheetData.push(...data.values);

            filterAndStorePackageNames(sheetData, 'append');
            hideAllH3Elements();
            enablePointerEventsForFilters();
            updateSearchFilterFunctionality();
        })
        .catch(error => console.error(error));
}

function fourthTimefetchSheetData() {
    fetch(`${allPackagesGoogleSheetURL}?fetchType=4`)
        .then(response => response.json())
        .then(data => {

            fifthTimefetchSheetData();

            // Append fetched rows to sheetData
            sheetData.push(...data.values);

            filterAndStorePackageNames(sheetData, 'append');
            hideAllH3Elements();
            enablePointerEventsForFilters();
            updateSearchFilterFunctionality();
        })
        .catch(error => console.error(error));
}

function fifthTimefetchSheetData() {
    fetch(`${allPackagesGoogleSheetURL}?fetchType=5`)
        .then(response => response.json())
        .then(data => {

            // Append fetched rows to sheetData
            sheetData.push(...data.values);

            filterAndStorePackageNames(sheetData, 'append');
            hideAllH3Elements();
            enablePointerEventsForFilters();
            updateSearchFilterFunctionality();

            document.getElementById('import_packages_title_h6_id').innerText = 'تم تحميل جميع البكجات';
        })
        .catch(error => console.error(error));
}

function clearPackageNameArrays() {
    let arrays = [
        googleSheet_ss_PackageNames, googleSheet_mm_PackageNames, googleSheet_oo_PackageNames,
        googleSheet_tt_PackageNames, googleSheet_aa_PackageNames, googleSheet_zz_PackageNames,
        googleSheet_hh_PackageNames, googleSheet_kk_PackageNames,
        googleSheet_ww_PackageNames, googleSheet_yy_PackageNames, googleSheet_bb_PackageNames
    ];

    arrays.forEach(arr => arr.length = 0); // Clear each array
}

/* Show only the h3 elements that are matching the picked "user code" button */
function filterAndStorePackageNames(data, prependStatus) {
    let allGoogleSheetStoredDataNamesForImportingDataDiv = document.getElementById('all_google_sheet_stored_data_names_for_importing_data_div');

    // Loop through the data to create and add h3 elements
    data.forEach(row => {
        let packageName = row[0];

        // Check if an h3 element with the id of this package name already exists
        if (!document.getElementById(packageName)) {
            let h3Element = createH3Element(packageName);

            // Assign the packageName as the id of the h3 element to make it unique
            h3Element.id = packageName;

            // Sort the package names into their respective arrays
            if (packageName.startsWith('ss')) {
                googleSheet_ss_PackageNames.push(h3Element);
            } else if (packageName.startsWith('mm')) {
                googleSheet_mm_PackageNames.push(h3Element);
            } else if (packageName.startsWith('oo')) {
                googleSheet_oo_PackageNames.push(h3Element);
            } else if (packageName.startsWith('tt')) {
                googleSheet_tt_PackageNames.push(h3Element);
            } else if (packageName.startsWith('aa')) {
                googleSheet_aa_PackageNames.push(h3Element);
            } else if (packageName.startsWith('zz')) {
                googleSheet_zz_PackageNames.push(h3Element);
            } else if (packageName.startsWith('hh')) {
                googleSheet_hh_PackageNames.push(h3Element);
            } else if (packageName.startsWith('kk')) {
                googleSheet_kk_PackageNames.push(h3Element);
            } else if (packageName.startsWith('ww')) {
                googleSheet_ww_PackageNames.push(h3Element);
            } else if (packageName.startsWith('yy')) {
                googleSheet_yy_PackageNames.push(h3Element);
            } else if (packageName.startsWith('bb')) {
                googleSheet_bb_PackageNames.push(h3Element);
            }

            // Prepend or append based on the provided status
            if (prependStatus === 'prepend') {
                allGoogleSheetStoredDataNamesForImportingDataDiv.prepend(h3Element); // Insert at the top
            } else {
                allGoogleSheetStoredDataNamesForImportingDataDiv.append(h3Element);  // Insert at the bottom
            }
        }
    });
}


// Function to hide all <h3> elements
function hideAllH3Elements() {
    let allH3Elements = document.getElementById('all_google_sheet_stored_data_names_for_importing_data_div').getElementsByTagName('h3');
    for (let i = 0; i < allH3Elements.length; i++) {
        allH3Elements[i].style.display = 'none';
    }
}

// Function to display filtered data based on input field value
let packageArrayMap = {
    'بكج مستر سامي': googleSheet_ss_PackageNames,
    'بكج عبد الله': googleSheet_tt_PackageNames,
    'بكج معتز': googleSheet_mm_PackageNames,
    'بكج وائل': googleSheet_ww_PackageNames,
    'بكج عبد الرحمن': googleSheet_oo_PackageNames,
    'بكج علي': googleSheet_aa_PackageNames,
    'بكج ناصر': googleSheet_zz_PackageNames,
    'بكج محمد': googleSheet_hh_PackageNames,
    'بكج صبري': googleSheet_kk_PackageNames,
    'بكج مستر ابو سما': googleSheet_yy_PackageNames,
    'بكج بندر للتجربة': googleSheet_bb_PackageNames
};

// Function to create h3 elements based on package names
function createH3Element(packageName) {
    let h3Element = document.createElement('h3');
    h3Element.innerText = packageName;

    // Check if the innerText is "Name" and hide the element if it is
    if (h3Element.innerText === "Name") {
        h3Element.remove();
    } else {
        h3Element.onclick = function () {
            pickThisGoogleSheetDataName(this);
        };

        // Store the h3 element in the appropriate array based on its innerText
        if (h3Element.innerText.startsWith('ss')) {
            googleSheet_ss_PackageNames.push(h3Element);
        } else if (h3Element.innerText.startsWith('mm')) {
            googleSheet_mm_PackageNames.push(h3Element);
        } else if (h3Element.innerText.startsWith('oo')) {
            googleSheet_oo_PackageNames.push(h3Element);
        } else if (h3Element.innerText.startsWith('tt')) {
            googleSheet_tt_PackageNames.push(h3Element);
        } else if (h3Element.innerText.startsWith('aa')) {
            googleSheet_aa_PackageNames.push(h3Element);
        } else if (h3Element.innerText.startsWith('zz')) {
            googleSheet_zz_PackageNames.push(h3Element);
        } else if (h3Element.innerText.startsWith('hh')) {
            googleSheet_hh_PackageNames.push(h3Element);
        } else if (h3Element.innerText.startsWith('kk')) {
            googleSheet_kk_PackageNames.push(h3Element);
        } else if (h3Element.innerText.startsWith('ww')) {
            googleSheet_ww_PackageNames.push(h3Element);
        } else if (h3Element.innerText.startsWith('yy')) {
            googleSheet_yy_PackageNames.push(h3Element);
        } else if (h3Element.innerText.startsWith('bb')) {
            googleSheet_bb_PackageNames.push(h3Element);
        }
    }

    return h3Element;
}

// Function to enable pointer events and opacity for all filter buttons
function enablePointerEventsForFilters() {

    let userNameInput = document.getElementById('website_users_name_input_id').value;


    let elements = document.getElementsByClassName('filter_google_sheet_packages_names_p_class');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.pointerEvents = 'auto';
        elements[i].style.opacity = '1';
        elements[i].style.backgroundColor = 'rgb(255, 174, 0)';
    }


    // Get all p elements with the class name 'filter_google_sheet_packages_names_p_class'
    let filterElements = document.getElementsByClassName('filter_google_sheet_packages_names_p_class');

    // Apply the background color based on the input value
    switch (userNameInput) {
        case 'بكج مستر سامي':
            if (filterElements[0]) filterElements[0].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_ss_PackageNames;
            break;
        case 'بكج عبد الله':
            if (filterElements[1]) filterElements[1].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_tt_PackageNames;
            break;
        case 'بكج معتز':
            if (filterElements[2]) filterElements[2].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_mm_PackageNames;
            break;
        case 'بكج وائل':
            if (filterElements[3]) filterElements[3].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_ww_PackageNames;
            break;
        case 'بكج عبد الرحمن':
            if (filterElements[4]) filterElements[4].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_oo_PackageNames;
            break;
        case 'بكج علي':
            if (filterElements[5]) filterElements[5].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_aa_PackageNames;
            break;
        case 'بكج ناصر':
            if (filterElements[6]) filterElements[6].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_zz_PackageNames;
            break;
        case 'بكج محمد':
            if (filterElements[7]) filterElements[7].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_hh_PackageNames;
            break;
        case 'بكج صبري':
            if (filterElements[8]) filterElements[8].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_kk_PackageNames;
            break;
        case 'بكج مستر ابو سما':
            if (filterElements[9]) filterElements[9].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_yy_PackageNames;
            break;
        case 'بكج بندر للتجربة':
            targetArray = googleSheet_bb_PackageNames;
            break;
        default:
            targetArray = []; // If none matches, set an empty array
            break;
    }

    // Loop through the target array and show the corresponding h3 elements
    for (let i = 0; i < targetArray.length; i++) {
        targetArray[i].style.display = 'block';
    }
}

resetPackageNamesFilterInputValue = function () {
    document.getElementById('import_google_sheet_data_names_search_bar_input_id').value = '';


    let targetWebsiteUserName = document.getElementById('website_users_name_input_id').value;

    /* Show only the h3 elements from the corresponding array based on the passed 'targetPackagesName' value */
    let targetArray;
    switch (targetWebsiteUserName) {
        case 'بكج مستر سامي':
            targetArray = googleSheet_ss_PackageNames;
            break;
        case 'بكج معتز':
            targetArray = googleSheet_mm_PackageNames;
            break;
        case 'بكج عبد الرحمن':
            targetArray = googleSheet_oo_PackageNames;
            break;
        case 'بكج عبد الله':
            targetArray = googleSheet_tt_PackageNames;
            break;
        case 'بكج علي':
            targetArray = googleSheet_aa_PackageNames;
            break;
        case 'بكج ناصر':
            targetArray = googleSheet_zz_PackageNames;
            break;
        case 'بكج محمد':
            targetArray = googleSheet_hh_PackageNames;
            break;
        case 'بكج صبري':
            targetArray = googleSheet_kk_PackageNames;
            break;
        case 'بكج وائل':
            targetArray = googleSheet_ww_PackageNames;
            break;
        case 'بكج مستر سامي':
            targetArray = googleSheet_yy_PackageNames;
            break;
        case 'بكج بندر للتجربة':
            targetArray = googleSheet_bb_PackageNames;
            break;
        default:
            targetArray = []; // If none matches, set an empty array
            break;
    }

    /* Loop through the target array and show the corresponding h3 elements */
    for (let i = 0; i < targetArray.length; i++) {
        targetArray[i].style.display = 'block';
    }
}

// Function to handle the same functionality as the previous input event listener
function updateSearchFilterFunctionality() {

    if (document.getElementById('import_google_sheet_data_names_search_bar_input_id').value !== '') {
        // Select all elements with the class 'search_bar_input_class'
        document.querySelectorAll('.search_bar_input_class').forEach(input => {
            // Find the closest parent element with the class 'searchable_names_dropdown_class'
            let dropdownDiv = input.closest('.searchable_names_dropdown_class');

            // Set the height of the dropdown div to 70vh
            dropdownDiv.style.transition = 'height 0.1s ease-in-out';
            dropdownDiv.style.maxHeight = '70vh';
            dropdownDiv.style.minHeight = '70vh';

            // Filter the dropdown options based on input value
            let filter = input.value.trim().toLowerCase();
            let filterWords = filter.split(/\s+/);
            let options = dropdownDiv.querySelectorAll('h3');
            let visibleCount = 0;

            options.forEach(option => {
                let optionText = option.textContent.trim().toLowerCase();
                let matches = filterWords.every(word => optionText.includes(word));

                if (filter === '' && visibleCount < 6) {
                    option.style.display = 'block';
                    visibleCount++;
                } else {
                    option.style.display = matches ? 'block' : 'none';
                }
            });
        });
    }
}















// Function to find the selected name and call importContentForSelectedName
function findSelectedNameAndImportContent() {
    let selectedName = null;
    let allDataNames = document.querySelectorAll('#all_google_sheet_stored_data_names_for_importing_data_div h3');

    allDataNames.forEach(function (dataName) {
        if (dataName.style.backgroundColor === 'rgb(0, 155, 0)') {
            selectedName = dataName.innerText;
        }
    });

    if (selectedName) {

        // Play a sound effect
        playSoundEffect('success');

        // Run a function to import the data based on the name of the clicked h3
        importContentForSelectedName(selectedName);

    }
}




// Function to import the content for the selected name
function importContentForSelectedName(name) {

    // Assuming the first column is the name and subsequent columns are the contents
    let selectedRow = sheetData.find(row => row[0] === name);

    /* Hide all pdf pages content for re-show them if they exist in the inported packages data */
    document.getElementById('downloaded_pdf_clint_data_page').style.display = 'none';
    document.getElementById('downloaded_pdf_package_including_data_page').style.display = 'none';
    document.getElementById('downloaded_pdf_flight_data_page').style.display = 'none';
    document.getElementById('downloaded_pdf_hotel_data_page').style.display = 'none';
    document.getElementById('downloaded_pdf_clint_movements_data_page').style.display = 'none';
    document.getElementById('downloaded_pdf_total_price_data_page').style.display = 'none';


    if (selectedRow) {
        let contentColumns = {
            downloaded_pdf_clint_data_page: selectedRow[1],
            downloaded_pdf_package_including_data_page: selectedRow[2],
            downloaded_pdf_flight_data_page: selectedRow[3],
            downloaded_pdf_hotel_data_page: selectedRow[4],
            downloaded_pdf_clint_movements_data_page: selectedRow[5],
            downloaded_pdf_total_price_data_page: selectedRow[6]
        };

        try {
            let parser = new DOMParser();

            for (let divId in contentColumns) {
                let rawHtmlString = contentColumns[divId];

                if (rawHtmlString) {
                    // Process the raw HTML before placing it in the website
                    let formattedHtmlString = formatHtmlForWebsite(rawHtmlString);

                    let doc = parser.parseFromString(formattedHtmlString, 'text/html');
                    let newContent = doc.body.innerHTML;

                    let htmlSectionPdfPageDiv = document.getElementById(divId);
                    if (htmlSectionPdfPageDiv) {
                        htmlSectionPdfPageDiv.style.display = 'block';
                        htmlSectionPdfPageDiv.innerHTML = '';  // Clear current content
                        htmlSectionPdfPageDiv.innerHTML = newContent;  // Set new content
                        reActiveDragAndDropFunctionality(htmlSectionPdfPageDiv.id);
                    }
                }
            }

            /* Change the value of the 'existingDataStatus' for making sure you are in editing old data mood */
            document.getElementById('website_users_name_input_id').disabled = true;

            // Make sure to hide all elements with the class name before checking visibility
            let images = document.querySelectorAll('.inserted_package_data_section_page_image_class');
            images.forEach(img => {
                img.style.display = 'none';
            });

            // Make sure to hide all elements with the class name before checking visibility
            let images2 = document.querySelectorAll('.inserted_package_data_section_page_image_class_2');
            images2.forEach(img => {
                img.style.display = 'none';
            });

            /* Show the 'inserted_company_name_image_position_div' element */
            document.getElementById('inserted_company_name_image_position_div').style.display = 'flex';


        } catch (error) {
        }
    }

    /* Hide the overlay page */
    hideOverlay()


    // New functionality to count matching name values

    // Step 1: Get the user code from the <p> element
    let fullPackageCode = document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText;

    // Step 2: Remove everything after '_riv_' to get the base code
    let basePackageCode = fullPackageCode.split('_riv_')[0];


    // Step 3: Create an array to store the found numbers after '_riv_'
    let foundRivNumbers = [];

    // Step 4: Loop through each row in the sheet data
    sheetData.forEach(row => {
        let fullCode = row[0]; // Get the value from the first column
        if (fullCode.startsWith(basePackageCode + '_riv_')) {
            // Use regex to extract the number after '_riv_'
            let match = fullCode.match(/_riv_(\d+)/);
            if (match) {
                let rivNumber = parseInt(match[1], 10); // Convert to number
                foundRivNumbers.push(rivNumber);
            }
        }
    });

    // Step 5: Find the highest number and add 1 to it
    let totalRivPackageNumberForUpdatingNewRivPackage = 1; // Start with 1 if no match found
    if (foundRivNumbers.length > 0) {
        let highestNumber = Math.max(...foundRivNumbers);
        totalRivPackageNumberForUpdatingNewRivPackage = highestNumber + 1;
    }




    document.getElementById('package_user_code_name_for_later_import_reference_p_id').innerText = `${document.getElementById('store_google_sheet_package_raw_user_with_no_riv_for_later_reference_when_importing').innerText}_riv_${totalRivPackageNumberForUpdatingNewRivPackage}`


    /* When importing make sure to save the new _riv_ data as a new data in the google sheet */
    existingDataStatus = 'newData';
    websiteUserUniqueNumber = 'existingUniqueNumber';




    /* Call a function to make sure the hotel available dates are properly set */
    updateAllowedDates();
}



// Function to format the raw HTML content for placing in the website
function formatHtmlForWebsite(rawHtml) {
    // Example: Remove unnecessary spaces, add required attributes, etc.
    let formattedHtml = rawHtml.replace(/\s+/g, ' ').trim();

    // Add more formatting rules as needed
    // For example, you could use a library like DOMPurify to sanitize the HTML

    return formattedHtml;
}




// Function to pick google sheet data names
function pickThisGoogleSheetDataName(clickedGoogleSheetDataName) {

    /* in case the clicked h3 is already picked then import it directly */
    if (clickedGoogleSheetDataName.style.backgroundColor === 'rgb(0, 155, 0)') {

        /* Run a function to import that picked h3 element from the google sheet databse */
        findSelectedNameAndImportContent();

        /* if the clikced h3 is not picked then just highlight it as a new picked one */
    } else {

        // Get all <h3> elements inside the 'all_google_sheet_stored_data_names_for_importing_data_div' div
        let allGoogleSheetStoredDataNamesForImportingDataDiv = document.querySelectorAll('#all_google_sheet_stored_data_names_for_importing_data_div h3');

        // Loop through each <h3> element to reset their styles
        allGoogleSheetStoredDataNamesForImportingDataDiv.forEach(function (dataName) {
            dataName.style.backgroundColor = 'white';
            dataName.style.color = 'black';
        });


        // Set the background color and text color of the clicked <h3> element
        clickedGoogleSheetDataName.style.backgroundColor = 'rgb(0, 155, 0)';
        clickedGoogleSheetDataName.style.color = 'white';

    }
}







/* Function to filter the google sheet packages names */
fliterGoogleSheetPackagesNames = function (clickedElement, targetPackagesName) {
    /* Reset all other <p> elements background color */
    let elements = document.getElementsByClassName('filter_google_sheet_packages_names_p_class');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'rgb(255, 174, 0)';
    }

    /* Change the background color of the clicked <p> element */
    clickedElement.style.backgroundColor = 'rgb(140, 0, 255)';

    /* First, hide all <h3> elements */
    let allH3Elements = document.getElementById('all_google_sheet_stored_data_names_for_importing_data_div').getElementsByTagName('h3');
    for (let i = 0; i < allH3Elements.length; i++) {
        allH3Elements[i].style.display = 'none';
    }

    /* Show only the h3 elements from the corresponding array based on the passed 'targetPackagesName' value */
    let targetArray;
    switch (targetPackagesName) {
        case 'googleSheet_ss_PackageNames':
            targetArray = googleSheet_ss_PackageNames;
            break;
        case 'googleSheet_mm_PackageNames':
            targetArray = googleSheet_mm_PackageNames;
            break;
        case 'googleSheet_oo_PackageNames':
            targetArray = googleSheet_oo_PackageNames;
            break;
        case 'googleSheet_tt_PackageNames':
            targetArray = googleSheet_tt_PackageNames;
            break;
        case 'googleSheet_aa_PackageNames':
            targetArray = googleSheet_aa_PackageNames;
            break;
        case 'googleSheet_zz_PackageNames':
            targetArray = googleSheet_zz_PackageNames;
            break;
        case 'googleSheet_hh_PackageNames':
            targetArray = googleSheet_hh_PackageNames;
            break;
        case 'googleSheet_kk_PackageNames':
            targetArray = googleSheet_kk_PackageNames;
            break;
        case 'googleSheet_ww_PackageNames':
            targetArray = googleSheet_ww_PackageNames;
            break;
        case 'googleSheet_yy_PackageNames':
            targetArray = googleSheet_yy_PackageNames;
            break;
        case 'googleSheet_bb_PackageNames':
            targetArray = googleSheet_bb_PackageNames;
            break;
        default:
            targetArray = []; // If none matches, set an empty array
            break;
    }

    /* Loop through the target array and show the corresponding h3 elements */
    for (let i = 0; i < targetArray.length; i++) {
        targetArray[i].style.display = 'block';
    }


    updateSearchFilterFunctionality();
};

/* Function to show the website username package names */
showWebsiteUsernamePackageNames = function () {
    let allGoogleSheetStoredDataNamesForImportingDataDiv = document.getElementById('all_google_sheet_stored_data_names_for_importing_data_div');

    // Get the value of the input
    let userNameInput = document.getElementById('website_users_name_input_id').value;

    // Get all p elements with the class name 'filter_google_sheet_packages_names_p_class'
    let filterElements = document.getElementsByClassName('filter_google_sheet_packages_names_p_class');

    // Reset the background color of all elements before applying new changes
    for (let i = 0; i < filterElements.length; i++) {
        filterElements[i].style.backgroundColor = ''; // Reset background color
    }


    /* Show only the h3 elements from the corresponding array based on the passed 'targetPackagesName' value */
    let targetArray = [];


    // Apply the background color based on the input value
    switch (userNameInput) {
        case 'بكج مستر سامي':
            if (filterElements[0]) filterElements[0].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_ss_PackageNames;
            break;
        case 'بكج عبد الله':
            if (filterElements[1]) filterElements[1].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_tt_PackageNames;
            break;
        case 'بكج معتز':
            if (filterElements[2]) filterElements[2].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_mm_PackageNames;
            break;
        case 'بكج وائل':
            if (filterElements[3]) filterElements[3].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_ww_PackageNames;
            break;
        case 'بكج عبد الرحمن':
            if (filterElements[4]) filterElements[4].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_oo_PackageNames;
            break;
        case 'بكج علي':
            if (filterElements[5]) filterElements[5].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_aa_PackageNames;
            break;
        case 'بكج ناصر':
            if (filterElements[6]) filterElements[6].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_zz_PackageNames;
            break;
        case 'بكج محمد':
            if (filterElements[7]) filterElements[7].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_hh_PackageNames;
            break;
        case 'بكج صبري':
            if (filterElements[8]) filterElements[8].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_kk_PackageNames;
            break;
        case 'بكج مستر ابو سما':
            if (filterElements[9]) filterElements[9].style.backgroundColor = 'rgb(140, 0, 255)';
            targetArray = googleSheet_yy_PackageNames;
            break;
        case 'بكج بندر للتجربة':
            targetArray = googleSheet_bb_PackageNames;
            break;
        default:
            targetArray = []; // If none matches, set an empty array
            break;
    }

    // First, hide all h3 elements in the div
    let allH3Elements = allGoogleSheetStoredDataNamesForImportingDataDiv.getElementsByTagName('h3');
    for (let i = 0; i < allH3Elements.length; i++) {
        allH3Elements[i].style.display = 'none';
    }

    // Loop through the target array and show the corresponding h3 elements
    for (let i = 0; i < targetArray.length; i++) {
        targetArray[i].style.display = 'block';
    }
}





























// Variable to store the most top empty cell row number
let mostTopEmptyCellRowNumberValue;

async function handleUserPackageUniqueNumber(action) {

    try {
        // Fetch the first (and presumably only) row
        const { data, error } = await supabase
            .from('thai_package_unique_number')
            .select('*')
            .limit(1)
            .single();

        if (error) throw error;
        if (!data) throw new Error('No data found in the table');

        if (action === 'fetch') {
            // Store the current value
            mostTopEmptyCellRowNumberValue = data[document.getElementById('website_users_name_input_id').value];
            console.log(mostTopEmptyCellRowNumberValue);
            // Enable the submit button
            let submitIcon = document.getElementById('clint_inputs_submit_icon');
            submitIcon.style.opacity = '1';
            submitIcon.style.pointerEvents = 'auto';
            submitIcon.disabled = false;

            return data[document.getElementById('website_users_name_input_id').value];

        } else if (action === 'insert') {
            // Calculate new value
            const newValue = data[document.getElementById('website_users_name_input_id').value] + 1;

            // Update only the specific column
            // Use the first valid column name in your filter instead of 'baby'
            const { error: updateError } = await supabase
                .from('thai_package_unique_number')
                .update({ [document.getElementById('website_users_name_input_id').value]: newValue })
                .not(document.getElementById('website_users_name_input_id').value, 'is', null); // Use the same user name as filter

            if (updateError) throw updateError;

            return newValue;
        }
    } catch (error) {
        console.error('Error in handleUserPackageUniqueNumber:', error);
        throw error;
    }
}





























































/* Function to re-active the drag and drop functionality (copied code for the main inserted daa js code) */
reActiveDragAndDropFunctionality = function (visiableDivIdName) {


    if (visiableDivIdName === 'downloaded_pdf_clint_data_page') {




        /* in 01 Oct 2026 delete the following two lines (I used it to check if the imported package is new or old "For styling purposes") */
        /* Check if the Important_notes_for_each_pdf_section_div_class div exists inside downloaded_pdf_clint_data_page */
        let importantNotesDiv = document.getElementById('downloaded_pdf_clint_data_page').querySelector('.Important_notes_for_each_pdf_section_div_class');
        /* If the div doesn't exist and alert hasn't been shown yet, show the alert */
        if (!importantNotesDiv) {
            alert('ترا البكج ذا قديم ولازم تسويه مره ثانية عشان التحديث\n(مع كامل حبي واحترامي)');
        }







        /* First Re-Enter the inputs values if they exist in the stored google sheet p elements */
        document.getElementById('package_clint_name_input_id').value = document.getElementById('store_google_sheet_clint_name_value').innerText;
        document.getElementById('package_clint_code_number_input_id').value = '';



        /* Set the value of the 'package_clint_code_number_input_id' input based on the 'store_google_sheet_package_clint_code_number_value' innerText */
        document.getElementById('package_clint_code_number_input_id').value = document.getElementById('store_google_sheet_package_clint_code_number_value').innerText;



        document.getElementById('adult_package_person_amount_input_id').value = document.getElementById('store_google_sheet_package_adult_amount_value').innerText;
        document.getElementById('kids_package_person_amount_input_id').value = document.getElementById('store_google_sheet_package_kids_amount_value').innerText;



        /* Set the value of the 'infant_package_person_amount_input_id' input based on the 'store_google_sheet_package_infant_amount_value' innerText */
        document.getElementById('infant_package_person_amount_input_id').value = document.getElementById('store_google_sheet_package_infant_amount_value').innerText;



        document.getElementById('whole_package_start_date_input_id').value = document.getElementById('store_google_sheet_whole_package_first_date_value').innerText;
        document.getElementById('whole_package_end_date_input_id').value = document.getElementById('store_google_sheet_whole_package_last_date_value').innerText;
        document.getElementById('package_total_nights_input_id').value = `${document.getElementById('store_google_sheet_whole_package_total_nights_value').innerText} ليالي`;


        /* Store the total package nights in a separated variable for later use when inserting data */
        storePackageTotalNights = document.getElementById('store_google_sheet_whole_package_total_nights_value').innerText;


        document.getElementById('clint_company_name_input_id').value = document.getElementById('store_google_sheet_clint_company_name_value').innerText;



        /* The following code will be replaced with the folloiwng code line */
        document.getElementById('website_users_name_input_id').value = document.getElementById('store_google_sheet_package_user_name_value').innerText;






        /* Check the package type checkbox based on the innerText of the 'store_google_sheet_clint_package_price_type_checkbox_value' */
        /* on 10 Mar 2025 delete the following if "store_google_sheet_clint_package_price_type_checkbox_value" exist or no condition (I used it to avoid error in old saved packages) */
        if (document.getElementById('store_google_sheet_clint_package_price_type_checkbox_value')) {

            if (document.getElementById('store_google_sheet_clint_package_price_type_checkbox_value').innerText === 'Economy Package') {
                document.getElementById('economy_package_checkbox').checked = true;
                document.getElementById('medium_package_checkbox').checked = false;
                document.getElementById('vip_package_checkbox').checked = false;

            } else if (document.getElementById('store_google_sheet_clint_package_price_type_checkbox_value').innerText === 'Medium Package') {
                document.getElementById('economy_package_checkbox').checked = false;
                document.getElementById('medium_package_checkbox').checked = true;
                document.getElementById('vip_package_checkbox').checked = false;

            } else if (document.getElementById('store_google_sheet_clint_package_price_type_checkbox_value').innerText === 'VIP Package') {
                document.getElementById('economy_package_checkbox').checked = false;
                document.getElementById('medium_package_checkbox').checked = false;
                document.getElementById('vip_package_checkbox').checked = true;

            }



            if (document.getElementById('package_price_type_h6_id').innerText === '') {
                /* Hide the element if there is no text in it */
                document.getElementById('package_price_type_h6_id').style.display = 'none';

            } else {
                /* Show the element if there is any text in it */
                document.getElementById('package_price_type_h6_id').style.display = 'block';

            }
        }






        /* Check the package type checkbox based on the innerText of the 'store_google_sheet_clint_package_type_checkbox_value' */
        if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'Honeymooners Package') {
            document.getElementById('honeymoon_checkbox').checked = true;
            document.getElementById('guys_checkbox').checked = false;
            document.getElementById('family_checkbox').checked = false;
            document.getElementById('two_people_checkbox').checked = false;
            document.getElementById('group_of_people_checkbox').checked = false;

        } else if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'Guys Package') {
            document.getElementById('honeymoon_checkbox').checked = false;
            document.getElementById('guys_checkbox').checked = true;
            document.getElementById('family_checkbox').checked = false;
            document.getElementById('two_people_checkbox').checked = false;
            document.getElementById('group_of_people_checkbox').checked = false;

        } else if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'Family Package') {
            document.getElementById('honeymoon_checkbox').checked = false;
            document.getElementById('guys_checkbox').checked = false;
            document.getElementById('family_checkbox').checked = true;
            document.getElementById('two_people_checkbox').checked = false;
            document.getElementById('group_of_people_checkbox').checked = false;

        } else if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'Two People Package') {
            document.getElementById('honeymoon_checkbox').checked = false;
            document.getElementById('guys_checkbox').checked = false;
            document.getElementById('family_checkbox').checked = false;
            document.getElementById('two_people_checkbox').checked = true;
            document.getElementById('group_of_people_checkbox').checked = false;


        } else if (document.getElementById('store_google_sheet_clint_package_type_checkbox_value').innerText === 'Group Package') {
            document.getElementById('honeymoon_checkbox').checked = false;
            document.getElementById('guys_checkbox').checked = false;
            document.getElementById('family_checkbox').checked = false;
            document.getElementById('two_people_checkbox').checked = false;
            document.getElementById('group_of_people_checkbox').checked = true;



            /* in case if there is no any check input then unckeck all inputs */
        } else {
            document.getElementById('honeymoon_checkbox').checked = false;
            document.getElementById('guys_checkbox').checked = false;
            document.getElementById('family_checkbox').checked = false;
            document.getElementById('two_people_checkbox').checked = false;
            document.getElementById('group_of_people_checkbox').checked = false;
        }



        /* Function to reActive the company logo delete functionality */
        if (document.getElementById('inserted_company_name_logo_id')) {

            document.getElementById('inserted_company_name_logo_id').onclick = function () {
                event.stopPropagation(); // Stop the event from propagating further

                // Create overlay layer
                let overlayLayer = document.createElement('div');
                overlayLayer.className = 'black_overlay';
                overlayLayer.id = 'black_overlay_id';
                document.body.appendChild(overlayLayer);

                // Show overlay layer with smooth opacity transition
                setTimeout(() => {
                    overlayLayer.style.opacity = '1'; // Delayed opacity transition for smooth appearance
                }, 100);

                // Slide in delete box options div
                let deleteHotelCardDiv = document.getElementById('ensure_delete_company_logo_div');

                // Smoothly slide to the middle of the screen
                setTimeout(() => {
                    deleteHotelCardDiv.style.transform = 'translate(-50%, -50%)'; // Slide to the center of the screen
                }, 50); // Adjust timing as needed

                // Event listener to close overlay and delete box div on click outside
                overlayLayer.onclick = () => {
                    // Hide delete box options div
                    deleteHotelCardDiv.style.transform = 'translate(-50%, -130vh)';

                    // Hide overlay layer with opacity transition
                    overlayLayer.style.opacity = '0';

                    // Remove overlay and delete box div from DOM after transition
                    setTimeout(() => {
                        document.body.removeChild(overlayLayer);
                    }, 300); // Match transition duration in CSS
                };
            };
        }









        /* Based on the 'store_google_sheet_all_package_dates_hidden_or_no' innerText set the background color of hide all package dates icon */
        if (document.getElementById('store_google_sheet_all_package_dates_hidden_or_no').innerText === 'hide all package dates') {
            /* Change the icon background color */
            document.getElementById('hide_all_package_dates_icon').style.backgroundColor = 'rgb(0, 255, 0)';
            document.getElementById('hide_all_package_dates_icon').style.color = 'black';


        } else {
            /* Change the icon background color */
            document.getElementById('hide_all_package_dates_icon').style.backgroundColor = 'rgb(0, 87, 116)';
            document.getElementById('hide_all_package_dates_icon').style.color = 'white';

        }




    } else if (visiableDivIdName === 'downloaded_pdf_flight_data_page') {


        // Get all elements with the class name 'flight_row_class'
        let flightRowTableDivs = document.querySelectorAll('.flight_row_class');

        // Loop through each 'flight_row_class' element
        flightRowTableDivs.forEach(flightRowTableDiv => {
            // Get all dynamically created elements with the class 'flight_row_flight_arrival_time_controller'
            flightRowTableDiv.querySelectorAll('.flight_row_flight_arrival_time_controller').forEach(function (element) {
                element.onclick = function (event) {
                    flightRowAirLineControllerFunction(event, element);
                };
            });

        });



        /* Hide the icon button after creating a flight row */
        document.getElementById('manually_add_flight_row_icon').style.display = 'none';




        /* Restore the variable number for keeping unique id name for each flight row */
        insertedFlightDataDivUniqueId = document.getElementById('store_google_sheet_flight_uniuqe_id_name_value').innerText;


    } else if (visiableDivIdName === 'downloaded_pdf_hotel_data_page') {



        // Get all elements with the class name 'hotel_row_class'
        let hotelRowTableDivs = document.querySelectorAll('.hotel_row_class');


        /* Re-store the last stopped hotel check out date */
        document.getElementById('hotel_check_in_input_id').value = document.getElementById('store_google_sheet_hotel_last_stopped_check_out_date_value').innerText;
        document.getElementById('hotel_check_in_input_id').disabled = true;



        // Loop through each 'hotel_row_class' element
        hotelRowTableDivs.forEach(hotelRowTableDiv => {
            // Get the 'hotel_row_image_controller' elements inside each 'hotel_row_class' element
            let hotelRowImageControllers = hotelRowTableDiv.querySelectorAll('.hotel_row_image_controller');


            // Attach click and touch event listeners to each element
            hotelRowImageControllers.forEach(element => {
                handleClickEvent(element);
            });

        });



        // Call the function to set up drag-and-drop functionality
        createHotelDragAndDropMood();



        // Call a function to save the current dates of all hotels for later Re-arranging use (when drag and drop)
        saveOriginalHotelDates();



    } else if (visiableDivIdName === 'downloaded_pdf_clint_movements_data_page') {


        // Get all elements with the class name 'flight_row_class'
        let clintMovementsRowTableDiv = document.querySelectorAll('.clint_movements_row_class_for_editing');



        /* Update the available clint visiting places based on the current existing visiting places */
        filterUsedClintVisitingPlacesNames();


        // Loop through each 'flight_row_class' element
        clintMovementsRowTableDiv.forEach(clintMovementsRowTableDiv => {

            // Get all dynamically created elements with the class 'clint_movements_row_controller'
            clintMovementsRowTableDiv.querySelectorAll('.clint_movements_row_controller').forEach(function (element) {
                element.onclick = function (event) {
                    clintMovementsRowCityNameControllerFunction(event, element);
                };
            });

        });



        // Target all divs with the class "clint_movements_row_class_for_editing"
        let clintMovementDivs = document.querySelectorAll(".clint_movements_row_class_for_editing");

        // Iterate through each found clint_movements_row_class_for_editing div
        clintMovementDivs.forEach(clintMovementDiv => {

            // Target all child divs inside the current clint_movements_row_class_for_editing div
            let childDivs = clintMovementDiv.querySelectorAll("div");

            // Set background to white and color to black for each child div
            childDivs.forEach(childDiv => {
                childDiv.style.backgroundColor = "white";
                childDiv.style.color = "black";
            });
        });



        /* Call a function to highlight the Saturday and Sanday days */
        highlightWeekendClintMovements();





    } else if (visiableDivIdName === 'downloaded_pdf_package_including_data_page') {

        /* Re-Enter the inputs values if they exist in the stored google sheet p elements */
        document.getElementById('sms_card_with_internet_amount_input_id').value = document.getElementById('store_google_sheet_package_including_sms_value').innerText;
        document.getElementById('inner_flight_tickets_amount_input_id').value = document.getElementById('store_google_sheet_package_including_inner_tickets_value').innerText;
        document.getElementById('package_details_textarea_id').value = document.getElementById('store_google_sheet_package_details_textarea_value').innerText.replace(/\\n/g, '\n');
        document.getElementById('package_totla_price_input_id').value = document.getElementById('store_google_sheet_package_total_price_value').innerText;



        /* Check or uncheck the show total package price in the pdf file checkbox input */
        /*         if (document.getElementById('store_google_sheet_show_price_in_pdf_checked_or_no').innerHTML == 'showPrice') {
                    document.getElementById('show_package_total_price_checkbox').checked = true;
        
                } else if (document.getElementById('store_google_sheet_show_price_in_pdf_checked_or_no').innerHTML == 'hidePrice') {
                    document.getElementById('show_package_total_price_checkbox').checked = false;
        
                } */



        /* Set the value of the 'specific_car_type_input_id' input based on the 'store_google_sheet_package_specific_car_type_value' innerText */
        document.getElementById('specific_car_type_input_id').value = document.getElementById('store_google_sheet_package_specific_car_type_value').innerText;




        // Array of checkbox IDs
        let checkboxIds = [
            'privet_car_with_driver_to_welcome_and_etc_checkbox',
            'extra_car_for_carring_bags_checkbox',
            'hotel_booking_with_breakfast_for_2_people_checkbox',
            'welcome_goodbye_hotel_delivery_checkbox',
            'customer_service_24_hour_checkbox',
            'sms_card_with_internet_checkbox',
            'inner_flight_tickets_checkbox',
            'outer_flight_tickets_checkbox',
            'placese_visiting_cost_checkbox',
        ];

        // Uncheck all inputs and reset their color
        checkboxIds.forEach(id => {
            let checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.checked = false; // Uncheck the checkbox
                let label = checkbox.nextElementSibling; // Get the label element
                label.style.setProperty('--checkbox-color', 'rgb(255, 255, 255)'); // Reset to white
            }
        });

        // Helper function to set checkbox color based on the div
        function setColorFromDiv(divId, color) {
            let div = document.getElementById(divId);
            if (div) {
                let pElements = div.getElementsByTagName('p'); // Get all p elements inside the div
                Array.from(pElements).forEach(p => {
                    let checkboxId = p.innerText; // Get the checkbox ID from the p element
                    let checkbox = document.getElementById(checkboxId); // Find the checkbox by its ID
                    if (checkbox) {
                        let label = checkbox.nextElementSibling; // Get the label element
                        label.style.setProperty('--checkbox-color', color); // Set the new color
                    }
                });
            }
        }

        // Apply colors to checkboxes based on p elements in each div
        setColorFromDiv('store_google_sheet_green_checked_package_including_and_not_including_input_div', 'rgb(0, 255, 0)'); // Green
        setColorFromDiv('store_google_sheet_red_checked_package_including_and_not_including_input_div', 'rgb(255, 0, 0)'); // Red
        setColorFromDiv('store_google_sheet_white_package_including_and_not_including_input_div', 'rgb(255, 255, 255)'); // White


    }
}