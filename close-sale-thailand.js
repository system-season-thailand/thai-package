const supabaseUrl = 'https://ehgkduwqmjhrdnlxdksw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoZ2tkdXdxbWpocmRubHhka3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1OTgxNTEsImV4cCI6MjA2MTE3NDE1MX0.5LQYyvZRTzD6U9CiPctZ6zuTOBOh8EQ5zTVetj2r2Sg'; // truncated for safety
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const closeSellHotelDataCache = new Map(); // Will hold all hotel close-sell data
let hasFetchedCloseSellData = false;

const fetchAllCloseSellDataFunction_Supabase = async () => {
    const hotelElements = document.querySelectorAll(".all_hotels_names_div_class h3");

    // Reset all h3 elements before processing
    hotelElements.forEach((hotelElement) => {
        hotelElement.style.opacity = "0";
        hotelElement.style.pointerEvents = "none";
        hotelElement.style.backgroundColor = "white";
        hotelElement.style.color = "black";
        hotelElement.removeEventListener("click", hotelElement.clickHandler);
    });

    // ✅ If data is already fetched, skip fetch and use cache
    if (!hasFetchedCloseSellData) {
        const { data, error } = await supabase.rpc('get_all_public_tables_data');

        if (error) {
            console.error('Error getting all tables data:', error);
            return;
        }

        // `data` is now an object: { table1: [...], table2: [...], ... }
        for (const [hotelName, rows] of Object.entries(data)) {
            if (!Array.isArray(rows)) continue; // Skip if somehow no rows

            const structuredData = [];

            rows.forEach(row => {
                const roomType = row["Room Type"] || row.roomType || "Room";
                const availability = [];

                const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

                months.forEach(month => {
                    const rangeString = row[month];
                    if (rangeString && typeof rangeString === "string") {
                        /* console.log(`📋 Hotel: ${hotelName} - 🛏 Room Type: ${roomType} - 📅 ${month}: ${rangeString}`); */
                        const parsedDates = parseHotelAvailability(rangeString, month);
                        const formattedDates = parsedDates.map(date =>
                            date.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            }).replace(/,/g, '')
                        );
                        /* console.log("✅ Parsed dates:", formattedDates); */
                        availability.push(...parsedDates);
                    }
                });

                structuredData.push({
                    hotelName,
                    roomType,
                    availability
                });
            });

            closeSellHotelDataCache.set(hotelName.toLowerCase(), structuredData);
        }

        hasFetchedCloseSellData = true;
    }



    const checkInInput = document.getElementById("hotel_check_in_input_id").value;
    const checkOutInput = document.getElementById("hotel_check_out_input_id").value;

    /* console.log("🟡 Check-in input:", checkInInput);
    console.log("🟡 Check-out input:", checkOutInput); */

    if (checkInInput && checkOutInput) {
        const checkInDate = parseArabicDateForCloseSellData(checkInInput);
        const checkOutDate = parseArabicDateForCloseSellData(checkOutInput);

        /* console.log("📆 Parsed check-in:", checkInDate);
        console.log("📆 Parsed check-out:", checkOutDate); */

        hotelElements.forEach((hotelElement) => {
            const hotelName = hotelElement.innerText.trim().split(" - ")[0].toLowerCase();
            const matchingData = closeSellHotelDataCache.get(hotelName);

            /* console.log("🔍 Checking hotel name:", hotelName); */

            let allMatchingDates = [];

            if (matchingData) {
                matchingData.forEach(({ roomType, availability }) => {
                    const matchingDates = availability.filter(date => date >= checkInDate && date <= checkOutDate);
                    if (matchingDates.length > 0) {
                        const alreadyExists = allMatchingDates.some(entry => entry.roomType === roomType);
                        if (!alreadyExists) {
                            allMatchingDates.push({ roomType, dates: matchingDates });
                        }
                    }
                });
            }

            const shouldHighlight = allMatchingDates.length > 0;

            if (shouldHighlight) {
                /* console.log(`🎯 Highlighting hotel: ${hotelName}`); */
                hotelElement.style.backgroundColor = "rgb(180, 0, 0)";
                hotelElement.style.color = "white";
                hotelElement.style.opacity = "1";

                const clickHandler = () => {
                    const packageStartInput = document.getElementById("whole_package_start_date_input_id").value;
                    const packageEndInput = document.getElementById("whole_package_end_date_input_id").value;
                    const packageStartDate = parseArabicDateForCloseSellData(packageStartInput);
                    const packageEndDate = parseArabicDateForCloseSellData(packageEndInput);

                    const roomAvailabilityMap = new Map();

                    matchingData?.forEach(({ roomType, availability }) => {
                        if (!roomAvailabilityMap.has(roomType)) {
                            roomAvailabilityMap.set(roomType, []);
                        }
                        roomAvailabilityMap.get(roomType).push(...availability);
                    });

                    const messageParts = [];

                    roomAvailabilityMap.forEach((dates, roomType) => {
                        const uniqueDates = [...new Set(dates.map(date => date.getTime()))]
                            .map(ts => new Date(ts))
                            .sort((a, b) => a - b);

                        const filteredDates = uniqueDates.filter(date => {
                            return date >= packageStartDate && date <= packageEndDate;
                        });

                        if (filteredDates.length > 0) {
                            const formattedRange = formatDateRanges(filteredDates);
                            messageParts.push(`${roomType}: ${formattedRange}`);
                        }
                    });

                    const finalMessage = messageParts.join("\n");
                    showCloseSellModal(finalMessage);
                };

                hotelElement.clickHandler = clickHandler;
                hotelElement.addEventListener("click", clickHandler);
            } else {
                /* console.log(`⏭ Skipping hotel: ${hotelName}`); */
            }
        });
    }

    // Make sure hotel elements are clickable again after everything
    hotelElements.forEach((hotelElement) => {
        hotelElement.style.opacity = "1";
        hotelElement.style.pointerEvents = "auto";
    });
};


const formatDateRanges = (dates) => {
    if (!dates.length) return "";

    // Sort dates in ascending order
    dates.sort((a, b) => a - b);

    const ranges = [];
    let start = dates[0];
    let end = dates[0];

    for (let i = 1; i < dates.length; i++) {
        const current = dates[i];
        const prev = dates[i - 1];

        const oneDay = 1000 * 60 * 60 * 24;
        if ((current - prev) === oneDay) {
            end = current; // Extend the range
        } else {
            ranges.push([start, end]);
            start = current;
            end = current;
        }
    }

    // Push the last range
    ranges.push([start, end]);

    // Format ranges
    return ranges.map(([start, end]) => {
        const startDay = start.getDate();
        const startMonth = start.toLocaleString("en-US", { month: "short" });
        const endDay = end.getDate();
        const endMonth = end.toLocaleString("en-US", { month: "short" });

        // Same month
        if (startMonth === endMonth) {
            return startDay === endDay
                ? `${startDay} ${startMonth}`
                : `${startDay}-${endDay} ${startMonth}`;
        } else {
            return `${startDay} ${startMonth} - ${endDay} ${endMonth}`;
        }
    }).join(", ");
};

// Function to parse hotel availability into an array of Date objects
const parseHotelAvailability = (rangeString, month, year = new Date().getFullYear()) => {
    const result = [];
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const monthIndex = months.indexOf(month);
    if (monthIndex === -1) {
        console.warn(`⚠️ Unknown month name: ${month}`);
        return result;
    }

    const parts = rangeString.split(',');

    for (let part of parts) {
        part = part.trim();
        if (part.includes('-')) {
            const [startStr, endStr] = part.split('-').map(p => parseInt(p.trim(), 10));
            const start = Number(startStr);
            const end = Number(endStr);

            if (!isNaN(start) && !isNaN(end) && start <= end) {
                for (let day = start; day <= end; day++) {
                    const date = new Date(year, monthIndex, day);
                    result.push(date);
                }
            }
        } else {
            const day = parseInt(part, 10);
            if (!isNaN(day)) {
                const date = new Date(year, monthIndex, day);
                result.push(date);
            }
        }
    }

    return result;
};

// Enhanced parsing function for availability (handles ranges)
const parseEnglishDates = (entry) => {
    const [day, month] = entry.split(" ");
    if (day.includes("-")) {
        // Handle ranges (e.g., "25-29 Jan")
        const [startDay, endDay] = day.split("-").map(Number);
        const monthIndex = parseMonth(month);
        return Array.from({ length: endDay - startDay + 1 }, (_, i) => {
            return new Date(new Date().getFullYear(), monthIndex, startDay + i);
        });
    } else {
        // Single date (e.g., "25 Jan")
        return [new Date(new Date().getFullYear(), parseMonth(month), parseInt(day))];
    }
};

// Function to parse Arabic date into a JavaScript Date object
const parseArabicDateForCloseSellData = (arabicDate) => {
    const arabicMonths = {
        "يناير": 0, "فبراير": 1, "مارس": 2, "أبريل": 3,
        "مايو": 4, "يونيو": 5, "يوليو": 6, "أغسطس": 7,
        "سبتمبر": 8, "أكتوبر": 9, "نوفمبر": 10, "ديسمبر": 11,
    };
    const [day, month] = arabicDate.split(" ");
    return new Date(new Date().getFullYear(), arabicMonths[month], parseInt(day));
};

// Helper to parse English month names
const parseMonth = (month) => {
    const englishMonths = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
    };
    return englishMonths[month];
};





















/* SQL Function To Get All Tables */



/*

CREATE TABLE "public"."YourHotelTable6" (
  "id" SERIAL PRIMARY KEY,
  "Room Type" TEXT,
  "January" TEXT,
  "February" TEXT,
  "March" TEXT,
  "April" TEXT,
  "May" TEXT,
  "June" TEXT,
  "July" TEXT,
  "August" TEXT,
  "September" TEXT,
  "October" TEXT,
  "November" TEXT,
  "December" TEXT
);

INSERT INTO "public"."YourHotelTable6" (
  "Room Type", 
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
)
VALUES 
  ('Deluxe', null, null, null, null, null, null, null, null, null, null, null, null),
  ('Deluxe Sea View', null, null, null, null, null, null, null, null, null, null, null, null);

 */









/*
 
create or replace function get_all_public_tables_data()
returns jsonb
language plpgsql
as $$
declare
result jsonb := '{}';
rec record;
temp jsonb;
begin
for rec in
  select table_name
  from information_schema.tables
  where table_schema = 'public'
    and table_type = 'BASE TABLE'
loop
  execute format(
    'select jsonb_agg(t) from (select * from %I) t',
    rec.table_name
  )
  into temp;
  
  result := result || jsonb_build_object(rec.table_name, temp);
end loop;

return result;
end;
$$;

*/