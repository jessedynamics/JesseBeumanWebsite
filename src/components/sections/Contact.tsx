"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { resumeData } from "@/data/resume";
import { supabase } from "@/lib/supabase";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      // 1. Insert into Supabase (for database record)
      const { error } = await supabase
        .from('contact_messages')
        .insert([{ name, email, message }]);

      if (error) throw error;

      // 2. Send email via Web3Forms
      const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: name,
          email: email,
          message: message,
        }),
      });

      if (!web3FormsResponse.ok) {
        throw new Error("Failed to send email via Web3Forms");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl font-bold mb-4">
                Let's Work Together <span className="text-primary">.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${resumeData.contact.email}`} 
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">{resumeData.contact.email}</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Hello there..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-foreground text-background font-bold hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "idle" && "Send Message"}
                  {status === "loading" && "Sending..."}
                  {status === "success" && "Message Sent!"}
                  {status === "error" && "Error Sending"}
                </button>
              </form>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
