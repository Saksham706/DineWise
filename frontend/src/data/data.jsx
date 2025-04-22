import { assets } from "../assets/frontend_assets/assets";

export const restaurantData = [
  {
    id: 1,
    name: "The Imperial Spice",
    location: "Delhi",
    img: assets.IS_1,
    rating: 4.5,
    description: "Authentic Indian cuisine in the heart of Delhi.",
    address: "123 Main Street, Delhi",
    images: [
      assets.IS_2,
      assets.IS_3,
      assets.IS_4,
      assets.IS_5,
      assets.IS_6
    ],
    reviews: [
      { user: "Alice", comment: "Amazing food and great ambiance!" },
      { user: "Bob", comment: "Loved the service and delicious meals." }
    ]
  },
  {
    id: 2,
    name: "Indian Accent",
    location: "Delhi",
    img: assets.IA_3,
    rating: 4.7,
    description: "Delicious street food and fusion dishes.",
    address: "456 Seaside Avenue, Delhi",
    images: [
      assets.IA_1,
      assets.IA_2,
      assets.IA_4,
      assets.IA_5,
      assets.IA_6,
    ],
    reviews: [
      { user: "Charlie", comment: "Best street food ever!" },
      { user: "Dana", comment: "Loved the flavors!" }
    ]
  },
  {
    id: 3,
    name: "Megu Restaurant",
    location: "Delhi",
    img: assets.mr1,
    rating: 4.6,
    description: "Experience the taste of Delhi.",
    address: "789 Park Street, Delhi",
    images: [
      assets.mr2,
      assets.mr3,
      assets.mr4,
      assets.mr5,
      assets.mr6,
    ],
    reviews: [
      { user: "Eve", comment: "A true Indian delight!" },
      { user: "Frank", comment: "Loved the egg curry!" }
    ]
  },
  {
    id: 4,
    name: "The GT Road",
    location: "Delhi",
    img: assets.gt3,
    rating: 4.8,
    description: "Famous for its authentic Indian Food.",
    address: "55 India Gate Road, Old Delhi ",
    images: [
      assets.gt1,
      assets.gt2,
      assets.gt4,
      assets.gt5,
      assets.gt6,
    ],
    reviews: [
      { user: "Gaurav", comment: "Best Food I've ever had!" },
      { user: "Sanya", comment: "Loved the Food levels!" }
    ]
  },
  {
    id: 5,
    name: "Olive Bar & Kitchen",
    location: "Delhi",
    img: assets.ob1,
    rating: 4.6,
    description: "Grilled delights in the heart of the tech city.",
    address: "88 MG Road, Delhi",
    images: [
      assets.ob5,
      assets.ob2,
      assets.ob3,
      assets.ob4,
      assets.ob6
    ],
    reviews: [
      { user: "Ishaan", comment: "The best steak in Bangalore!" },
      { user: "Megha", comment: "Absolutely loved their kebabs." }
    ]
  },
  {
    id: 6,
    name: "Tamra Restaurant",
    location: "Delhi",
    img: assets.tr1,
    rating: 4.7,
    description: "Traditional Rajasthani cuisine with a royal touch.",
    address: "99 HM Road, Delhi",
    images: [
      assets.tr2,
      assets.tr3,
      assets.tr4,
      assets.tr5,
      assets.tr6
    ],
    reviews: [
      { user: "Neha", comment: "Dal Baati Churma was delicious!" },
      { user: "Anil", comment: "Authentic taste of Indian Food!" }
    ]
  },
  {
    id: 7,
    name: "Trèsind Mumbai",
    location: "Mumbai",
    img: assets.tm3,
    rating: 4.5,
    description: "Tasting menu of Modern Indian cuisine & drinks served in an elegant, blue-&-gold ambiance.",
    address: "Ground Floor Inspire BKC E, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
    images: [
      assets.tm1,
      assets.tm2,
      assets.tm4,
      assets.tm5,
      assets.tm6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 8,
    name: "Yauatcha Mumbai",
    location: "Mumbai",
    img: assets.ym5,
    rating: 4.9,
    description: "Set meals & a la carte is available from this upmarket chain for Chinese food & dim sum dishes.",
    address: "Raheja Tower, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
    images: [
      assets.ym1,
      assets.ym2,
      assets.ym3,
      assets.ym4,
      assets.ym6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 9,
    name: "Bastian, Bandra",
    location: "Mumbai",
    img: assets.bb3,
    rating: 4,
    description: "Vegetarians are catered to at this chill restaurant with extensive seafood options & a chic vibe",
    address: "Kamal Building, B/1, New, Linking Rd, next to Burger King, Bandra West, Mumbai, Maharashtra 400050",
    images: [
      assets.bb1,
      assets.bb2,
      assets.bb4,
      assets.bb5,
      assets.bb6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 10,
    name: "Fifty Five East",
    location: "Mumbai",
    img: assets.ff1,
    rating: 4.5,
    description: "This sophisticated global restaurant in the Grand Hyatt is known for its hearty Sunday brunches.",
    address: "Vicinity, BANK OF INDIA STAR AVAS, Hotel and Residences, Grand Hyatt, Off, Western Express Hwy, Santacruz East, Mumbai, Maharashtra 400055",
    images: [
      assets.ff2,
      assets.ff3,
      assets.ff4,
      assets.ff5,
      assets.ff6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 11,
    name: "Peacock Restaurant",
    location: "Jaipur",
    img: assets.pr1,
    rating: 5,
    description: "This sophisticated global restaurant in the Grand Hyatt is known for its hearty Sunday brunches.",
    address: "51, Hathroi Fort, Hari Kishan Somani Marg, near Native Cocktail bar, Ajmer Rd, Rajasthan 302001",
    images: [
      assets.pr2,
      assets.pr3,
      assets.pr4,
      assets.pr5,
      assets.pr6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 12,
    name: "Skyfall Restaurant",
    location: "Jaipur",
    img: assets.sr1,
    rating: 4.5,
    description: "Has all you can eat · Has outdoor seating · Serves vegan dishes.",
    address: "5th Floor, Ridhi Tower, SB 57, Tonk Rd, opposite Sawai Mansingh Stadium, Bapu Nagar, Jaipur, Rajasthan 302015",
    images: [
      assets.sr2,
      assets.sr3,
      assets.sr4,
      assets.sr5,
      assets.sr6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 13,
    name: "Govindam Retreat",
    location: "Jaipur",
    img: assets.gr1,
    rating: 4.5,
    description: "Traditional Rajasthani fare in plush, atmospheric interiors with comfortable seating.",
    address: "First Floor, All Rajasthan Shilp Gram Udyog, Brahampuri, Rajamal Ka Talab Rd, near Govind Dev Ji Temple, above All Rajasthan Shilp Gram Udyog, Kanwar Nagar, Jaipur, Rajasthan 302002",
    images: [
      assets.gr2,
      assets.gr3,
      assets.gr4,
      assets.gr5,
      assets.gr6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 14,
    name: "Handi restaurant jaipu",
    location: "Jaipur",
    img: assets.hr1,
    rating: 4.5,
    description: "Legendary restaurant for Mughlai cuisine, especially laal maas, in simple surrounds.",
    address: "Mirza Ismail Rd, opp. GPO, Panch Batti, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302001",
    images: [
      assets.hr2,
      assets.hr3,
      assets.hr4,
      assets.hr5,
      assets.hr6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 15,
    name: "Jaipur Modern - Store & Kitchen",
    location: "Jaipur",
    img: assets.jm3,
    rating: 4.5,
    description: "Cool, stylish hangout with eclectic decor, a bohemian vibe & menu of global offerings.",
    address: "51, Dhuleshwar Garden, Sardar Patel Marg, near Kotak Bank, C Scheme, Jaipur, Rajasthan 302001",
    images: [
      assets.jm1,
      assets.jm2,
      assets.jm4,
      assets.jm5,
      assets.jm6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 16,
    name: "The Bangalore CafeFifty Five East",
    location: "Bangalore",
    img: assets.bc2,
    rating: 4.5,
    description: "Has all you can eat · Has outdoor seating · Serves vegan dishes",
    address: "4, Kengal Hanumanthaiah Rd, Bheemanna Garden, Shanti Nagar, Bengaluru, Karnataka 560027",
    images: [
      assets.bc1,
      assets.bc3,
      assets.bc4,
      assets.bc5,
      assets.bc6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 17,
    name: "Shiro Bengaluru",
    location: "Bangalore",
    img: assets.sb1,
    rating: 4.5,
    description: "Japanese, Balinese & Chinese restaurant with lavish, Buddha-inspired decor & relief carvings.",
    address: "3rd Floor, 222, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001",
    images: [
      assets.sb2,
      assets.sb3,
      assets.sb4,
      assets.sb5,
      assets.sb6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 18,
    name: "Spice Terrace",
    location: "Bangalore",
    img: assets.st1,
    rating: 4.5,
    description: "Stylish hotel eatery with poolside tables & a menu of classic Indian dishes to pair with craft beer.",
    address: "24, JW Marriott Bengaluru, 1, Vittal Mallya Rd, Ashok Nagar, Bengaluru, Karnataka 560001",
    images: [
      assets.st2,
      assets.st3,
      assets.st4,
      assets.st5,
      assets.st6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 19,
    name: "Karavalli",
    location: "Bangalore",
    img: assets.k6,
    rating: 4.5,
    description: "Regional dishes from southwest India are featured at this classic, refined hotel restaurant.",
    address: "Vivanta, 66, Residency Rd, Srinivas Nagar, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025",
    images: [
      assets.k1,
      assets.k2,
      assets.k3,
      assets.k4,
      assets.k6
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
  {
    id: 20,
    name: "Lotus Pavilion, ITC Gardenia",
    location: "Bangalore",
    img: assets.lp6,
    rating: 4.5,
    description: "Grand fine dining in an outdoor pavilion surrounded by pools and pillars at a luxury hotel.",
    address: "1, Residency Rd, Ashok Nagar, Bengaluru, Karnataka 560025",
    images: [
      assets.lp1,
      assets.lp2,
      assets.lp3,
      assets.lp4,
      assets.lp5
    ],
    reviews: [
      { user: "Rahul", comment: "The dosas were crispy and flavorful!" },
      { user: "Priya", comment: "Loved the filter coffee!" }
    ]
  },
];  