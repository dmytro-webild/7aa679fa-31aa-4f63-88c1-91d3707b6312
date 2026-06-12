"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
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

  <div id="customer-reviews" data-section="customer-reviews">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Dr. Basim Al-Jubouri | الدكتور باسم الجبوري",
          role: "University Professor | أستاذ جامعي",
          company: "Baghdad University",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-cheerful-young-bearded-man-stylish-headwear-having-coffee-sitting-wooden-table-modern-cafe-interior-waiting-his-girlfriend-planning-propose-her-this-sunny-day_273609-1932.jpg",
          videoSrc: "http://img.b2bpic.net/free-photo/served-table-restaurant_93675-129581.jpg",
        },
        {
          id: "2",
          name: "Nadia Saeed | نادية سعيد",
          role: "Art Curator | أمينة فنون",
          company: "Iraqi Museum",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-dining-table-while-communicating-with-her-husband_637285-3516.jpg",
          videoSrc: "http://img.b2bpic.net/free-photo/waiter-holding-plate-fried-aubergine-wraps-with-walnuts_140725-5250.jpg",
        },
        {
          id: "3",
          name: "Eng. Firas Abbas | المهندس فراس عباس",
          role: "Architect | مهندس معماري",
          company: "Baghdad Design Studio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-man-sitting-armchair_23-2148130337.jpg",
          videoSrc: "http://img.b2bpic.net/free-photo/woman-pouring-beverage-into-glass-from-jar-served-lunch-cafe_141793-1978.jpg",
        },
        {
          id: "4",
          name: "Zahra Hashim | زهرة هاشم",
          role: "Writer & Journalist | كاتبة وصحفية",
          company: "Local News",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-80s-summer-aesthetics_23-2150765091.jpg",
          videoSrc: "http://img.b2bpic.net/free-photo/rustic-chandelier-made-bulbs-ropes-dining-table-vintage-kitchen_181624-9173.jpg",
        },
        {
          id: "5",
          name: "Mr. Karim Hadi | السيد كريم هادي",
          role: "Business Owner | صاحب عمل",
          company: "Al-Zahra Market",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/employee-working-with-trendy-clothes_482257-78860.jpg",
          videoSrc: "http://img.b2bpic.net/free-photo/smiley-people-bistro-medium-shot_23-2149366463.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.9/5",
          label: "Overall Rating | التقييم العام",
        },
        {
          value: "98%",
          label: "Satisfaction Rate | نسبة الرضا",
        },
        {
          value: "Top Choice",
          label: "Baghdad Dining | الخيار الأول في بغداد",
        },
      ]}
      title="Guest Feedback & Reviews | آراء وتقييمات الضيوف"
      description="Your feedback drives our passion for excellence. Read what our valued customers have to say about their dining experiences. | ملاحظاتكم تغذي شغفنا بالتميز. اقرأوا ما يقوله عملاؤنا الكرام عن تجاربهم في تناول الطعام."
    />
  </div>

  <div id="review-faq" data-section="review-faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "rfaq1",
          title: "How can I submit a review? | كيف يمكنني تقديم تقييم؟",
          content: "You can submit",
        },
      ]}
      title="Review Submission Guide | دليل تقديم التقييمات"
      description="Have questions about leaving a review or our feedback process? Find your answers here. | هل لديك أسئلة حول ترك تقييم أو عملية ملاحظاتنا؟ ابحث عن إجاباتك هنا."
      faqsAnimation="slide-up"
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
