"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

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

  <div id="reservations-form" data-section="reservations-form">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Book Your Table | احجز طاولتك الآن"
      description="Secure your spot at Al-Muhanad Restaurant for an unforgettable dining experience. Please fill out the form below. | احجز مكانك في مطعم المهند لتجربة طعام لا تُنسى. يرجى ملء النموذج أدناه."
      inputs={[
        {
          name: "customerName",
          type: "text",
          placeholder: "Your Name | اسمك الكامل",
          required: true,
        },
        {
          name: "phoneNumber",
          type: "tel",
          placeholder: "Phone Number | رقم الهاتف",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address | عنوان البريد الإلكتروني",
          required: false,
        },
        {
          name: "guests",
          type: "number",
          placeholder: "Number of Guests | عدد الضيوف",
          required: true,
        },
        {
          name: "date",
          type: "date",
          placeholder: "Date | التاريخ",
          required: true,
        },
        {
          name: "time",
          type: "time",
          placeholder: "Time | الوقت",
          required: true,
        },
      ]}
      textarea={{
        name: "specialNotes",
        placeholder: "Special Notes / Requests (Optional) | ملاحظات خاصة (اختياري)",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/lamb-chomps-white-plate-with-boiled-corns-sateen-tablecloth-blue_114579-15634.jpg"
      imageAlt="Table setting for reservation"
      mediaAnimation="opacity"
      mediaPosition="left"
      buttonText="Confirm Reservation | تأكيد الحجز"
    />
  </div>

  <div id="reservations-faq" data-section="reservations-faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "Can I modify my reservation? | هل يمكنني تعديل حجزي؟",
          content: "Yes, please call us directly to modify your reservation. We recommend doing so at least 24 hours in advance. | نعم، يرجى الاتصال بنا مباشرة لتعديل حجزك. نوصي بالقيام بذلك قبل 24 ساعة على الأقل.",
        },
        {
          id: "faq2",
          title: "Do you accept walk-ins? | هل تقبلون الدخول بدون حجز؟",
          content: "While we recommend reservations, especially on weekends, walk-ins are welcome based on table availability. | بينما نوصي بالحجوزات، خاصة في عطلات نهاية الأسبوع، نرحب بالزوار بدون حجز حسب توفر الطاولات.",
        },
        {
          id: "faq3",
          title: "Is there a dress code? | هل هناك قواعد للباس؟",
          content: "We encourage smart casual attire to enhance your dining experience in our luxurious setting. | نشجع على ارتداء الملابس الأنيقة غير الرسمية لتعزيز تجربة تناول الطعام في بيئتنا الفاخرة.",
        },
        {
          id: "faq4",
          title: "Do you offer private dining? | هل تقدمون غرف طعام خاصة؟",
          content: "Yes, we have private dining options available for special events and larger groups. Please contact us for details. | نعم، لدينا خيارات لتناول الطعام الخاص متوفرة للمناسبات الخاصة والمجموعات الكبيرة. يرجى الاتصال بنا للحصول على التفاصيل.",
        },
      ]}
      title="Reservation FAQs | أسئلة متكررة حول الحجز"
      description="Find answers to common questions about booking a table at Al-Muhanad Restaurant. | ابحثوا عن إجابات للأسئلة الشائعة حول حجز طاولة في مطعم المهند."
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
