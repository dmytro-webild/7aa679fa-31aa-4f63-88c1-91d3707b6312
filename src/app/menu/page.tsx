"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLarge"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home | الرئيسية",
          id: "/",
        },
        {
          name: "Menu | قائمة الطعام",
          id: "/menu",
        },
        {
          name: "About Us | من نحن",
          id: "/about",
        },
        {
          name: "Reservations | الحجوزات",
          id: "/reservations",
        },
        {
          name: "Gallery | معرض الصور",
          id: "/gallery",
        },
        {
          name: "Reviews | التقييمات",
          id: "/reviews",
        },
        {
          name: "Contact | اتصل بنا",
          id: "/contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dbepv0"
      logoAlt="Al-Muhanad Restaurant Logo"
      brandName="Al-Muhanad Restaurant | مطعم المهند"
      bottomLeftText="Baghdad, Iraq | بغداد، العراق"
      bottomRightText="Reserve Now | احجز الآن"
      button={{
        text: "Order Online | طلب أونلاين",
        href: "/menu",
      }}
    />
  </div>

  <div id="menu-iraqi" data-section="menu-iraqi">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "iraqi-dolma",
          name: "Dolma | دولمة",
          price: "18,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-tasty-leaf-dolma-with-tomatoes-dark-background-calorie-oil-dinner-food-salad-dish-meat-restaurant-meal_179666-17485.jpg",
          imageAlt: "Traditional Iraqi Dolma",
        },
        {
          id: "iraqi-masgouf",
          name: "Masgouf | مسكوف",
          price: "30,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-smoked-fish-with-lemon-rosemary-leaves-copper-tray_176474-3451.jpg",
          imageAlt: "Iraqi Masgouf grilled fish",
        },
        {
          id: "iraqi-kubba",
          name: "Kubba | كبة",
          price: "10,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/plate-dolma-sour-cream-with-salt-cucumber-cabbage-marble-surface_114579-21146.jpg",
          imageAlt: "Homemade Iraqi Kubba",
        },
        {
          id: "iraqi-tashreeb",
          name: "Tashreeb | تشريب",
          price: "16,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-chicken-soup-with-lentil-yogurt-soup-with-tomatoes-olives-table_141793-12188.jpg",
          imageAlt: "Iraqi Tashreeb bread stew",
        },
        {
          id: "iraqi-pacha",
          name: "Pacha | باجة",
          price: "25,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/lentil-soup-with-dried-herbs_140725-8616.jpg",
          imageAlt: "Iraqi Pacha lamb head stew",
        },
        {
          id: "iraqi-chicken",
          name: "Roasted Chicken | دجاج مشوي",
          price: "20,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-fried-chicken-with-seasonings-dark-background-food-chicken-meal-vegetable-meat_140725-80713.jpg",
          imageAlt: "Roasted Iraqi Chicken",
        },
      ]}
      title="Iraqi Cuisine | المأكولات العراقية"
      description="Savor the authentic flavors of Iraq with our traditional dishes, prepared with heritage and passion. | استمتعوا بالنكهات العراقية الأصيلة مع أطباقنا التقليدية، المحضرة بتراث وشغف."
    />
  </div>

  <div id="menu-middle-eastern" data-section="menu-middle-eastern">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "me-shawarma",
          name: "Chicken Shawarma | شاورما دجاج",
          price: "12,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-kebab-chopped-potato-with-fat-tail-with-chicken-kebab-onions_141793-4976.jpg",
          imageAlt: "Succulent Chicken Shawarma",
        },
        {
          id: "me-hummus",
          name: "Hummus | حمص",
          price: "7,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hummus-with-chickpeas_23-2149483855.jpg",
          imageAlt: "Creamy Hummus dip",
        },
        {
          id: "me-falafel",
          name: "Falafel | فلافل",
          price: "8,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/jiz-biz-saj-with-roasted-aubergine-tomato-pepper-flatbread_140725-2542.jpg",
          imageAlt: "Crispy Falafel patties",
        },
        {
          id: "me-tabbouleh",
          name: "Tabbouleh | تبولة",
          price: "9,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/green-plate-vegetable-salad-with-herbs_114579-82311.jpg",
          imageAlt: "Fresh Tabbouleh salad",
        },
        {
          id: "me-moussaka",
          name: "Moussaka | مسقعة",
          price: "19,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-dish-restaurant-table_7939-2109.jpg",
          imageAlt: "Hearty Middle Eastern Moussaka",
        },
        {
          id: "me-kofta",
          name: "Kofta | كفتة",
          price: "17,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/meatballs-with-vegetables-tomato-sauce_1220-7346.jpg",
          imageAlt: "Spicy Middle Eastern Kofta",
        },
      ]}
      title="Middle Eastern Cuisine | مأكولات شرق أوسطية"
      description="Explore the rich and diverse culinary traditions of the Middle East, from Lebanon to Jordan, with our exquisite selections. | استكشفوا تقاليد الطهي الغنية والمتنوعة في الشرق الأوسط، من لبنان إلى الأردن، مع تشكيلاتنا الرائعة."
    />
  </div>

  <div id="menu-western" data-section="menu-western">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "western-burger",
          name: "Beef Burger | برجر لحم",
          price: "14,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-shot-tasty-sandwich-with-potatoes-wooden-table-with-sauces-cutlery_181624-56416.jpg",
          imageAlt: "Gourmet Beef Burger",
        },
        {
          id: "western-pizza",
          name: "Pepperoni Pizza | بيتزا بيبروني",
          price: "16,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/family-lunch-eating-pizza-ham-cheese-recipe_1150-17477.jpg",
          imageAlt: "Wood-fired Pepperoni Pizza",
        },
        {
          id: "western-pasta",
          name: "Alfredo Pasta | باستا ألفريدو",
          price: "18,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/pasta-with-grated-cheese-greens_140725-8747.jpg",
          imageAlt: "Creamy Alfredo Pasta",
        },
        {
          id: "western-salad",
          name: "Caesar Salad | سلطة سيزر",
          price: "11,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-vegetable-salad-with-green-salad-onions-tomatoes-gray-background-meal-salad-food-diet-ripe-color-health-photo_140725-160688.jpg",
          imageAlt: "Fresh Caesar Salad",
        },
        {
          id: "western-sandwich",
          name: "Club Sandwich | كلوب ساندويتش",
          price: "13,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sandwiches-with-tomatoes-beside_23-2148454792.jpg",
          imageAlt: "Club Sandwich",
        },
        {
          id: "western-fishchips",
          name: "Fish & Chips | سمك وبطاطا",
          price: "19,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/crispy-fried-chicken-tenders_123827-36404.jpg",
          imageAlt: "Crispy Fish and Chips",
        },
      ]}
      title="Western Cuisine | المأكولات الغربية"
      description="A taste of the West with our selection of international favorites, prepared with the finest ingredients. | تذوقوا نكهات الغرب مع مجموعتنا المختارة من الأطباق العالمية المفضلة، المحضرة بأجود المكونات."
    />
  </div>

  <div id="menu-appetizers" data-section="menu-appetizers">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "app-mezze",
          name: "Mezze Platter | طبق المزة",
          price: "15,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/cracker-cake-inside-green-plate-with-nougat-cream_140725-29934.jpg",
          imageAlt: "Middle Eastern Mezze Platter",
        },
        {
          id: "app-shrimp",
          name: "Garlic Shrimp | روبيان بالثوم",
          price: "18,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-seafood-table_23-2150857706.jpg",
          imageAlt: "Garlic Butter Shrimp",
        },
        {
          id: "app-springrolls",
          name: "Spring Rolls | سبرنج رولز",
          price: "9,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/potato-skins-loaded-with-mushrooms-onion-herbs-vegetables-melted-cheese_114579-189.jpg",
          imageAlt: "Crispy Vegetable Spring Rolls",
        },
        {
          id: "app-soup",
          name: "Mushroom Soup | شوربة الفطر",
          price: "8,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-pumpkin-soup-bowl_140725-84845.jpg",
          imageAlt: "Creamy Mushroom Soup",
        },
        {
          id: "app-bread",
          name: "Artisan Bread Basket | سلة خبز",
          price: "7,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sweet-baked-bun-bread-like-fresh-bread-dark-surface_140725-91187.jpg",
          imageAlt: "Artisan Bread Basket",
        },
        {
          id: "app-calamari",
          name: "Fried Calamari | كاليماري مقلي",
          price: "16,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/crispy-fried-shrimp-with-seasoning_84443-82035.jpg",
          imageAlt: "Fried Calamari",
        },
      ]}
      title="Appetizers | المقبلات"
      description="Start your meal with our delightful selection of appetizers, perfect for sharing or enjoying solo. | ابدأوا وجبتكم مع تشكيلتنا الشهية من المقبلات، مثالية للمشاركة أو الاستمتاع الفردي."
    />
  </div>

  <div id="menu-desserts" data-section="menu-desserts">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "dessert-baklava",
          name: "Baklava | بقلاوة",
          price: "8,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-cherry-cake-slices-with-cream-pink-desk_140725-25303.jpg",
          imageAlt: "Sweet Baklava pastries",
        },
        {
          id: "dessert-knafeh",
          name: "Knafeh | كنافة",
          price: "10,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/traditional-turkish-delight-oriental-sweets_114579-19441.jpg",
          imageAlt: "Warm Knafeh cheese pastry",
        },
        {
          id: "dessert-icecream",
          name: "Ice Cream Sundae | آيس كريم",
          price: "7,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pancakes-with-copy-space_23-2148229177.jpg",
          imageAlt: "Gourmet Ice Cream Sundae",
        },
        {
          id: "dessert-cheesecake",
          name: "Cheesecake | تشيز كيك",
          price: "9,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/blueberry-cheese-cake_1203-3755.jpg",
          imageAlt: "New York Cheesecake",
        },
        {
          id: "dessert-tiramisu",
          name: "Tiramisu | تيراميسو",
          price: "9,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-biscuit-tiramisu_23-2147772016.jpg",
          imageAlt: "Classic Tiramisu",
        },
        {
          id: "dessert-fruitplatter",
          name: "Fruit Platter | طبق فواكه",
          price: "12,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-plate-fruits-plate-slices-orange-lemon-chocolate-covered-strawberries-notebook-cup-tea-hizelnuts-strawberries_140725-118277.jpg",
          imageAlt: "Fresh Fruit Platter",
        },
      ]}
      title="Desserts | الحلويات"
      description="End your culinary journey on a sweet note with our delectable selection of traditional and contemporary desserts. | اختتموا رحلتكم الشهية بلمسة حلوة مع مجموعتنا الرائعة من الحلويات التقليدية والمعاصرة."
    />
  </div>

  <div id="menu-beverages" data-section="menu-beverages">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "bev-tea",
          name: "Iraqi Tea | شاي عراقي",
          price: "3,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-hand-holding-spoon-tea-various-sweets-blue-wooden-table_114579-34053.jpg",
          imageAlt: "Traditional Iraqi Tea",
        },
        {
          id: "bev-coffee",
          name: "Arabic Coffee | قهوة عربية",
          price: "4,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/cup-coffee-white-saucer_114579-20072.jpg",
          imageAlt: "Rich Arabic Coffee",
        },
        {
          id: "bev-juice",
          name: "Fresh Juice | عصير طازج",
          price: "6,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/cocktail-tropical-fruits_23-2147795359.jpg",
          imageAlt: "Freshly squeezed Orange Juice",
        },
        {
          id: "bev-soda",
          name: "Soft Drinks | مشروبات غازية",
          price: "3,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-soda-drinks-macro-shot_53876-18225.jpg",
          imageAlt: "Assorted Soft Drinks",
        },
        {
          id: "bev-water",
          name: "Mineral Water | مياه معدنية",
          price: "2,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-water-drops-turquoise-glass-background_23-2148070862.jpg",
          imageAlt: "Sparkling Mineral Water",
        },
        {
          id: "bev-mocktail",
          name: "Signature Mocktails | كوكتيلات",
          price: "8,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/green-cocktail-with-mandarin-herbs_114579-3479.jpg",
          imageAlt: "Gourmet Mocktail Drink",
        },
      ]}
      title="Beverages | المشروبات"
      description="Quench your thirst with our wide array of refreshing beverages, from traditional Iraqi tea to fresh juices. | ارتووا مع مجموعتنا الواسعة من المشروبات المنعشة، من الشاي العراقي التقليدي إلى العصائر الطازجة."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dbepv0"
      logoText="Al-Muhanad Restaurant | مطعم المهند"
      columns={[
        {
          title: "Explore | استكشف",
          items: [
            {
              label: "Home | الرئيسية",
              href: "/",
            },
            {
              label: "Menu | قائمة الطعام",
              href: "/menu",
            },
            {
              label: "Gallery | معرض الصور",
              href: "/gallery",
            },
          ],
        },
        {
          title: "Visit | زيارة",
          items: [
            {
              label: "About Us | من نحن",
              href: "/about",
            },
            {
              label: "Reservations | الحجوزات",
              href: "/reservations",
            },
            {
              label: "Contact | اتصل بنا",
              href: "/contact",
            },
          ],
        },
        {
          title: "Follow Us | تابعونا",
          items: [
            {
              label: "Facebook",
              href: "https://facebook.com/almuhanadrestaurant",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/almuhanadrestaurant",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/9647XXXXXXXXX",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Al-Muhanad Restaurant. All rights reserved. | جميع الحقوق محفوظة لمطعم المهند."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
