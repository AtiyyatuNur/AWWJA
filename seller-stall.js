const vendorCatalog = {
    'olu-gems': {
        name: 'Olu\'s Gems',
        owner: 'Olumide Akinbiyi',
        location: 'Lagos, Nigeria',
        rating: '4.9',
        followers: '1.2K Followers',
        tags: ['Handcrafted', 'Sustainable', 'Lagos, NG'],
        cover: 'https://media.istockphoto.com/id/2214934348/photo/small-business-owner-of-an-african-print-ankara-fabric-shop-proudly-displaying-different.webp?a=1&b=1&s=612x612&w=0&k=20&c=qOtjeAJVjbC_odEE5B2RQBYS-JnHz-jW0XTz1qKfQR4=',
        spotlight: 'Olu\'s Gems has reached over 500 successful trades this month with zero disputes. Experience the best of Lagos.',
        bio: 'Olu\'s Gems is a Lagos-based stall specialising in authentic handcrafted Nigerian goods — from Adire silk to bronze bead jewelry. Every item is ethically sourced and made to last. We believe in fair prices and honest trading, always.',
        memberSince: 'January 2022',
        trades: '500+ completed • 0 disputes',
        categories: 'Handcrafted, Fabrics, Jewelry, Home Decor'
    },
    'rickieluxe-accessories': {
        name: 'Rickieluxe Accessories',
        owner: 'Arike',
        location: 'Ogun, Nigeria',
        rating: '4.7',
        followers: '980 Followers',
        tags: ['Accessories', 'Fashion', 'Ogun, NG'],
        cover: 'https://media.istockphoto.com/id/1417313568/photo/golden-and-silver-rings-on-a-window-of-a-jewelry-store-engage-celebration-concept.jpg?s=612x612&w=0&k=20&c=7Md1MKrMiuSv_-mSKHoIV2Z03wnMsgDePvm2XgO8C04=',
        spotlight: 'Rickieluxe Accessories is known for polished statement pieces and smooth delivery from Ogun to customers across Nigeria.',
        bio: 'Rickieluxe Accessories curates premium fashion accessories with a focus on quality, style, and fast service.',
        memberSince: 'April 2021',
        trades: '350+ completed • 1 dispute',
        categories: 'Accessories, Trends, Jewelry'
    },
    'sport-house': {
        name: 'Sport House',
        owner: 'Funmi Oloye',
        location: 'Ogun, Nigeria',
        rating: '4.8',
        followers: '1.1K Followers',
        tags: ['Sportswear', 'Shoes', 'Gym Wear'],
        cover: 'https://media.istockphoto.com/id/1341946757/photo/outdoor-shop.jpg?s=612x612&w=0&k=20&c=_WI0U405CZ7rOuWqgtQWWCQlBbIdHBMUNbADRmedo_U=',
        spotlight: 'Sport House brings performance shoes, gym wear, and active essentials to customers who want comfort and style in every workout.',
        bio: 'Sport House is a sportswear-focused stall offering footwear, fitness outfits, and athleisure pieces for everyday training and active lifestyles.',
        memberSince: 'August 2020',
        trades: '420+ completed • 0 disputes',
        categories: 'Sportswear, Shoes, Gym Wear'
    },
    'aishas-glow': {
        name: 'Aisha\'s Glow',
        owner: 'Aisha Mohammed',
        location: 'Abuja, Nigeria',
        rating: '4.8',
        followers: '1.4K Followers',
        tags: ['Beauty', 'Skincare', 'Abuja, NG'],
        cover: 'https://media.istockphoto.com/id/489123533/photo/retail-store-cosmetic-shelves.jpg?s=612x612&w=0&k=20&c=NahJQB4QtN_XYhxRlgwyOZRyWRBmfWTEeqFKcAexmEs=',
        spotlight: 'Aisha\'s Glow specialises in beauty essentials and glow-focused products that shoppers trust for everyday routines.',
        bio: 'Aisha\'s Glow brings skincare, beauty tools, and wellness picks to customers who want bright, simple routines.',
        memberSince: 'March 2021',
        trades: '610+ completed • 0 disputes',
        categories: 'Beauty, Skincare, Wellness'
    },
    'tech-haven': {
        name: 'Tech Haven',
        owner: 'Emeka Okafor',
        location: 'Port Harcourt, Nigeria',
        rating: '4.7',
        followers: '1.0K Followers',
        tags: ['Gadgets', 'Tech', 'PH, NG'],
        cover: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&q=80',
        spotlight: 'Tech Haven offers modern gadgets and reliable tech support for customers who want fast, smart purchases.',
        bio: 'Tech Haven is a gadget-focused store with the latest accessories, mobile tech, and practical everyday solutions.',
        memberSince: 'November 2020',
        trades: '390+ completed • 1 dispute',
        categories: 'Gadgets, Accessories, Mobile'
    },
    'urban-thread': {
        name: 'Urban Thread',
        owner: 'David K.',
        location: 'Lagos, Nigeria',
        rating: '4.9',
        followers: '1.3K Followers',
        tags: ['Urban', 'Fashion', 'Lagos, NG'],
        cover: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80',
        spotlight: 'Urban Thread brings stylish, city-ready pieces designed for customers who want confident everyday wear.',
        bio: 'Urban Thread is known for curated casual wear and trending pieces with a modern Nigerian edge.',
        memberSince: 'February 2023',
        trades: '470+ completed • 0 disputes',
        categories: 'Fashion, Streetwear, Casual'
    },
    'luxe-bags': {
        name: 'Luxe Bags',
        owner: 'Ifeoma S.',
        location: 'Abuja, Nigeria',
        rating: '4.8',
        followers: '950 Followers',
        tags: ['Luxury', 'Bags', 'Abuja, NG'],
        cover: 'https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?w=600',
        spotlight: 'Luxe Bags offers polished designer-style accessories for shoppers who prefer statement pieces with premium finish.',
        bio: 'Luxe Bags is a fashion-forward storefront focused on quality bags, calming presentation, and easy shopping.',
        memberSince: 'May 2022',
        trades: '330+ completed • 0 disputes',
        categories: 'Bags, Luxury, Fashion'
    },
    'sneakers-spot': {
        name: 'Sneaker Spot',
        owner: 'Bola T.',
        location: 'Lagos, Nigeria',
        rating: '4.7',
        followers: '880 Followers',
        tags: ['Sneakers', 'Streetwear', 'Lagos, NG'],
        cover: 'https://images.unsplash.com/photo-1609188944094-394637c26769?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U05FQUtFUlMlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D',
        spotlight: 'Sneaker Spot is the go-to shopping destination for fresh sneakers and easy styling inspiration.',
        bio: 'Sneaker Spot focuses on trendy footwear, modern silhouettes, and trusted delivery for Nigeria-based shoppers.',
        memberSince: 'September 2021',
        trades: '260+ completed • 1 dispute',
        categories: 'Footwear, Streetwear, Trends'
    },
    'game-house': {
        name: 'Game House',
        owner: 'Seyi A.',
        location: 'Lagos, Nigeria',
        rating: '4.9',
        followers: '1.2K Followers',
        tags: ['Gaming', 'Console', 'Lagos, NG'],
        cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80',
        spotlight: 'Game House is a favourite for gamers who want fast access to game gear and entertainment extras.',
        bio: 'Game House curates game accessories, consoles, and entertainment picks with shopper-friendly pricing.',
        memberSince: 'January 2023',
        trades: '420+ completed • 0 disputes',
        categories: 'Gaming, Accessories, Entertainment'
    },
    'pixel-play': {
        name: 'Pixel Play',
        owner: 'Tunde Bello',
        location: 'Ibadan, Nigeria',
        rating: '4.8',
        followers: '980 Followers',
        tags: ['Gaming', 'Arcade', 'Ibadan, NG'],
        cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80',
        spotlight: 'Pixel Play stocks fun gaming extras, accessories, and classic console favourites for relaxed weekend sessions.',
        bio: 'Pixel Play is a gamer-first store filled with accessories, tabletop picks, and fun entertainment gear.',
        memberSince: 'April 2023',
        trades: '310+ completed • 0 disputes',
        categories: 'Gaming, Accessories, Entertainment'
    },
    'arcade-hub': {
        name: 'Arcade Hub',
        owner: 'Kelechi Nwosu',
        location: 'Enugu, Nigeria',
        rating: '4.7',
        followers: '840 Followers',
        tags: ['Gaming', 'Console', 'Enugu, NG'],
        cover: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&q=80',
        spotlight: 'Arcade Hub brings console accessories and game-ready extras to players who love fast, easy shopping.',
        bio: 'Arcade Hub focuses on gaming tools, on-the-go accessories, and popular entertainment products.',
        memberSince: 'June 2023',
        trades: '270+ completed • 1 dispute',
        categories: 'Gaming, Accessories, Console'
    },
    'quest-corner': {
        name: 'Quest Corner',
        owner: 'Ada Okafor',
        location: 'Kano, Nigeria',
        rating: '4.8',
        followers: '910 Followers',
        tags: ['Gaming', 'Quest', 'Kano, NG'],
        cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80',
        spotlight: 'Quest Corner is known for fun, easy-to-find game accessories and trusted delivery for players across Nigeria.',
        bio: 'Quest Corner curates game essentials, entertainment picks, and solid value for everyday gamers.',
        memberSince: 'February 2024',
        trades: '300+ completed • 0 disputes',
        categories: 'Gaming, Entertainment, Accessories'
    },
    'active-motion': {
        name: 'Active Motion',
        owner: 'Chika Eze',
        location: 'Port Harcourt, Nigeria',
        rating: '4.6',
        followers: '870 Followers',
        tags: ['Workout', 'Active', 'PH, NG'],
        cover: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80',
        spotlight: 'Active Motion keeps athletes and gym lovers stocked with gear, footwear, and easy-to-style activewear.',
        bio: 'Active Motion focuses on flexible activewear, sports basics, and wellness-friendly products for every day movement.',
        memberSince: 'August 2023',
        trades: '290+ completed • 0 disputes',
        categories: 'Workout, Activewear, Sports'
    },
    'nova-tech': {
        name: 'Nova Tech',
        owner: 'Daniel Cole',
        location: 'Lagos, Nigeria',
        rating: '4.7',
        followers: '960 Followers',
        tags: ['Gadgets', 'Tech', 'Lagos, NG'],
        cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
        spotlight: 'Nova Tech is a gadget-friendly stall for practical accessories, smart devices, and everyday tech support.',
        bio: 'Nova Tech showcases modern tech accessories and reliable device essentials for busy shoppers.',
        memberSince: 'October 2021',
        trades: '310+ completed • 1 dispute',
        categories: 'Gadgets, Tech, Accessories'
    },
    'smart-hub': {
        name: 'Smart Hub',
        owner: 'Joy Eke',
        location: 'Abuja, Nigeria',
        rating: '4.8',
        followers: '1.0K Followers',
        tags: ['Gadgets', 'Smart', 'Abuja, NG'],
        cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80',
        spotlight: 'Smart Hub makes everyday tech simple with smart devices, power tools, and gadget accessories shoppers love.',
        bio: 'Smart Hub brings practical gadgets and smart lifestyle pieces to customers who want fast, modern shopping.',
        memberSince: 'November 2022',
        trades: '340+ completed • 0 disputes',
        categories: 'Gadgets, Smart Devices, Accessories'
    },
    'charge-zone': {
        name: 'Charge Zone',
        owner: 'Nneka Okoli',
        location: 'Port Harcourt, Nigeria',
        rating: '4.6',
        followers: '890 Followers',
        tags: ['Gadgets', 'Power', 'PH, NG'],
        cover: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&q=80',
        spotlight: 'Charge Zone keeps customers powered up with chargers, accessories, and reliable tech essentials.',
        bio: 'Charge Zone focuses on mobile power, cables, and smart gadget accessories for home and travel use.',
        memberSince: 'January 2024',
        trades: '280+ completed • 0 disputes',
        categories: 'Gadgets, Power, Accessories'
    }
};

const productCatalog = {
    'aishas-glow': [
        { name: 'Glow Body Cream', price: '₦8,500', sold: '126 sold', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80', negotiable: false },
        { name: 'Luxury Lipstick Set', price: '₦6,200', sold: '84 sold', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80', negotiable: true },
        { name: 'Vitamin C Serum', price: '₦12,000', sold: '91 sold', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80', negotiable: false },
        { name: 'Silky Face Mask', price: '₦4,800', sold: '73 sold', img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80', negotiable: true }
    ],
    'urban-thread': [
        { name: 'Baby Bloom Set', price: '₦11,500', sold: '49 sold', img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=500&q=80', negotiable: false },
        { name: 'Cute Mini Dress', price: '₦9,800', sold: '38 sold', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&q=80', negotiable: true },
        { name: 'Kids Sneakers', price: '₦13,200', sold: '55 sold', img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80', negotiable: false },
        { name: 'Playtime Hoodie', price: '₦8,900', sold: '42 sold', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80', negotiable: true }
    ],
    'sport-house': [
        { name: 'Air Runner Sneakers', price: '₦45,000', sold: '58 sold', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', negotiable: true },
        { name: 'Performance Gym Set', price: '₦18,500', sold: '72 sold', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80', negotiable: false },
        { name: 'Training Hoodie', price: '₦14,000', sold: '41 sold', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80', negotiable: true },
        { name: 'Compression Leggings', price: '₦9,800', sold: '63 sold', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80', negotiable: false }
    ],
    'rickieluxe-accessories': [
        { name: 'Pearls Beaded Bracelet', price: '₦8,500', sold: '132 sold', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80', negotiable: false },
        { name: 'Round Earrings', price: '₦12,000', sold: '94 sold', img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&q=80', negotiable: true },
        { name: 'Silver Necklace', price: '₦18,500', sold: '67 sold', img: 'https://media.istockphoto.com/id/459298305/photo/diamond-necklace.webp?a=1&b=1&s=612x612&w=0&k=20&c=DWV7U7ncSY-jDhJG_sLDWTuH9POIjmHYXuVpp9ErhWg=', negotiable: true },
        { name: 'Silver Charm Ring', price: '₦7,200', sold: '86 sold', img: 'https://images.unsplash.com/photo-1727989014019-f14086d5359a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', negotiable: false }
    ],
    'luxe-bags': [
        { name: 'Signature Tote Bag', price: '₦48,500', sold: '39 sold', img:'https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D', negotiable: false },
        { name: 'Classic Leather Handbag', price: '₦52,000', sold: '21 sold', img: 'https://images.unsplash.com/photo-1682745230951-8a5aa9a474a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhc3NpYyUyMGxlYXRoZXIlMjBoYW5kYmFnfGVufDB8fDB8fHww', negotiable: true },
        { name: 'Mini Crossbody Satchel', price: '₦26,500', sold: '48 sold', img: 'https://images.unsplash.com/photo-1728516610214-7baac5761e14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxtaW5pJTIwY3Jvc3Nib2R5JTIwc2F0Y2hlbHxlbnwwfHwwfHx8MA%3D%3D', negotiable: true },
        { name: 'Ofice Handbag', price: '₦33,000', sold: '17 sold', img: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwbGVhdGhlciUyMGhhbmRiYWd8ZW58MHx8MHx8fDA%3D', negotiable: false }
    ],
    'olu-gems': [
        { name: '100% Cotton Ankara', price: '₦25,000', sold: '24 sold', img: 'https://africanfabs.com/cdn/shop/files/CO-3029-Orange-Pink-Rosette-Burst_900x.jpg?v=1781556976', negotiable: false },
        { name: '100% Polycotton Ankara', price: '₦20,000', sold: '112 sold', img: 'https://africanfabs.com/cdn/shop/files/PO-5024-Green-Yellow-Tropical-Bloom_360x.jpg?v=1776723528', negotiable: true },
        { name: '100% Cotton Ankara', price: '₦25,000', sold: '56 sold', img: 'https://africanfabs.com/cdn/shop/files/CO-3030-Orange-Blue-Ornamental-Arch_470x.jpg?v=1781556625', negotiable: true },
        { name: 'Handwoven Ankara', price: '₦25,000', sold: '18 sold', img: 'https://africanfabs.com/cdn/shop/files/CO-3020-Orange-Blue-Tribal-Shield_470x.jpg?v=1781556965', negotiable: false }
    ],
    'arcade-hub': [
        { name: 'Wireless Gaming Headset', price: '₦32,000', sold: '84 sold', img: 'https://images.unsplash.com/photo-1589571894960-20bbe2828aa0?w=500&q=80', negotiable: false },
        { name: 'RGB Gaming Mouse', price: '₦14,500', sold: '96 sold', img: 'https://images.unsplash.com/photo-1555617117-08b2d1ef8fa0?w=500&q=80', negotiable: true },
        { name: 'Controller Charging Dock', price: '₦9,800', sold: '58 sold', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80', negotiable: false },
        { name: 'Portable Retro Gamepad', price: '₦18,200', sold: '42 sold', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80', negotiable: true }
    ],
    'game-house': [
        { name: 'Pro Gamer Controller', price: '₦22,000', sold: '78 sold', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80', negotiable: false },
        { name: 'RGB Mechanical Keyboard', price: '₦28,500', sold: '110 sold', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80', negotiable: true },
        { name: 'OLED Gaming Monitor', price: '₦125,000', sold: '24 sold', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80', negotiable: false },
        { name: 'Console Gamepad Set', price: '₦12,300', sold: '64 sold', img: 'https://images.unsplash.com/photo-1637160151663-a410315e4e75?w=500&q=80', negotiable: true }
    ],
    'pixel-play': [
        { name: 'Retro Arcade Stick', price: '₦19,800', sold: '53 sold', img: 'https://images.unsplash.com/photo-1589571894960-20bbe2828aa0?w=500&q=80', negotiable: false },
        { name: 'Portable Gaming Console', price: '₦38,000', sold: '32 sold', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80', negotiable: true },
        { name: 'VR Headset', price: '₦98,500', sold: '18 sold', img: 'https://plus.unsplash.com/premium_photo-1711004075928-dfa6fb242a51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHx2ciUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D', negotiable: false },
        { name: 'Arcade Token Pack', price: '₦4,900', sold: '88 sold', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', negotiable: true }
    ],
    'quest-corner': [
        { name: 'Gaming Laptop Stand', price: '₦16,500', sold: '64 sold', img: 'https://images.unsplash.com/photo-1555617117-08b2d1ef8fa0?w=500&q=80', negotiable: false },
        { name: 'Multiplayer Headset', price: '₦26,000', sold: '73 sold', img: 'https://images.unsplash.com/photo-1637160151663-a410315e4e75?w=500&q=80', negotiable: true },
        { name: 'Strategic Board Game', price: '₦9,200', sold: '111 sold', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80', negotiable: false },
        { name: 'Gamer Mouse Pad', price: '₦3,900', sold: '145 sold', img: 'https://images.unsplash.com/photo-1589571894960-20bbe2828aa0?w=500&q=80', negotiable: true }
    ],
    'nova-tech': [
        { name: 'Wooden Laptop Stand', price: '₦16,500', sold: '64 sold', img: 'https://images.unsplash.com/photo-1575399545768-5f1840c1312d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwc3RhbmR8ZW58MHx8MHx8fDA%3D', negotiable: false },
        { name: 'Portable Headset', price: '₦26,000', sold: '73 sold', img: 'https://images.unsplash.com/photo-1628329567705-f8f7150c3cff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaCUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D', negotiable: true },
        { name: 'Strategic Board Game', price: '₦30,000', sold: '111 sold', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80', negotiable: false },
        { name: 'Wireless Mouse', price: '₦25,000', sold: '145 sold', img: 'https://images.unsplash.com/photo-1629121291243-7b5e885cce9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpcmVsZXNzJTIwbW91c2V8ZW58MHx8MHx8fDA%3D', negotiable: true }
    ],
    'sneakers-spot': [
        { name: 'Wooden Laptop Stand', price: '₦16,500', sold: '64 sold', img: 'https://images.unsplash.com/photo-1575399545768-5f1840c1312d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwc3RhbmR8ZW58MHx8MHx8fDA%3D', negotiable: false },
        { name: 'Portable Headset', price: '₦26,000', sold: '73 sold', img: 'https://images.unsplash.com/photo-1628329567705-f8f7150c3cff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaCUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D', negotiable: true },
        { name: 'Strategic Board Game', price: '₦30,000', sold: '111 sold', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80', negotiable: false },
        { name: 'Wireless Mouse', price: '₦25,000', sold: '145 sold', img: 'https://images.unsplash.com/photo-1629121291243-7b5e885cce9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpcmVsZXNzJTIwbW91c2V8ZW58MHx8MHx8fDA%3D', negotiable: true }
    ],
    'default': [
        { name: '100% Cotton Ankara', price: '₦25,000', sold: '24 sold', img: 'https://africanfabs.com/cdn/shop/files/CO-3029-Orange-Pink-Rosette-Burst_900x.jpg?v=1781556976', negotiable: false },
        { name: '100% Polycotton Ankara', price: '₦20,000', sold: '112 sold', img: 'https://africanfabs.com/cdn/shop/files/PO-5024-Green-Yellow-Tropical-Bloom_360x.jpg?v=1776723528', negotiable: true },
        { name: '100% Cotton Ankara', price: '₦25,000', sold: '56 sold', img: 'https://africanfabs.com/cdn/shop/files/CO-3030-Orange-Blue-Ornamental-Arch_470x.jpg?v=1781556625', negotiable: true },
        { name: 'Handwoven Ankara', price: '₦25,000', sold: '18 sold', img: 'https://africanfabs.com/cdn/shop/files/CO-3020-Orange-Blue-Tribal-Shield_470x.jpg?v=1781556965', negotiable: false }
    ]
};

function getVendor(key) {
    return vendorCatalog[key] || vendorCatalog['olu-gems'];
}

function renderProducts(vendorKey) {
    const items = productCatalog[vendorKey] || productCatalog.default;
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    const vendor = getVendor(vendorKey);
    const sellerName = vendor.name;
    productsGrid.innerHTML = items.map(item => {
        const params = new URLSearchParams({
            name: item.name,
            price: item.price,
            seller: sellerName,
            sellerKey: vendorKey,
            sellerCover: vendor.cover,
            sellerRating: vendor.rating,
            sellerFollowers: vendor.followers,
            img: item.img
        }).toString();

        return `
        <div class="grid-card" onclick="window.location.href='product-detail.html?${params}'">
            <img class="grid-card-img" src="${item.img}" alt="${item.name}" />
            ${item.negotiable ? '<span class="grid-neg-tag">Negotiable</span>' : ''}
            <button class="grid-wish-btn" onclick="event.stopPropagation(); toggleWish(this)"><i class="fa fa-heart"></i></button>
            <div class="grid-card-info">
                <div class="grid-card-name">${item.name}</div>
                <div class="grid-card-price">${item.price}</div>
                <div class="grid-card-sold">${item.sold}</div>
            </div>
        </div>
    `;
    }).join('');

    document.querySelectorAll('.grid-wish-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleWish(btn);
        });
    });
}

function applyVendorData(vendor) {
    document.title = `${vendor.name} - Awwja`;
    const cover = document.querySelector('.cover-img');
    if (cover) cover.src = vendor.cover;
    const spotlightImg = document.querySelector('.spotlight-img');
    if (spotlightImg) spotlightImg.src = vendor.cover;

    const nameEl = document.querySelector('.stall-name');
    if (nameEl) nameEl.textContent = vendor.name.toUpperCase();

    const tagWrap = document.querySelector('.stall-tags');
    if (tagWrap) {
        tagWrap.innerHTML = vendor.tags.map(tag => `<span class="stall-tag">${tag}</span>`).join('');
    }

    const metaEl = document.querySelector('.stall-meta');
    if (metaEl) {
        metaEl.innerHTML = `<span class="stall-rating"><i class="fa fa-star"></i> ${vendor.rating} Rating</span><span class="meta-dot">•</span><span>${vendor.followers}</span>`;
    }

    const aboutValues = document.querySelectorAll('.about-card .about-value');
    if (aboutValues.length >= 5) {
        aboutValues[0].textContent = vendor.owner;
        aboutValues[1].textContent = vendor.location;
        aboutValues[2].textContent = vendor.memberSince;
        aboutValues[3].textContent = vendor.trades;
        aboutValues[4].textContent = vendor.categories;
    }

    const aboutBio = document.querySelector('.about-bio p');
    if (aboutBio) aboutBio.textContent = vendor.bio;

    const spotlightBody = document.querySelector('.spotlight-body');
    if (spotlightBody) spotlightBody.textContent = vendor.spotlight;

    const productKey = window.location.search.match(/seller=([^&]+)/)?.[1] || 'olu-gems';
    renderProducts(productKey);
}

document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('nav-back');
    if (backBtn) {
        backBtn.type = 'button';
        backBtn.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (document.referrer) {
                window.location.href = document.referrer;
                return;
            }

            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'sellers.html';
            }
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const vendor = getVendor(urlParams.get('seller'));
    applyVendorData(vendor);

    const followBtn = document.getElementById('follow-btn');
    if (followBtn) followBtn.addEventListener('click', toggleFollow);

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.getAttribute('data-tab'), btn));
    });

    document.querySelectorAll('.grid-wish-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleWish(btn);
        });
    });
});

function switchTab(tabId, btn) {
    // Remove active class from all tabs and buttons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    // Add active class to selected
    btn.classList.add('active');
    document.getElementById('tab-' + tabId).classList.add('active');
}

function toggleFollow() {
    const btn = document.getElementById('follow-btn');
    if (btn.innerText.includes('Follow')) {
        btn.innerHTML = '<i class="fa fa-check"></i> Following';
        btn.style.background = '#eee';
        btn.style.color = '#1a1a1a';
    } else {
        btn.innerHTML = '<i class="fa fa-plus"></i> Follow';
        btn.style.background = 'var(--green)';
        btn.style.color = 'white';
    }
}

function toggleWish(btn) { btn.classList.toggle('active'); }