"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import { Flame, Heart, Lightbulb } from "lucide-react";

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

  <div id="about-story" data-section="about-story">
      <AboutMetric
      useInvertedBackground={true}
      title="Our Culinary Journey | رحلتنا في عالم الطهي"
      metrics={[
        {
          icon: Lightbulb,
          label: "Years in Business | سنوات في الخدمة",
          value: "15+",
        },
        {
          icon: Flame,
          label: "Master Chefs | طهاة محترفون",
          value: "5+",
        },
        {
          icon: Heart,
          label: "Happy Customers | عملاء سعداء",
          value: "100K+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="about-team" data-section="about-team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "chef-1",
          name: "Chef Omar Al-Khafaji | الشيف عمر الخفاجي",
          role: "Head Chef | رئيس الطهاة",
          imageSrc: "http://img.b2bpic.net/free-photo/male-head-chef-uniform-uses-spoon-taste-delicious-soup_482257-121222.jpg",
          imageAlt: "Head Chef Omar Al-Khafaji",
        },
        {
          id: "manager-1",
          name: "Sara Al-Dulaimi | سارة الدليمي",
          role: "Restaurant Manager | مديرة المطعم",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-smiling-kitchen_107420-12357.jpg",
          imageAlt: "Restaurant Manager Sara Al-Dulaimi",
        },
        {
          id: "chef-2",
          name: "Chef Layla Saad | الشيف ليلى سعد",
          role: "Pastry Chef | شيف الحلويات",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-young-woman-holding-slice-cake-plate-coffee-shop_23-2148027990.jpg",
          imageAlt: "Pastry Chef Layla Saad",
        },
        {
          id: "chef-3",
          name: "Chef Hassan Jawad | الشيف حسن جواد",
          role: "Sous Chef | مساعد الشيف",
          imageSrc: "http://img.b2bpic.net/free-photo/chef-working-together-professional-kitchen_23-2149727993.jpg",
          imageAlt: "Sous Chef Hassan Jawad",
        },
      ]}
      title="Meet Our Dedicated Team | تعرفوا على فريقنا"
      description="Behind every exquisite dish is a team of passionate culinary artists and hospitality experts dedicated to your satisfaction. | خلف كل طبق فاخر يقف فريق من الفنانين الطهاة وخبراء الضيافة المتحمسين لرضاكم."
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
