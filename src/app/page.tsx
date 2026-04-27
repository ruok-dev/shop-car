"use client";

import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroScrub } from "@/components/ui/hero-scrub";
import { PillBase } from "@/components/ui/3d-adaptive-navigation-bar";
import { InfoCard } from "@/components/ui/info-card";
import { FeaturedSpotlight } from "@/components/ui/feature-spotlight";
import { LayoutSwitcher } from "@/components/ui/animated-collection";
import { CarDetails } from "@/components/ui/car-details";
import { BreakableCard } from "@/components/ui/kinetic-shatter-box-section";
import { ProfessionalConnect } from "@/components/ui/get-in-touch";
import { ContactForm } from "@/components/ui/contact-form";
import { CircleMenu } from "@/components/ui/circle-menu";
import { cn } from "@/lib/utils";
import { Car, Home, Tag, Search, Heart, User, Phone } from "lucide-react";

export default function Home_Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-orange-500 selection:text-white">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-4 bg-background/50 backdrop-blur-xl border-b border-border">
        <div className="flex items-center gap-2">
          <Car className="w-8 h-8 text-orange-500" />
          <span className="text-xl font-black tracking-tighter uppercase">EliteMotors</span>
        </div>

        <div className="hidden md:block">
          <PillBase />
        </div>

        <div className="w-8 h-8 md:hidden" />
      </header>



      {/* 1. Hero Section */}
      <section id="home" className="pt-20 overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter leading-none text-center">
                The Pinnacle of <br />
                <span className="text-6xl md:text-[8rem] text-orange-500">Automotive</span> <br />
                Engineering
              </h1>
              <p className="mt-8 text-muted-foreground max-w-xl text-center text-lg md:text-xl font-medium">
                Experience luxury, speed, and precision. We curate the world's most exclusive collection of supercars.
              </p>
            </div>
          }
        >
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop"
              alt="hero car"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl" />
          </div>
        </ContainerScroll>
      </section>

      {/* 2. Cinematic Transition Section */}
      <section id="cars" className="relative z-10">
        <HeroScrub
          frameCount={300}
          frameUrl={(i) =>
            `https://raw.githubusercontent.com/duthiljean/ferrari-hero-demo/main/${String(i + 1).padStart(4, "0")}.webp`
          }
          titleTop="Ferrari"
          titleBottom="Excellence"
          accentHex="#000000"
        />
      </section>

      {/* 3. Fast Filters / Categories Section */}
      <section id="offers" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Fast Filters</h2>
          <div className="h-2 w-24 bg-orange-500 mx-auto mt-4" />
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          <InfoCard
            image="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1920&auto=format&fit=crop"
            title="SUV Premium"
            description="Power meets versatility. Discover our range of high-performance SUVs built for any terrain."
            borderColor="#FF5613"
            hoverTextColor="#000"
            effectBgColor="#FF5613"
          />
          <InfoCard
            image="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1920&auto=format&fit=crop"
            title="Sports Series"
            description="Uncompromising speed. Engineered for the track, refined for the street."
            borderColor="#9F4EFF"
            hoverTextColor="#fff"
            effectBgColor="#9F4EFF"
          />
          <InfoCard
            image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1920&auto=format&fit=crop"
            title="Popular Picks"
            description="The most sought-after models of the season. Luxury accessibility redefined."
            borderColor="#2196F3"
            hoverTextColor="#fff"
            effectBgColor="#2196F3"
          />
        </div>
      </section>

      {/* 4. Featured Cars Highlights (3 Sessions) */}
      <section className="py-32 px-6 max-w-7xl mx-auto space-y-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Featured Highlights</h2>
          <div className="h-2 w-24 bg-orange-500 mx-auto mt-4" />
        </div>

        <FeaturedSpotlight 
          title1="Porsche"
          title2="911 Turbo"
          description="The benchmark of performance. Engineering excellence distilled into every curve."
          image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
          index="01"
        />

        <FeaturedSpotlight 
          title1="Lamborghini"
          title2="Huracán"
          description="Pure adrenaline. A masterpiece of design and power that commands the road."
          image="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1920&auto=format&fit=crop"
          index="02"
          inverted
        />

        <FeaturedSpotlight 
          title1="McLaren"
          title2="720S"
          description="The art of the possible. Pushing boundaries through relentless innovation."
          image="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1920&auto=format&fit=crop"
          index="03"
        />
      </section>

      {/* 5. Promotions Section */}
      <section className="py-32 bg-muted/30">
        <LayoutSwitcher />
      </section>

      {/* 6. Car Details Page Section */}
      <section id="details">
        <CarDetails 
          name="Audi R8 V10"
          price="$169,900"
          year="2023"
          km="1,250"
          engine="5.2L V10"
          gearbox="7-Speed Dual-Clutch"
          description="This Audi R8 V10 Performance represents the final evolution of the legendary naturally aspirated supercar. Finished in Mythos Black metallic over Express Red interior, it features the full Carbon Fiber exterior package and sports exhaust."
          images={[
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1920&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1920&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1920&auto=format&fit=crop"
          ]}
        />
      </section>

      {/* 7. Reviews (Kinetic Shatter Box) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Client Reviews</h2>
          <p className="text-muted-foreground mt-4 font-bold uppercase tracking-widest text-sm">Shake to reveal our impact</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
          <BreakableCard 
            title="Excellence" 
            description="The most seamless luxury car purchase I've ever experienced. Truly world-class service."
          />
          <BreakableCard 
            title="Precision" 
            description="Their attention to detail and car knowledge is unmatched in the industry."
          />
          <BreakableCard 
            title="Integrity" 
            description="Transparent, professional, and honest. They found me the perfect spec within days."
          />
          <BreakableCard 
            title="Passion" 
            description="You can tell they truly love what they do. It's not just a business, it's a legacy."
          />
        </div>
      </section>

      {/* 8. Get In Touch */}
      <section id="contact">
        <ContactForm />
      <ProfessionalConnect />
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border text-center text-muted-foreground uppercase text-sm font-bold tracking-widest">
        &copy; 2025 EliteMotors Portfolio Project. All rights reserved @ruok-dev
      </footer>

      <div className="fixed bottom-10 right-10 z-[200]">
        <CircleMenu 
          items={[
            { label: 'Home', icon: <Home size={16} />, href: '#home' },
            { label: 'Cars', icon: <Car size={16} />, href: '#cars' },
            { label: 'Offers', icon: <Tag size={16} />, href: '#offers' },
            { label: 'Details', icon: <Search size={16} />, href: '#details' },
            { label: 'Contact', icon: <Phone size={16} />, href: '#contact' }
          ]}
        />
      </div>

    </main>
  );
}
