"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulating a response for illustrative purposes
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Direct <span className="text-orange-500">Inquiry</span>
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Interested in a specific vehicle? Send us a message.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/30 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/50 shadow-2xl"
        >
          {status === "success" ? (
            <div className="text-center py-12">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Message Sent</h3>
              <p className="text-muted-foreground">We will get back to you shortly.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 px-8 py-3 bg-orange-500 text-white font-black uppercase tracking-tighter rounded-full hover:bg-orange-600 transition-all"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border/50 rounded-xl px-4 py-4 focus:border-orange-500 outline-none transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-border/50 rounded-xl px-4 py-4 focus:border-orange-500 outline-none transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Phone Number (Optional)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-background border border-border/50 rounded-xl px-4 py-4 focus:border-orange-500 outline-none transition-all font-medium"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background border border-border/50 rounded-xl px-4 py-4 focus:border-orange-500 outline-none transition-all font-medium resize-none"
                  placeholder="Tell us about your interests..."
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                  <AlertCircle size={20} />
                  <p className="text-sm font-bold uppercase tracking-tight">Too many requests or validation error. Try again.</p>
                </div>
              )}

              <button
                disabled={status === "loading"}
                type="submit"
                className="w-full group flex items-center justify-center gap-3 bg-white text-black py-5 rounded-2xl font-black uppercase tracking-tighter text-lg hover:bg-orange-500 hover:text-white transition-all disabled:opacity-50"
              >
                {status === "loading" ? "Processing..." : (
                  <>
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};
