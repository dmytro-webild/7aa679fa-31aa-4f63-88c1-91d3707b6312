"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
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

  <div id="restaurant-gallery" data-section="restaurant-gallery">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "gallery-interior-1",
          name: "Elegant Dining Hall | قاعة طعام أنيقة",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/two-storey-restaurant-hall-with-cream-walls_140725-2682.jpg",
          imageAlt: "Luxury Iraqi restaurant interior",
        },
        {
          id: "gallery-dish-1",
          name: "Signature Dish Presentation | عرض طبق مميز",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-food-decoration-restaurant-kitchen-cook-doing-great-job_482257-10351.jpg",
          imageAlt: "Signature Iraqi dish",
        },
        {
          id: "gallery-kitchen-1",
          name: "Behind the Scenes Kitchen | مطبخنا الاحترافي",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-cooking-together_23-2149631679.jpg",
          imageAlt: "Professional restaurant kitchen",
        },
        {
          id: "gallery-event-1",
          name: "Private Event Setup | إعداد مناسبة خاصة",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-sweet-snacks-wedding_1304-4052.jpg",
          imageAlt: "Restaurant private event setup",
        },
        {
          id: "gallery-customer-1",
          name: "Happy Guests | ضيوف سعداء",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-eating-restaurant_23-2148006611.jpg",
          imageAlt: "Customers dining happily",
        },
        {
          id: "gallery-exterior-1",
          name: "Restaurant Exterior | واجهة المطعم",
          price: "",
          imageSrc: "http://img.b2bpic.net/free-photo/vintage-light-lamp_1203-3090.jpg",
          imageAlt: "Al-Muhanad Restaurant exterior",
        },
      ]}
      title="Our Restaurant Gallery | معرض مطعمنا"
      description="Immerse yourself in the visual splendor of Al-Muhanad Restaurant, showcasing our exquisite interior, delectable dishes, and memorable moments. | اغمروا أنفسكم في روعة مطعم المهند البصرية، التي تعرض تصميمنا الداخلي الرائع، أطباقنا الشهية، ولحظات لا تُنسى."
    />
  </div>

  <div id="event-photos" data-section="event-photos">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Grand Opening Ceremony | حفل الافتتاح الكبير",
          description: "Highlights from our grand opening, welcoming guests to a new era of fine Iraqi dining. | لقطات من حفل افتتاحنا الكبير، نرحب بالضيوف في عصر جديد من المأكولات العراقية الفاخرة.",
          imageSrc: "asset://gallery-event-1",
          imageAlt: "Grand Opening Ceremony",
        },
        {
          title: "Eid Celebrations | احتفالات العيد",
          description: "Joyful moments from our special Eid celebrations, bringing families and friends together. | لحظات مبهجة من احتفالاتنا الخاصة بالعيد، تجمع العائلات والأصدقاء.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-people-together_23-2149152898.jpg",
          imageAlt: "Eid Celebrations",
        },
        {
          title: "Culinary Workshops | ورش عمل الطهي",
          description: "Scenes from our exclusive culinary workshops, where guests learn the art of Iraqi cooking. | مشاهد من ورش عمل الطهي الحصرية لدينا، حيث يتعلم الضيوف فنون الطهي العراقي.",
          imageSrc: "asset://about-kitchen-1",
          imageAlt: "Culinary Workshops",
        },
      ]}
      title="Special Events & Moments | فعاليات ولحظات خاصة"
      description="A collection of photographs from our memorable events, celebrations, and exclusive gatherings at Al-Muhanad Restaurant. | مجموعة من الصور لفعالياتنا واحتفالاتنا وتجمعاتنا الخاصة التي لا تُنسى في مطعم المهند."
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
