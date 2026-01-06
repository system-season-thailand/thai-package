/* Array to store the hotel room types description for later use */



let allHotelDataArray = [

    /* Phuket */
    {
        hotelName: 'Avista Grande Phuket Karon',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Mountain View', 'Deluxe Pool View', 'Deluxe Family Sea View', 'Premier Sea view', 'Premier Family Sea View', 'Deluxe Suite with Whirlpool Bath Mountain View', 'Deluxe Suite with Whirlpool Bath Seaview', 'Deluxe Suite Pool Access Garden View', 'Deluxe Suite Pool Access Sea View'],
    },
    {
        hotelName: 'Avista Hideaway Phuket Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Garden View', 'Deluxe Pool View', 'Deluxe Family Room', 'Executive Room', 'San Deluxe Suite with Whirlpool Bath', 'San Deluxe Plunge Pool Suite with Whirlpool Bath', 'Sawan Private Plunge Pool Suite'],
    },
    {
        hotelName: 'Diamond Cliff Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Super Deluxe Sea View', 'Grand Jacuzzi Suite', 'Ocean Jacuzzi Suite'],
    },
    {
        hotelName: 'Holiday Inn Express Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Standard Garden View', 'Standard Room', 'Standard Pool View'],
    },
    {
        hotelName: 'Homm Bliss Southbeach Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Sea View', 'Deluxe Sea View', 'One BR Superior Suite Sea View', 'One BR Deluxe Suite Sea View', 'One BR Plunge Pool Suite Sea View'],
    },
    {
        hotelName: 'Indigo Phuket Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Standard City View', 'Standard Garden View', 'Standard Pool View', 'One King Bed Junior Suite'],
    },
    {
        hotelName: 'Kalima Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room (None View)', 'Deluxe Sea View', 'Honeymoon Sea View', 'Grand Deluxe Sea View', 'Romance Room Ocean View', 'Family Sea View', 'Junior Suite Ocean View', 'Double Pool Access', 'Duplex Pool Villa', 'PP Villa One BR'],
    },
    {
        hotelName: 'Keemala Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Clay Pool Cottage', 'Tent Pool Villa', 'Tree Pool House', 'Birds Nest Pool Villa'],
    },
    {
        hotelName: 'Movenpick Myth Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Pool View', 'Deluxe Pool Access'],
    },
    {
        hotelName: 'Movenpick Bangtao Beach Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Residence One BR', 'Seaview Pool Suite One BR', 'Residence Two BR', 'Seaview Pool Suite Two BR', 'Residence Three BR', 'Seaview Jacuzzi Penthouse Three BR', 'Royal Jacuzzi Penthouse Three BR'],
    },
    {
        hotelName: 'Noku Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Studio Loft', 'Private Loft with Whirlpool', 'Tree Villa PP', 'Hill Villa PP'],
    },
    {
        hotelName: 'Novotel Phuket Kata Avista',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Garden View Balcony', 'Superior Pool View Balcony', 'Deluxe Pool View 1 King & 1 Sofa Bed', 'Deluxe Sea View Balcony 1 King & 1 Sofa Bed', 'Family Garden View Balcony 1 King & 1 Queen Bed'],
    },
    {
        hotelName: 'Oceanfront Beach Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Premier Comfy', 'Ocean Room Partial Seaview', 'Grand Ocean Room', 'Ocean Comfy', 'Pool Access Comfy', 'Grand Ocean Suite'],
    },
    {
        hotelName: 'Saii Laguna Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Lagoon View', 'Ocean View Balcony', 'Ocean View Terrace', 'Ocean Front Balcony', 'Club Lagoon View', 'Club Ocean View', 'Club Ocean Front', 'Lagoon View One BR Suite', 'Ocean View One BR Suite', 'Ocean Front One BR Suite'],
    },
    {
        hotelName: 'Sinae Phuket Luxury Hotel',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Studio Pool Villa', 'Studio Ocean View', 'Sinae Sea Sai', 'Sinae Premier Pool Suite', 'Sky Pool Villa', 'Duplex Pool Villa B', 'Sinae Family Two BR Pool Villa'],
    },
    {
        hotelName: 'Sinae Phuket Pool Villa',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Studio Pool Villa', 'Studio Ocean View', 'Sinae Sea Sai', 'Sinae Premier Pool Suite', 'Sky Pool Villa', 'Duplex Pool Villa B', 'Sinae Family Two BR Pool Villa'],
    },
    {
        hotelName: 'Sri Panwa Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['YAYA Pool Suite Ocean View', 'Ocean View Pool Suite West', 'Ocean View Pool Suite East', 'Ocean View Penthouse', 'One BR Family Suite Garden View', 'One BR Pool Villa Garden View', 'One BR Family Suite Partial Ocean View', 'One BR Luxury Residential Pool Villa Ocean View', 'One BR Luxury Pool Villa Ocean View', 'Two BR Family Suite Garden View', 'Two BR Family Suite Ocean View', 'Two BR Pool Villa Ocean View', 'Two BR Luxury Pool Villa Ocean View', 'Three BR Residence Pool Villa Partial Ocean View', 'Three BR Residence Pool Villa Ocean View', 'Four BR Residence Pool Villa Ocean View', 'Four BR Luxury Residence Pool Villa Ocean View', 'Five BR Residence Pool Villa Ocean View'],
    },
    {
        hotelName: 'The Kee Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Deluxe Jacuzzi', 'Deluxe Pool Access'],
    },
    {
        hotelName: 'The Nai Harn Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Ocean View Room', 'Grand Ocean View Room', 'Ocean View Suite', 'Royal Ocean View Suite'],
    },
    {
        hotelName: 'The Naka Island Luxury Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Naka Guest Room', 'One BR Pool Villa Garden View', 'One BR Pool Villa Sea View'],
    },
    {
        hotelName: 'The Naka Hotels Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['One BR Pool Villa Partial Sea View', 'One BR Deluxe Pool Villa Ocean View', 'One BR Villa High Bay', 'One BR Beachfront Villa', 'One BR Villa High Bay Signature'],
    },
    {
        hotelName: 'The Nature Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Deluxe Partial Sea View', 'Deluxe Pool Access', 'Deluxe Private Jacuzzi', 'Junior Suite', 'Grand Suite Two BR'],
    },
    {
        hotelName: 'The SIS Kata Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['SIS On The Hill No View', 'SIS Over The Stella Pool', 'SIS Over The Garden', 'SIS Jacuzzi Pool', 'SIS Over The Sea Partial Seaview', 'SIS Studio', 'The SIS Suite'],
    },
    {
        hotelName: 'Glow Mira Karon Beach',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room City View', 'Deluxe Room Pool View', 'Family Suite'],
    },
    {
        hotelName: 'Dinso Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Premium City View', 'Premium Garden View', 'Premium Pool View', 'One BR Suite Pool View', 'Dino Suite', 'Penthouse Terrace', 'Two BR Family Suite', 'Two BR Suite Garden View', 'Duplex Pool Villa', 'Duplex Pool Villa Sea View'],
    },
    {
        hotelName: 'Grand Mercure Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Pool Access Room', 'Superior Suite Room', 'One BR Pool Villa Room', 'Two BR Pool Villa'],
    },
    {
        hotelName: 'Msocial Hotel Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Social Room', 'Social Cozy Room', 'Social Afterglow Wing with Balcony', 'Stylish Sunkissed Wing with Balcony'],
    },
    {
        hotelName: 'Ayara Kamala Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Ocean View', 'Grand Thai Natural Ocean View', 'Deluxe Pool Access Ocean View', 'Grand Thai with Spa Bath & PP', 'Family Pool Access Two BR Suite', 'Two BR Pool Forest View', 'Grand Pool Villa Ocean View', 'Three BR Villa'],
    },
    {
        hotelName: 'Centara Karon Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior City View', 'Superior Ocean View', 'Deluxe City View', 'Deluxe Pool View', 'Premium Deluxe Pool View', 'Deluxe Family Studio Pool View', 'One BR Garden Villa', 'One BR Pool Villa', 'Two BR Pool Villa', 'Three BR Pool Villa'],
    },
    {
        hotelName: 'Crest Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Partial Sea View', 'Deluxe Sea View', 'Deluxe Pool Access', 'Deluxe Pool Access Sea View', 'Deluxe Pool Villa', 'Premier Pool Villa', 'Family Pool Villa Two BR'],
    },
    {
        hotelName: 'The Royal Paradise Hotel',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Paradise Wing (Low Floor)', 'Deluxe Paradise Wing (High Floor)', 'Premier Deluxe', 'Deluxe Royal Wing Pool View', 'Premier Deluxe Royal Wing Pool View'],
    },
    {
        hotelName: 'Rawayana Central Park Villas',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Two BR Family Deluxe Pool Villa', 'Three BR Grand Deluxe Pool Villa'],
    },
    {
        hotelName: 'Hyatt Regency Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Garden View Room', 'Ocean View Room', 'King Bed Plunge Pool', 'Two BR Family Room', 'Two BR Family Bunk Bed', 'Ocean View Club Access', 'King Bed Terrace Whirlpool', 'Two BR Regency Suite', 'King Bed Hilltop Ocean View Suite'],
    },

    {
        hotelName: 'Namaka Resort Kamala',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Sea View', 'Premier Sea View', 'Villa Sea View'],
    },
    {
        hotelName: 'Dusit Thani Laguna Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Lagoon View', 'Deluxe Sea View', 'Premier Ocean Front', 'Dusit Club Room', 'Landmark Suite Room', 'Two BR Laguna Pool Villa'],
    },
    {
        hotelName: 'Bandara Pool Villas Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Ocean  Pool Villa', 'Panoramic Pool Villa', 'Panoramic Duplex Pool Villa'],
    },
    {
        hotelName: 'Bandara Beach Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Balcony Room'],
    },
    {
        hotelName: 'Andara Resort Villas Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Terrace Suites One BR', 'Terrace Suites Two BR', 'Terrace Suites Three BR', 'Pool Suites One BR', 'Pool Suites Two BR', 'Pool Suites Three BR', 'Pool Suites Four BR', 'Penthouse Pool Suites One BR', 'Penthouse Pool Suites Two BR', 'Penthouse Pool Suites Three BR', 'Luxury Pool Villa Three BR', 'Luxury Pool Villa Four BR', 'Luxury Pool Villa Five BR', 'Luxury Pool Villa Six BR'],
    },
    {
        hotelName: 'Sunsuri Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Superior Family Triple Room', 'Deluxe Room', 'Premium Deluxe Room', 'Grand Deluxe Room', 'Grand Deluxe Family Room', 'Ocean View Family Suite', 'Grand View Pool Villa', 'Ocean View One BR Pool Villa', 'Ocean View Two BR Pool Villa'],
    },
    {
        hotelName: 'Marina Gallery Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Deluxe Sea View', 'Deluxe Pool Access', 'Family Suite'],
    },
    {
        hotelName: 'Mida Grande Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Ocean View', 'Deluxe Ocean View With Jacuzzi', 'Grande Deluxe Ocean View with Plunge Pool', 'Family Suite Two BR', 'Grande Two BR Suite', 'Family Suite Two BR Ocean View', 'Grande Two BR Suite Ocean View', 'Grande Two BR Suite Ocean View With Jacuzzi', 'Grande Two BR Suite Ocean View With Plunge Pool', 'Grande Three BR Suite Ocean View with Jacuzzi ', 'Grande Pool Villa Two BR', 'Grande Pool Villa Three BR'],
    },

    {
        hotelName: 'Katathani Phuket Beach Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Grand Deluxe', 'Pool Access', 'Junior Suite', 'Junior Suite Oceanfront', 'Grand Suite'],
    },
    {
        hotelName: 'The Shore Katathani Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Sea View Pool Villa', 'Sea View Pool Villa Romance', 'Sea View Pool Villa In Love', 'Two BR Pool Villa'],
    },
    {
        hotelName: 'Marina Gallery KACHA Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Deluxe Sea View', 'Deluxe Pool Access', 'Family Suite'],
    },
    {
        hotelName: 'Sugar Marina Art Karon Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Inner', 'Artsy Deluxe', 'Deluxe Pool View', 'Deluxe Pool Access', 'Family Room', 'Quad Pool Access'],
    },
    {
        hotelName: 'Sugar Marina Fashion Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Chic Deluxe Room', 'Deluxe Pool View', 'Deluxe Pool Access'],
    },
    {
        hotelName: 'Sugar Marina SURF Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Deluxe Pool Access'],
    },
    {
        hotelName: 'Sugar Marina POP Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Superior Pool View', 'Deluxe Pool View', 'Superior Pool Access', 'Deluxe Pool Access', 'Family Cozy', 'Family Roomy', 'Family Pool Access', 'Family Biggy', 'Signature QUAD Room', 'Family Two BR Suite'],
    },
    {
        hotelName: 'Sugar Marina Villas Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Room', 'Superior Pool Access', 'Superior Plunge Pool with Jacuzzi', 'Standard Lagoon Villa 2+2', 'Family LAGOON Villa 4', 'One BR LAGOON Suite Villa 2+2', 'Two BR LAGOON Villa 8', 'Two BR LAGOON Suite Villa 4', 'Sol Two BR LAGOON Suite Villa 8'],
    },
    {
        hotelName: 'Sugar Marina Hotel AVIATOR Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Deluxe Pool Access'],
    },
    {
        hotelName: 'Marina MUAYTHAI Ta-iad Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Standard Room', 'Standard Pool View', 'One BR Suite Pool Facing', 'One BR Suite Pool Access'],
    },
    {
        hotelName: 'Amari Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Balcony', 'Superior Ocean Front Balcony', 'Deluxe Ocean Front Balcony', 'One BR Suite Ocean Coral Lounge  ', 'One BR Suite Ocean View Coral Lounge']
    },
    {
        hotelName: 'Anantara Mai Khao Phuket Villas',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Mai Khao Suite', 'Two BR Mai Khao Suite', 'Pool Villa', 'Lagoon Pool Villa', 'Pool Pavilion', 'Two BR Pool Pavilion']
    },
    {
        hotelName: 'Tantawan Villa Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['One BR Pool Villa', 'One BR Pool Villa Sea View', 'Two BR Pool Villa', 'Three BR Pool Villa']
    },
    {
        hotelName: 'Anantara Layan Phuket Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Layan Suite', 'Deluxe Pool Villa', 'Sala Pool Villa', 'Two BR Sea View Residence', 'Three BR Sea View Residence']
    },
    {
        hotelName: 'Wyndham Phuket Kalim Bay',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Pool Suite', 'Villa', 'Suite', 'Pool Suite Ocean View', 'Deluxe Room'],
    },
    {
        hotelName: 'Casabay Pool Villas',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Three BR PP Villa', 'Casablue Four BR PP Villa', 'Four BR PP Villa', 'Four BR PP Villa Partial Sea View', 'Six BR PP Villa Partial Sea View'],
    },
    {
        hotelName: 'Phuket Emerald Beach Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Pool View', 'Family Pool View', 'Family Pool Access', 'Grand Family Pool View (Two BR connecting)'],
    },
    {
        hotelName: 'Radisson Red Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Standard Room', ' Superior Room', 'Deluxe Room', 'Family Room'],
    },
    {
        hotelName: 'Tribe Phuket Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Tribe Essential', 'Tribe Room', 'Tribe Essential Pool View', 'Tribe Essential High Floor', 'Tribe Extra', 'Tribe Max'],
    },
    {
        hotelName: 'Ozo Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Room'],
    },
    {
        hotelName: 'Panwaburi Beachfront Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Tree', 'Deluxe Facade', 'Deluxe Pool View', 'Deluxe Pool Access Partial Pool', 'Deluxe Pool Access Pool View'],
    },
    {
        hotelName: 'Paresa Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Ocean Pool Suite', 'Spa Pool Suite', 'Cliff Pool Villa', 'Two BR Ocean Pool Suite', 'Grand Residence Pool Villa'],
    },
    {
        hotelName: 'The Charm Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Junior Suite', 'Deluxe Pool Access', 'Junior Suite Pool Access', 'Executive Suite', 'Family One BR Suite', 'Family Two BR Suite'],
    },
    {
        hotelName: 'Barcelo Coconut Island',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Lux Suite', 'Outdoor Jacuzzi Suite', 'Lux Jacuzzi Suite', 'Lux One BR Garden View Pool Villa', 'Lux One BR Sea View Pool Villa', 'Lux Two BR Garden View Pool Villa', 'Lux Two BR Sea View Pool Villa', 'Lux Two BR Grand Sea View Pool Villa', 'Two BR Grand Beachfront Pool Villa', 'Lux Two BR Grand Beachfront Pool Villa', 'Lux Three BR Grand Sea View Pool Villa', 'Three BR Grand Beachfront Pool Villa', 'Lux Three BR Grand Beachfront Pool Villa', 'Four BR Grand Beachfront Pool Villa', 'Lux Four BR Grand Beachfront Pool Villa', 'Five BR Grand Beachfront Pool Villa', 'Lux Five BR Grand Beachfront Pool Villa'],
    },
    {
        hotelName: 'Seabed Grand Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Garden View', 'Deluxe Pool View Room', 'Deluxe Pool Access Room', 'Deluxe Triple Room', 'Family Room'],
    },
    {
        hotelName: 'The Westin Siray Bay Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Sea View', 'Deluxe Sea View Pool Access', 'Deluxe Sea View Suite', 'Sala Pool Villa Sea View'],
    },
    {
        hotelName: 'Baba Beach Club Natai',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Baba Suite', 'Baba Suite Ocean View', 'Baba Pool Suite', 'One BR Luxury Pool Villa', 'Gabana Villa', 'Two BR Luxury Pool Villa', 'Five BR Beatchfront Pool Villa'],
    },
    {
        hotelName: 'My Beach Resort Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Pool View', 'Premier Pool Access', 'Premier Seaview', 'Family Seaview', 'Premier Seaview Studio', 'Premier Beachfront', 'Private Pool Beachfront'],
    },
    {
        hotelName: 'Pamookkoo Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool', 'Deluxe Premier', 'Deluxe Premier Pool', 'Family Room 4 Pax'],
    },
    {
        hotelName: 'Phuket Orchid Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Pool View', 'Family Triple', 'Pool Access', 'Family Bunkbed', 'Family Double King'],
    },
    {
        hotelName: 'Hotel Clover Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Balcony', 'Premier Balcony', 'Deluxe Studio', 'Deluxe Family', 'Deluxe Jacuzzi'],
    },
    {
        hotelName: 'Splash Beach Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Deluxe Twin no Balcony', 'Deluxe Twin Balcony', 'Deluxe King Balcony', 'Executive King No Balcony', 'Executive King Balcony', 'Deluxe Double no Balcony', 'Executive Double No Balcony', 'Deluxe Double with Balcony', 'Executive Double with Balcony', 'One BR Family Suite no Balcony', 'Executive One BR Family Suite No Balcony', 'One BR Family Suite Balcony', 'Executive One BR Family Suite Balcony', 'One BR Suite with Kitchen no Balcony', 'Executive One BR Suite No Balcony', 'One BR Suite with Kitchen with Balcony', 'Tow BR Suite Kitchen with Balcony', 'One BR Residence no Balcony', 'One BR Residence Balcony', 'One BR Residence Kitchen and Balcony', 'Two BR Residence Balcony', 'Two BR Residence with Kitchen and Balcony', 'Three BR Residence Balcony', 'Two BR Penthouse Pool Suite', 'Three BR Penthouse Pool Suite', 'Three BR Penthouse Pool Suite Kitchen', 'Four BR Penthouse Pool Suite Kitchen', 'Two BR Villa Pool'],
    },
    {
        hotelName: 'Andaman Beach Hotel Phuket',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Classic Balcony Garden View', 'Superior Balcony Pool View', 'Deluxe Balcony Sea View', 'Junior Suite Balcony Pool View', 'Suite Balcony Sea View'],
    },
    {
        hotelName: 'The Aim Patong',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Room'],
    },
    {
        hotelName: 'Chanalai Garden Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Garden View', 'Deluxe Seaview'],
    },
    {
        hotelName: 'Chanalai Flora Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Room', 'Deluxe Pool View', 'Grand Deluxe Room'],
    },
    {
        hotelName: 'Chanalai Romantica Resort',
        hotelLocation: 'Phuket',
        hotelRoomTypes: ['Superior Pool View', 'Deluxe Pool View'],
    },







    /* Bangkok */
    {
        hotelName: 'lyf Sukhumvit 8 Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['One of A Kind'],
    },
    {
        hotelName: 'Oakwood Studios Sukhumvit',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Superior Room', 'Studio Deluxe', 'Studio Executive', 'Studio Premier'],
    },
    {
        hotelName: 'Sindhorn Midtown Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Standard Room', 'Premium Room', 'Sky Suite', 'One BR Suite', 'Two BR Suite', 'Two BR Corner Suite', 'Studio', 'One BR Urban Studio'],
    },
    {
        hotelName: 'Ascott Thonglor Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Studio Executive', 'One BR Premier ', 'One BR Executive', 'Two BR Executive', 'Three BR Executive'],
    },
    {
        hotelName: 'Valia Hotel Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Premier Room', 'Deluxe Suite', 'Two Deluxe Suites Connected', 'Family Suite', 'Junior Suite', 'Executive Suite', 'Valia Suite', 'Deluxe Suite Club'],
    },
    {
        hotelName: 'Hilton Garden Inn Bangkok Silom',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Guest Room', 'Deluxe Room'],
    },
    {
        hotelName: 'Hotel Indigo Bangkok Wireless Road',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Family Room', 'Standard Room', 'Standard Balcony Room', 'Premium City View Balcony'],
    },
    {
        hotelName: 'Bandara Silom Suites Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['One BR Suite', 'Two BR Suite'],
    },
    {
        hotelName: 'Amari Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Grand Deluxe', 'Premier Room', 'Club Premier', 'Club One BR Corner Suite', 'Club One BR Executive Suite', 'Club Two BR Corner Suite'],
    },
    {
        hotelName: 'Ascott Embassy Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Studio Executive', 'One BR Premier', 'Two BR Executive', 'Two BR Premier', 'Three BR Executive '],
    },
    {
        hotelName: 'Nysa Hotel Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Executive Room', 'Premier Pool View', 'One BR Suite Pool View', 'One BR Residence Pool Suite', 'Deluxe Connecting Deluxe', 'Premier Pool View Connecting Premier Pool View', 'One BR Residence Pool Suite Connecting Premier Pool View'],
    },
    {
        hotelName: 'Innside By Melia Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['The Inside Room', 'The Inside Corner Room', 'The Townhouse', 'The Townhouse Two BR'],
    },
    {
        hotelName: 'Tribe Living Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['TRIBE Essential', 'TRIBE Extra', 'TRIBE Max', 'TRIBE Studio'],
    },
    {
        hotelName: 'Siam Kempinski Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Balcony Room', 'Premier Room', 'Executive Room', 'Executive Balcony Room', 'Family Suite', 'Executive Suite', 'Duplex Cabana'],
    },
    {
        hotelName: 'Lancaster Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe King', 'Deluxe Twin', 'Family Two BR (2 Adult & 1 Child)', 'Family Two BR (2 Adult & 2 Child)', 'Executive Suite King', 'Executive Suite Twin', 'Executive Apartment King', 'Executive Apartment Twin', 'Premium Suite King', 'Premium Suite Twin', 'Premium Apartment King', 'Premium Apartment Twin', 'Sky Garden Suite King', 'Sky Garden Suite Twin', 'Siam Suite King', 'Siam Suite Twin'],
    },
    {
        hotelName: 'Mercure Bangkok Siam',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Superior Room', 'Deluxe Room', 'Suite Deluxe Room'],
    },
    {
        hotelName: 'Wyndham Bangkok Queen Centre',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Studio King', 'Studio Executive', 'Two BR Suite'],
    },
    {
        hotelName: 'Wyndham Garden Bangkok 42',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['One BR Suite', 'One BR Duplex Suite', 'Two BR Suite'],
    },
    {
        hotelName: 'Ramada Plaza Bangkok 48',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Premier Room', 'One BR Premier Suite Queen'],
    },
    {
        hotelName: 'Ramada Wyndham Bangkok 87',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Studio Duplex Queen', 'Studio Executive Duplex'],
    },
    {
        hotelName: 'Sofitel Bangkok Sukhumvit',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Luxury Room', 'Magnifique Room', 'Luxury Club Millesime', 'Junior Suite', 'Prestige Suite', '2x Luxury Room', 'Two BR Suite (127 sqm)', 'Two BR Suite (210 sqm)', 'Three BR Suite (139 sqm)'],
    },
    {
        hotelName: 'Pipa Bangkok Sukhumvit 11',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Grand Deluxe', 'Executive with Jacuzzi', 'Premier Family', 'Family Connecting'],
    },
    {
        hotelName: 'Siam At Siam Design Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Corner Room', 'Deluxe Connecting', 'Studio Room'],
    },
    {
        hotelName: 'The Berkeley Pratunam',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Premier Room', 'Premier Triple Room', 'Premier Family Room', 'Premier Family Bunk Bed', 'Luxury Room', 'Luxury Quadruple Suite'],
    },
    {
        hotelName: 'Thaya Hotel Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Thaya Executive Suite'],
    },
    {
        hotelName: 'Jasmine 59 Hotel',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Premium', 'Junior Suite One BR', 'Triple Two BR Suite', 'Exclusive Two BR Suite'],
    },
    {
        hotelName: 'Jasmine Resort Bangkok',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Jasmine Deluxe', 'Premier Conner', 'Sky Bay Suite One BR', 'Spa Residential Suite One BR', 'Pool Residential Suite One BR'],
    },
    {
        hotelName: 'Oakwood Sukhumvit Thonglor',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Studio Deluxe', 'One BR Deluxe', 'Two BR Deluxe', 'Three BR Deluxe'],
    },
    {
        hotelName: 'Grande Centre Point Ratchadamri',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Grand Deluxe', 'Grand Suite'],
    },
    {
        hotelName: 'Jasmine Grande Residence',
        hotelLocation: 'Bangkok',
        hotelRoomTypes: ['Deluxe Room', 'Junior Suite One BR', 'Triple Suite Two BR', 'Family Suite Two BR', 'Grande Suite Three BR'],
    },







    /* Krabi */
    {
        hotelName: 'Avani Ao Nang Krabi',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Avani Room', 'Avani Superior Room', 'Avani Sea View Room', 'Avani Villa', 'Avani Superior Sea View Room', 'Avani Family Suite', 'Avani Pool Villa'],
    },
    {
        hotelName: 'Adam Krabi',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Deluxe Pool Suite Garden View', 'Deluxe Pool Suite Mountain View', 'Deluxe Pool Suite Sea View'],
    },
    {
        hotelName: 'Panan Krabi Resort',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Deluxe Cliff View', 'Deluxe Pool View', 'Deluxe Sea View'],
    },
    {
        hotelName: 'Sea Seeker Krabi Resort',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Deluxe Mountain View', 'Deluxe Limestone Cliff View', 'Deluxe Pool View', 'Deluxe Sea View'],
    },
    {
        hotelName: 'Sugar Marina Hotel CLIFFHANGER Krabi',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Superior Room', 'Deluxe Room', 'Deluxe Cliff View', 'Superior Pool Access', 'Deluxe Pool Access', 'Deluxe Triple', 'Deluxe Queens'],
    },
    {
        hotelName: 'Marina Express Fisherman Aonang Krabi',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Deluxe Room', 'Deluxe Cliff View'],
    },
    {
        hotelName: 'Ban Sainai Resort Krabi',
        hotelLocation: 'Krabi',
        hotelRoomTypes: ['Sainai Cottages', 'Coconut Cottages', 'Pano Cliff View Cottage', 'Triplet Premier Cottages', 'Sainai Forest', 'Grand Pond View Cottages', 'Family Cottage', 'Tropical Family Cottages', 'Sainai Pool Villa'],
    },





    /* Pattaya */
    {
        hotelName: 'Mercure Pattaya Ocean Resort',
        hotelLocation: 'Pattaya',
        hotelRoomTypes: ['Superior Room'],
    },
    {
        hotelName: 'Renaissance Pattaya',
        hotelLocation: 'Pattaya',
        hotelRoomTypes: ['Guest Room', ' Guest Room Balcony', 'Guest Room Balcony Sea View'],
    },
    {
        hotelName: 'Avani Pattaya Resort',
        hotelLocation: 'Pattaya',
        hotelRoomTypes: ['Deluxe Garden View', ' Deluxe Garden Plus', 'Deluxe Sea View', 'Deluxe Sea View Plus'],
    },







    /* Chiang Mai */
    {
        hotelName: 'Melia Chiang Mai',
        hotelLocation: 'Chiang Mai',
        hotelRoomTypes: ['Melia Room', 'Premium Room', 'The Level Premium Room'],
    },
    {
        hotelName: 'Arun Khiri Chiang Mai',
        hotelLocation: 'Chiang Mai',
        hotelRoomTypes: ['Superior Room', 'Deluxe with Pool View', 'Grand Deluxe'],
    },
    {
        hotelName: 'Novotel Chiang Mai',
        hotelLocation: 'Chiang Mai',
        hotelRoomTypes: ['Superior Balcony', 'Deluxe', 'Deluxe with Terrace', 'Executive', 'Junior Suite with Mountain View'],
    },








    /* Koh Samui */
    {
        hotelName: 'Melia Koh Samui',
        hotelLocation: 'Koh Samui',
        hotelRoomTypes: ['Deluxe Room', 'Premium Room', 'Duplex Boat Suite', 'The Level Pool Access', 'The Level Grand Suite', 'The Level Boat Suite Sea View'],
    },
];
