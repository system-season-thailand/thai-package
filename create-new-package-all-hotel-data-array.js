/* Array to store the hotel room types description for later use */



let allHotelDataArray = [

    /* Phuket */
    {
        hotelName: 'Avista Grande Phuket Karon',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Mountain View Balcony', 'Deluxe Pool View Balcony', 'Deluxe Family Mountain View Balcony', 'Premier Sea View Balcony', 'Premier Family Sea View Balcony', 'Deluxe Suite Whirlpool Bath Mountain View', 'Deluxe Suite Whirlpool Bath Sea View', 'Deluxe Suite Pool Access Garden View', 'Deluxe Suite Pool Access Sea View'],
        hotelRoomTypesArabic: ['ديلوكس بلكوني بإطلالة على الجبل', 'ديلوكس بلكوني بإطلالة على المسبح', 'ديلوكس فاميلي بإطلالة على الجبل', 'بريمير بلكوني بإطلالة على البحر', 'بريمير فاميلي بإطلالة على البحر', 'ديلوكس سويت مع حوض استرخاء بإطلالة جبلية', 'ديلوكس سويت مع حوض استرخاء بإطلالة على البحر', 'سويت ديلوكس وصول مباشر للمسبح إطلالة حديقة', 'سويت ديلوكس وصول مباشر للمسبح إطلالة بحرية'],
    },


    {
        hotelName: 'Avista Hideaway Phuket Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Garden View', 'Deluxe Pool View', 'Premier Room', 'Deluxe Family Room', 'Premier Whirlpool Bath', 'Deluxe Pool Access', 'Premier Pool Access Whirlpool Bath'],
        hotelRoomTypesArabic: ['ديلوكس بإطلالة على الحديقة', 'ديلوكس بإطلالة على المسبح', 'غرفة بريمير', 'ديلوكس فاميلي روم', 'بريمير مع حوض استرخاء', 'ديلوكس بول اكسس', 'بريمير بول اكسس مع حوض استرخاء'],
    },




    {
        hotelName: 'Diamond Cliff Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Super Deluxe Sea View', 'Grand Jacuzzi Suite', 'Ocean Jacuzzi Suite'],
        hotelRoomTypesArabic: ['سوبر ديلوكس بإطلالة على البحر', 'جراند سويت جاكوزي', 'أوشن سويت جاكوزي'],
    },




    {
        hotelName: 'Holiday Inn Express Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Standard Garden View', 'Standard Room', 'Standard Pool View'],
        hotelRoomTypesArabic: ['ستاندارد بإطلالة على الحديقة', 'غرفة ستاندارد', 'ستاندارد بإطلالة على المسبح'],
    },
    {
        hotelName: 'Homm Bliss Southbeach Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Sea View', 'Deluxe Sea View', 'One BR Superior Suite Sea View', 'One BR Deluxe Suite Sea View', 'One BR Plunge Pool Suite Sea View'],
        hotelRoomTypesArabic: ['سوبيريور بإطلالة على البحر', 'ديلوكس بإطلالة على البحر', 'سويت سوبيريور من غرفة نوم واحدة بإطلالة على البحر', 'سويت ديلوكس من غرفة نوم واحدة بإطلالة على البحر', 'سويت مع حوض سباحة من غرفة نوم واحدة بإطلالة على البحر'],
    },











    {
        hotelName: 'Indigo Phuket Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Standard City View', 'Standard Garden View', 'Standard Pool View', 'Junior Suite Garden View'],
        hotelRoomTypesArabic: ['ستاندارد بإطلالة على المدينة', 'ستاندارد بإطلالة على الحديقة', 'ستاندارد بإطلالة على المسبح', 'جونيور سويت بإطلالة على حديقة'],
    },



    {
        hotelName: 'Kalima Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room (None View)', 'Deluxe Sea View', 'Honeymoon Sea View', 'Grand Deluxe Sea View', 'Romance Room Ocean View', 'Family Sea View', 'Junior Suite Ocean View', 'Double Pool Access', 'Duplex Pool Villa', 'PP Villa One BR'],
        hotelRoomTypesArabic: ['ديلوكس (بدون إطلالة)', 'ديلوكس بإطلالة على البحر', 'هاني مون بإطلالة على البحر', 'جراند ديلوكس بإطلالة على البحر', 'غرفة رومانسية بإطلالة على المحيط', 'فاميلي روم بإطلالة على البحر', 'جونيور سويت بإطلالة على المحيط', 'دبل روم بول اكسس', 'دوبلكس فيلا مع مسبح', 'فيلا مع مسبح خاص من غرفة نوم واحدة'],
    },



    {
        hotelName: 'Keemala Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Clay Pool Cottage', 'Tent Pool Villa', 'Tree Pool House', 'Birds Nest Pool Villa'],
        hotelRoomTypesArabic: ['كوخ كلاي مع مسبح', 'فيلا تينت مع مسبح', 'بيت الشجرة مع مسبح', 'فيلا عش الطيور مع مسبح'],
    },



    {
        hotelName: 'Movenpick Myth Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Pool View', 'Deluxe Pool Access'],
        hotelRoomTypesArabic: ['ديلوكس بإطلالة على المسبح', 'ديلوكس بول اكسس'],
    },



    {
        hotelName: 'Movenpick Bangtao Beach Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Residence One BR', 'Seaview Pool Suite One BR', 'Residence Two BR', 'Seaview Pool Suite Two BR', 'Residence Three BR', 'Seaview Jacuzzi Penthouse Three BR', 'Royal Jacuzzi Penthouse Three BR'],
        hotelRoomTypesArabic: ['ريزيدنس من غرفة نوم واحدة', 'سويت غرفة نوم واحدة مع مسبح بإطلالة على البحر', 'ريزيدنس من غرفتين نوم', 'سويت من غرفتين نوم مع مسبح بإطلالة على البحر', 'ريزيدنس من ثلاث غرف نوم', 'بنتهاوس من ثلاث غرف نوم جاكوزي بإطلالة على البحرية', 'رويال بنتهاوس جاكوزي من ثلاث غرف نوم'],
    },
    {
        hotelName: 'Noku Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Studio Loft', 'Private Loft with Whirlpool', 'Tree Villa PP', 'Hill Villa PP'],
        hotelRoomTypesArabic: ['ستوديو لوفت', 'لوفت خاص مع حوض استرخاء', 'فيلا تري مع مسبح خاص', 'فيلا هيل مع مسبح خاص'],
    },
    {
        hotelName: 'Novotel Phuket Kata Avista',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Garden View Balcony', 'Superior Pool View Balcony', 'Deluxe Pool View', 'Deluxe Sea View Balcony', 'Family Garden View Balcony'],
        hotelRoomTypesArabic: ['سوبيريور بلكوني بإطلالة على الحديقة', 'سوبيريور بلكوني بإطلالة على المسبح', 'ديلوكس بإطلالة على المسبح', 'ديلوكس بلكوني بإطلالة على البحر', 'فاميلي بلكوني روم بإطلالة على الحديقة'],
    },




    {
        hotelName: 'Oceanfront Beach Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Premier Comfy', 'Ocean Room Partial Seaview', 'Grand Ocean Room', 'Ocean Comfy', 'Pool Access Comfy', 'Grand Ocean Suite'],
        hotelRoomTypesArabic: ['بريمير كومفي روم', 'اوشن روم بإطلالة جزئية على البحر', 'جراند اوشن روم', 'اوشن كومفي روم', 'بول اكسس كومفي روم', 'جراند اوشن سويت'],
    },
    {
        hotelName: 'Saii Laguna Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Lagoon View', 'Ocean View Balcony', 'Ocean View Terrace', 'Ocean Front Balcony', 'Club Lagoon View', 'Club Ocean View', 'Club Ocean Front', 'Lagoon View One BR Suite', 'Ocean View One BR Suite', 'Ocean Front One BR Suite'],
        hotelRoomTypesArabic: ['لاجون فيو', 'اوشن فيو بلكوني', 'اوشن فيو تيراس', 'اوشن فرونت بلكوني', 'كلوب لاجون فيو', 'كلوب اوشن فيو', 'كلوب اوشن فرونت', 'سويت لاجون من غرفة نوم واحدة', 'سويت اوشن من غرفة نوم واحدة', 'سويت اوشن فرونت من غرفة نوم واحدة'],
    },





    {
        hotelName: 'Sinae Phuket Luxury Hotel',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Studio Pool Villa', 'Studio Ocean View', 'Sinae Sea Sai', 'Sinae Premier Pool Suite', 'Sky Pool Villa', 'Duplex Pool Villa A', 'Duplex Pool Villa B', 'Sinae Family Two BR Pool Villa'],
        hotelRoomTypesArabic: ['فيلا ستوديو مع مسبح', 'ستوديو أوشن روم', 'سيناي سي ساي', 'سيناي برمير سويت مع مسبح', 'فيلا سكاي مع مسبح', 'فيلا دوبلكس اي مع مسبح', 'فيلا دوبلكس بي مع مسبح', 'سيناي فاميلي فيلا من غرفتين نوم مع مسبح'],
    },
    {
        hotelName: 'Sri Panwa Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['YAYA Pool Suite Ocean View', 'Ocean View Pool Suite West', 'Ocean View Pool Suite East', 'Ocean View Penthouse', 'One BR Family Suite Garden View', 'One BR Pool Villa Garden View', 'One BR Family Suite Partial Ocean View', 'One BR Luxury Residential Pool Villa Ocean View', 'One BR Luxury Pool Villa Ocean View', 'Two BR Family Suite Garden View', 'Two BR Family Suite Ocean View', 'Two BR Pool Villa Ocean View', 'Two BR Luxury Pool Villa Ocean View', 'Three BR Residence Pool Villa Partial Ocean View', 'Three BR Residence Pool Villa Ocean View', 'Four BR Residence Pool Villa Ocean View', 'Four BR Luxury Residence Pool Villa Ocean View', 'Five BR Residence Pool Villa Ocean View'],
        hotelRoomTypesArabic: ['يايا سويت مع مسبح بإطلالة على المحيط', 'سويت اوشن ويست مع مسبح بإطلالة على المحيط', 'سويت اوشن ايست مع مسبح بإطلالة على المحيط', 'اوشن فيو بنتهاوس', 'فاميلي سويت من غرفة نوم واحدة بإطلالة على الحديقة', 'فيلا من غرفة نوم واحدة مع مسبح بإطلالة على الحديقة', 'فاميلي سويت من غرفة نوم واحدة بإطلالة جزئية على المحيط', 'فيلا ريزيدنس لوكسري من غرفة نوم واحدة مع مسبح بإطلالة على المحيط', 'فيلا لوكسري من غرفة نوم واحدة مع مسبح بإطلالة على المحيط', 'فاميلي سويت من غرفتين نوم بإطلالة على الحديقة', 'فاميلي سويت من غرفتين نوم بإطلالة على المحيط', 'فيلا من غرفتين نوم مع مسبح بإطلالة على المحيط', 'فيلا لوكسري من غرفتين نوم مع مسبح بإطلالة على المحيط', 'فيلا ريزيدنس من ثلاث غرف نوم مع مسبح بإطلالة جزئية على المحيط', 'فيلا من ثلاث غرف نوم مع مسبح بإطلالة على المحيط', 'فيلا ريزيدنس من اربع غرف نوم مع مسبح بإطلالة على المحيط', 'فيلا ريزيدنس من اربع غرف نوم مع مسبح بإطلالة على المحيط', 'فيلا ريزيدنس من خمس غرف نوم مع مسبح بإطلالة على المحيط'],
    },
    {
        hotelName: 'The Kee Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Deluxe Jacuzzi', 'Deluxe Pool Access'],
        hotelRoomTypesArabic: ['غرفة ديلوكس', 'ديلوكس بإطلالة على المسبح', 'ديلوكس جاكوزي', 'ديلوكس بول اكسس'],
    },
    {
        hotelName: 'The Nai Harn Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Ocean View Room', 'Grand Ocean View Room', 'Ocean View Suite', 'Royal Ocean View Suite'],
        hotelRoomTypesArabic: ['غرفة ديلوكس بإطلالة على المحيط', 'غرفة جراند بإطلالة على المحيط', 'سويت بإطلالة على المحيط', 'سويت رويال بإطلالة على المحيط'],
    },
    {
        hotelName: 'The Naka Island Luxury Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Naka Guest Room', 'One BR Pool Villa Garden View', 'One BR Pool Villa Sea View'],
        hotelRoomTypesArabic: ['ناكا جيست روم', 'فيلا من غرفة نوم واحدة مع مسبح بإطلالة على حديقة', 'فيلا من غرفة نوم واحدة مع مسبح بإطلالة على البحر'],
    },
    {
        hotelName: 'The Naka Hotels Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['One BR Pool Villa Partial Sea View', 'One BR Deluxe Pool Villa Ocean View', 'One BR Villa High Bay', 'One BR Beachfront Villa', 'One BR Villa High Bay Signature'],
        hotelRoomTypesArabic: ['فيلا مسبح غرفة نوم واحدة بإطلالة جزئية على البحر', 'فيلا ديلوكس من غرفة نوم واحدة مع مسبح بإطلالة على المحيط', 'فيلا هاي باي من غرفة نوم واحدة', 'فيلا من غرفة نوم واحدة مواجهة للشاطئ', 'فيلا هاي باي سيجنتشر من غرفة نوم واحدة'],
    },
    {
        hotelName: 'The Nature Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Deluxe Partial Sea View', 'Deluxe Pool Access', 'Deluxe Private Jacuzzi', 'Junior Suite', 'Grand Suite Two BR'],
        hotelRoomTypesArabic: ['غرفة ديلوكس', 'ديلوكس بإطلالة على المسبح', 'ديلوكس بإطلالة جزئية على البحر', 'ديلوكس بول اكسس', 'ديلوكس برايفت جاكوزي', 'جونيور سويت', 'جراند سويت من غرفتين نوم'],
    },
    {
        hotelName: 'The SIS Kata Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['SIS On The Hill No View', 'SIS Over The Stella Pool', 'SIS Over The Garden', 'SIS Jacuzzi Pool', 'SIS Over The Sea Partial Seaview', 'SIS Studio', 'The SIS Suite'],
        hotelRoomTypesArabic: ['غرفة سيس اون ذا هيل بدون اطلالة', 'غرفة سيس على مسبح ستيلا', 'غرفة سيس على الحديقة', 'غرفة سيس مع مسبح جاكوزي', 'غرفة سيس على البحر بإطلالة جزئية', 'غرفة سيس ستوديو', 'غرفة سيس سويت'],
    },
    {
        hotelName: 'Glow Mira Karon Beach',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room City View', 'Deluxe Room Pool View', 'Family Suite'],
        hotelRoomTypesArabic: ['غرفة سوبيريور بإطلالة على المدينة', 'غرفة ديلوكس بإطلالة على المسبح', 'فاميلي سويت روم'],
    },
    {
        hotelName: 'Dinso Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Premium City View', 'Premium Garden View', 'Premium Pool View', 'One BR Suite Pool View', 'Dino Suite', 'Penthouse Terrace', 'Two BR Family Suite', 'Two BR Suite Garden View', 'Duplex Pool Villa', 'Duplex Pool Villa Sea View'],
        hotelRoomTypesArabic: ['بريميوم روم بإطلالة على المدينة', 'بريميوم بإطلالة على الحديقة', 'بريميوم بإطلالة على المسبح', 'سويت من غرفة نوم واحدة بإطلالة على المسبح', 'دينو سويت روم', 'بنتهاوس تراس', 'فاميلي سويت من غرفتين نوم', 'سويت من غرفتين نوم بإطلالة على الحديقة', 'فيلا دوبلكس مع مسبح', 'فيلا دوبلكس مع مسبح بإطلالة على البحر'],
    },
    {
        hotelName: 'Grand Mercure Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Pool Access Room', 'Superior Suite Room', 'One BR Pool Villa', 'Two BR Pool Villa'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'غرفة ديلوكس بول اكسس', 'غرفة سوبيريور سويت', 'فيلا من غرفة نوم واحدة مع مسبح', 'فيلا من غرفتين نوم مع مسبح'],
    },
    {
        hotelName: 'Msocial Hotel Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Social Room', 'Social Cozy Room', 'Social Afterglow Wing with Balcony', 'Stylish Sunkissed Wing with Balcony'],
        hotelRoomTypesArabic: ['سوشيال روم', 'سوشيال كوزي روم', 'جناح سوشيال بلكوني افتر جلو', 'جناح ستايليش سانكيسد بلكوني'],
    },
    {
        hotelName: 'Ayara Kamala Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Ocean View', 'Grand Thai Natural Ocean View', 'Deluxe Pool Access Ocean View', 'Grand Thai with Spa Bath & PP', 'Family Pool Access Two BR Suite', 'Two BR Pool Forest View', 'Grand Pool Villa Ocean View', 'Three BR Villa'],
        hotelRoomTypesArabic: ['ديلوكس بإطلالة على المحيط', 'جراند ثاي ناشورال بإطلالة على المحيط', 'ديلوكس بول اكسس بإطلالة على المحيط', 'جراند ثاي مع حمام سبا ومسبح خاص', 'فاميلي سويت بول اكسس من غرفتين نوم', 'فيلا من غرفتين نوم مع مسبح بإطلالة على الغابة', 'فيلا جراند مع مسبح بإطلالة على المحيط', 'فيلا من ثلاث غرف نوم'],
    },
    {
        hotelName: 'Centara Karon Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior City View', 'Superior Ocean View', 'Deluxe City View', 'Deluxe Pool View', 'Premium Deluxe Pool View', 'Deluxe Family Studio Pool View', 'One BR Garden Villa', 'One BR Pool Villa', 'Two BR Pool Villa', 'Three BR Pool Villa'],
        hotelRoomTypesArabic: ['سوبيريور بإطلالة على المدينة', 'سوبيريور بإطلالة على المحيط', 'ديلوكس بإطلالة على المدينة', 'ديلوكس روم بإطلالة على المسبح', 'بريميوم ديلوكس بإطلالة على المسبح', 'ديلوكس فاميلي ستوديو بإطلالة على المسبح', 'جاردن فيلا من غرفة نوم واحدة', 'فيلا من غرفة نوم واحدة مع مسبح', 'فيلا من غرفتين نوم مع مسبح', 'فيلا من ثلاث غرف نوم مع مسبح'],
    },
    {
        hotelName: 'Crest Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Partial Sea View', 'Deluxe Sea View', 'Deluxe Pool Access', 'Deluxe Pool Access Sea View', 'Deluxe Pool Villa', 'Premier Pool Villa', 'Family Pool Villa Two BR'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس بإطلالة جزئية على البحر', 'ديلوكس بإطلالة على البحر', 'ديلوكس بول اكسس', 'ديلوكس بول اكسس بإطلالة على البحر', 'فيلا ديلوكس مع مسبح', 'فيلا بريمير مع مسبح', 'فاميلي فيلا من غرفتين نوم مع مسبح'],
    },
    {
        hotelName: 'The Royal Paradise Hotel',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Paradise Wing (Low Floor)', 'Deluxe Paradise Wing (High Floor)', 'Premier Deluxe', 'Deluxe Royal Wing Pool View', 'Premier Deluxe Royal Wing Pool View'],
        hotelRoomTypesArabic: ['جناح ديلوكس باراديس (طابق منخفض)', 'جناح ديلوكس باراديس (طابق مرتفع)', 'بريمير ديلوكس روم', 'جناح ديلوكس رويال بإطلالة على المسبح', 'جناح بريمير ديلوكس رويال بإطلالة على المسبح'],
    },
    {
        hotelName: 'Rawayana Central Park Villas',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Two BR Family Deluxe Pool Villa', 'Three BR Grand Deluxe Pool Villa'],
        hotelRoomTypesArabic: ['فاميلي فيلا ديلوكس من غرفتين نوم مع مسبح', 'فيلا جراند ديلوكس من ثلاث غرف نوم مع مسبح'],
    },
    {
        hotelName: 'Hyatt Regency Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Garden View Room', 'Ocean View Room', 'King Bed Plunge Pool', 'Two BR Family Room', 'Two BR Family Bunk Bed', 'Ocean View Club Access', 'King Bed Terrace Whirlpool', 'Two BR Regency Suite', 'King Bed Hilltop Ocean View Suite'],
        hotelRoomTypesArabic: ['جاردين فيو ورم', 'اوشن فيو روم', 'كينج بيد مع حوض سباحة', 'فاميلي روم من غرفتين نوم', 'فاميلي روم من غرفتين نوم بانك بيد', 'اوشن فيو كلوب اكسس', 'كينج بيد تراس مع حوض استرخاء', 'سويت ريجنسي من غرفتين نوم', 'سويت كينج بيد هيلتوب بإطلالة على المحيط'],
    },
    {
        hotelName: 'Namaka Resort Kamala',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Sea View', 'Premier Sea View', 'Villa Sea View'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس بإطلالة على البحر', 'بريمير بإطلالة على البحر', 'فيلا بإطلالة على البحر'],
    },
    {
        hotelName: 'Dusit Thani Laguna Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Lagoon View', 'Deluxe Sea View', 'Premier Ocean Front', 'Dusit Club Room', 'Landmark Suite Room', 'Two BR Laguna Pool Villa'],
        hotelRoomTypesArabic: ['ديلوكس بإطلالة على البحيرة', 'ديلوكس بإطلالة على البحر', 'بريمير مواجهة للمحيط', 'دوسيت كلوب روم', 'سويت لاندمارك روم', 'لاجونا فيلا من غرفتين نوم مع مسبح'],
    },
    {
        hotelName: 'Bandara Pool Villas Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Ocean Pool Villa', 'Panoramic Pool Villa', 'Panoramic Duplex Pool Villa'],
        hotelRoomTypesArabic: ['فيلا مع مسبح بإطلالة على المحيط', 'فيلا بانوراميك مع مسبح', 'فيلا بانوراميك دوبلكس مع مسبح'],
    },
    {
        hotelName: 'Bandara Beach Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Balcony Room'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس بلكوني روم'],
    },
    {
        hotelName: 'Andara Resort Villas Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Terrace Suites One BR', 'Terrace Suites Two BR', 'Terrace Suites Three BR', 'Pool Suites One BR', 'Pool Suites Two BR', 'Pool Suites Three BR', 'Pool Suites Four BR', 'Penthouse Pool Suites One BR', 'Penthouse Pool Suites Two BR', 'Penthouse Pool Suites Three BR', 'Luxury Pool Villa Three BR', 'Luxury Pool Villa Four BR', 'Luxury Pool Villa Five BR', 'Luxury Pool Villa Six BR'],
        hotelRoomTypesArabic: ['سويت تراس من غرفة نوم واحدة', 'سويت تراس من غرفتين نوم', 'سويت تراس من ثلاث غرف نوم', 'سويت من غرفة نوم واحدة مع مسبح', 'سويت من غرفتين نوم مع مسبح', 'سويت من ثلاث غرف نوم مع مسبح', 'سويت من اربع غرف نوم مع مسبح', 'بنتهاوس سويت من غرفة نوم واحدة مع مسبح', 'بنتهاوس سويت من غرفتين نوم مع مسبح', 'بنتهاوس سويت من ثلاث غرف نوم مع مسبح', 'فيلا لوكسري من ثلاث غرف نوم مع مسبح', 'فيلا لوكسري من اربع غرف نوم مع مسبح', 'فيلا لوكسري من خمس غرف نوم مع مسبح', 'فيلا لوكسري من  ست غرف نوم مع مسبح'],
    },
    {
        hotelName: 'Sunsuri Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Superior Family Triple Room', 'Deluxe Room', 'Premium Deluxe Room', 'Grand Deluxe Room', 'Grand Deluxe Family Room', 'Ocean View Family Suite', 'Grand View Pool Villa', 'Ocean View One BR Pool Villa', 'Ocean View Two BR Pool Villa'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'سوبيريور فاميلي تريبل روم', 'ديلوكس روم', 'بريميوم ديلوكس روم', 'جراند ديلوكس روم', 'جراند ديلوكس فاميلي روم', 'فاميلي سويت بإطلالة على المحيط', 'جراند فيو فيلا مع مسبح', 'فيلا من غرفة نوم واحدة مع مسبح بإطلالة على المحيط', 'فيلا من غرفتين نوم مع مسبح بإطلالة على المحيط'],
    },
    {
        hotelName: 'Marina Gallery Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Deluxe Sea View', 'Deluxe Pool Access', 'Family Suite'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس روم بإطلالة على المسبح', 'ديلوكس بإطلالة على البحر', 'ديلوكس بول اكسس', 'فاميلي سويت روم'],
    },
    {
        hotelName: 'Mida Grande Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Ocean View', 'Deluxe Ocean View With Jacuzzi', 'Grande Deluxe Ocean View with Plunge Pool', 'Family Suite Two BR', 'Grande Two BR Suite', 'Family Suite Two BR Ocean View', 'Grande Two BR Suite Ocean View', 'Grande Two BR Suite Ocean View With Jacuzzi', 'Grande Two BR Suite Ocean View With Plunge Pool', 'Grande Three BR Suite Ocean View with Jacuzzi ', 'Grande Pool Villa Two BR', 'Grande Pool Villa Three BR'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس روم بإطلالة على المحيط', 'ديلوكس مع جاكوزي بإطلالة على المحيط', 'جراند ديلوكس مع حوض سباحة بإطلالة على المحيط', 'فاميلي سويت من غرفتين نوم', 'سويت جراند من غرفتين نوم', 'فاميلي سويت من غرفتين نوم بإطلالة على المحيط', 'جراند سويت من غرفتين نوم بإطلالة على المحيط', 'جراند سويت من غرفتين نوم مع جاكوزي بإطلالة على المحيط', 'جراند سويت من غرفتين نوم مع مسبح خاص بإطلالة على المحيط', 'جراند سويت من ثلاث غرف نوم مع جاكوزي بإطلالة على المحيط', 'جراند فيلا من غرفتين نوم مع مسبح', 'فيلا جراند من ثلاث غرف نوم مع مسبح'],
    },

    {
        hotelName: 'Katathani Phuket Beach Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Grand Deluxe', 'Pool Access', 'Junior Suite', 'Junior Suite Oceanfront', 'Grand Suite'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'جراند ديلوكس روم', 'بول اكسس روم', 'جونيور سويت', 'جونيور سويت مواجهة للمحيط', 'جراند سويت'],
    },
    {
        hotelName: 'The Shore Katathani Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Sea View Pool Villa', 'Sea View Pool Villa Romance', 'Sea View Pool Villa In Love', 'Two BR Pool Villa'],
        hotelRoomTypesArabic: ['فيلا مع مسبح بإطلالة على البحر', 'فيلا رومانس مع مسبح بإطلالة على البحر', 'فيلا ان لوف مع مسبح بإطلالة على البحر', 'فيلا مع مسبح من غرفتين نوم'],
    },
    {
        hotelName: 'Marina Gallery KACHA Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Deluxe Sea View', 'Deluxe Pool Access', 'Family Suite'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس بإطلالة على المسبح', 'ديلوكس بإطلالة على البحر', 'ديلوكس بول اكسس', 'فاميلي سويت'],
    },
    {
        hotelName: 'Sugar Marina Art Karon Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Inner', 'Artsy Deluxe', 'Deluxe Pool View', 'Deluxe Pool Access', 'Family Room', 'Quad Pool Access'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس اننر', 'ارتسي ديلوكس', 'ديلوكس بإطلالة على المسبح', 'ديلوكس بول اكسس', 'فاميلي روم', 'كواد بول اكسس'],
    },
    {
        hotelName: 'Sugar Marina Fashion Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Chic Deluxe Room', 'Deluxe Pool View', 'Deluxe Pool Access'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس شيك روم', 'ديلوكس بإطلالة على المسبح', 'ديلوكس بول اكسس'],
    },








    {
        hotelName: 'Sugar Marina SURF Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Deluxe Pool Access'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس بإطلالة على المسبح', 'ديلوكس بول اكسس'],
    },
    {
        hotelName: 'Sugar Marina POP Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Superior Pool View', 'Deluxe Pool View', 'Superior Pool Access', 'Deluxe Pool Access', 'Family Cozy', 'Family Roomy', 'Family Pool Access', 'Family Biggy', 'Signature QUAD Room', 'Family Two BR Suite'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'سوبيريور بإطلالة على المسبح', 'ديلوكس بإطلالة على المسبح', 'سوبيريور بول اكسس', 'ديلوكس بول اكسس', 'فاميلي كوزي', 'فاميلي رومي', 'فاميلي بول اكسس', 'فاميلي بيجي', 'سيجنتشر كواد روم', 'فاميلي سويت من غرفتين نوم'],
    },
    {
        hotelName: 'Sugar Marina Villas Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Room', 'Superior Pool Access', 'Superior Plunge Pool with Jacuzzi', 'Standard Lagoon Villa', 'Family LAGOON Villa', 'One BR LAGOON Suite Villa', 'Two BR LAGOON Villa', 'Two BR LAGOON Suite Villa', 'Sol Two BR LAGOON Suite Villa'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ديلوكس روم', 'سوبيريور بول اكسس', 'سوبيريور مع مسبح خاص وجاكوزي', 'ستاندارد لاجون فيلا', 'فاميلي لاجون فيلا', 'سويت لاجون فيلا من غرفة نوم واحدة', 'لاجون فيلا من غرفتين نوم', 'سويت لاجون فيلا من غرفتين نوم', 'سويت لاجون فيلا سول من غرفتين نوم'],
    },
    {
        hotelName: 'Sugar Marina Hotel AVIATOR Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Deluxe Pool Access'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس بإطلالة على المسبح', 'ديلوكس بول اكسس'],
    },
    {
        hotelName: 'Marina MUAYTHAI Ta-iad Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Standard Room', 'Standard Pool View', 'One BR Suite Pool Facing', 'One BR Suite Pool Access'],
        hotelRoomTypesArabic: ['ستاندارد روم', 'ستاندارد بإطلالة على المسبح', 'سويت من غرفة نوم واحدة مواجهة للمسبح', 'سويت من غرفة نوم واحدة بول اكسس'],
    },
    {
        hotelName: 'Amari Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Balcony', 'Superior Ocean Front Balcony', 'Deluxe Ocean Front Balcony', 'One BR Suite Ocean Coral Lounge', 'One BR Suite Ocean View Coral Lounge'],
        hotelRoomTypesArabic: ['سوبيريور بلكونة', 'سوبيريور بلكوني مواجهة للمحيط', 'ديلوكس بلكوني مواجهة للمحيط', 'سويت من غرفة نوم واحدة أوشن كورال لاونج', 'سويت من غرفة نوم واحدة بإطلالة على المحيط كورال لاونج'],
    },
    {
        hotelName: 'Anantara Mai Khao Phuket Villas',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Mai Khao Suite', 'Two BR Mai Khao Suite', 'Pool Villa', 'Lagoon Pool Villa', 'Pool Pavilion', 'Two BR Pool Pavilion'],
        hotelRoomTypesArabic: ['سويت ديلوكس ماي خاو', 'سويت ماي خاو من غرفتين نوم', 'فيلا مع مسبح', 'لاجوون بول فيلا', 'بافيليون مع مسبح', 'بافيليون من غرفتين نوم مع مسبح'],
    },
    {
        hotelName: 'Tantawan Villa Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['One BR Pool Villa', 'One BR Pool Villa Sea View', 'Two BR Pool Villa', 'Three BR Pool Villa'],
        hotelRoomTypesArabic: ['فيلا من غرفة نوم واحدة مع مسبح', 'فيلا من غرفة نوم واحدة مع مسبح بإطلالة على البحر', 'فيلا من غرفتين نوم مع مسبح', 'فيلا من ثلاث غرف نوم مع مسبح'],
    },
    {
        hotelName: 'Anantara Layan Phuket Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Layan Suite', 'Deluxe Pool Villa', 'Sala Pool Villa', 'Two BR Sea View Residence', 'Three BR Sea View Residence'],
        hotelRoomTypesArabic: ['سويت ديلوكس لايان', 'فيلا ديلوكس مع مسبح', 'فيلا سالا مع مسبح', 'ريزيدنس من غرفتين نوم بإطلالة على البحر', 'ريزيدنس من ثلاث غرف نوم بإطلالة على البحر'],
    },
    {
        hotelName: 'Wyndham Phuket Kalim Bay',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Pool Suite', 'Villa', 'Suite', 'Pool Suite Ocean View', 'Deluxe Room'],
        hotelRoomTypesArabic: ['سويت مع مسبح', 'فيلا', 'سويت', 'سويت مع مسبح بإطلالة على المحيط', 'ديلوكس روم'],
    },
    {
        hotelName: 'Casabay Pool Villas',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Three BR PP Villa', 'Casablue Four BR PP Villa', 'Four BR PP Villa', 'Four BR PP Villa Partial Sea View', 'Six BR PP Villa Partial Sea View'],
        hotelRoomTypesArabic: ['فيلا من ثلاث غرف نوم مع مسبح خاص', 'فيلا كازابلو من اربع غرف نوم مع مسبح خاص', 'فيلا من اربع غرف نوم مع مسبح خاص', 'فيلا من اربع غرف نوم مع مسبح خاص بإطلالة جزئية على البحر', 'فيلا من ست غرف نوم مع مسبح خاص بإطلالة جزئية على البحر'],
    },
    {
        hotelName: 'Phuket Emerald Beach Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Pool View', 'Family Pool View', 'Family Pool Access', 'Grand Family Pool View (Two BR connecting)'],
        hotelRoomTypesArabic: ['ديلوكس بإطلالة على المسبح', 'فاميلي بإطلالة على المسبح', 'فاميلي بول اكسس', 'جراند فاميلي بإطلالة على المسبح (غرفتين كونيكتينج)'],
    },
    {
        hotelName: 'Radisson Red Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Standard Room', ' Superior Room', 'Deluxe Room', 'Family Room'],
        hotelRoomTypesArabic: ['ستاندارد روم', 'سوبيريور روم', 'ديلوكس روم', 'فاميلي روم'],
    },
    {
        hotelName: 'Tribe Phuket Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Tribe Essential', 'Tribe Room', 'Tribe Essential Pool View', 'Tribe Essential High Floor', 'Tribe Extra', 'Tribe Max'],
        hotelRoomTypesArabic: ['ترايب إيسنشيال', 'ترايب روم', 'ترايب إيسنشيال بإطلالة على المسبح', 'ترايب إيسنشيال في طابق مرتفع', 'ترايب إكسترا', 'ترايب ماكس'],
    },
    {
        hotelName: 'Ozo Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Room'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ديلوكس روم'],
    },
    {
        hotelName: 'Panwaburi Beachfront Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Tree', 'Deluxe Facade', 'Deluxe Pool View', 'Deluxe Pool Access Partial Pool', 'Deluxe Pool Access Pool View'],
        hotelRoomTypesArabic: ['ديلوكس تري', 'ديلوكس الواجهة', 'ديلوكس بإطلالة على المسبح', 'ديلوكس بول اكسس  مع مسبح جزئي', 'ديلوكس بول اكسس بإطلالة على المسبح'],
    },









    {
        hotelName: 'Paresa Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Ocean Pool Suite', 'Spa Pool Suite', 'Cliff Pool Villa', 'Two BR Ocean Pool Suite', 'Grand Residence Pool Villa'],
        hotelRoomTypesArabic: ['سويت مع مسبح بإطلالة على المحيط', 'سبا بول سويت', 'فيلا كليف مع مسبح', 'سويت من غرفتين نوم مع مسبح بإطلالة على الشاطئ', 'فيلا جراند ريزيدنس'],
    },
    {
        hotelName: 'The Charm Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Junior Suite', 'Deluxe Pool Access', 'Junior Suite Pool Access', 'Executive Suite', 'Family One BR Suite', 'Family Two BR Suite'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'جونيور سويت', 'ديلوكس بول اكسس', 'جونيور سويت بول اكسس', 'سويت تنفيذي', 'فاميلي سويت من غرفة نوم واحدة', 'فاميلي سويت من غرفتين نوم'],
    },
    {
        hotelName: 'Barcelo Coconut Island',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Lux Suite', 'Outdoor Jacuzzi Suite', 'Lux Jacuzzi Suite', 'Lux One BR Garden View Pool Villa', 'Lux One BR Sea View Pool Villa', 'Lux Two BR Garden View Pool Villa', 'Lux Two BR Sea View Pool Villa', 'Lux Two BR Grand Sea View Pool Villa', 'Two BR Grand Beachfront Pool Villa', 'Lux Two BR Grand Beachfront Pool Villa', 'Lux Three BR Grand Sea View Pool Villa', 'Three BR Grand Beachfront Pool Villa', 'Lux Three BR Grand Beachfront Pool Villa', 'Four BR Grand Beachfront Pool Villa', 'Lux Four BR Grand Beachfront Pool Villa', 'Five BR Grand Beachfront Pool Villa', 'Lux Five BR Grand Beachfront Pool Villa'],
        hotelRoomTypesArabic: ['سويت لوكس', 'سويت مع جاكوزي خارجي', 'سويت جاكوزي لوكس', 'فيلا لوكس من غرفة نوم واحدة مع مسبح بإطلالة على الحديقة', 'فيلا لوكس من غرفة نوم واحدة مع مسبح بإطلالة على البحر', 'فيلا لوكس من غرفتين نوم مع مسبح بإطلالة على الحديقة', 'فيلا لوكس من غرفتين نوم مع مسبح بإطلالة على البحر', 'فيلا جراند لوكس من غرفتين نوم مع مسبح بإطلالة على البحر', 'جراند فيلا من غرفتين نوم مع مسبح مواجهة على الشاطئ', 'فيلا جراند لوكس من غرفتين نوم مع مسبح مواجهة على الشاطئ', 'فيلا جراند لوكس من ثلاث غرف نوم مع مسبح بإطلالة على البحر', 'فيلا جراند من ثلاث غرف نوم مع مسبح مواجهة على الشاطئ', 'فيلا جراند لوكس من ثلاث غرف نوم مع مسبح مواجهة على الشاطئ', 'فيلا جراند من اربع غرف نوم مع مسبح مواجهة على الشاطئ', 'فيلا جراند لوكس من اربع غرف نوم مع مسبح مواجهة على الشاطئ', 'فيلا جراند من خمس غرف نوم مع مسبح مواجهة على الشاطئ', 'فيلا جراند لوكس من خمس غرف نوم مع مسبح مواجهة على الشاطئ'],
    },








    {
        hotelName: 'Seabed Grand Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Garden View', 'Deluxe Pool View Room', 'Deluxe Pool Access Room', 'Deluxe Triple Room', 'Family Room'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ديلوكس بإطلالة على الحديقة', 'ديلوكس بإطلالة على المسبح', 'ديلوكس بول اكسس', 'ديلوكس تريبل روم', 'فاميلي روم'],
    },
    {
        hotelName: 'The Westin Siray Bay Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Sea View', 'Deluxe Sea View Pool Access', 'Deluxe Sea View Suite', 'Sala Pool Villa Sea View'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ديلوكس بإطلالة على البحر', 'ديلوكس بول اكسس بإطلالة على البحر', 'سويت ديلوكس بإطلالة على البحر', 'فيلا سالا مع مسبح بإطلالة على البحر'],
    },
    {
        hotelName: 'Baba Beach Club Natai',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Baba Suite', 'Baba Suite Ocean View', 'Baba Pool Suite', 'One BR Luxury Pool Villa', 'Gabana Villa', 'Two BR Luxury Pool Villa', 'Five BR Beachfront Pool Villa'],
        hotelRoomTypesArabic: ['بابا سويت', 'بابا سويت بإطلالة على المحيط', 'بابا سويت مع مسبح', 'فيلا لوكسري من غرفة نوم واحدة مع مسبح', 'جابانا فيلا', 'فيلا لوكسري من غرفتين نوم مع مسبح', 'فيلا من خمس غرف نوم مع مسبح مواجهة على الشاطئ'],
    },
    {
        hotelName: 'My Beach Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Pool View', 'Premier Pool Access', 'Premier Seaview', 'Family Seaview', 'Premier Seaview Studio', 'Premier Beachfront', 'Private Pool Beachfront'],
        hotelRoomTypesArabic: ['ديلوكس بإطلالة على المسبح', 'بريمير بول اكسس', 'بريمير بإطلالة على البحر', 'فاميلي بإطلالة على البحر', 'ستوديو بريمير بإطلالة على البحر', 'بريمير مواجهة على الشاطئ', 'مسبح خاص مواجهة على الشاطئ'],
    },
    {
        hotelName: 'Pamookkoo Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool', 'Deluxe Premier', 'Deluxe Premier Pool', 'Family Room with Bunk Bed'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس مسبح', 'ديلوكس بريمير', 'ديلوكس بريمير مسبح', 'فاميلي روم بأسرة طابقية'],
    },
    {
        hotelName: 'Phuket Orchid Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Family Triple', 'Pool Access', 'Family Bunkbed', 'Family Double King'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس بإطلالة على المسبح', 'فاميلي تريبل', 'بول اكسس', 'فاميلي بانك بيد', 'فاميلي دبل كينج'],
    },
    {
        hotelName: 'Hotel Clover Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Balcony', 'Premier Balcony', 'Deluxe Studio', 'Deluxe Family', 'Deluxe Jacuzzi'],
        hotelRoomTypesArabic: ['سوبيريور بلكوني', 'بريمير بلكوني', 'ستوديو ديلوكس', 'ديلوكس فاميلي', 'ديلوكس جاكوزي'],
    },
    {
        hotelName: 'Splash Beach Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Twin no Balcony', 'Deluxe Twin Balcony', 'Deluxe King Balcony', 'Executive King No Balcony', 'Executive King Balcony', 'Deluxe Double no Balcony', 'Executive Double No Balcony', 'Deluxe Double with Balcony', 'Executive Double with Balcony', 'One BR Family Suite no Balcony', 'Executive One BR Family Suite No Balcony', 'One BR Family Suite Balcony', 'Executive One BR Family Suite Balcony', 'One BR Suite with Kitchen no Balcony', 'Executive One BR Suite No Balcony', 'One BR Suite with Kitchen with Balcony', 'Tow BR Suite Kitchen with Balcony', 'One BR Residence no Balcony', 'One BR Residence Balcony', 'One BR Residence Kitchen and Balcony', 'Two BR Residence Balcony', 'Two BR Residence with Kitchen and Balcony', 'Three BR Residence Balcony', 'Two BR Penthouse Pool Suite', 'Three BR Penthouse Pool Suite', 'Three BR Penthouse Pool Suite Kitchen', 'Four BR Penthouse Pool Suite Kitchen', 'Two BR Villa Pool'],
        hotelRoomTypesArabic: ['ديلوكس توين بدون بلكونة', 'ديلوكس توين بلكوني', 'ديلوكس كينج بلكوني', 'تنفيذي روم كينج بدون بلكونة', 'تنفيذي روم كينج بلكوني', 'ديلوكس دبل بدون بلكونة', 'تنفيذي روم دبل بدون بلكوني', 'ديلوكس دبل مع بلكونة', 'تنفيذي روم دبل مع بلكونة', 'فاميلي سويت من غرفة نوم واحدة بدون بلكونة', 'فاميلي سويت تنفيذي من غرفة نوم واحدة بدون بلكونة', 'فاميلي سويت من غرفة نوم واحدة بلكوني', 'فاميلي سويت تنفيذي من غرفة نوم واحدة بلكوني', 'سويت غرفة نوم واحدة مع مطبخ بدون بلكونة', 'سويت تنفيذي من غرفة نوم واحدة بدون بلكونة', 'سويت غرفة نوم واحدة بلكوني مع مطبخ', 'سويت من غرفتين نوم بلكوني مع مطبخ', 'ريزيدنس من غرفة نوم واحدة بدون بلكونة', 'ريزيدنس غرفة نوم واحدة بلكوني', 'ريزيدنس من غرفة نوم واحدة بلكوني مع مطبخ', 'ريزيدنس من غرفتين نوم بلكوني', 'ريزيدنس من غرفتين نوم بلكوني مع مطبخ', 'ريزيدنس من ثلاث غرف نوم بلكوني', 'سويت بنتهاوس من غرفتين نوم مع مسبح', 'سويت بنتهاوس من ثلاث غرف نوم مع مسبح', 'سويت بنتهاوس من ثلاث غرف نوم مع مسبح ومطبخ', 'سويت بنتهاوس من اربع غرف نوم مع مسبح ومطبخ', 'فيلا من غرفتين نوم مع مسبح'],
    },








    {
        hotelName: 'Andaman Beach Hotel Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Classic Balcony Garden View', 'Superior Balcony Pool View', 'Deluxe Balcony Sea View', 'Junior Suite Balcony Pool View', 'Suite Balcony Sea View'],
        hotelRoomTypesArabic: ['كلاسيك بلكوني بإطلالة على الحديقة', 'سوبيريور بلكوني بإطلالة على المسبح', 'ديلوكس بلكوني بإطلالة على البحر', 'جونيور سويت بلكوني بإطلالة على المسبح', 'سويت بلكوني بإطلالة على البحر'],
    },
    {
        hotelName: 'The Aim Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Room'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ديلوكس روم'],
    },
    {
        hotelName: 'Chanalai Garden Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Garden View', 'Deluxe Seaview'],
        hotelRoomTypesArabic: ['سوبيريور بإطلالة على الحديقة', 'ديلوكس بإطلالة على البحر'],
    },
    {
        hotelName: 'Chanalai Flora Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Pool View', 'Grand Deluxe Room'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ديلوكس بإطلالة على المسبح', 'جراند ديلوكس روم'],
    },
    {
        hotelName: 'Chanalai Romantica Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Pool View', 'Deluxe Pool View'],
        hotelRoomTypesArabic: ['سوبيريور بإطلالة على المسبح', 'ديلوكس بإطلالة على المسبح'],
    },
    {
        hotelName: 'Fisherman Way Beach Villa',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['One BR Seafront Penthouse Jacuzzi', 'Two BR Seafront Penthouse Jacuzzi', 'Three BR Seafront Pool Suite', 'Three BR Beachfront Infinity Pool Villa', 'Three BR Signature Beachfront Pool Villa', 'Four BR Villa Partial Seaview', 'Four BR Beachfront Pool Villa', 'Ten BR Pool Villa in the Garden', 'Nine BR Private Pool Villa by the Beach'],
        hotelRoomTypesArabic: ['بنتهاوس جاكوزي من غرفة نوم واحدة مواجهة على البحر', 'بنتهاوس جاكوزي من غرفتين نوم مواجهة على البحر', 'سويت من ثلاث غرف نوم مع مسبح مواجهة على البحر', 'فيلا انفينيتي من ثلاث غرف نوم مع مسبح مواجهة على الشاطئ', 'فيلا سيجنتشر من ثلاث غرف نوم مع مسبح مواجهة على الشاطئ', 'فيلا من اربع غرف نوم بإطلالة جزئية على البحر', 'فيلا من اربع غرف نوم مع مسبح على الشاطئ', 'فيلا من عشر غرف نوم مع مسبح في الحديقة', 'فيلا من تسع غرف نوم مع مسبح خاص بجانب الشاطئ'],
    },















    {
        hotelName: 'La Green Hotel Residence',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Studio Room', 'La Green Junior Suite', 'La Green Junior Suite Two BR'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ستوديو روم', 'لاجرين جونيور سويت', 'لاجرين جونيور سويت من غرفتين نوم'],
    },
    {
        hotelName: 'Chanalai Hillside Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Pool View'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ديلوكس بإطلالة على المسبح'],
    },
    {
        hotelName: 'Andakira Hotel',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Room', 'Grand Deluxe Room', 'Deluxe Pool Access', 'Deluxe Triple Room'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ديلوكس روم', 'جراند ديلوكس روم', 'ديلوكس بول اكسس', 'ديلوكس تريبل روم'],
    },
    {
        hotelName: 'Beyond Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Premier'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس بريمير'],
    },
    {
        hotelName: 'Phuket Marriott Nai Yang Beach',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Premium Pool View', 'Premium Pool Access', 'Garden Cabana Pool Access', 'Family Two BR', 'Beachfront Two BR Villa'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'بريميوم بإطلالة على المسبح', 'بريميوم بول اكسس', 'جاردن كابانا بول اكسس', 'فاميلي روم من غرفتين نوم', 'فيلا من غرفتين نوم مواجهة على الشاطئ'],
    },











    /* Bangkok */
    {
        hotelName: 'lyf Sukhumvit 8 Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['One of A Kind'],
        hotelRoomTypesArabic: ['ون أوف آ كايند'],
    },
    {
        hotelName: 'Oakwood Studios Sukhumvit',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Superior Room', 'Studio Deluxe', 'Studio Executive', 'Studio Premier'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ستوديو ديلوكس', 'ستوديو تنفيذي', 'ستوديو بريمير'],
    },
    {
        hotelName: 'Sindhorn Midtown Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Standard Room', 'Premium Room', 'Sky Suite', 'One BR Suite', 'Two BR Suite', 'Two BR Corner Suite', 'Studio', 'One BR Urban Studio'],
        hotelRoomTypesArabic: ['ستاندارد روم', 'بريميوم روم', 'سكاي سويت', 'سويت من غرفة نوم واحدة', 'سويت من غرفتين نوم', 'سويت كورنر من غرفتين نوم', 'ستوديو روم', 'ستوديو اوربان من غرفة نوم واحدة'],
    },
    {
        hotelName: 'Ascott Thonglor Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Studio Executive', 'One BR Premier ', 'One BR Executive', 'Two BR Executive', 'Three BR Executive'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ستوديو تنفيذي', 'بريمير من غرفة نوم واحدة', 'تنفيذي روم من غرفة نوم واحدة', 'تنفيذي روم من غرفتين نوم', 'تنفيذي روم من ثلاث غرف نوم'],
    },
    {
        hotelName: 'Valia Hotel Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Premier Room', 'Deluxe Suite', 'Two Deluxe Suites Connected', 'Family Suite', 'Junior Suite', 'Executive Suite', 'Valia Suite', 'Deluxe Suite Club'],
        hotelRoomTypesArabic: ['بريمير روم', 'سويت ديلوكس', 'اثنين سويت ديلوكس كونيكتينج', 'فاميلي سويت', 'جونيور سويت', 'سويت تنفيذي', 'فاليا سويت', 'ديلوكس سويت كلوب'],
    },
    {
        hotelName: 'Hilton Garden Inn Bangkok Silom',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Guest Room', 'Deluxe Room'],
        hotelRoomTypesArabic: ['جيست غرفة', 'ديلوكس روم'],
    },
    {
        hotelName: 'Hotel Indigo Bangkok Wireless Road',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Family Room', 'Standard Room', 'Standard Balcony Room', 'Premium City View Balcony'],
        hotelRoomTypesArabic: ['فاميلي روم', 'ستاندارد روم', 'ستاندارد روم بلكوني', 'بريميوم بلكوني بإطلالة على المدينة'],
    },
    {
        hotelName: 'Bandara Silom Suites Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['One BR Suite', 'Two BR Suite'],
        hotelRoomTypesArabic: ['سويت من غرفة نوم واحدة', 'سويت من غرفتين نوم'],
    },
    {
        hotelName: 'Amari Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Grand Deluxe', 'Premier Room', 'Club Premier', 'Club One BR Corner Suite', 'Club One BR Executive Suite', 'Club Two BR Corner Suite'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'جراند ديلوكس', 'بريمير روم', 'كلوب بريمير', 'سويت كورنر كلوب من غرفة نوم واحدة', 'سويت تنفيذي كلوب من غرفة نوم واحدة', 'سويت كورنر كلوب من غرفتين نوم'],
    },
    {
        hotelName: 'Ascott Embassy Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Studio Executive', 'One BR Premier', 'Two BR Executive', 'Two BR Premier', 'Three BR Executive '],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ستوديو تنفيذي', 'بريمير من غرفة نوم واحدة', 'تنفيذي روم من غرفتين نوم', 'بريمير روم من غرفتين نوم', 'تنفيذي روم من ثلاث غرف نوم'],
    },
    {
        hotelName: 'Nysa Hotel Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Executive Room', 'Premier Pool View', 'One BR Suite Pool View', 'One BR Residence Pool Suite', 'Deluxe Connecting Deluxe', 'Premier Pool View Connecting Premier Pool View', 'One BR Residence Pool Suite Connecting Premier Pool View'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'تنفيذي روم', 'بريمير بإطلالة على المسبح', 'سويت من غرفة نوم واحدة بإطلالة على المسبح', 'سويت ريزيدنس من غرفة نوم واحدة مع مسبح', 'ديلوكس كونيكتينج مع ديلوكس', 'بريمير بإطلالة على المسبح كونيكتينج مع بريمير بإطلالة على المسبح', 'سويت ريزيدنس من غرفة نوم واحدة مع مسبح كونيكتينج مع بريمير بإطلالة على المسبح'],
    },
    {
        hotelName: 'Innside By Melia Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['The Inside Room', 'The Inside Corner Room', 'The Townhouse', 'The Townhouse Two BR'],
        hotelRoomTypesArabic: ['ذا إنسايد روم', 'ذا إنسايد كورنر روم', 'ذا تاون هاوس', 'ذا تاون هاوس من غرفتين نوم'],
    },
    {
        hotelName: 'Tribe Living Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['TRIBE Essential', 'TRIBE Extra', 'TRIBE Max', 'TRIBE Studio'],
        hotelRoomTypesArabic: ['ترايب إيسنشيال', 'ترايب إكسترا', 'ترايب ماكس', 'ترايب ستوديو'],
    },
    {
        hotelName: 'Siam Kempinski Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Balcony Room', 'Premier Room', 'Executive Room', 'Executive Balcony Room', 'Family Suite', 'Executive Suite', 'Duplex Cabana'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس روم بلكوني', 'بريمير روم', 'تنفيذي روم', 'تنفيذي روم بلكوني', 'فاميلي سويت', 'سويت تنفيذي', 'كابانا دوبلكس'],
    },
    {
        hotelName: 'Lancaster Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe King', 'Deluxe Twin', 'Family Two BR', 'Executive Suite King', 'Executive Suite Twin', 'Executive Apartment King', 'Executive Apartment Twin', 'Premium Suite King', 'Premium Suite Twin', 'Premium Apartment King', 'Premium Apartment Twin', 'Sky Garden Suite King', 'Sky Garden Suite Twin', 'Siam Suite King', 'Siam Suite Twin'],
        hotelRoomTypesArabic: ['ديلوكس كينج', 'ديلوكس توين', 'فاميلي من غرفتين نوم', 'سويت تنفيذي كينج', 'سويت تنفيذي توين', 'ابارتمنت تنفيذي كينج', 'ابارتمنت تنفيذي توين', 'سويت بريميوم كينج', 'سويت بريميوم توين', 'ابارتمنت بريميوم كينج', 'ابارتمنت بريميوم توين', 'سكاي سويت جرادن كينج', 'سكاي سويت جرادن توين', 'سيام سويت كينج', 'سيام سويت توين'],
    },
    {
        hotelName: 'Mercure Bangkok Siam',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Superior Room', 'Deluxe Room', 'Suite Deluxe Room'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ديلوكس روم', 'سويت ديلوكس روم'],
    },
    {
        hotelName: 'Wyndham Bangkok Queen Centre',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Studio King', 'Studio Executive', 'Two BR Suite'],
        hotelRoomTypesArabic: ['ستوديو كينج', 'ستوديو تنفيذي', 'سويت من غرفتين نوم'],
    },
    {
        hotelName: 'Wyndham Garden Bangkok 42',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['One BR Suite', 'One BR Duplex Suite', 'Two BR Suite'],
        hotelRoomTypesArabic: ['سويت من غرفة نوم واحدة', 'سويت دوبلكس من غرفة نوم واحدة', 'سويت من غرفتين نوم'],
    },
    {
        hotelName: 'Ramada Plaza Bangkok 48',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Premier Room', 'One BR Premier Suite Queen'],
        hotelRoomTypesArabic: ['بريمير روم', 'سويت بريمير كوين من غرفة نوم واحدة'],
    },
    {
        hotelName: 'Ramada Wyndham Bangkok 87',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Studio Duplex Queen', 'Studio Executive Duplex'],
        hotelRoomTypesArabic: ['ستوديو دوبلكس كوين', 'ستوديو تنفيذي دوبلكس'],
    },
    {
        hotelName: 'Sofitel Bangkok Sukhumvit',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Luxury Room', 'Magnifique Room', 'Luxury Club Millesime', 'Junior Suite', 'Prestige Suite', '2x Luxury Room', 'Two BR Suite (127 sqm)', 'Two BR Suite (210 sqm)', 'Three BR Suite (139 sqm)'],
        hotelRoomTypesArabic: ['لوكسري روم', 'غرفة مانيفيك', 'لوكسري كلوب ميليسيم', 'جونيور سويت', 'سويت بريستيج', 'لوكسري من غرفتين نوم', 'سويت من غرفتين نوم (127 م²)', 'سويت من غرفتين نوم (210 م²)', 'سويت من ثلاث غرف نوم (139 م²)'],
    },
    {
        hotelName: 'Pipa Bangkok Sukhumvit 11',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Grand Deluxe', 'Executive with Jacuzzi', 'Premier Family', 'Family Connecting'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'جراند ديلوكس', 'تنفيذي روم مع جاكوزي', 'بريمير فاميلي', 'فاميلي كونيكتينج'],
    },
    {
        hotelName: 'Siam At Siam Design Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Corner Room', 'Deluxe Connecting', 'Studio Room'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس روم كورنر', 'ديلوكس كونيكتينج', 'غرفة ستوديو'],
    },
    {
        hotelName: 'The Berkeley Pratunam',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Premier Room', 'Premier Triple Room', 'Premier Family Room', 'Premier Family Bunk Bed', 'Luxury Room', 'Luxury Quadruple Suite'],
        hotelRoomTypesArabic: ['بريمير روم', 'بريمير تريبل روم', 'بريمير فاميلي روم', 'بريمير فاميلي روم بانك بيد', 'لوكسري روم', 'لوكسري سويت كوادربل'],
    },
    {
        hotelName: 'Thaya Hotel Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Thaya Executive Suite'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ثايا سويت تنفيذي'],
    },
    {
        hotelName: 'Jasmine 59 Hotel',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Premium', 'Junior Suite One BR', 'Triple Two BR Suite', 'Exclusive Two BR Suite'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس بريميوم', 'جونيور سويت من غرفة نوم واحدة', 'تريبل سويت من غرفتين نوم', 'سويت اكسكلوسيف من غرفتين نوم'],
    },
    {
        hotelName: 'Jasmine Resort Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Jasmine Deluxe', 'Premier Conner', 'Sky Bay Suite One BR', 'Spa Residential Suite One BR', 'Pool Residential Suite One BR'],
        hotelRoomTypesArabic: ['ديلوكس جاسمين', 'بريمير كورنر', 'سكاي باي سويت من غرفة نوم واحدة', 'سبا ريزيدنسيال سويت من غرفة نوم واحدة', 'ريزيدنسيال سويت من غرفة نوم واحدة مع مسبح'],
    },
    {
        hotelName: 'Oakwood Sukhumvit Thonglor',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Studio Deluxe', 'One BR Deluxe', 'Two BR Deluxe', 'Three BR Deluxe'],
        hotelRoomTypesArabic: ['ستوديو ديلوكس', 'ديلوكس من غرفة نوم واحدة', 'ديلوكس من غرفتين نوم', 'ديلوكس من ثلاث غرف نوم'],
    },
    {
        hotelName: 'Grande Centre Point Ratchadamri',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Grand Deluxe', 'Grand Suite'],
        hotelRoomTypesArabic: ['جراند ديلوكس', 'جراند سويت'],
    },
    {
        hotelName: 'Jasmine Grande Residence',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Exclusive', 'Junior Suite One BR', 'Triple Suite Two BR', 'Family Suite Two BR', 'Grande Suite Three BR'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس اكسكلوسيف', 'جونيور سويت من غرفة نوم واحدة', 'سويت تريبل من غرفتين نوم', 'فاميلي سويت من غرفتين نوم', 'جراند سويت من ثلاث غرف نوم'],
    },
    {
        hotelName: 'Novotel Bangkok Siam',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Superior Room', 'Deluxe Room', 'Executive Room', 'Premier Room', 'Junior Suite'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ديلوكس روم', 'تنفيذي روم', 'بريمير روم', 'جونيور سويت'],
    },
    {
        hotelName: 'NH Bangkok Boulevard',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Superior Room', 'Superior City View Room', 'Deluxe Room', 'Deluxe Skyline Room', 'Corner Room', 'City View Terrace'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'سوبيريور روم بإطلالة على المدينة', 'ديلوكس روم', 'ديلوكس سكاي لاين روم', 'كورنر روم', 'تراس بإطلالة على المدينة'],
    },




    /* Krabi */
    {
        hotelName: 'Avani Ao Nang Krabi',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Avani Room', 'Avani Superior Room', 'Avani Sea View Room', 'Avani Villa', 'Avani Superior Sea View Room', 'Avani Family Suite', 'Avani Pool Villa'],
        hotelRoomTypesArabic: ['افاني غرفة', 'افاني سوبيريور روم', 'افاني روم بإطلالة على البحر', 'افاني فيلا', 'افاني سوبيريور بإطلالة على البحر', 'افاني فاميلي سويت', 'افاني فيلا مع مسبح'],
    },
    {
        hotelName: 'Adam Krabi',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Deluxe Pool Suite Garden View', 'Deluxe Pool Suite Mountain View', 'Deluxe Pool Suite Sea View'],
        hotelRoomTypesArabic: ['ديلوكس سويت مع مسبح بإطلالة على الحديقة', 'ديلوكس سويت مع مسبح بإطلالة على الجبل', 'ديلوكس سويت مع مسبح بإطلالة على البحر'],
    },

















    {
        hotelName: 'Panan Krabi Resort',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Deluxe Cliff View', 'Deluxe Pool View', 'Deluxe Sea View'],
        hotelRoomTypesArabic: ['ديلوكس كليف فيو', 'ديلوكس بإطلالة على المسبح', 'ديلوكس بإطلالة على البحر'],
    },
    {
        hotelName: 'Sea Seeker Krabi Resort',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Deluxe Mountain View', 'Deluxe Limestone Cliff View', 'Deluxe Pool View', 'Deluxe Sea View'],
        hotelRoomTypesArabic: ['ديلوكس بإطلالة على الجبل', 'ديلوكس لايم ستون كليف فيو', 'ديلوكس بإطلالة على المسبح', 'ديلوكس بإطلالة على البحر'],
    },
    {
        hotelName: 'Sugar Marina Hotel CLIFFHANGER Krabi',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Superior Room', 'Deluxe Room', 'Deluxe Cliff View', 'Superior Pool Access', 'Deluxe Pool Access', 'Deluxe Triple', 'Deluxe Queens'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ديلوكس روم', 'ديلوكس بإطلالة على المنحدر', 'سوبيريور بول اكسس', 'ديلوكس بول اكسس', 'ديلوكس تريبل روم', 'ديلوكس كويينز'],
    },
    {
        hotelName: 'Marina Express Fisherman Aonang Krabi',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Cliff View'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس كليف فيو'],
    },
    {
        hotelName: 'Ban Sainai Resort Krabi',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Sainai Cottages', 'Coconut Cottages', 'Pano Cliff View Cottage', 'Triplet Premier Cottages', 'Sainai Forest', 'Grand Pond View Cottages', 'Family Cottage', 'Tropical Family Cottages', 'Sainai Pool Villa'],
        hotelRoomTypesArabic: ['اكواخ سايناي', 'اكواخ كوكونت', 'كوخ بانو كليف فيو', 'اكواخ بريمير تريبل', 'غابة سايناي', 'اكواخ جراند بوند فيو', 'كوخ فاميلي', 'اكواخ فاميلي تروبيكال', 'فيلا سايناي مع مسبح'],
    },
    {
        hotelName: 'Dusit Thani Krabi Resort',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Sea Facing', 'Deluxe Premium'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس مواجهة على البحر', 'ديلوكس بريميوم'],
    },
    {
        hotelName: 'Deevana Krabi Resort',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Standard Room', 'Grand Deluxe Room'],
        hotelRoomTypesArabic: ['ستاندارد روم', 'جراند ديلوكس روم'],
    },
    {
        hotelName: 'Deevana Plaza Krabi Aonang',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Deluxe Room', 'Premier Room'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'بريمير روم'],
    },




    /* Pattaya */
    {
        hotelName: 'Mercure Pattaya Ocean Resort',
        hotelLocation: 'Pattaya',
        hotelRoomTypes: ['Superior Room'],
        hotelRoomTypesArabic: ['سوبيريور روم'],
    },
    {
        hotelName: 'Renaissance Pattaya',
        hotelLocation: 'Pattaya',
        hotelRoomTypes: ['Guest Room', ' Guest Room Balcony', 'Guest Room Balcony Sea View'],
        hotelRoomTypesArabic: ['جيست روم', 'جيست روم بلكوني', 'جيست روم بلكوني بإطلالة على البحر'],
    },
    {
        hotelName: 'Avani Pattaya Resort',
        hotelLocation: 'Pattaya',
        hotelRoomTypes: ['Deluxe Garden View', ' Deluxe Garden Plus', 'Deluxe Sea View', 'Deluxe Sea View Plus'],
        hotelRoomTypesArabic: ['ديلوكس بإطلالة على الحديقة', 'ديلوكس بلس بإطلالة على الحديقة', 'ديلوكس بإطلالة على البحر', 'ديلوكس بلس بإطلالة على البحر'],
    },
    {
        hotelName: 'Siam At Siam Hotel Pattaya',
        hotelLocation: 'Pattaya',
        hotelRoomTypes: ['Deluxe Room', ' Deluxe Ocean View', 'Studio Ocean View'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'ديلوكس بإطلالة على المحيط', 'ستوديو بإطلالة على المحيط'],
    },




    /* Chiang Mai */
    {
        hotelName: 'Melia Chiang Mai',
        hotelLocation: 'Chiang Mai',
        hotelRoomTypes: ['Melia Room', 'Premium Room', 'The Level Premium Room'],
        hotelRoomTypesArabic: ['ميليا روم', 'بريميوم روم', 'غرفة ذا ليفل بريميوم'],
    },
    {
        hotelName: 'Arun Khiri Chiang Mai',
        hotelLocation: 'Chiang Mai',
        hotelRoomTypes: ['Superior Room', 'Deluxe with Pool View', 'Grand Deluxe'],
        hotelRoomTypesArabic: ['سوبيريور روم', 'ديلوكس بإطلالة على المسبح', 'جراند ديلوكس'],
    },
    {
        hotelName: 'Novotel Chiang Mai',
        hotelLocation: 'Chiang Mai',
        hotelRoomTypes: ['Superior Balcony', 'Deluxe', 'Deluxe with Terrace', 'Executive', 'Junior Suite with Mountain View'],
        hotelRoomTypesArabic: ['سوبيريور بلكوني', 'ديلوكس روم', 'ديلوكس مع تراس', 'تنفيذي روم', 'جونيور سويت بإطلالة على الجبل'],
    },
    {
        hotelName: 'ibis Chiang Mai',
        hotelLocation: 'Chiang Mai',
        hotelRoomTypes: ['Standard Room'],
        hotelRoomTypesArabic: ['ستاندارد روم'],
    },




    /* Koh Samui */
    {
        hotelName: 'Melia Koh Samui',
        hotelLocation: 'Koh Samui',
        hotelRoomTypes: ['Deluxe Room', 'Premium Room', 'Duplex Boat Suite', 'The Level Pool Access', 'The Level Grand Suite', 'The Level Boat Suite Sea View'],
        hotelRoomTypesArabic: ['ديلوكس روم', 'بريميوم روم', 'دوبلكس بوت سويت', 'ذا ليفل بول اكسس', 'ذا ليفل جراند سويت', 'ذا ليفل بوت سويت بإطلالة على البحر'],
    },
];
