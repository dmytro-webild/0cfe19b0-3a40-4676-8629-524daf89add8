"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { AlertCircle, BarChart3, CheckCircle, Code, Compass, Palette, Rocket, Share2, Target, TrendingUp, Wrench, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmall"
      background="blurBottom"
      cardStyle="inset"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Helion Era"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Process", id: "process" },
            { name: "Work", id: "case-studies" },
            { name: "About", id: "about" }
          ]}
          button={{
            text: "Book Strategy Call",            href: "https://cal.com/abhi-rathore/15min"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Growth Systems for Brands Ready to Scale"
          description="Helion Era helps brands grow through strategic UI/UX design, high-performance websites, lead generation systems, and digital growth solutions that drive real results."
          background={{ variant: "plain" }}
          buttons={[
            { text: "Book Strategy Call", href: "https://cal.com/abhi-rathore/15min" },
            { text: "View Work", href: "#case-studies" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ac0O5fmrDOlz4tO7GRMH1t6Tcr/uploaded-1773255418915-ra3im4bh.jpg"
          imageAlt="Helion Era growth systems"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Growth-Focused Brands"
          description="Partner with agencies and brands who are serious about scaling"
          names={["Acme Digital", "Growth Studios", "NextGen Ventures", "Scale Collective", "Prime Market", "Digital Nexus", "Velocity Labs"]}
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureHoverPattern
          title="Services"
          description="Strategic digital growth solutions designed to scale your brand"
          features={[
            {
              icon: Palette,
              title: "UI/UX Design",              description: "Premium interface design that converts visitors into customers with strategic user experience—average 35% increase in engagement"
            },
            {
              icon: Code,
              title: "Website Development",              description: "High-performance web development built for speed, conversions, and long-term growth—typical 40% faster load times"
            },
            {
              icon: Share2,
              title: "Social Media Management",              description: "Content strategy and management that builds engaged communities and brand authority—proven 200% average engagement increase"
            },
            {
              icon: Target,
              title: "Lead Generation Systems",              description: "Scalable systems that consistently attract and nurture qualified leads for your business—proven to deliver 300+ qualified leads monthly"
            },
            {
              icon: TrendingUp,
              title: "SEO Strategy",              description: "Search optimization that puts your brand in front of customers actively seeking your solutions—average 150% organic traffic growth"
            },
            {
              icon: BarChart3,
              title: "Conversion Optimization",              description: "Data-driven improvements that transform traffic into revenue and sales—average 45% increase in conversion rate"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="problem-solution" data-section="problem-solution">
        <TestimonialAboutCard
          tag="The Gap"
          tagIcon={AlertCircle}
          title="Most brands struggle with inconsistent growth, weak visibility, and conversion challenges. We fix that."
          description="We transform challenges into systems"
          subdescription="Strategic growth operations that scale"
          icon={CheckCircle}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ac0O5fmrDOlz4tO7GRMH1t6Tcr/uploaded-1773255572253-afb95bqy.jpg"
          imageAlt="Helion Era solutions"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="process" data-section="process">
        <MetricCardOne
          title="Our Process"
          description="A proven framework that scales brands systematically"
          metrics={[
            {
              id: "1",              value: "01",              title: "Strategy",              description: "We analyze your market, audience, and goals to build a foundation for growth",              icon: Compass
            },
            {
              id: "2",              value: "02",              title: "Build",              description: "Our team designs and develops systems that drive results and engagement",              icon: Wrench
            },
            {
              id: "3",              value: "03",              title: "Launch",              description: "We execute strategically to ensure smooth deployment and immediate impact",              icon: Rocket
            },
            {
              id: "4",              value: "04",              title: "Scale",              description: "Continuous optimization and expansion to maximize growth and ROI",              icon: TrendingUp
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          uniformGridCustomHeightClasses="min-h-80 2xl:min-h-90"
        />
      </div>

      <div id="case-studies" data-section="case-studies">
        <BlogCardOne
          title="Featured Work"
          description="Projects that showcase our impact and expertise"
          blogs={[
            {
              id: "1",              category: "UI/UX Design",              title: "Premium Brand Redesign",              excerpt: "Complete visual identity overhaul resulting in 150% increase in engagement and brand recognition",              imageSrc: "http://img.b2bpic.net/free-psd/template-design-with-yoga_23-2148470628.jpg?_wi=2",              imageAlt: "Brand redesign case study",              authorName: "Podaslise ",              authorAvatar: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2533.jpg",              date: "2026"
            },
            {
              id: "2",              category: "Lead Generation",              title: "Lead Generation System",              excerpt: "Built automated lead funnel generating 300+ qualified leads monthly with 40% conversion rate",              imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-using-tablet_53876-14785.jpg",              imageAlt: "Lead generation results",              authorName: "Podaslise ",              authorAvatar: "http://img.b2bpic.net/free-photo/portrait-smiley-businesswoman-indoors-with-arms-closed_23-2148824828.jpg",              date: "2026"
            },
            {
              id: "3",              category: "Social Strategy",              title: "Social Media Growth Campaign",              excerpt: "Strategic content system that grew audience by 450% and established brand authority",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-women-working-together-office_23-2150062338.jpg",              imageAlt: "Social media strategy",              authorName: "Podaslise ",              authorAvatar: "http://img.b2bpic.net/free-photo/she-s-ready-making-coffee_329181-2917.jpg",              date: "2026"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Clients Say"
          description="Real feedback from brands we've helped scale"
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              handle: "@sarahj",              testimonial: "Helion Era transformed how we approach growth. Their strategy and execution resulted in 3x ROI within 6 months.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2533.jpg"
            },
            {
              id: "2",              name: "Michael Chen",              handle: "@mchen",              testimonial: "The team's expertise in lead generation systems is unmatched. We went from unpredictable leads to a scalable machine.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-businesswoman-indoors-with-arms-closed_23-2148824828.jpg"
            },
            {
              id: "3",              name: "Emily Rodriguez",              handle: "@emily_r",              testimonial: "Professional, strategic, results-driven. Helion Era is exactly what our brand needed to compete at scale.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/she-s-ready-making-coffee_329181-2917.jpg"
            },
            {
              id: "4",              name: "David Kim",              handle: "@dkim",              testimonial: "Their holistic approach to digital growth—design, development, marketing—is what sets them apart. Highly recommended.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-entrepreneur-satisfied-with-own-success_1163-5474.jpg"
            }
          ]}
          showRating={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and process"
          faqs={[
            {
              id: "1",              title: "How long does a typical project take?",              content: "Project timelines vary based on scope and complexity. Most brand strategy and design projects take 4-8 weeks, while development can range from 6-12 weeks depending on requirements."
            },
            {
              id: "2",              title: "What industries do you specialize in?",              content: "We work with B2B SaaS companies, e-commerce brands, digital agencies, and professional services firms. Our expertise spans tech, finance, healthcare, and consumer brands looking to scale."
            },
            {
              id: "3",              title: "Do you offer ongoing support after launch?",              content: "Yes, we offer post-launch support packages including analytics review, performance optimization, and continuous strategy adjustments to ensure sustained growth."
            },
            {
              id: "4",              title: "What's your process for understanding our business?",              content: "We start with a comprehensive discovery phase including market analysis, competitor research, and stakeholder interviews to deeply understand your goals, challenges, and opportunities."
            },
            {
              id: "5",              title: "How do you measure success?",              content: "We establish clear KPIs upfront aligned with your business goals—whether it's lead generation, conversion rates, engagement metrics, or revenue impact—and track progress throughout the project."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Helion Era"
          copyrightText="© 2024 Helion Era. All rights reserved."
          columns={[
            {
              title: "Services",              items: [
                { label: "UI/UX Design", href: "#services" },
                { label: "Web Development", href: "#services" },
                { label: "Lead Generation", href: "#services" },
                { label: "SEO Strategy", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Work", href: "#case-studies" },
                { label: "Process", href: "#process" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Email", href: "mailto:hello@helionera.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}