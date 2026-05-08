import { Bed, Utensils, Image as ImageIcon, MessageSquare, MapPin, Phone, Star, Coffee, Wifi, Car, Tv } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Dining', path: '/dining' },
  { name: 'Banquets', path: '/banquets' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const ROOM_TIERS = [
  {
    id: 'regal-suite',
    name: 'Regal Presidential Suite',
    description: 'The pinnacle of luxury with panoramic views and personalized butler service.',
    price: '₹12,499',
    image: 'https://images.unsplash.com/photo-1591088398332-8a77d399e843?q=80&w=1000&auto=format&fit=crop',
    amenities: ['Private Lounge', 'Jacuzzi', 'Mini Bar', '24/7 Service'],
  },
  {
    id: 'premium-deluxe',
    name: 'Premium Deluxe',
    description: 'A perfect blend of modern comfort and royal elegance for the sophisticated traveler.',
    price: '₹7,999',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop',
    amenities: ['King Bed', 'City View', 'Work Station', 'High-speed Wifi'],
  },
  {
    id: 'executive-comfort',
    name: 'Executive Comfort',
    description: 'Sleek design focused on productivity and relaxation for corporate guests.',
    price: '₹4,999',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d59735288?q=80&w=1000&auto=format&fit=crop',
    amenities: ['Queen Bed', 'Smart TV', 'Coffee Maker', 'Climate Control'],
  },
];

export const MENU_CATEGORIES = [
  {
    name: 'Starters & Snacks',
    items: [
      { name: 'Salt & Pepper Chicken', price: '₹180' },
      { name: 'Spicy Coriander Chicken', price: '₹200' },
      { name: 'Chicken Lollipop (6 pcs)', price: '₹210' },
      { name: 'Salt & Pepper Mushroom', price: '₹180' },
      { name: 'Crispy Chilly Mushroom', price: '₹170' },
      { name: 'Crispy Chicken', price: '₹200' },
      { name: 'Crispy Chilly Baby Corn', price: '₹170' },
      { name: 'Masala French Fry', price: '₹150' },
      { name: 'French Fry', price: '₹120' },
      { name: 'Masala Papad', price: '₹90' },
      { name: 'Roasted Papad', price: '₹60' },
    ],
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Kebabs & Tandoor',
    items: [
      { name: 'Chicken Tikka Kabab (6 pcs)', price: '₹220' },
      { name: 'Fish Tikka Kabab (6 pcs)', price: '₹240' },
      { name: 'Paneer Tikka Kabab (6 pcs)', price: '₹190' },
      { name: 'Chicken Reshmi Kabab (6 pcs)', price: '₹220' },
      { name: 'Fish Reshmi Kabab (6 pcs)', price: '₹240' },
      { name: 'Paneer Lahsuni Tikka', price: '₹200' },
      { name: 'Tandoori Chicken Half', price: '₹260' },
      { name: 'Tandoori Chicken Full', price: '₹480' },
      { name: 'Banjara Kabab', price: '₹240' },
      { name: 'Hariyali Kabab', price: '₹220' },
      { name: 'Chicken Achari Kabab', price: '₹220' },
      { name: 'Paneer Sufyani Tikka', price: '₹250' },
      { name: 'Paneer Nizami Tikka', price: '₹240' },
      { name: 'Tandoori Stuffed Aloo', price: '₹170' },
      { name: 'Kundan Tara Kabab (Mushroom)', price: '₹180' },
      { name: 'Hara Bhara Kabab', price: '₹160' },
    ],
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Chinese Starters',
    items: [
      { name: 'Veg Manchurian Dry', price: '₹160' },
      { name: 'Paneer Manchurian Dry', price: '₹190' },
      { name: 'Chicken Manchurian Dry', price: '₹200' },
      { name: 'Fish Manchurian Dry', price: '₹240' },
      { name: 'Mushroom Manchurian Dry', price: '₹180' },
      { name: 'Chilly Mushroom Dry', price: '₹180' },
      { name: 'Chicken Koliwada', price: '₹180' },
      { name: 'Fish Koliwada', price: '₹210' },
      { name: 'Chicken Strips', price: '₹180' },
      { name: 'Chicken BBQ Wings', price: '₹220' },
      { name: 'Kung-Pao Chicken', price: '₹200' },
      { name: 'Kung-Pao Fish', price: '₹220' },
      { name: 'Tai Pai Chicken', price: '₹200' },
      { name: 'Tai Pai Fish', price: '₹220' },
    ],
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Soups',
    items: [
      { name: 'Veg Hot & Sour Soup', price: '₹70' },
      { name: 'Chicken Hot & Sour Soup', price: '₹90' },
      { name: 'Veg Manchow Soup', price: '₹70' },
      { name: 'Chicken Manchow Soup', price: '₹90' },
      { name: 'Veg Sweet Corn Soup', price: '₹70' },
      { name: 'Chicken Sweet Corn Soup', price: '₹90' },
      { name: 'Classic Tomato Soup', price: '₹70' },
      { name: 'Cream Tomato Soup', price: '₹80' },
      { name: 'Veg Lemon Coriander Soup', price: '₹70' },
      { name: 'Chicken Lemon Coriander Soup', price: '₹90' },
      { name: 'Mushroom Cappuccino Soup', price: '₹100' },
      { name: 'Veg Clear Soup', price: '₹70' },
      { name: 'Chicken Clear Soup', price: '₹90' },
    ],
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Chinese Main Course',
    items: [
      { name: 'Chilli Gravy Paneer', price: '₹190' },
      { name: 'Chilli Gravy Chicken', price: '₹200' },
      { name: 'Chilli Gravy Fish', price: '₹240' },
      { name: 'Chilli Gravy Prawn', price: '₹240' },
      { name: 'Manchurian Gravy Veg', price: '₹160' },
      { name: 'Manchurian Gravy Paneer', price: '₹190' },
      { name: 'Manchurian Gravy Chicken', price: '₹200' },
      { name: 'Manchurian Gravy Fish', price: '₹240' },
      { name: 'Hot Garlic Gravy Paneer', price: '₹190' },
      { name: 'Hot Garlic Gravy Mushroom', price: '₹180' },
      { name: 'Hot Garlic Gravy Chicken', price: '₹200' },
      { name: 'Hot Garlic Gravy Fish', price: '₹240' },
      { name: 'Lemon Garlic Gravy Paneer', price: '₹180' },
      { name: 'Lemon Garlic Gravy Mushroom', price: '₹170' },
      { name: 'Lemon Garlic Gravy Chicken', price: '₹190' },
      { name: 'Lemon Garlic Gravy Fish', price: '₹230' },
    ],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Fried Rice & Noodles',
    items: [
      { name: 'Veg Fried Rice', price: '₹140' },
      { name: 'Egg Fried Rice', price: '₹160' },
      { name: 'Chicken Fried Rice', price: '₹170' },
      { name: 'Mix Fried Rice', price: '₹200' },
      { name: 'Veg Schezwan Fried Rice', price: '₹150' },
      { name: 'Chicken Schezwan Fried Rice', price: '₹180' },
      { name: 'Veg Burn Garlic Fried Rice', price: '₹150' },
      { name: 'Chicken Burn Garlic Fried Rice', price: '₹180' },
      { name: 'Veg Fried Noodles', price: '₹140' },
      { name: 'Chicken Fried Noodles', price: '₹170' },
      { name: 'Veg Schezwan Noodles', price: '₹150' },
      { name: 'Chicken Schezwan Noodles', price: '₹180' },
      { name: 'Veg Burn Garlic Noodles', price: '₹150' },
      { name: 'Chicken Burn Garlic Noodles', price: '₹180' },
    ],
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Indian Main Course (Veg)',
    items: [
      { name: 'Dal Fry', price: '₹160' },
      { name: 'Dal Makhani', price: '₹190' },
      { name: 'Aloo Jeera', price: '₹140' },
      { name: 'Mix Veg Curry', price: '₹160' },
      { name: 'Veg Kolhapuri', price: '₹170' },
      { name: 'Mushroom Masala', price: '₹160' },
      { name: 'Paneer Butter Masala', price: '₹190' },
      { name: 'Paneer Lababdar', price: '₹180' },
      { name: 'Kadai Paneer', price: '₹170' },
      { name: 'Shahi Paneer', price: '₹180' },
      { name: 'Palak Paneer', price: '₹180' },
      { name: 'Paneer Tikka Masala', price: '₹200' },
      { name: 'Malai Kofta', price: '₹190' },
    ],
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Indian Main Course (Non Veg)',
    items: [
      { name: 'Chicken Curry', price: '₹160' },
      { name: 'Kadai Chicken', price: '₹180' },
      { name: 'Chicken Masala', price: '₹170' },
      { name: 'Chicken Do Pyaza', price: '₹180' },
      { name: 'Chicken Kasa', price: '₹170' },
      { name: 'Chicken Butter Masala', price: '₹200' },
      { name: 'Chicken Tikka Butter Masala', price: '₹240' },
      { name: 'Chicken Lababdar', price: '₹200' },
      { name: 'Mutton Curry', price: '₹280' },
      { name: 'Mutton Kasa', price: '₹290' },
      { name: 'Mutton Rogan Josh', price: '₹300' },
      { name: 'Lal Maans', price: '₹300' },
      { name: 'Fish Curry Katla', price: '₹160' },
      { name: 'Fish Curry Vetki', price: '₹180' },
      { name: 'Fish Masala Vetki', price: '₹190' },
      { name: 'Prawn Masala', price: '₹250' },
    ],
    image: 'https://images.unsplash.com/photo-1603894584216-78598aa9663d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Biryani',
    items: [
      { name: 'Aloo Biryani', price: '₹120' },
      { name: 'Veg Biryani', price: '₹140' },
      { name: 'Egg Biryani', price: '₹140' },
      { name: 'Chicken Biryani', price: '₹160' },
      { name: 'Chicken Biryani with Egg', price: '₹170' },
      { name: 'Double Chicken Biryani', price: '₹190' },
      { name: 'Special Chicken Biryani', price: '₹200' },
      { name: 'Mutton Biryani', price: '₹180' },
      { name: 'Double Mutton Biryani', price: '₹220' },
      { name: 'Special Mutton Biryani', price: '₹230' },
    ],
    image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Bread',
    items: [
      { name: 'Tandoori Roti', price: '₹20' },
      { name: 'Butter Tandoori Roti', price: '₹25' },
      { name: 'Plain Naan', price: '₹50' },
      { name: 'Butter Naan', price: '₹60' },
      { name: 'Garlic Naan', price: '₹70' },
      { name: 'Chilli Garlic Naan', price: '₹80' },
      { name: 'Laccha Paratha', price: '₹50' },
      { name: 'Masala Kulcha', price: '₹70' },
      { name: 'Rumali Roti', price: '₹50' },
    ],
    image: 'https://images.unsplash.com/photo-1533777853639-61f49679c6d3?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Rolls',
    items: [
      { name: 'Veg Kati Roll', price: '₹89' },
      { name: 'Paneer Tikka Roll', price: '₹99' },
      { name: 'Chicken Tikka Roll', price: '₹129' },
      { name: 'Egg Roll', price: '₹50' },
      { name: 'Chicken Lachha Roll', price: '₹90' },
    ],
    image: 'https://images.unsplash.com/photo-1626132644529-eb6e3d973950?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'South Indian',
    items: [
      { name: 'Plain Dosa', price: '₹50' },
      { name: 'Masala Dosa', price: '₹70' },
      { name: 'Chinese Dosa', price: '₹80' },
      { name: 'Paneer Butter Masala Dosa', price: '₹100' },
      { name: 'Chilli Paneer Dosa', price: '₹100' },
      { name: 'Plain Uttapam', price: '₹50' },
      { name: 'Onion Uttapam', price: '₹60' },
      { name: 'Mix Uttapam', price: '₹70' },
      { name: 'Cheese Uttapam', price: '₹90' },
    ],
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Beverages & Mocktails',
    items: [
      { name: 'Tea', price: '₹25' },
      { name: 'Coffee', price: '₹35' },
      { name: 'Black Tea', price: '₹20' },
      { name: 'Black Coffee', price: '₹30' },
      { name: 'Cold Coffee', price: '₹90' },
      { name: 'Mint Mojito', price: '₹90' },
      { name: 'Lemon Ice Tea', price: '₹110' },
      { name: 'Peach Ice Tea', price: '₹110' },
      { name: 'Fresh Lime Soda', price: '₹70' },
      { name: 'Lassi Plain', price: '₹60' },
      { name: 'Special Lassi', price: '₹90' },
      { name: 'Oreo Milkshake', price: '₹100' },
      { name: 'KitKat Milkshake', price: '₹110' },
      { name: 'Chocolate Milkshake', price: '₹90' },
    ],
    image: 'https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Gulab Jamun', price: '₹25' },
      { name: 'Choice of Ice Cream', price: '₹60' },
      { name: 'Fry Ice Cream', price: '₹120' },
      { name: 'Mix Tutti Frutti', price: '₹150' },
    ],
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1000&auto=format&fit=crop'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Vikram Malhotra',
    role: 'Corporate Traveler',
    comment: 'The finest stay in Durgapur. The attention to detail and service is truly world-class.',
    rating: 5
  },
  {
    name: 'Ananya Sen',
    role: 'Food Critic',
    comment: 'Sher E Bengal sets a new standard for Mughlai cuisine. The Awadhi Korma was a masterpiece.',
    rating: 5
  },
  {
    name: 'Rahul Chatterjee',
    role: 'Business Guest',
    comment: 'Modern amenities paired with traditional hospitality. Perfect for my business visits.',
    rating: 4.8
  }
];

export const CONTACT_INFO = {
  address: 'Jadabendra Panja Ave, City Center, Durgapur, West Bengal 713216',
  phone: '+91 96099 00511',
  email: 'stay@sherebengal.com',
  coordinates: { lat: 23.5358, lng: 87.2917 }
};
