"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MessageCircle, Calculator, Calendar, Gauge, Cpu, Settings, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CarDetailsProps {
  name: string;
  price: string;
  year: string;
  km: string;
  engine: string;
  gearbox: string;
  description: string;
  images: string[];
}

export function CarDetails({
  name,
  price,
  year,
  km,
  engine,
  gearbox,
  description,
  images
}: CarDetailsProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Image Gallery */}
        <div className="relative group">
          <div className="aspect-[16/10] relative overflow-hidden rounded-[2rem] border-4 border-black dark:border-white shadow-neo">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt={name}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Gallery Controls */}
            <div className="absolute inset-x-6 bottom-8 flex justify-between items-center z-20">
              <div className="flex gap-2">
                <button 
                  onClick={prevImage}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all text-white"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all text-white"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="flex gap-2">
                {images.map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "h-1.5 transition-all duration-300 rounded-full bg-white",
                      currentImage === i ? "w-8" : "w-2 opacity-30"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
        </div>

        {/* Right: Info Section */}
        <div className="flex flex-col">
          <div className="mb-10">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              Exclusive Inventory
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-foreground"
            >
              {name}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-8 py-3 bg-foreground text-background rounded-full font-black text-4xl uppercase tracking-tighter"
            >
              {price}
            </motion.div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <SpecItem icon={<Calendar />} label="Year" value={year} />
            <SpecItem icon={<Gauge />} label="KM" value={km} />
            <SpecItem icon={<Cpu />} label="Engine" value={engine} />
            <SpecItem icon={<Settings />} label="Gearbox" value={gearbox} />
          </div>

          {/* Description */}
          <div className="mb-12">
            <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-muted-foreground">About the Vehicle</h4>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-8 py-5 bg-orange-500 hover:bg-orange-600 text-black font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all rounded-xl shadow-lg shadow-orange-500/20 group">
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              WhatsApp
            </button>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={cn(
                  "w-16 h-16 rounded-xl border-2 flex items-center justify-center transition-all",
                  isFavorite 
                    ? "bg-red-500 border-red-500 text-white" 
                    : "border-border text-foreground hover:border-red-500 hover:text-red-500"
                )}
              >
                <Heart fill={isFavorite ? "currentColor" : "none"} size={24} />
              </button>
              <button className="px-8 h-16 rounded-xl border-2 border-border text-foreground font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-foreground hover:text-background transition-all">
                <Calculator size={20} />
                Finance
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function SpecItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="p-6 bg-muted/50 border border-border/50 rounded-2xl flex items-center gap-4 group hover:border-orange-500/50 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement, { size: 24 })}
      </div>
      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block leading-none mb-1">{label}</span>
        <span className="text-lg font-black uppercase tracking-tighter leading-none text-foreground">{value}</span>
      </div>
    </div>
  )
}
