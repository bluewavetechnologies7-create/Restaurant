export type Language = 'en' | 'ar';

export interface MenuItem {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description?: {
    en: string;
    ar: string;
  };
  price: number;
  category: string;
  image?: string;
  isPopular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const CATEGORIES = [
  'Mutabbaq', 'Meat', 'Qalabat', 'Falafel & Hummus', 'Fava & Lentils', 
  'Areeka', 'Masoub', 'Bakery', 'Breakfast', 'Sandwiches', 'Drinks'
];

export const CATEGORY_IMAGES: { [key: string]: string } = {
  'Mutabbaq': 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=2070&auto=format&fit=crop',
  'Meat': 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop',
  'Qalabat': 'https://images.pexels.com/photos/19870150/pexels-photo-19870150.jpeg',
  'Falafel & Hummus': 'https://images.pexels.com/photos/31610388/pexels-photo-31610388.jpeg',
  'Fava & Lentils': 'https://media.istockphoto.com/id/1130228942/photo/indian-dal-traditional-indian-soup-lentils-indian-dhal-spicy-curry-in-bowl-spices-herbs.jpg?b=1&s=612x612&w=0&k=20&c=CwD85jsvN8C2r4pFNyJSWuAVpGXsg2vBIn0POWVE0CA=',
  'Areeka': 'https://aicdn.picsart.com/30bc9456-c84c-42ca-8bf2-764923cc44d2.png',
  'Masoub': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
  'Bakery': 'https://aicdn.picsart.com/2c61e962-dfe7-4459-8b85-843e8667192e.png',
  'Breakfast': 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop',
  'Sandwiches': 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop',
  'Drinks': 'https://images.pexels.com/photos/10768378/pexels-photo-10768378.jpeg'
};

export const MENU_HERO_IMAGE = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop';
export const ABOUT_HERO_IMAGE = 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop';
export const CHEF_IMAGE = 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1974&auto=format&fit=crop';
export const HERO_VIDEO_POSTER = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop';

export const MENU_ITEMS: MenuItem[] = [
  // --- Mutabbaq (مطبق) ---
  { id: 'm1_s', name: { en: 'Plain Mutabbaq (Small)', ar: 'مطبق سادة (صغير)' }, price: 8, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm1_l', name: { en: 'Plain Mutabbaq (Large)', ar: 'مطبق سادة (كبير)' }, price: 9, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm2_s', name: { en: 'Plain Tuna Mutabbaq (Small)', ar: 'مطبق تونة سادة (صغير)' }, price: 9, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm2_l', name: { en: 'Plain Tuna Mutabbaq (Large)', ar: 'مطبق تونة سادة (كبير)' }, price: 10, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm3_s', name: { en: 'Tuna Mutabbaq with Cheese (Small)', ar: 'مطبق تونة بالجبنة (صغير)' }, price: 10, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm3_l', name: { en: 'Tuna Mutabbaq with Cheese (Large)', ar: 'مطبق تونة بالجبنة (كبير)' }, price: 11, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm4_s', name: { en: 'Chicken Mutabbaq (Small)', ar: 'مطبق دجاج (صغير)' }, price: 10, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm4_l', name: { en: 'Chicken Mutabbaq (Large)', ar: 'مطبق دجاج (كبير)' }, price: 11, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm5_s', name: { en: 'Chicken Mutabbaq with Cheese (Small)', ar: 'مطبق دجاج بالجبنة (صغير)' }, price: 11, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm5_l', name: { en: 'Chicken Mutabbaq with Cheese (Large)', ar: 'مطبق دجاج بالجبنة (كبير)' }, price: 12, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm6_s', name: { en: 'Meat Mutabbaq (Small)', ar: 'مطبق لحم (صغير)' }, price: 11, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm6_l', name: { en: 'Meat Mutabbaq (Large)', ar: 'مطبق لحم (كبير)' }, price: 12, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm7_s', name: { en: 'Meat Mutabbaq with Cheese (Small)', ar: 'مطبق لحم بالجبنة (صغير)' }, price: 12, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm7_l', name: { en: 'Meat Mutabbaq with Cheese (Large)', ar: 'مطبق لحم بالجبنة (كبير)' }, price: 13, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm8_s', name: { en: 'Mixed Mutabbaq (Small)', ar: 'مطبق مشكل (صغير)' }, price: 12, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm8_l', name: { en: 'Mixed Mutabbaq (Large)', ar: 'مطبق مشكل (كبير)' }, price: 13, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop' },
  { id: 'm9_s', name: { en: 'Nutella Mutabbaq (Small)', ar: 'مطبق نوتيلا (صغير)' }, price: 10, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'm9_l', name: { en: 'Nutella Mutabbaq (Large)', ar: 'مطبق نوتيلا (كبير)' }, price: 12, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'm10_s', name: { en: 'Honey Mutabbaq (Small)', ar: 'مطبق عسل (صغير)' }, price: 9, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'm10_l', name: { en: 'Honey Mutabbaq (Large)', ar: 'مطبق عسل (كبير)' }, price: 10, category: 'Mutabbaq', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },

  // --- Meat (اللحوم) ---
  { id: 'mt1_s', name: { en: 'Liver (Small)', ar: 'كبدة (صغير)' }, price: 13, category: 'Meat', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt1_l', name: { en: 'Liver (Large)', ar: 'كبدة (كبير)' }, price: 15, category: 'Meat', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt2_s', name: { en: 'Liver with Cheese (Small)', ar: 'كبدة بالجبنة (صغير)' }, price: 15, category: 'Meat', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt2_l', name: { en: 'Liver with Cheese (Large)', ar: 'كبدة بالجبنة (كبير)' }, price: 17, category: 'Meat', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt3_s', name: { en: 'Meat (Small)', ar: 'لحم (صغير)' }, price: 17, category: 'Meat', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt3_l', name: { en: 'Meat (Large)', ar: 'لحم (كبير)' }, price: 18, category: 'Meat', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt4_s', name: { en: 'Meat with Cheese (Small)', ar: 'لحم بالجبنة (صغير)' }, price: 18, category: 'Meat', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt4_l', name: { en: 'Meat with Cheese (Large)', ar: 'لحم بالجبنة (كبير)' }, price: 19, category: 'Meat', image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt5_s', name: { en: 'Maqalqal (Small)', ar: 'مقلقل (صغير)' }, price: 12, category: 'Meat', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt5_l', name: { en: 'Maqalqal (Large)', ar: 'مقلقل (كبير)' }, price: 15, category: 'Meat', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt6_s', name: { en: 'Maqalqal with Cheese (Small)', ar: 'مقلقل بالجبنة (صغير)' }, price: 14, category: 'Meat', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt6_l', name: { en: 'Maqalqal with Cheese (Large)', ar: 'مقلقل بالجبنة (كبير)' }, price: 17, category: 'Meat', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt7_s', name: { en: 'Sausage (Small)', ar: 'سجق (صغير)' }, price: 10, category: 'Meat', image: 'https://images.unsplash.com/photo-1541048028917-382916301724?q=80&w=800&auto=format&fit=crop' },
  { id: 'mt7_l', name: { en: 'Sausage (Large)', ar: 'سجق (كبير)' }, price: 12, category: 'Meat', image: 'https://images.unsplash.com/photo-1541048028917-382916301724?q=80&w=800&auto=format&fit=crop' },

  // --- Qalabat (القلابات) ---
  { id: 'q1_s', name: { en: 'Fava Beans (Small)', ar: 'فول (صغير)' }, price: 8, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'q1_l', name: { en: 'Fava Beans (Large)', ar: 'فول (كبير)' }, price: 9, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'q2_s', name: { en: 'Fava Beans with Cheese (Small)', ar: 'فول بالجبنة (صغير)' }, price: 10, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'q2_l', name: { en: 'Fava Beans with Cheese (Large)', ar: 'فول بالجبنة (كبير)' }, price: 11, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'q3_s', name: { en: 'Fava Beans with Egg (Small)', ar: 'فول بالبيض (صغير)' }, price: 11, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'q3_l', name: { en: 'Fava Beans with Egg (Large)', ar: 'فول بالبيض (كبير)' }, price: 12, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'q4_s', name: { en: 'Fava Beans with Egg & Cheese (Small)', ar: 'فول بالبيض والجبنة (صغير)' }, price: 11, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'q4_l', name: { en: 'Fava Beans with Egg & Cheese (Large)', ar: 'فول بالبيض والجبنة (كبير)' }, price: 13, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'q5_s', name: { en: 'Falafel (Small)', ar: 'فلافل (صغير)' }, price: 7, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'q5_l', name: { en: 'Falafel (Large)', ar: 'فلافل (كبير)' }, price: 8, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'q6_s', name: { en: 'Falafel with Cheese (Small)', ar: 'فلافل بالجبنة (صغير)' }, price: 9, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'q6_l', name: { en: 'Falafel with Cheese (Large)', ar: 'فلافل بالجبنة (كبير)' }, price: 11, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'q7_s', name: { en: 'Shakshuka (Small)', ar: 'شكشوكة (صغير)' }, price: 8, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1590412200988-a436bb7050a8?q=80&w=800&auto=format&fit=crop' },
  { id: 'q7_l', name: { en: 'Shakshuka (Large)', ar: 'شكشوكة (كبير)' }, price: 10, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1590412200988-a436bb7050a8?q=80&w=800&auto=format&fit=crop' },
  { id: 'q8_s', name: { en: 'Labneh (Small)', ar: 'لبنة (صغير)' }, price: 7, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1631209121750-a9f87693895e?q=80&w=800&auto=format&fit=crop' },
  { id: 'q8_l', name: { en: 'Labneh (Large)', ar: 'لبنة (كبير)' }, price: 8, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1631209121750-a9f87693895e?q=80&w=800&auto=format&fit=crop' },
  { id: 'q9_s', name: { en: 'Labneh with Honey (Small)', ar: 'لبنة بالعسل (صغير)' }, price: 8, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1631209121750-a9f87693895e?q=80&w=800&auto=format&fit=crop' },
  { id: 'q9_l', name: { en: 'Labneh with Honey (Large)', ar: 'لبنة بالعسل (كبير)' }, price: 10, category: 'Qalabat', image: 'https://images.unsplash.com/photo-1631209121750-a9f87693895e?q=80&w=800&auto=format&fit=crop' },

  // --- Falafel & Hummus (طعمية وحمص) ---
  { id: 'fh1_s', name: { en: 'Plain Falafel (Small)', ar: 'طعمية سادة (صغير)' }, price: 4, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh1_l', name: { en: 'Plain Falafel (Large)', ar: 'طعمية سادة (كبير)' }, price: 5, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh2_s', name: { en: 'Falafel with Egg (Small)', ar: 'طعمية بالبيض (صغير)' }, price: 5, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh2_l', name: { en: 'Falafel with Egg (Large)', ar: 'طعمية بالبيض (كبير)' }, price: 6, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh3_s', name: { en: 'Falafel with Cheese & Hummus (Small)', ar: 'طعمية بالجبنة والحمص (صغير)' }, price: 4, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh3_l', name: { en: 'Falafel with Cheese & Hummus (Large)', ar: 'طعمية بالجبنة والحمص (كبير)' }, price: 5, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh4_s', name: { en: 'Falafel with Meat (Small)', ar: 'طعمية باللحم (صغير)' }, price: 5, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh4_l', name: { en: 'Falafel with Meat (Large)', ar: 'طعمية باللحم (كبير)' }, price: 6, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh5_s', name: { en: 'Mixed Falafel (Small)', ar: 'طعمية مشكلة (صغير)' }, price: 6, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh5_l', name: { en: 'Mixed Falafel (Large)', ar: 'طعمية مشكلة (كبير)' }, price: 7, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh6_s', name: { en: 'Falafel Sandwich (Small)', ar: 'ساندويتش طعمية (صغير)' }, price: 5, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh6_l', name: { en: 'Falafel Sandwich (Large)', ar: 'ساندويتش طعمية (كبير)' }, price: 6, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh7_s', name: { en: 'Falafel Sandwich with Cheese (Small)', ar: 'ساندويتش طعمية بالجبنة (صغير)' }, price: 5, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh7_l', name: { en: 'Falafel Sandwich with Cheese (Large)', ar: 'ساندويتش طعمية بالجبنة (كبير)' }, price: 7, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh8_s', name: { en: 'Plain Hummus (Small)', ar: 'حمص سادة (صغير)' }, price: 5, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh8_l', name: { en: 'Plain Hummus (Large)', ar: 'حمص سادة (كبير)' }, price: 7, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh9_s', name: { en: 'Hummus with Meat (Small)', ar: 'حمص باللحم (صغير)' }, price: 7, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh9_l', name: { en: 'Hummus with Meat (Large)', ar: 'حمص باللحم (كبير)' }, price: 9, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh10_s', name: { en: 'Hummus with Cheese (Small)', ar: 'حمص بالجبنة (صغير)' }, price: 5, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'fh10_l', name: { en: 'Hummus with Cheese (Large)', ar: 'حمص بالجبنة (كبير)' }, price: 7, category: 'Falafel & Hummus', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },

  // --- Fava, Lentils & Qalaba (فول وعدس وقلابة) ---
  { 
    id: 'fl1_s', 
    name: { en: 'Fava or Lentils (Small)', ar: 'فول أو عدس (صغير)' }, 
    description: { en: 'Traditional slow-cooked legumes seasoned with authentic spices.', ar: 'بقوليات مطهوة ببطء ومتبلة بالبهارات الأصيلة.' },
    price: 3, 
    category: 'Fava & Lentils', 
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  { 
    id: 'fl1_l', 
    name: { en: 'Fava or Lentils (Large)', ar: 'فول أو عدس (كبير)' }, 
    description: { en: 'Traditional slow-cooked legumes seasoned with authentic spices.', ar: 'بقوليات مطهوة ببطء ومتبلة بالبهارات الأصيلة.' },
    price: 5, 
    category: 'Fava & Lentils', 
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 'fl2_s', 
    name: { en: 'Fava with Oil (Small)', ar: 'فول بالزيت (صغير)' }, 
    description: { en: 'Rich fava beans drizzled with premium olive oil.', ar: 'فول غني بزيت الزيتون الفاخر.' },
    price: 4, 
    category: 'Fava & Lentils', 
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 'fl2_l', 
    name: { en: 'Fava with Oil (Large)', ar: 'فول بالزيت (كبير)' }, 
    description: { en: 'Rich fava beans drizzled with premium olive oil.', ar: 'فول غني بزيت الزيتون الفاخر.' },
    price: 7, 
    category: 'Fava & Lentils', 
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' 
  },
  { id: 'fl3_s', name: { en: 'Plain Lentils (Small)', ar: 'عدس سادة (صغير)' }, price: 4, category: 'Fava & Lentils', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop' },
  { id: 'fl3_l', name: { en: 'Plain Lentils (Large)', ar: 'عدس سادة (كبير)' }, price: 5, category: 'Fava & Lentils', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop' },
  { id: 'fl4_s', name: { en: 'Lentils with Lemon (Small)', ar: 'عدس بالليمون (صغير)' }, price: 7, category: 'Fava & Lentils', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop' },
  { id: 'fl4_l', name: { en: 'Lentils with Lemon (Large)', ar: 'عدس بالليمون (كبير)' }, price: 8, category: 'Fava & Lentils', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop' },

  // --- Areeka (عريكة) ---
  { id: 'a1_s', name: { en: 'Plain Areeka (Small)', ar: 'عريكة سادة (صغير)' }, price: 4, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a1_m', name: { en: 'Plain Areeka (Medium)', ar: 'عريكة سادة (وسط)' }, price: 6, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a1_l', name: { en: 'Plain Areeka (Large)', ar: 'عريكة سادة (كبير)' }, price: 7, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a2_s', name: { en: 'Areeka with Cream (Small)', ar: 'عريكة قشطة (صغير)' }, price: 6, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a2_m', name: { en: 'Areeka with Cream (Medium)', ar: 'عريكة قشطة (وسط)' }, price: 9, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a2_l', name: { en: 'Areeka with Cream (Large)', ar: 'عريكة قشطة (كبير)' }, price: 10, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a3_s', name: { en: 'Areeka with Dates (Small)', ar: 'عريكة تمر (صغير)' }, price: 7, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a3_m', name: { en: 'Areeka with Dates (Medium)', ar: 'عريكة تمر (وسط)' }, price: 11, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a3_l', name: { en: 'Areeka with Dates (Large)', ar: 'عريكة تمر (كبير)' }, price: 13, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a4_s', name: { en: 'Areeka with Honey (Small)', ar: 'عريكة عسل (صغير)' }, price: 7, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a4_m', name: { en: 'Areeka with Honey (Medium)', ar: 'عريكة عسل (وسط)' }, price: 11, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a4_l', name: { en: 'Areeka with Honey (Large)', ar: 'عريكة عسل (كبير)' }, price: 13, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a5_s', name: { en: 'Areeka with Cheese (Small)', ar: 'عريكة جبنة (صغير)' }, price: 9, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a5_m', name: { en: 'Areeka with Cheese (Medium)', ar: 'عريكة جبنة (وسط)' }, price: 14, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a5_l', name: { en: 'Areeka with Cheese (Large)', ar: 'عريكة جبنة (كبير)' }, price: 15, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a6_s', name: { en: 'Royal Areeka (Small)', ar: 'عريكة ملكي (صغير)' }, price: 9, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a6_m', name: { en: 'Royal Areeka (Medium)', ar: 'عريكة ملكي (وسط)' }, price: 15, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },
  { id: 'a6_l', name: { en: 'Royal Areeka (Large)', ar: 'عريكة ملكي (كبير)' }, price: 18, category: 'Areeka', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' },

  // --- Masoub (معصوب) ---
  { id: 'ms1_s', name: { en: 'Plain Masoub (Small)', ar: 'معصوب سادة (صغير)' }, price: 4, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms1_m', name: { en: 'Plain Masoub (Medium)', ar: 'معصوب سادة (وسط)' }, price: 6, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms1_l', name: { en: 'Plain Masoub (Large)', ar: 'معصوب سادة (كبير)' }, price: 7, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms2_s', name: { en: 'Masoub with Cream (Small)', ar: 'معصوب قشطة (صغير)' }, price: 6, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms2_m', name: { en: 'Masoub with Cream (Medium)', ar: 'معصوب قشطة (وسط)' }, price: 10, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms2_l', name: { en: 'Masoub with Cream (Large)', ar: 'معصوب قشطة (كبير)' }, price: 11, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms3_s', name: { en: 'Masoub with Honey (Small)', ar: 'معصوب عسل (صغير)' }, price: 7, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms3_m', name: { en: 'Masoub with Honey (Medium)', ar: 'معصوب عسل (وسط)' }, price: 11, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms3_l', name: { en: 'Masoub with Honey (Large)', ar: 'معصوب عسل (كبير)' }, price: 13, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms4_s', name: { en: 'Masoub with Dates (Small)', ar: 'معصوب تمر (صغير)' }, price: 7, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms4_m', name: { en: 'Masoub with Dates (Medium)', ar: 'معصوب تمر (وسط)' }, price: 11, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms4_l', name: { en: 'Masoub with Dates (Large)', ar: 'معصوب تمر (كبير)' }, price: 13, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms5_s', name: { en: 'Masoub with Cheese (Small)', ar: 'معصوب جبنة (صغير)' }, price: 9, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms5_m', name: { en: 'Masoub with Cheese (Medium)', ar: 'معصوب جبنة (وسط)' }, price: 13, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms5_l', name: { en: 'Masoub with Cheese (Large)', ar: 'معصوب جبنة (كبير)' }, price: 15, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms6_s', name: { en: 'Royal Masoub (Small)', ar: 'معصوب ملكي (صغير)' }, price: 10, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms6_m', name: { en: 'Royal Masoub (Medium)', ar: 'معصوب ملكي (وسط)' }, price: 17, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { id: 'ms6_l', name: { en: 'Royal Masoub (Large)', ar: 'معصوب ملكي (كبير)' }, price: 20, category: 'Masoub', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },

  // --- Bakery (مخبوزات) ---
  { 
    id: 'bk1', 
    name: { en: 'Shami Bread', ar: 'خبز شامي' }, 
    description: { en: 'Soft, freshly baked traditional white bread.', ar: 'خبز أبيض تقليدي طازج وطري.' },
    price: 0.5, 
    category: 'Bakery', 
    image: 'https://images.unsplash.com/photo-1598143158366-483950ad4438?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 'bk2', 
    name: { en: 'Plain Tameez', ar: 'تميس عادي' }, 
    description: { en: 'Authentic Afghan-style flatbread, baked in a traditional oven.', ar: 'خبز التميس الأفغاني الأصيل، مخبوز في فرن تقليدي.' },
    price: 1, 
    category: 'Bakery', 
    image: 'https://images.unsplash.com/photo-1598143158366-483950ad4438?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  { 
    id: 'bk3', 
    name: { en: 'Brown Tameez', ar: 'تميس بر' }, 
    description: { en: 'Healthy whole wheat flatbread with a rich, nutty flavor.', ar: 'خبز تميس بر صحي بنكهة غنية.' },
    price: 1, 
    category: 'Bakery', 
    image: 'https://images.unsplash.com/photo-1598143158366-483950ad4438?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 'bk4', 
    name: { en: 'Tameez with Cheese', ar: 'تميس بالجبنة' }, 
    description: { en: 'Tameez bread stuffed with melted premium cheese.', ar: 'خبز تميس محشو بالجبنة الفاخرة الذائبة.' },
    price: 5, 
    category: 'Bakery', 
    image: 'https://images.unsplash.com/photo-1598143158366-483950ad4438?q=80&w=800&auto=format&fit=crop' 
  },

  // --- Breakfast (الفطور) ---
  { id: 'bf1', name: { en: 'Plain Breakfast', ar: 'فطور سادة' }, price: 1, category: 'Breakfast', image: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=800&auto=format&fit=crop' },
  { id: 'bf2', name: { en: 'Breakfast with Cheese', ar: 'فطور جبنة' }, price: 3, category: 'Breakfast', image: 'https://images.unsplash.com/photo-1528283331117-c33a24189ee7?q=80&w=800&auto=format&fit=crop' },
  { id: 'bf3', name: { en: 'Breakfast with Egg', ar: 'فطور بيض' }, price: 3, category: 'Breakfast', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop' },
  { id: 'bf4', name: { en: 'Breakfast Shakshuka', ar: 'فطور شكشوكة' }, price: 4, category: 'Breakfast', image: 'https://images.unsplash.com/photo-1590412200988-a436bb7050a8?q=80&w=800&auto=format&fit=crop' },
  { id: 'bf5', name: { en: 'Breakfast Fava or Lentils', ar: 'فطور فول أو عدس' }, price: 4, category: 'Breakfast', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'bf6', name: { en: 'Mixed Breakfast', ar: 'فطور مشكل' }, price: 5, category: 'Breakfast', image: 'https://images.unsplash.com/photo-1496042399014-dc73c4f2bde1?q=80&w=800&auto=format&fit=crop' },

  // --- Sandwiches (الساندويتشات) ---
  { id: 'sw1', name: { en: 'Cheese Sandwich', ar: 'ساندويتش جبنة' }, price: 3, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw2', name: { en: 'Egg Sandwich', ar: 'ساندويتش بيض' }, price: 3, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw3', name: { en: 'Tuna Sandwich', ar: 'ساندويتش تونة' }, price: 4, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw4', name: { en: 'Tuna Sandwich with Cheese', ar: 'ساندويتش تونة بالجبنة' }, price: 4, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw5', name: { en: 'Shakshuka Sandwich', ar: 'ساندويتش شكشوكة' }, price: 4, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1590412200988-a436bb7050a8?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw6', name: { en: 'Falafel Sandwich', ar: 'ساندويتش فلافل' }, price: 4, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw7', name: { en: 'Falafel Sandwich with Cheese', ar: 'ساندويتش فلافل بالجبنة' }, price: 5, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw8', name: { en: 'Fava with Egg Sandwich', ar: 'ساندويتش فول بالبيض' }, price: 6, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop' },

  // --- Drinks (المشروبات) ---
  { id: 'dr1', name: { en: 'Tea', ar: 'شاي' }, price: 1, category: 'Drinks', image: 'https://images.pexels.com/photos/10768378/pexels-photo-10768378.jpeg' },
  { id: 'dr2', name: { en: 'Coffee', ar: 'قهوة' }, price: 2, category: 'Drinks', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop' },
  { id: 'dr3', name: { en: 'Nescafe', ar: 'نسكافيه' }, price: 2, category: 'Drinks', image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800&auto=format&fit=crop' },
];
