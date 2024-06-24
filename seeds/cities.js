
const camps = [
    {
        campName: "Himalayan Retreat",
        city: "Manali",
        latitude: 32.2396,
        longitude: 77.1887,
        state: "Himachal Pradesh"
    },
    {
        campName: "Jungle Camp",
        city: "Jim Corbett",
        latitude: 29.5249,
        longitude: 78.7758,
        state: "Uttarakhand"
    },
    {
        campName: "Beachside Bliss",
        city: "Goa",
        latitude: 15.2993,
        longitude: 74.124,
        state: "Goa"
    },
    {
        campName: "Desert Oasis",
        city: "Jaisalmer",
        latitude: 26.9155,
        longitude: 70.9083,
        state: "Rajasthan"
    },
    {
        campName: "Misty Mountains",
        city: "Darjeeling",
        latitude: 27.036,
        longitude: 88.2627,
        state: "West Bengal"
    },
    {
        campName: "Riverbank Retreat",
        city: "Rishikesh",
        latitude: 30.086,
        longitude: 78.2676,
        state: "Uttarakhand"
    },
    {
        campName: "Coastal Cove",
        city: "Varkala",
        latitude: 8.7356,
        longitude: 76.7036,
        state: "Kerala"
    },
    {
        campName: "Hilltop Haven",
        city: "Shimla",
        latitude: 31.1048,
        longitude: 77.1734,
        state: "Himachal Pradesh"
    },
    {
        campName: "Wilderness Retreat",
        city: "Ranthambore",
        latitude: 26.0173,
        longitude: 76.503,
        state: "Rajasthan"
    },
    {
        campName: "Lakeview Lodge",
        city: "Nainital",
        latitude: 29.3806,
        longitude: 79.4637,
        state: "Uttarakhand"
    },
    {
        campName: "Serenity Spot",
        city: "Munnar",
        latitude: 10.0889,
        longitude: 77.0595,
        state: "Kerala"
    },
    {
        campName: "Forest Hideout",
        city: "Thekkady",
        latitude: 9.6015,
        longitude: 77.1547,
        state: "Kerala"
    },
    {
        campName: "Lakeside Retreat",
        city: "Udaipur",
        latitude: 24.5854,
        longitude: 73.7125,
        state: "Rajasthan"
    },
    {
        campName: "Mountain View",
        city: "Leh",
        latitude: 34.1526,
        longitude: 77.577,
        state: "Ladakh"
    },
    {
        campName: "Beach Camp",
        city: "Gokarna",
        latitude: 14.5485,
        longitude: 74.3189,
        state: "Karnataka"
    },
    {
        campName: "Countryside Retreat",
        city: "Coorg",
        latitude: 12.3375,
        longitude: 75.8067,
        state: "Karnataka"
    },
    {
        campName: "Peaceful Paradise",
        city: "Pondicherry",
        latitude: 11.9139,
        longitude: 79.8145,
        state: "Puducherry"
    },
    {
        campName: "Hill Station Hideaway",
        city: "Matheran",
        latitude: 18.9865,
        longitude: 73.2715,
        state: "Maharashtra"
    },
    {
        campName: "River Retreat",
        city: "Alleppey",
        latitude: 9.4981,
        longitude: 76.3388,
        state: "Kerala"
    },
    {
        campName: "Skyview Camp",
        city: "Auli",
        latitude: 30.3352,
        longitude: 79.3705,
        state: "Uttarakhand"
    },
    {
        campName: "Nature's Nest",
        city: "Dharamshala",
        latitude: 32.219,
        longitude: 76.3234,
        state: "Himachal Pradesh"
    },
    {
        campName: "Forest Escapade",
        city: "Kanha National Park",
        latitude: 22.3352,
        longitude: 80.6292,
        state: "Madhya Pradesh"
    },
    {
        campName: "Riverside Retreat",
        city: "Rishikesh",
        latitude: 30.1033,
        longitude: 78.2916,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Magic",
        city: "Manali",
        latitude: 32.2396,
        longitude: 77.1887,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley View",
        city: "Valley of Flowers",
        latitude: 30.7264,
        longitude: 79.6632,
        state: "Uttarakhand"
    },
    {
        campName: "Beach Retreat",
        city: "Gokarna",
        latitude: 14.5467,
        longitude: 74.3181,
        state: "Karnataka"
    },
    {
        campName: "Forest Camp",
        city: "Bandipur National Park",
        latitude: 11.73,
        longitude: 76.59,
        state: "Karnataka"
    },
    {
        campName: "Hilltop Haven",
        city: "Mount Abu",
        latitude: 24.5928,
        longitude: 72.7156,
        state: "Rajasthan"
    },
    {
        campName: "Lake Camp",
        city: "Pangong Lake",
        latitude: 33.7496,
        longitude: 78.5536,
        state: "Ladakh"
    },
    {
        campName: "River Camp",
        city: "Kali River",
        latitude: 15.1047,
        longitude: 74.6729,
        state: "Karnataka"
    },
    {
        campName: "Desert Camp",
        city: "Pushkar",
        latitude: 26.4925,
        longitude: 74.5528,
        state: "Rajasthan"
    },
    {
        campName: "Mountain Retreat",
        city: "Kasol",
        latitude: 32.009,
        longitude: 77.3142,
        state: "Himachal Pradesh"
    },
    {
        campName: "Beachside Camp",
        city: "Andaman Islands",
        latitude: 11.7401,
        longitude: 92.6586,
        state: "Andaman and Nicobar Islands"
    },
    {
        campName: "Forest Getaway",
        city: "Gir National Park",
        latitude: 21.6429,
        longitude: 70.6879,
        state: "Gujarat"
    },
    {
        campName: "Lake View",
        city: "Dal Lake",
        latitude: 34.0837,
        longitude: 74.7973,
        state: "Jammu and Kashmir"
    },
    {
        campName: "Hillside Camp",
        city: "Ladakh",
        latitude: 34.1526,
        longitude: 77.577,
        state: "Ladakh"
    },
    {
        campName: "River Valley Camp",
        city: "Tirthan Valley",
        latitude: 31.6839,
        longitude: 77.295,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Valley",
        city: "Gulmarg",
        latitude: 34.0484,
        longitude: 74.383,
        state: "Jammu and Kashmir"
    },
    {
        campName: "Lake Resort",
        city: "Pichola Lake",
        latitude: 24.5788,
        longitude: 73.6791,
        state: "Rajasthan"
    },
    {
        campName: "Beachside Paradise",
        city: "Varkala",
        latitude: 8.7356,
        longitude: 76.7036,
        state: "Kerala"
    },
    {
        campName: "Riverbank Camp",
        city: "Bhagirathi River",
        latitude: 30.1433,
        longitude: 78.7389,
        state: "Uttarakhand"
    },
    {
        campName: "Hilltop Retreat",
        city: "Chopta",
        latitude: 30.4112,
        longitude: 79.2847,
        state: "Uttarakhand"
    },
    {
        campName: "Forest Paradise",
        city

: "Silent Valley National Park",
        latitude: 11.1252,
        longitude: 76.4509,
        state: "Kerala"
    },
    {
        campName: "Riverfront Camp",
        city: "Kaveri River",
        latitude: 12.4371,
        longitude: 76.6863,
        state: "Karnataka"
    },
    {
        campName: "Mountain Lodge",
        city: "Chail",
        latitude: 30.9658,
        longitude: 76.8047,
        state: "Himachal Pradesh"
    },
    {
        campName: "Lakefront Camp",
        city: "Pookode Lake",
        latitude: 11.6135,
        longitude: 76.0714,
        state: "Kerala"
    },
    {
        campName: "Beach Resort",
        city: "Kovalam",
        latitude: 8.4004,
        longitude: 76.9784,
        state: "Kerala"
    },
    {
        campName: "Riverside Paradise",
        city: "Teesta River",
        latitude: 27.1898,
        longitude: 88.5939,
        state: "Sikkim"
    },
    {
        campName: "Mountain Paradise",
        city: "Pahalgam",
        latitude: 34.0236,
        longitude: 75.325,
        state: "Jammu and Kashmir"
    },
    {
        campName: "Lake Side Camp",
        city: "Chilika Lake",
        latitude: 19.7161,
        longitude: 85.3506,
        state: "Odisha"
    },
    {
        campName: "Hillside Retreat",
        city: "Coonoor",
        latitude: 11.3542,
        longitude: 76.7969,
        state: "Tamil Nadu"
    },
    {
        campName: "River Bend Camp",
        city: "Brahmaputra River",
        latitude: 26.1776,
        longitude: 91.762,
        state: "Assam"
    },
    {
        campName: "Mountain Ridge Camp",
        city: "Chandratal Lake",
        latitude: 32.4597,
        longitude: 77.6149,
        state: "Himachal Pradesh"
    },
    {
        campName: "Beach Cove Camp",
        city: "Netrani Island",
        latitude: 14.0383,
        longitude: 74.3295,
        state: "Karnataka"
    },
    {
        campName: "Forest Canopy Camp",
        city: "Dudhwa National Park",
        latitude: 28.5392,
        longitude: 80.5527,
        state: "Uttar Pradesh"
    },
    {
        campName: "Lakefront Resort",
        city: "Kumarakom",
        latitude: 9.6194,
        longitude: 76.4346,
        state: "Kerala"
    },
    {
        campName: "River Valley Retreat",
        city: "Parvati Valley",
        latitude: 32.0022,
        longitude: 77.2998,
        state: "Himachal Pradesh"
    },
    {
        campName: "Hilltop Lodge",
        city: "Mount Abu",
        latitude: 24.5935,
        longitude: 72.7156,
        state: "Rajasthan"
    },
    {
        campName: "Lake Side Resort",
        city: "Kumarakom",
        latitude: 9.6167,
        longitude: 76.4333,
        state: "Kerala"
    },
    {
        campName: "Beach Hideaway",
        city: "Marari Beach",
        latitude: 9.6091,
        longitude: 76.2947,
        state: "Kerala"
    },
    {
        campName: "Forest Retreat",
        city: "Kanha National Park",
        latitude: 22.3351,
        longitude: 80.6294,
        state: "Madhya Pradesh"
    },
    {
        campName: "Riverside Sanctuary",
        city: "Alaknanda River",
        latitude: 30.2117,
        longitude: 79.5432,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Haven",
        city: "Spiti Valley",
        latitude: 32.3195,
        longitude: 78.3605,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley Retreat",
        city: "Gangtok",
        latitude: 27.3314,
        longitude: 88.6138,
        state: "Sikkim"
    },
    {
        campName: "Beachside Haven",
        city: "Pondicherry",
        latitude: 11.9139,
        longitude: 79.8145,
        state: "Puducherry"
    },
    {
        campName: "Forest Edge Camp",
        city: "Kaziranga National Park",
        latitude: 26.666,
        longitude: 93.3265,
        state: "Assam"
    },
    {
        campName: "Lakeside Paradise",
        city: "Wular Lake",
        latitude: 34.3091,
        longitude: 74.3763,
        state: "Jammu and Kashmir"
    },
    {
        campName: "Hilltop Resort",
        city: "Lansdowne",
        latitude: 29.8368,
        longitude: 78.6873,
        state: "Uttarakhand"
    },
    {
        campName: "River View",
        city: "Kabini River",
        latitude: 12.2258,
        longitude: 76.2926,
        state: "Karnataka"
    },
    {
        campName: "Mountain Escape",
        city: "Auli",
        latitude: 30.5336,
        longitude: 79.5732,
        state: "Uttarakhand"
    },
    {
        campName: "Beachside Escape",
        city: "Ganpatipule",
        latitude: 17.1673,
        longitude: 73.265,
        state: "Maharashtra"
    },
    {
        campName: "Forest Ridge Camp",
        city: "Ranthambore",
        latitude: 26.016,
        longitude: 76.501,
        state: "Rajasthan"
    },
    {
        campName: "River Bend",
        city: "Yamuna River",
        latitude: 31.0367,
        longitude: 77.1145,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Peak",
        city: "Nanda Devi",
        latitude: 30.4105,
        longitude: 79.9172,
        state: "Uttarakhand"
    },
    {
        campName: "Lake View Camp",
        city: "Loktak Lake",
        latitude: 24.5044,
        longitude: 93.7815,
        state: "Manipur"
    },
    {
        campName: "Hillside Haven",
        city: "Lachen",
        latitude: 27.7174,
        longitude: 88.614,
        state: "Sikkim"
    },
    {
        campName: "Riverfront Lodge",
        city: "Beas River",
        latitude: 31.9522,
        longitude: 77.1091,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Oasis",
        city: "McLeod Ganj",
        latitude: 32.2426,
        longitude: 76.3214,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley Hideout",
        city: "Hemis",
        latitude: 34.1631,
        longitude: 77.6151,
        state: "Ladakh"
    },
    {
        campName: "Beachside Lodge",
        city: "Murudeshwar",
        latitude: 14.0939,
        longitude: 74.486,
        state: "Karnataka"
    },
    {
        campName: "Forest Hill Camp",
        city: "Chitwan National Park",
        latitude: 27.5306,
        longitude: 84.5135,
        state: "Nepal"
    },
    {
        campName: "Lake Resort",
        city: "Naukuchiatal",
        latitude: 29.3963,
        longitude: 79.4804,
        state: "Uttarakhand"
    },
    {
        campName: "Riverside Retreat",
        city: "Kosi River",
        latitude: 29.4391,
        longitude: 79.3154,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Ridge",
        city: "Gangotri",
        latitude: 30.9888,
        longitude: 78.9319,
        state: "Uttarakhand"
    },
    {
        campName: "Valley View Lodge",
        city: "Ziro Valley",
        latitude: 27.583,
        longitude: 93.8264,
        state:

 "Arunachal Pradesh"
    },
    {
        campName: "Beachfront Resort",
        city: "Mahabalipuram",
        latitude: 12.6265,
        longitude: 80.192,
        state: "Tamil Nadu"
    },
    {
        campName: "Forest Hideaway",
        city: "Bandhavgarh National Park",
        latitude: 23.7427,
        longitude: 81.0351,
        state: "Madhya Pradesh"
    },
    {
        campName: "Lakefront Retreat",
        city: "Panchgani",
        latitude: 17.9239,
        longitude: 73.7927,
        state: "Maharashtra"
    },
    {
        campName: "Riverbank Lodge",
        city: "Narmada River",
        latitude: 21.9083,
        longitude: 74.502,
        state: "Madhya Pradesh"
    },
    {
        campName: "Mountain View",
        city: "Kanchenjunga",
        latitude: 27.7024,
        longitude: 88.1462,
        state: "Sikkim"
    },
    {
        campName: "Lake Paradise",
        city: "Chilika Lake",
        latitude: 19.8081,
        longitude: 85.4715,
        state: "Odisha"
    },
    {
        campName: "Hillside Resort",
        city: "Mount Harriet",
        latitude: 11.6794,
        longitude: 92.7203,
        state: "Andaman and Nicobar Islands"
    },
    {
        campName: "Riverfront Lodge",
        city: "Teesta River",
        latitude: 26.5945,
        longitude: 88.0416,
        state: "Sikkim"
    },
    {
        campName: "Mountain Retreat",
        city: "Kalimpong",
        latitude: 27.0717,
        longitude: 88.4727,
        state: "West Bengal"
    },
    {
        campName: "Valley Camp",
        city: "Lachung",
        latitude: 27.7251,
        longitude: 88.6251,
        state: "Sikkim"
    },
    {
        campName: "Beachside Lodge",
        city: "Vengurla",
        latitude: 15.8648,
        longitude: 73.6294,
        state: "Maharashtra"
    },
    {
        campName: "Forest Resort",
        city: "Kaziranga National Park",
        latitude: 26.641,
        longitude: 93.3615,
        state: "Assam"
    },
    {
        campName: "Lakeside Haven",
        city: "Nainital",
        latitude: 29.3807,
        longitude: 79.4637,
        state: "Uttarakhand"
    },
    {
        campName: "Hilltop Haven",
        city: "Pelling",
        latitude: 27.3255,
        longitude: 88.2396,
        state: "Sikkim"
    },
    {
        campName: "Lakeview Lodge",
        city: "Sattal",
        latitude: 29.3397,
        longitude: 79.5083,
        state: "Uttarakhand"
    },
    {
        campName: "Riverside Paradise",
        city: "Teesta River",
        latitude: 27.0478,
        longitude: 88.4726,
        state: "Sikkim"
    },
    {
        campName: "Mountain Escape",
        city: "Lachung",
        latitude: 27.7044,
        longitude: 88.6389,
        state: "Sikkim"
    },
    {
        campName: "Beach Retreat",
        city: "Tarkarli",
        latitude: 16.0082,
        longitude: 73.3265,
        state: "Maharashtra"
    },
    {
        campName: "Forest Escape",
        city: "Kudremukh National Park",
        latitude: 13.1542,
        longitude: 75.1636,
        state: "Karnataka"
    },
    {
        campName: "Lakefront Resort",
        city: "Chilika Lake",
        latitude: 19.8005,
        longitude: 85.4808,
        state: "Odisha"
    },
    {
        campName: "Riverside Haven",
        city: "Ganges River",
        latitude: 25.3176,
        longitude: 83.006,
        state: "Uttar Pradesh"
    },
    {
        campName: "Mountain View Camp",
        city: "Gangotri",
        latitude: 30.9869,
        longitude: 78.9318,
        state: "Uttarakhand"
    },
    {
        campName: "Valley Retreat",
        city: "Ziro Valley",
        latitude: 27.5757,
        longitude: 93.8261,
        state: "Arunachal Pradesh"
    },
    {
        campName: "Beachside Paradise",
        city: "Devbagh Beach",
        latitude: 14.57,
        longitude: 74.3251,
        state: "Karnataka"
    },
    {
        campName: "Forest Lodge",
        city: "Sundarbans National Park",
        latitude: 21.9451,
        longitude: 88.3697,
        state: "West Bengal"
    },
    {
        campName: "Lakeside Retreat",
        city: "Loktak Lake",
        latitude: 24.4709,
        longitude: 93.9533,
        state: "Manipur"
    },
    {
        campName: "Hilltop Retreat",
        city: "Lachen",
        latitude: 27.7144,
        longitude: 88.6171,
        state: "Sikkim"
    },
    {
        campName: "Riverfront Camp",
        city: "Bhagirathi River",
        latitude: 30.1435,
        longitude: 78.7385,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Haven",
        city: "Spiti Valley",
        latitude: 32.2511,
        longitude: 78.0648,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley View Lodge",
        city: "Dzukou Valley",
        latitude: 25.5524,
        longitude: 94.1691,
        state: "Nagaland"
    },
    {
        campName: "Beach Resort",
        city: "Varkala",
        latitude: 8.7355,
        longitude: 76.7032,
        state: "Kerala"
    },
    {
        campName: "Forest Camp",
        city: "Kanha National Park",
        latitude: 22.353,
        longitude: 80.6724,
        state: "Madhya Pradesh"
    },
    {
        campName: "Lakeside Haven",
        city: "Panchgani",
        latitude: 17.9179,
        longitude: 73.7935,
        state: "Maharashtra"
    },
    {
        campName: "Hilltop Resort",
        city: "Lansdowne",
        latitude: 29.8344,
        longitude: 78.6818,
        state: "Uttarakhand"
    },
    {
        campName: "River View",
        city: "Kabini River",
        latitude: 12.2266,
        longitude: 76.2921,
        state: "Karnataka"
    },
    {
        campName: "Mountain Escape",
        city: "Auli",
        latitude: 30.5229,
        longitude: 79.4715,
        state: "Uttarakhand"
    },
    {
        campName: "Beachside Escape",
        city: "Ganpatipule",
        latitude: 17.168,
        longitude: 73.2661,
        state: "Maharashtra"
    },
    {
        campName: "Forest Ridge Camp",
        city: "Ranthambore",
        latitude: 26.0173,
        longitude: 76.5027,
        state: "Rajasthan"
    },
    {
        campName: "River Bend",
        city: "Yamuna River",
        latitude: 31.0367,
        longitude: 77.1145,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Peak",
        city: "Nanda Devi",
        latitude: 30.4111,
        longitude: 79.9171,
        state: "Uttarakhand"
    },
    {
        campName: "Lake View Camp",
        city: "Loktak Lake",
        latitude: 24.5043,
        longitude: 93.7813,
        state: "Manipur"
    },
    {
        campName: "Hillside Haven",
        city: "Lachen",
        latitude: 27.7146,
        longitude: 88.6142,
        state: "Sikkim"
    },
    {
        campName: "Riverfront Lodge",
        city: "Beas River",
        latitude

: 31.9514,
        longitude: 77.1084,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Oasis",
        city: "McLeod Ganj",
        latitude: 32.2427,
        longitude: 76.3211,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley Hideout",
        city: "Hemis",
        latitude: 34.1631,
        longitude: 77.6151,
        state: "Ladakh"
    },
    {
        campName: "Beachside Lodge",
        city: "Murudeshwar",
        latitude: 14.0937,
        longitude: 74.4858,
        state: "Karnataka"
    },
    {
        campName: "Forest Hill Camp",
        city: "Chitwan National Park",
        latitude: 27.5278,
        longitude: 84.5142,
        state: "Nepal"
    },
    {
        campName: "Lake Resort",
        city: "Naukuchiatal",
        latitude: 29.3964,
        longitude: 79.4805,
        state: "Uttarakhand"
    },
    {
        campName: "Riverside Retreat",
        city: "Kosi River",
        latitude: 29.439,
        longitude: 79.3151,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Ridge",
        city: "Gangotri",
        latitude: 30.9888,
        longitude: 78.9319,
        state: "Uttarakhand"
    },
    {
        campName: "Valley View Lodge",
        city: "Ziro Valley",
        latitude: 27.583,
        longitude: 93.8264,
        state: "Arunachal Pradesh"
    },
    {
        campName: "Beachfront Resort",
        city: "Mahabalipuram",
        latitude: 12.6265,
        longitude: 80.192,
        state: "Tamil Nadu"
    },
    {
        campName: "Forest Hideaway",
        city: "Bandhavgarh National Park",
        latitude: 23.7426,
        longitude: 81.0352,
        state: "Madhya Pradesh"
    },
    {
        campName: "Lakefront Retreat",
        city: "Panchgani",
        latitude: 17.9238,
        longitude: 73.7925,
        state: "Maharashtra"
    },
    {
        campName: "Riverbank Lodge",
        city: "Narmada River",
        latitude: 21.9082,
        longitude: 74.5021,
        state: "Madhya Pradesh"
    },
    {
        campName: "Mountain View",
        city: "Kanchenjunga",
        latitude: 27.7024,
        longitude: 88.1462,
        state: "Sikkim"
    },
    {
        campName: "Lake Paradise",
        city: "Chilika Lake",
        latitude: 19.8082,
        longitude: 85.4714,
        state: "Odisha"
    },
    {
        campName: "Hillside Resort",
        city: "Mount Harriet",
        latitude: 11.6793,
        longitude: 92.7204,
        state: "Andaman and Nicobar Islands"
    },
    {
        campName: "Riverfront Lodge",
        city: "Teesta River",
        latitude: 26.5948,
        longitude: 88.0415,
        state: "Sikkim"
    },
    {
        campName: "Mountain Retreat",
        city: "Kalimpong",
        latitude: 27.072,
        longitude: 88.4727,
        state: "West Bengal"
    },
    {
        campName: "Valley Camp",
        city: "Lachung",
        latitude: 27.7253,
        longitude: 88.6251,
        state: "Sikkim"
    },
    {
        campName: "Beachside Lodge",
        city: "Vengurla",
        latitude: 15.8649,
        longitude: 73.6296,
        state: "Maharashtra"
    },
    {
        campName: "Forest Resort",
        city: "Kaziranga National Park",
        latitude: 26.6413,
        longitude: 93.3615,
        state: "Assam"
    },
    {
        campName: "Lakeside Haven",
        city: "Nainital",
        latitude: 29.3806,
        longitude: 79.4638,
        state: "Uttarakhand"
    },
    {
        campName: "Hilltop Haven",
        city: "Pelling",
        latitude: 27.3257,
        longitude: 88.2396,
        state: "Sikkim"
    },
    {
        campName: "Lakeview Lodge",
        city: "Sattal",
        latitude: 29.3396,
        longitude: 79.5084,
        state: "Uttarakhand"
    },
    {
        campName: "Riverside Paradise",
        city: "Teesta River",
        latitude: 27.0478,
        longitude: 88.4726,
        state: "Sikkim"
    },
    {
        campName: "Mountain Escape",
        city: "Lachung",
        latitude: 27.7044,
        longitude: 88.6389,
        state: "Sikkim"
    },
    {
        campName: "Beach Retreat",
        city: "Tarkarli",
        latitude: 16.0082,
        longitude: 73.3265,
        state: "Maharashtra"
    },
    {
        campName: "Forest Escape",
        city: "Kudremukh National Park",
        latitude: 13.1542,
        longitude: 75.1636,
        state: "Karnataka"
    },
    {
        campName: "Lakefront Resort",
        city: "Chilika Lake",
        latitude: 19.8005,
        longitude: 85.4808,
        state: "Odisha"
    },
    {
        campName: "Riverside Haven",
        city: "Ganges River",
        latitude: 25.3175,
        longitude: 83.0061,
        state: "Uttar Pradesh"
    },
    {
        campName: "Mountain View Camp",
        city: "Gangotri",
        latitude: 30.9869,
        longitude: 78.9318,
        state: "Uttarakhand"
    },
    {
        campName: "Valley Retreat",
        city: "Ziro Valley",
        latitude: 27.5757,
        longitude: 93.8261,
        state: "Arunachal Pradesh"
    },
    {
        campName: "Beachside Paradise",
        city: "Devbagh Beach",
        latitude: 14.5699,
        longitude: 74.3251,
        state: "Karnataka"
    },
    {
        campName: "Forest Lodge",
        city: "Sundarbans National Park",
        latitude: 21.9451,
        longitude: 88.3697,
        state: "West Bengal"
    },
    {
        campName: "Lakeside Retreat",
        city: "Loktak Lake",
        latitude: 24.4709,
        longitude: 93.9533,
        state: "Manipur"
    },
    {
        campName: "Hilltop Retreat",
        city: "Lachen",
        latitude: 27.7144,
        longitude: 88.6171,
        state: "Sikkim"
    },
    {
        campName: "Riverfront Camp",
        city: "Bhagirathi River",
        latitude: 30.1435,
        longitude: 78.7385,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Haven",
        city: "Spiti Valley",
        latitude: 32.2511,
        longitude: 78.0648,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley View Lodge",
        city: "Dzukou Valley",
        latitude: 25.5523,
        longitude: 94.1691,
        state: "Nagaland"
    },
    {
        campName: "Beach Resort",
        city: "Varkala",
        latitude: 8.7354,
        longitude: 76.7034,
        state: "Kerala"
    },
    {
        campName: "Forest Camp",
        city: "Kanha National Park",
        latitude: 22.3529,
        longitude: 80.6724,
        state: "Madhya Pradesh"
    },
    {
        campName: "Lakeside Haven",
        city: "Panchgani",
        latitude: 17.9179,
        longitude: 73.7935,
        state: "Maharashtra"
    },
    {
        campName: "Hilltop Resort",
        city: "Lansdowne",
        latitude: 29.8344,
        longitude: 78.6818,
        state

: "Uttarakhand"
    },
    {
        campName: "River View",
        city: "Kabini River",
        latitude: 12.2266,
        longitude: 76.2921,
        state: "Karnataka"
    },
    {
        campName: "Mountain Escape",
        city: "Auli",
        latitude: 30.5228,
        longitude: 79.4715,
        state: "Uttarakhand"
    },
    {
        campName: "Beachside Escape",
        city: "Ganpatipule",
        latitude: 17.168,
        longitude: 73.2661,
        state: "Maharashtra"
    },
    {
        campName: "Forest Ridge Camp",
        city: "Ranthambore",
        latitude: 26.0173,
        longitude: 76.5027,
        state: "Rajasthan"
    },
    {
        campName: "River Bend",
        city: "Yamuna River",
        latitude: 31.0367,
        longitude: 77.1145,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Peak",
        city: "Nanda Devi",
        latitude: 30.4111,
        longitude: 79.9171,
        state: "Uttarakhand"
    },
    {
        campName: "Lake View Camp",
        city: "Loktak Lake",
        latitude: 24.5044,
        longitude: 93.7813,
        state: "Manipur"
    },
    {
        campName: "Hillside Haven",
        city: "Lachen",
        latitude: 27.7146,
        longitude: 88.6142,
        state: "Sikkim"
    },
    {
        campName: "Riverfront Lodge",
        city: "Beas River",
        latitude: 31.9514,
        longitude: 77.1084,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Oasis",
        city: "McLeod Ganj",
        latitude: 32.2427,
        longitude: 76.3211,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley Hideout",
        city: "Hemis",
        latitude: 34.1631,
        longitude: 77.6151,
        state: "Ladakh"
    },
    {
        campName: "Beachside Lodge",
        city: "Murudeshwar",
        latitude: 14.0937,
        longitude: 74.4858,
        state: "Karnataka"
    },
    {
        campName: "Forest Hill Camp",
        city: "Chitwan National Park",
        latitude: 27.5278,
        longitude: 84.5142,
        state: "Nepal"
    },
    {
        campName: "Lake Resort",
        city: "Naukuchiatal",
        latitude: 29.3964,
        longitude: 79.4805,
        state: "Uttarakhand"
    },
    {
        campName: "Riverside Retreat",
        city: "Kosi River",
        latitude: 29.439,
        longitude: 79.3151,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Ridge",
        city: "Gangotri",
        latitude: 30.9888,
        longitude: 78.9319,
        state: "Uttarakhand"
    },
    {
        campName: "Valley View Lodge",
        city: "Ziro Valley",
        latitude: 27.583,
        longitude: 93.8264,
        state: "Arunachal Pradesh"
    },
    {
        campName: "Beachfront Resort",
        city: "Mahabalipuram",
        latitude: 12.6265,
        longitude: 80.192,
        state: "Tamil Nadu"
    },
    {
        campName: "Forest Hideaway",
        city: "Bandhavgarh National Park",
        latitude: 23.7426,
        longitude: 81.0352,
        state: "Madhya Pradesh"
    },
    {
        campName: "Lakefront Retreat",
        city: "Panchgani",
        latitude: 17.9238,
        longitude: 73.7925,
        state: "Maharashtra"
    },
    {
        campName: "Riverbank Lodge",
        city: "Narmada River",
        latitude: 21.9082,
        longitude: 74.5021,
        state: "Madhya Pradesh"
    },
    {
        campName: "Mountain View",
        city: "Kanchenjunga",
        latitude: 27.7024,
        longitude: 88.1462,
        state: "Sikkim"
    },
    {
        campName: "Lake Paradise",
        city: "Chilika Lake",
        latitude: 19.8082,
        longitude: 85.4714,
        state: "Odisha"
    },
    {
        campName: "Hillside Resort",
        city: "Mount Harriet",
        latitude: 11.6793,
        longitude: 92.7204,
        state: "Andaman and Nicobar Islands"
    },
    {
        campName: "Riverfront Lodge",
        city: "Teesta River",
        latitude: 26.5948,
        longitude: 88.0415,
        state: "Sikkim"
    },
    {
        campName: "Mountain Retreat",
        city: "Kalimpong",
        latitude: 27.072,
        longitude: 88.4727,
        state: "West Bengal"
    },
    {
        campName: "Valley Camp",
        city: "Lachung",
        latitude: 27.7253,
        longitude: 88.6251,
        state: "Sikkim"
    },
    {
        campName: "Beachside Lodge",
        city: "Vengurla",
        latitude: 15.8649,
        longitude: 73.6296,
        state: "Maharashtra"
    },
    {
        campName: "Forest Resort",
        city: "Kaziranga National Park",
        latitude: 26.6413,
        longitude: 93.3615,
        state: "Assam"
    },
    {
        campName: "Lakeside Haven",
        city: "Nainital",
        latitude: 29.3806,
        longitude: 79.4638,
        state: "Uttarakhand"
    },
    {
        campName: "Hilltop Haven",
        city: "Pelling",
        latitude: 27.3257,
        longitude: 88.2396,
        state: "Sikkim"
    },
    {
        campName: "Lakeview Lodge",
        city: "Sattal",
        latitude: 29.3396,
        longitude: 79.5084,
        state: "Uttarakhand"
    },
    {
        campName: "Riverside Paradise",
        city: "Teesta River",
        latitude: 27.0478,
        longitude: 88.4726,
        state: "Sikkim"
    },
    {
        campName: "Mountain Escape",
        city: "Lachung",
        latitude: 27.7044,
        longitude: 88.6389,
        state: "Sikkim"
    },
    {
        campName: "Beach Retreat",
        city: "Tarkarli",
        latitude: 16.0082,
        longitude: 73.3265,
        state: "Maharashtra"
    },
    {
        campName: "Forest Escape",
        city: "Kudremukh National Park",
        latitude: 13.1542,
        longitude: 75.1636,
        state: "Karnataka"
    },
    {
        campName: "Lakefront Resort",
        city: "Chilika Lake",
        latitude: 19.8005,
        longitude: 85.4808,
        state: "Odisha"
    },
    {
        campName: "Riverside Haven",
        city: "Ganges River",
        latitude: 25.3175,
        longitude: 83.0061,
        state: "Uttar Pradesh"
    },
    {
        campName: "Mountain View Camp",
        city: "Gangotri",
        latitude: 30.9869,
        longitude: 78.9318,
        state: "Uttarakhand"
    },
    {
        campName: "Valley Retreat",
        city: "Ziro Valley",
        latitude: 27.5757,
        longitude: 93.8261,
        state: "Arunachal Pradesh"
    },
    {
        campName: "Beachside Paradise",
        city: "Devbagh Beach",
        latitude: 14.5699,
        longitude: 74.3251,
        state: "Karnataka"
    },
    {
        campName: "Forest Lodge",
        city: "Sundarbans National Park",
        latitude: 21.9451,
        longitude: 88.3697,
        state: "West Bengal"
    },
    {
        campName: "Lakeside Retreat",
        city: "Loktak Lake",
        latitude: 24.4709,
        longitude: 93.9533,
        state: "Manipur"
    },
    {
        campName: "Hilltop Retreat",
        city: "Lachen",
        latitude: 27.7144,
        longitude: 88.6171,
        state: "Sikkim"
    },
    {
        campName: "Riverfront Camp",
        city: "Bhagirathi River",
        latitude: 30.1435,
        longitude: 78.7385,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Haven",
        city: "Spiti Valley",
        latitude: 32.2511,
        longitude: 78.0648,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley View Lodge",
        city: "Dzukou Valley",
        latitude: 25.5523,
        longitude: 94.1691,
        state: "Nagaland"
    },
    {
        campName: "Beach Resort",
        city: "Varkala",
        latitude: 8.7354,
        longitude: 76.7034,
        state: "Kerala"
    },
    {
        campName: "Forest Camp",
        city: "Kanha National Park",
        latitude: 22.3529,
        longitude: 80.6724,
        state: "Madhya Pradesh"
    },
    {
        campName: "Lakeside Haven",
        city: "Panchgani",
        latitude: 17.9179,
        longitude: 73.7935,
        state: "Maharashtra"
    },
    {
        campName: "Hilltop Resort",
        city: "Lansdowne",
        latitude: 29.8344,
        longitude: 78.6818,
        state: "Uttarakhand"
    },
    {
        campName: "River View",
        city: "Kabini River",
        latitude: 12.2266,
        longitude: 76.2921,
        state: "Karnataka"
    },
    {
        campName: "Mountain Escape",
        city: "Auli",
        latitude: 30.5228,
        longitude: 79.4715,
        state: "Uttarakhand"
    },
    {
        campName: "Beachside Escape",
        city: "Ganpatipule",
        latitude: 17.168,
        longitude: 73.2661,
        state: "Maharashtra"
    },
    {
        campName: "Forest Ridge Camp",
        city: "Ranthambore",
        latitude: 26.0173,
        longitude: 76.5027,
        state: "Rajasthan"
    },
    {
        campName: "River Bend",
        city: "Yamuna River",
        latitude: 31.0367,
        longitude: 77.1145,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Peak",
        city: "Nanda Devi",
        latitude: 30.4111,
        longitude: 79.9171,
        state: "Uttarakhand"
    },
    {
        campName: "Lake View Camp",
        city: "Loktak Lake",
        latitude: 24.5044,
        longitude: 93.7813,
        state: "Manipur"
    },
    {
        campName: "Hillside Haven",
        city: "Lachen",
        latitude: 27.7146,
        longitude: 88.6142,
        state: "Sikkim"
    },
    {
        campName: "Riverfront Lodge",
        city: "Beas River",
        latitude: 31.9514,
        longitude: 77.1084,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Oasis",
        city: "McLeod Ganj",
        latitude: 32.2427,
        longitude: 76.3211,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley Hideout",
        city: "Hemis",
        latitude: 34.1631,
        longitude: 77.6151,
        state: "Ladakh"
    },
    {
        campName: "Beachside Lodge",
        city: "Murudeshwar",
        latitude: 14.0937,
        longitude: 74.4858,
        state: "Karnataka"
    },
    {
        campName: "Forest Hill Camp",
        city: "Chitwan National Park",
        latitude: 27.5278,
        longitude: 84.5142,
        state: "Nepal"
    },
    {
        campName: "Lake Resort",
        city: "Naukuchiatal",
        latitude: 29.3964,
        longitude: 79.4805,
        state: "Uttarakhand"
    },
    {
        campName: "Riverside Retreat",
        city: "Kosi River",
        latitude: 29.439,
        longitude: 79.3151,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Ridge",
        city: "Gangotri",
        latitude: 30.9888,
        longitude: 78.9319,
        state: "Uttarakhand"
    },
    {
        campName: "Valley View Lodge",
        city: "Ziro Valley",
        latitude: 27.583,
        longitude: 93.8264,
        state: "Arunachal Pradesh"
    },
    {
        campName: "Beachfront Resort",
        city: "Mahabalipuram",
        latitude: 12.6265,
        longitude: 80.192,
        state: "Tamil Nadu"
    },
    {
        campName: "Forest Hideaway",
        city: "Bandhavgarh National Park",
        latitude: 23.7426,
        longitude: 81.0352,
        state: "Madhya Pradesh"
    },
    {
        campName: "Lakefront Retreat",
        city: "Panchgani",
        latitude: 17.9238,
        longitude: 73.7925,
        state: "Maharashtra"
    },
    {
        campName: "Riverbank Lodge",
        city: "Narmada River",
        latitude: 21.9082,
        longitude: 74.5021,
        state: "Madhya Pradesh"
    },
    {
        campName: "Mountain View",
        city: "Kanchenjunga",
        latitude: 27.7024,
        longitude: 88.1462,
        state: "Sikkim"
    },
    {
        campName: "Lake Paradise",
        city: "Chilika Lake",
        latitude: 19.8082,
        longitude: 85.4714,
        state: "Odisha"
    },
    {
        campName: "Hillside Resort",
        city: "Mount Harriet",
        latitude: 11.6793,
        longitude: 92.7204,
        state: "Andaman and Nicobar Islands"
    },
    {
        campName: "Riverfront Lodge",
        city: "Teesta River",
        latitude: 26.5948,
        longitude: 88.0415,
        state: "Sikkim"
    },
    {
        campName: "Mountain Retreat",
        city: "Kalimpong",
        latitude: 27.072,
        longitude: 88.4727,
        state: "West Bengal"
    },
    {
        campName: "Valley Camp",
        city: "Lachung",
        latitude: 27.7253,
        longitude: 88.6251,
        state: "Sikkim"
    },
    {
        campName: "Beachside Lodge",
        city: "Vengurla",
        latitude: 15.8649,
        longitude: 73.6296,
        state: "Maharashtra"
    },
    {
        campName: "Forest Resort",
        city: "Kaziranga National Park",
        latitude: 26.6413,
        longitude: 93.3615,
        state: "Assam"
    },
    {
        campName: "Lakeside Haven",
        city: "Nainital",
        latitude: 29.3806,
        longitude: 79.4638,
        state: "Uttarakhand"
    },
    {
        campName: "Hilltop Haven",
        city: "Pelling",
        latitude: 27.3257,
        longitude: 88.2396,
        state: "Sikkim"
    },
    {
        campName: "Lakeview Lodge",
        city: "Sattal",
        latitude: 29.3396,
        longitude: 79.5084,
        state: "Uttarakhand"
    },
    {
        campName: "Riverside Paradise",
        city: "Teesta River",
        latitude: 27.0478,
        longitude: 88.4726,
        state: "Sikkim"
    },
    {
        campName: "Mountain Escape",
        city: "Lachung",
        latitude: 27.7044,
        longitude: 88.6389,
        state: "Sikkim"
    },
    {
        campName: "Beach Retreat",
        city: "Tarkarli",
        latitude: 16.0082,
        longitude: 73.3265,
        state: "Maharashtra"
    },
    {
        campName: "Forest Escape",
        city: "Kudremukh National Park",
        latitude: 13.1542,
        longitude: 75.1636,
        state: "Karnataka"
    },
    {
        campName: "Lakefront Resort",
        city: "Chilika Lake",
        latitude: 19.8005,
        longitude: 85.4808,
        state: "Odisha"
    },
    {
        campName: "Riverside Haven",
        city: "Ganges River",
        latitude: 25.3175,
        longitude: 83.0061,
        state: "Uttar Pradesh"
    },
    {
        campName: "Mountain View Camp",
        city: "Gangotri",
        latitude: 30.9869,
        longitude: 78.9318,
        state: "Uttarakhand"
    },
    {
        campName: "Valley Retreat",
        city: "Ziro Valley",
        latitude: 27.5757,
        longitude: 93.8261,
        state: "Arunachal Pradesh"
    },
    {
        campName: "Beachside Paradise",
        city: "Devbagh Beach",
        latitude: 14.5699,
        longitude: 74.3251,
        state: "Karnataka"
    },
    {
        campName: "Forest Lodge",
        city: "Sundarbans National Park",
        latitude: 21.9451,
        longitude: 88.3697,
        state: "West Bengal"
    },
    {
        campName: "Lakeside Retreat",
        city: "Loktak Lake",
        latitude: 24.4709,
        longitude: 93.9533,
        state: "Manipur"
    },
    {
        campName: "Hilltop Retreat",
        city: "Lachen",
        latitude: 27.7144,
        longitude: 88.6171,
        state: "Sikkim"
    },
    {
        campName: "Riverfront Camp",
        city: "Bhagirathi River",
        latitude: 30.1435,
        longitude: 78.7385,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Haven",
        city: "Spiti Valley",
        latitude: 32.2511,
        longitude: 78.0648,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley View Lodge",
        city: "Dzukou Valley",
        latitude: 25.5523,
        longitude: 94.1691,
        state: "Nagaland"
    },
    {
        campName: "Beach Resort",
        city: "Varkala",
        latitude: 8.7354,
        longitude: 76.7034,
        state: "Kerala"
    },
    {
        campName: "Forest Camp",
        city: "Kanha National Park",
        latitude: 22.3529,
        longitude: 80.6724,
        state: "Madhya Pradesh"
    },
    {
        campName: "Lakeside Haven",
        city: "Panchgani",
        latitude: 17.9179,
        longitude: 73.7935,
        state: "Maharashtra"
    },
    {
        campName: "Hilltop Resort",
        city: "Lansdowne",
        latitude: 29.8344,
        longitude: 78.6818,
        state: "Uttarakhand"
    },
    {
        campName: "River View",
        city: "Kabini River",
        latitude: 12.2266,
        longitude: 76.2921,
        state: "Karnataka"
    },
    {
        campName: "Mountain Escape",
        city: "Auli",
        latitude: 30.5228,
        longitude: 79.4715,
        state: "Uttarakhand"
    },
    {
        campName: "Beachside Escape",
        city: "Ganpatipule",
        latitude: 17.168,
        longitude: 73.2661,
        state: "Maharashtra"
    },
    {
        campName: "Forest Ridge Camp",
        city: "Ranthambore",
        latitude: 26.0173,
        longitude: 76.5027,
        state: "Rajasthan"
    },
    {
        campName: "River Bend",
        city: "Yamuna River",
        latitude: 31.0367,
        longitude: 77.1145,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Peak",
        city: "Nanda Devi",
        latitude: 30.4111,
        longitude: 79.9171,
        state: "Uttarakhand"
    },
    {
        campName: "Lake View Camp",
        city: "Loktak Lake",
        latitude: 24.5044,
        longitude: 93.7813,
        state: "Manipur"
    },
    {
        campName: "Hillside Haven",
        city: "Lachen",
        latitude: 27.7146,
        longitude: 88.6142,
        state: "Sikkim"
    },
    {
        campName: "Riverfront Lodge",
        city: "Beas River",
        latitude: 31.9514,
        longitude: 77.1084,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Oasis",
        city: "McLeod Ganj",
        latitude: 32.2427,
        longitude: 76.3211,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley Hideout",
        city: "Hemis",
        latitude: 34.1631,
        longitude: 77.6151,
        state: "Ladakh"
    },
    {
        campName: "Beachside Lodge",
        city: "Murudeshwar",
        latitude: 14.0937,
        longitude: 74.4858,
        state: "Karnataka"
    },
    {
        campName: "Forest Hill Camp",
        city: "Chitwan National Park",
        latitude: 27.5278,
        longitude: 84.5142,
        state: "Nepal"
    },
    {
        campName: "Lake Resort",
        city: "Naukuchiatal",
        latitude: 29.3964,
        longitude: 79.4805,
        state: "Uttarakhand"
    },
    {
        campName: "Riverside Retreat",
        city: "Kosi River",
        latitude: 29.439,
        longitude: 79.3151,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Ridge",
        city: "Gangotri",
        latitude: 30.9888,
        longitude: 78.9319,
        state: "Uttarakhand"
    },
    {
        campName: "Valley View Lodge",
        city: "Ziro Valley",
        latitude: 27.583,
        longitude: 93.8264,
        state: "Arunachal Pradesh"
    },
    {
        campName: "Beachfront Resort",
        city: "Mahabalipuram",
        latitude: 12.6265,
        longitude: 80.192,
        state: "Tamil Nadu"
    },
    {
        campName: "Forest Hideaway",
        city: "Bandhavgarh National Park",
        latitude: 23.7426,
        longitude: 81.0352,
        state: "Madhya Pradesh"
    },
    {
        campName: "Lakefront Retreat",
        city: "Panchgani",
        latitude: 17.9238,
        longitude: 73.7925,
        state: "Maharashtra"
    },
    {
        campName: "Riverbank Lodge",
        city: "Narmada River",
        latitude: 21.9082,
        longitude: 74.5021,
        state: "Madhya Pradesh"
    },
    {
        campName: "Mountain View",
        city: "Kanchenjunga",
        latitude: 27.7024,
        longitude: 88.1462,
        state: "Sikkim"
    },
    {
        campName: "Lake Paradise",
        city: "Chilika Lake",
        latitude: 19.8082,
        longitude: 85.4714,
        state: "Odisha"
    },
    {
        campName: "Hillside Resort",
        city: "Mount Harriet",
        latitude: 11.6793,
        longitude: 92.7204,
        state: "Andaman and Nicobar Islands"
    },
    {
        campName: "Riverfront Lodge",
        city: "Teesta River",
        latitude: 26.5948,
        longitude: 88.0415,
        state: "Sikkim"
    },
    {
        campName: "Mountain Retreat",
        city: "Kalimpong",
        latitude: 27.072,
        longitude: 88.4727,
        state: "West Bengal"
    },
    {
        campName: "Valley Camp",
        city: "Lachung",
        latitude: 27.7253,
        longitude: 88.6251,
        state: "Sikkim"
    },
    {
        campName: "Beachside Lodge",
        city: "Vengurla",
        latitude: 15.8649,
        longitude: 73.6296,
        state: "Maharashtra"
    },
    {
        campName: "Forest Resort",
        city: "Kaziranga National Park",
        latitude: 26.6413,
        longitude: 93.3615,
        state: "Assam"
    },
    {
        campName: "Lakeside Haven",
        city: "Nainital",
        latitude: 29.3806,
        longitude: 79.4638,
        state: "Uttarakhand"
    },
    {
        campName: "Hilltop Haven",
        city: "Pelling",
        latitude: 27.3257,
        longitude: 88.2396,
        state: "Sikkim"
    },
    {
        campName: "Lakeview Lodge",
        city: "Sattal",
        latitude: 29.3396,
        longitude: 79.5084,
        state: "Uttarakhand"
    },
    {
        campName: "Riverside Paradise",
        city: "Teesta River",
        latitude: 27.0478,
        longitude: 88.4726,
        state: "Sikkim"
    },
    {
        campName: "Mountain Escape",
        city: "Lachung",
        latitude: 27.7044,
        longitude: 88.6389,
        state: "Sikkim"
    },
    {
        campName: "Beach Retreat",
        city: "Tarkarli",
        latitude: 16.0082,
        longitude: 73.3265,
        state: "Maharashtra"
    },
    {
        campName: "Forest Escape",
        city: "Kudremukh National Park",
        latitude: 13.1542,
        longitude: 75.1636,
        state: "Karnataka"
    },
    {
        campName: "Lakefront Resort",
        city: "Chilika Lake",
        latitude: 19.8005,
        longitude: 85.4808,
        state: "Odisha"
    },
    {
        campName: "Riverside Haven",
        city: "Ganges River",
        latitude: 25.3175,
        longitude: 83.0061,
        state: "Uttar Pradesh"
    },
    {
        campName: "Mountain View Camp",
        city: "Gangotri",
        latitude: 30.9869,
        longitude: 78.9318,
        state: "Uttarakhand"
    },
    {
        campName: "Valley Retreat",
        city: "Ziro Valley",
        latitude: 27.5757,
        longitude: 93.8261,
        state: "Arunachal Pradesh"
    },
    {
        campName: "Beachside Paradise",
        city: "Devbagh Beach",
        latitude: 14.5699,
        longitude: 74.3251,
        state: "Karnataka"
    },
    {
        campName: "Forest Lodge",
        city: "Sundarbans National Park",
        latitude: 21.9451,
        longitude: 88.3697,
        state: "West Bengal"
    },
    {
        campName: "Lakeside Retreat",
        city: "Loktak Lake",
        latitude: 24.4709,
        longitude: 93.9533,
        state: "Manipur"
    },
    {
        campName: "Hilltop Retreat",
        city: "Lachen",
        latitude: 27.7144,
        longitude: 88.6171,
        state: "Sikkim"
    },
    {
        campName: "Riverfront Camp",
        city: "Bhagirathi River",
        latitude: 30.1435,
        longitude: 78.7385,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Haven",
        city: "Spiti Valley",
        latitude: 32.2511,
        longitude: 78.0648,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley View Lodge",
        city: "Dzukou Valley",
        latitude: 25.5523,
        longitude: 94.1691,
        state: "Nagaland"
    },
    {
        campName: "Beach Resort",
        city: "Varkala",
        latitude: 8.7354,
        longitude: 76.7034,
        state: "Kerala"
    },
    {
        campName: "Forest Camp",
        city: "Kanha National Park",
        latitude: 22.3529,
        longitude: 80.6724,
        state: "Madhya Pradesh"
    },
    {
        campName: "Lakeside Haven",
        city: "Panchgani",
        latitude: 17.9179,
        longitude: 73.7935,
        state: "Maharashtra"
    },
    {
        campName: "Hilltop Resort",
        city: "Lansdowne",
        latitude: 29.8344,
        longitude: 78.6818,
        state: "Uttarakhand"
    },
    {
        campName: "River View",
        city: "Kabini River",
        latitude: 12.2266,
        longitude: 76.2921,
        state: "Karnataka"
    },
    {
        campName: "Mountain Escape",
        city: "Auli",
        latitude: 30.5228,
        longitude: 79.4715,
        state: "Uttarakhand"
    },
    {
        campName: "Beachside Escape",
        city: "Ganpatipule",
        latitude: 17.168,
        longitude: 73.2661,
        state: "Maharashtra"
    },
    {
        campName: "Forest Ridge Camp",
        city: "Ranthambore",
        latitude: 26.0173,
        longitude: 76.5027,
        state: "Rajasthan"
    },
    {
        campName: "River Bend",
        city: "Yamuna River",
        latitude: 31.0367,
        longitude: 77.1145,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Peak",
        city: "Nanda Devi",
        latitude: 30.4111,
        longitude: 79.9171,
        state: "Uttarakhand"
    },
    {
        campName: "Lake View Camp",
        city: "Loktak Lake",
        latitude: 24.5044,
        longitude: 93.7813,
        state: "Manipur"
    },
    {
        campName: "Hillside Haven",
        city: "Lachen",
        latitude: 27.7146,
        longitude: 88.6142,
        state: "Sikkim"
    },
    {
        campName: "Riverfront Lodge",
        city: "Beas River",
        latitude: 31.9514,
        longitude: 77.1084,
        state: "Himachal Pradesh"
    },
    {
        campName: "Mountain Oasis",
        city: "McLeod Ganj",
        latitude: 32.2427,
        longitude: 76.3211,
        state: "Himachal Pradesh"
    },
    {
        campName: "Valley Hideout",
        city: "Hemis",
        latitude: 34.1631,
        longitude: 77.6151,
        state: "Ladakh"
    },
    {
        campName: "Beachside Lodge",
        city: "Murudeshwar",
        latitude: 14.0937,
        longitude: 74.4858,
        state: "Karnataka"
    },
    {
        campName: "Forest Hill Camp",
        city: "Chitwan National Park",
        latitude: 27.5278,
        longitude: 84.5142,
        state: "Nepal"
    },
    {
        campName: "Lake Resort",
        city: "Naukuchiatal",
        latitude: 29.3964,
        longitude: 79.4805,
        state: "Uttarakhand"
    },
    {
        campName: "Riverside Retreat",
        city: "Kosi River",
        latitude: 29.439,
        longitude: 79.3151,
        state: "Uttarakhand"
    },
    {
        campName: "Mountain Ridge",
        city: "Gangotri",
        latitude: 30.9888,
        longitude: 78.9319,
        state: "Uttarakhand"
    },
    {
        campName: "Valley View Lodge",
        city: "Ziro Valley",
        latitude: 27.583,
        longitude: 

93.8264,
        state: "Arunachal Pradesh"
    },
    {
        campName: "Beachfront Resort",
        city: "Mahabalipuram",
        latitude: 12.6265,
        longitude: 80.192,
        state: "Tamil Nadu"
    },
    {
        campName: "Forest Hideaway",
        city: "Bandhavgarh National Park",
        latitude: 23.7426,
        longitude: 81.0352,
        state: "Madhya Pradesh"
    },
    {
        campName: "Lakefront Retreat",
        city: "Panchgani",
        latitude: 17.9238,
        longitude: 73.7925,
        state: "Maharashtra"
    },
    {
        campName: "Riverbank Lodge",
        city: "Narmada River",
        latitude: 21.9082,
        longitude: 74.5021,
        state: "Madhya Pradesh"
    },
    {
        campName: "Mountain View",
        city: "Kanchenjunga",
        latitude: 27.7024,
        longitude: 88.1462,
        state: "Sikkim"
    },
    {
        campName: "Lake Paradise",
        city: "Chilika Lake",
        latitude: 19.8082,
        longitude: 85.4714,
        state: "Odisha"
    },
    {
        campName: "Hillside Resort",
        city: "Mount Harriet",
        latitude: 11.6793,
        longitude: 92.7204,
        state: "Andaman and Nicobar Islands"
    },
    {
        campName: "Riverfront Lodge",
        city: "Teesta River",
        latitude: 26.5948,
        longitude: 88.0415,
        state: "Sikkim"
    },
    {
        campName: "Mountain Retreat",
        city: "Kalimpong",
        latitude: 27.072,
        longitude: 88.4727,
        state: "West Bengal"
    },
    {
        campName: "Valley Camp",
        city: "Lachung",
        latitude: 27.7253,
        longitude: 88.6251,
        state: "Sikkim"
    },
    {
        campName: "Beachside Lodge",
        city: "Vengurla",
        latitude: 15.8649,
        longitude: 73.6296,
        state: "Maharashtra"
    },
    {
        campName: "Forest Resort",
        city: "Kaziranga National Park",
        latitude: 26.6413,
        longitude: 93.3615,
        state: "Assam"
    },
    {
        campName: "Lakeside Haven",
        city: "Nainital",
        latitude: 29.3806,
        longitude: 79.4638,
        state: "Uttarakhand"
    },
    {
        campName: "Hilltop Haven",
        city: "Pelling",
        latitude: 27.3257,
        longitude: 88.2396,
        state: "Sikkim"
    },
    {
        campName: "Lakeview Lodge",
        city: "Sattal",
        latitude: 29.3396,
        longitude: 79.5084,
        state: "Uttarakhand"
    },
    {
        campName: "Riverside Paradise",
        city: "Teesta River",
        latitude: 27.0478,
        longitude: 88.4726,
        state: "Sikkim"
    },
    {
        campName: "Mountain Escape",
        city: "Lachung",
        latitude: 27.7044,
        longitude: 88.6389,
        state: "Sikkim"
    }
]

module.exports = camps;