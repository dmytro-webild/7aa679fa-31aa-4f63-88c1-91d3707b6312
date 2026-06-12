"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

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

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "downward-rays-static",
      }}
      title="Experience Authentic Iraqi Cuisine | تذوقوا أشهى المأكولات العراقية الأصيلة"
      description="Al-Muhanad Restaurant offers a luxurious culinary journey through Iraqi, Middle Eastern, and Western flavors in the heart of Baghdad. | يقدم مطعم المهند رحلة طهي فاخرة عبر النكهات العراقية والشرق أوسطية والغربية في قلب بغداد."
      tag="Luxury Dining | تجربة طعام فاخرة"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Reserve a Table | احجز طاولة",
          href: "/reservations",
        },
        {
          text: "View Our Menu | شاهد قائمتنا",
          href: "/menu",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/elegant-dessert-white-plate-decorated-with-flowers_23-2151973729.jpg"
      imageAlt="Luxurious Iraqi food platter"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-man-restaurant_23-2147861975.jpg",
          alt: "Satisfied Male Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/waitress-near-display-case-with-tartines_23-2147830513.jpg",
          alt: "Happy Female Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-young-woman-with-long-blonde-hair-holding-delicious-chocolate-muffin-hand_23-2147974685.jpg",
          alt: "Smiling Restaurant Guest",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-one-black-american-female-eats-gourmet-vegetarian-meal-drinks-wine-restaurant_613910-7365.jpg",
          alt: "Content Diner",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-women-holding-golden-star-icon_53876-71038.jpg",
          alt: "Cheerful Guest",
        },
      ]}
      avatarText="Loved by over 10,000 guests | محبوب من قبل أكثر من 10 آلاف ضيف"
      marqueeItems={[
        {
          type: "text",
          text: "Authentic Flavors | نكهات أصيلة",
        },
        {
          type: "text",
          text: "Exquisite Dishes | أطباق فاخرة",
        },
        {
          type: "text",
          text: "Luxury Ambiance | أجواء فاخرة",
        },
        {
          type: "text",
          text: "Unforgettable Experience | تجربة لا تُنسى",
        },
        {
          type: "text",
          text: "Baghdad's Best | الأفضل في بغداد",
        },
      ]}
      showMarqueeCard={true}
      marqueeSpeed={40}
    />
  </div>

  <div id="featured-dishes" data-section="featured-dishes">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "dish-1",
          name: "Iraqi Kebab | كباب عراقي",
          price: "15,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-grilled-yakitori-skewers-with-sesame-green-onion_84443-85866.jpg",
          imageAlt: "Authentic Iraqi Kebab",
        },
        {
          id: "dish-2",
          name: "Jordanian Mansaf | منسف أردني",
          price: "22,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/kebab-pomegranate-sauce-table_140725-4776.jpg",
          imageAlt: "Rich Jordanian Mansaf",
        },
        {
          id: "dish-3",
          name: "Grilled Steak | ستيك مشوي",
          price: "28,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-eggplant-with-tomatoes-sesame-seeds-plate_140725-9191.jpg",
          imageAlt: "Gourmet Grilled Steak",
        },
        {
          id: "dish-4",
          name: "Iraqi Dolma | دولمة عراقية",
          price: "18,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chicken-skewers-with-sliced-potatoes-onions-herbs-sprinkled-with-sumac_141793-3978.jpg",
          imageAlt: "Traditional Iraqi Dolma",
        },
        {
          id: "dish-5",
          name: "Chicken Shawarma | شاورما دجاج",
          price: "12,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/arabic-kebab-sandwich-wooden-plateau_23-2148651071.jpg",
          imageAlt: "Succulent Chicken Shawarma",
        },
        {
          id: "dish-6",
          name: "Pepperoni Pizza | بيتزا بيبروني",
          price: "16,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-anime-style-pizza_23-2151061930.jpg",
          imageAlt: "Wood-fired Pepperoni Pizza",
        },
      ]}
      title="Our Signature Dishes | أطباقنا المميزة"
      description="Discover a selection of our most loved Iraqi, Middle Eastern, and Western culinary masterpieces, crafted to perfection. | اكتشفوا مجموعة مختارة من روائع الطهي العراقية والشرق أوسطية والغربية الأكثر حبًا لدينا، والمصنوعة بإتقان."
    />
  </div>

  <div id="special-offers" data-section="special-offers">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Family Dining Discount | خصم العائلات",
          description: "Enjoy 20% off on all family bookings for groups of 4 or more. Valid on weekdays. | استمتع بخصم 20% على جميع حجوزات العائلات للمجموعات من 4 أفراد أو أكثر. صالح في أيام الأسبوع.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-little-sweet-biscuits-inside-designed-plate-dark-space_140725-95311.jpg",
          imageAlt: "Family dining offer",
        },
        {
          title: "Weekend Brunch Special | عرض فطور نهاية الأسبوع",
          description: "Indulge in our exquisite brunch menu every Saturday and Sunday with complimentary Arabic coffee. | دللوا أنفسكم بقائمة الفطور الرائعة كل سبت وأحد مع قهوة عربية مجانية.",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-preparation-concept-still-life_23-2150354592.jpg",
          imageAlt: "Weekend brunch offer",
        },
        {
          title: "Birthday Celebrations | احتفالات أعياد الميلاد",
          description: "Celebrate your birthday with us and receive a complimentary dessert for the birthday person. | احتفل بعيد ميلادك معنا واحصل على حلوى مجانية لصاحب عيد الميلاد.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-fruity-cake-slice_23-2148536830.jpg",
          imageAlt: "Birthday celebration offer",
        },
      ]}
      title="Exclusive Offers & Promotions | عروضنا الخاصة"
      description="Don't miss out on our limited-time special deals and seasonal promotions for an unforgettable dining experience. | لا تفوتوا عروضنا الخاصة لفترة محدودة والعروض الموسمية لتجربة طعام لا تُنسى."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Ahmed Al-Baghdadi | أحمد البغدادي",
          role: "Local Entrepreneur | رائد أعمال",
          company: "Baghdad Innovations",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-close-up-portrait-beautiful-black-skinned-woman-wearing-blouse-flower-headband-enjoying-dinner-while-eating-restaurant_613910-18781.jpg",
          videoSrc: "http://img.b2bpic.net/free-photo/restaurant-table-12-persons-with-blue-chairs-fireplace-white-brick-walls-wide-window_140725-8456.jpg",
        },
        {
          id: "2",
          name: "Fatima Al-Ansari | فاطمة الأنصاري",
          role: "Food Blogger | مدونة طعام",
          company: "Taste of Iraq",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3666.jpg",
          videoSrc: "http://img.b2bpic.net/free-photo/caesar-salad-with-smoked-salmon-crackers_140725-2030.jpg",
        },
        {
          id: "3",
          name: "Khalid Mustafa | خالد مصطفى",
          role: "International Traveler | مسافر دولي",
          company: "Global Explorers",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stressed-young-barber-wearing-uniform-screaming-with-closed-eyes-isolated-olive-green-wall-with-copy-space_141793-110154.jpg",
          videoSrc: "http://img.b2bpic.net/free-photo/man-drinks-turkish-coffee-with-lokum_140725-8984.jpg",
        },
        {
          id: "4",
          name: "Layla Karim | ليلى كريم",
          role: "Cultural Enthusiast | متحمسة ثقافية",
          company: "Iraqi Heritage",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-female-with-hair-bun-having-joyful-look-smiling-cheerfully-happy-with-some-positive-news_273609-9042.jpg",
          videoSrc: "http://img.b2bpic.net/free-photo/outside-view-restaurant-cottage-night-time_140725-8844.jpg",
        },
        {
          id: "5",
          name: "Nizar Ali | نزار علي",
          role: "Business Executive | مدير تنفيذي",
          company: "Baghdad Corp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-technology-leisure-concept_273609-6599.jpg",
          videoSrc: "http://img.b2bpic.net/free-photo/waiter-brings-bowl-meat-salad-woman_140725-7111.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "5 Stars",
          label: "Average Rating | متوسط التقييم",
        },
        {
          value: "10K+",
          label: "Happy Customers | عملاء سعداء",
        },
        {
          value: "15+",
          label: "Years Experience | سنوات خبرة",
        },
      ]}
      title="What Our Guests Say | ماذا يقول ضيوفنا"
      description="Hear from our beloved customers about their memorable experiences at Al-Muhanad Restaurant. | استمعوا إلى عملائنا الكرام حول تجاربهم التي لا تُنسى في مطعم المهند."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Luxury Hotels Baghdad",
        "Gourmet Magazine Iraq",
        "Baghdad Food Festival",
        "Culinary Excellence Awards",
        "Iraqi Tourism Board",
        "Elite Event Planners",
        "Local Farmers Collective",
      ]}
      title="As Seen In & Partnered With | كما رأيتم وشركاؤنا"
      description="Proudly recognized by leading culinary critics and partnered with esteemed organizations. | نعتز بتقدير كبار نقاد الطهي وشراكتنا مع المنظمات الموقرة."
    />
  </div>

  <div id="home-contact" data-section="home-contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Plan Your Visit | خطط لزيارتك"
      description="Ready to experience the finest dining in Baghdad? Contact us or make a reservation directly. | هل أنت مستعد لتجربة أرقى المأكولات في بغداد؟ اتصل بنا أو قم بالحجز مباشرة."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name | اسمك",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email | بريدك الإلكتروني",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message (Optional) | رسالتك (اختياري)",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/closeup-smartphone-with-gps-application_1098-21636.jpg"
      imageAlt="Map of Al-Muhanad Restaurant location in Baghdad"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Send Message | أرسل الرسالة"
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
