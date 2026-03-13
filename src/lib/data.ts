
export const services = [
    {
        title: 'Carpet Cleaning',
        description: 'Our deep steam cleaning process removes dirt, grime, and allergens, leaving your carpets fresh and revitalized. We tackle tough stains and offer deodorizing treatments for a complete clean.',
        image: '/close-up-vacuuming-carpet.jpg',
        imageHint: 'clean carpet',
        details: [
            'Deep steam cleaning',
            'Tough stain and spot removal',
            'Deodorizing and sanitizing',
            'Eco-friendly cleaning solutions'
        ]
    },
    {
        title: 'Upholstery Cleaning',
        description: 'We restore the beauty and freshness of your furniture. Our gentle yet effective cleaning methods work on sofas, chairs, mattresses, and more.',
        image: '/people-housework-housekeeping-concept-close-up-woman-with-legs-vacuum-cleaner-cleaning-carpet-home.jpg',
        imageHint: 'clean sofa',
        details: [
            'Sofas, armchairs, and dining chairs',
            'Mattress cleaning and sanitizing',
            'Fabric-specific cleaning techniques',
            'Allergen and dust mite removal'
        ]
    },
    {
        title: 'Commercial Cleaning',
        description: 'We offer flexible and reliable cleaning services for businesses. Keep your office, hotel, or retail space looking its best with our professional commercial services.',
        image: '/giorgio-trovato-5TXz228u4eo-unsplash.jpg',
        imageHint: 'clean office',
        details: [
            'Office and corporate spaces',
            'Hotels and hospitality venues',
            'Retail stores and gyms',
            'Scheduled maintenance plans'
        ]
    }
];

export const pricing = {
    perRoom: [
        { rooms: '1 Room', price: '£60' },
        { rooms: '2 Rooms', price: '£90' },
        { rooms: '3 Rooms', price: '£120' },
    ],
    perSqFt: [
        { area: 'Up to 500 sq ft', price: '£0.50/sq ft' },
        { area: '501 - 1000 sq ft', price: '£0.45/sq ft' },
        { area: '1001+ sq ft', price: '£0.40/sq ft' },
    ],
    upholstery: [
        { item: 'Standard Sofa (2-seater)', price: '£70' },
        { item: 'Large Sofa (3-seater)', price: '£90' },
        { item: 'Armchair', price: '£40' },
        { item: 'Mattress (Double)', price: '£60' },
    ],
    extraServices: [
        { service: 'Pet Stain & Odor Removal', price: 'from £25', description: 'Advanced treatment to neutralize pet-related stains and smells.' },
        { service: 'Mold Remediation', price: 'Quote-based', description: 'Safe and effective removal of mold and mildew from carpets and upholstery.' },
        { service: 'Fabric Protection', price: '£15/room', description: 'Application of a protective shield to guard against future spills and stains.' },
        { service: 'Same-Day Service', price: '+20% on total', description: 'Need it clean today? We offer expedited services for urgent needs.' },
    ],
    packages: [
        { name: 'Full House Deal', details: 'Clean 3 rooms and get a hallway cleaned for FREE.', price: '£120' },
        { name: 'Move-In/Out Special', details: '10% off total cleaning bill for empty properties.', price: '-10%' },
    ]
};

export const team = [
    { name: 'Norbert', role: 'Founder & Lead Technician', bio: 'With over 15 years of experience, Norbert leads our team with a passion for perfection and customer satisfaction.', avatar: 'https://picsum.photos/seed/team-norbert/200/200' },
    { name: 'The Team', role: 'Skilled Cleaning Staff', bio: 'Our professional and friendly staff are fully trained, insured, and dedicated to delivering outstanding results every time.', avatar: 'https://picsum.photos/seed/team-group/200/200' }
];

export const certifications = [
    { name: 'NCCA Member', description: 'Proud members of the National Carpet Cleaners Association, ensuring we adhere to the highest industry standards.', logo: 'https://picsum.photos/seed/cert-1/150/100' },
    { name: 'IICRC Certified Firm', description: 'Certified by the Institute of Inspection, Cleaning and Restoration Certification for our expertise and ethical practices.', logo: 'https://picsum.photos/seed/cert-2/150/100' },
    { name: 'WoolSafe Approved', description: 'Specialized training and approval for safely cleaning and maintaining wool carpets and rugs.', logo: 'https://picsum.photos/seed/cert-3/150/100' }
];

export const reviews = [
  {
    quote: 'We had our sofa and futon cleaned, and they look great! Super service, quick, thorough, and friendly. Recommended!',
    author: 'Katy Soar',
    platform: 'Facebook',
    rating: 5,
    time: '1 year ago',
    avatar: 'https://picsum.photos/seed/avatar-katy/100/100'
  },
  {
    quote: 'Just had carpets clean. Wow they look like new again. Really easy to book and very quick to reply. Professional friendly service. Thank you for a great job.',
    author: 'Sebrina O\'Rourke',
    platform: 'Facebook',
    rating: 5,
    time: '1 year ago',
    avatar: 'https://picsum.photos/seed/avatar-sebrina/100/100'
  },
  {
    quote: 'Norbert visited my house yesterday....Carpets look brand new! What a transformation. Can only say, absolutely fantastic...',
    author: 'Julie Linnane',
    platform: 'Facebook',
    rating: 5,
    time: '1 year ago',
    avatar: 'https://picsum.photos/seed/avatar-julie/100/100'
  },
  {
    quote: 'Just had my carpets cleaned and they look amazing! All stains gone and looking fluffy and new again. An excellent, friendly and fast service from N&S will definitely be...',
    author: 'Michelle Booth',
    platform: 'Facebook',
    rating: 5,
    time: '1 year ago',
    avatar: 'https://picsum.photos/seed/avatar-michelle/100/100'
  },
  {
    quote: "I asked for my dad's floor tiles to be deep cleaned and the results are better than expected! I'm very grateful for the attention and effort that was put into...",
    author: 'Rachael Spindlove',
    platform: 'Facebook',
    rating: 5,
    time: '2 years ago',
    avatar: 'https://picsum.photos/seed/avatar-rachael/100/100'
  },
  {
    quote: "Norbert was a pleasure deal with. Professional and Amazing at cleaning my sofas and carpet in my lounge. Will definitely be recommending.",
    author: 'Sam Jone-ess',
    platform: 'Facebook',
    rating: 5,
    time: '2 years ago',
    avatar: 'https://picsum.photos/seed/avatar-sam/100/100'
  },
  {
    quote: 'Absolutely brilliant service. My carpets are like new. Norbert was very professional and friendly. Would highly recommend.',
    author: 'Sarah Jenkins',
    platform: 'Facebook',
    rating: 5,
    time: '10 months ago',
    avatar: 'https://picsum.photos/seed/avatar-sarah/100/100'
  },
  {
    quote: 'Fantastic job on our rug which had some tough stains. It looks amazing now. Thank you so much for your hard work!',
    author: 'Tom Wilson',
    platform: 'Facebook',
    rating: 5,
    time: '1 year ago',
    avatar: 'https://picsum.photos/seed/avatar-tom/100/100'
  }
];

export const locations = [
    "London", "Watford", "Harrow", "Uxbridge", "Hounslow", "Slough", "Windsor", 
    "Maidenhead", "Reading", "Bracknell", "Wokingham", "High Wycombe", "Amersham", 
    "Chesham", "Beaconsfield", "Aylesbury", "Milton Keynes", "Luton", "Dunstable", 
    "Hemel Hempstead", "St Albans", "Stevenage", "Bedford", "Banbury", "Bicester", 
    "Didcot", "Abingdon", "Witney", "Oxford", "Leamington Spa", "Warwick", 
    "Stratford-upon-Avon", "Coventry", "Rugby", "Northampton", "Solihull", "Dudley", 
    "Walsall", "Wolverhampton", "Sutton Coldfield", "Birmingham"
];
