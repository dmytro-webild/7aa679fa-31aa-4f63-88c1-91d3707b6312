"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import { Award, MapPin, Users } from "lucide-react";

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

  <div id="contact-full" data-section="contact-full">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get in Touch | تواصل معنا"
      description="We'd love to hear from you! Reach out for reservations, inquiries, or feedback. | يسعدنا أن نسمع منكم! تواصلوا معنا للحجوزات، الاستفسارات، أو الملاحظات.\n\n**Location:** Baghdad, Iraq\n**Phone:** +964 7XXXXXXXXX\n**Email:** info@almuhanadrestaurant.com\n**Working Hours:**\nSunday - Thursday: 12:00 PM - 11:00 PM\nFriday - Saturday: 1:00 PM - 12:00 AM"
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
        {
          name: "subject",
          type: "text",
          placeholder: "Subject | الموضوع",
          required: false,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message | رسالتك",
        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/indian-city-scene_23-2151823030.jpg"
      imageAlt="Interactive Google Map of Al-Muhanad Restaurant in Baghdad"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Send Message | أرسل الرسالة"
    />
  </div>

  <div id="contact-metrics" data-section="contact-metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "metric-1",
          icon: Users,
          title: "Daily Visitors | زوار يوميون",
          value: "300+",
        },
        {
          id: "metric-2",
          icon: Award,
          title: "Awards Won | جوائز حائزة",
          value: "7+",
        },
        {
          id: "metric-3",
          icon: MapPin,
          title: "Local Specialties | أطباق محلية",
          value: "20+",
        },
      ]}
      title="Restaurant at a Glance | المطعم في لمحة"
      description="Discover key figures and highlights that define Al-Muhanad Restaurant's commitment to excellence and heritage. | اكتشفوا الأرقام والإنجازات الرئيسية التي تحدد التزام مطعم المهند بالتميز والتراث."
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
