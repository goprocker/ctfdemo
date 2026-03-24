"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import Flipbook from "@/components/Flipbook";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef}>
      <Navbar />

      {/* Social Sidebar */}
      <div className="social-sidebar">
        <a href="https://www.instagram.com/obscura.iiitdm/" target="_blank" rel="noopener noreferrer" className="social-icon">IG</a>
        <a href="#" className="social-icon">in</a>
        <a href="#" className="social-icon">▶</a>
      </div>

      {/* Hero Section */}
      <section className="section-container" style={{ minHeight: "100vh", paddingTop: "100px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: 1200,
            zIndex: 10,
          }}
        >
          {/* Top Banner Tag */}
          <div style={{
            background: "rgba(58, 10, 13, 0.4)",
            border: "1px solid rgba(255, 140, 0, 0.4)",
            padding: "0.5rem 1.5rem",
            borderRadius: "30px",
            marginBottom: "2rem",
            backdropFilter: "blur(10px)",
          }}>
            <Link href="/tickets" style={{
              color: "var(--color-cream)",
              textDecoration: "none",
              fontSize: "0.7rem",
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.15em",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textTransform: "uppercase",
            }}>
              <span style={{ color: "var(--color-orange)" }}>●</span>
              Obscura tickets live : Grab them now and enjoy your events
            </Link>
          </div>

          {/* Main Title Banner */}
          <div style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "3rem",
            textAlign: "center",
          }}>
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                }
              }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(4rem, 15vw, 10rem)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "0.05em",
                textShadow: "0 10px 30px rgba(0,0,0,0.8)",
                display: "flex",
                background: "linear-gradient(to bottom, #ffffff 30%, #a0a0a0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {Array.from("OBSCURA").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50, rotateX: -90 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0,
                      transition: { type: "spring", damping: 12, stiffness: 100 }
                    }
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1rem, 3vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "0.5em",
                marginTop: "-0.5em",
                display: "flex",
                alignItems: "center",
                gap: "1rem"
              }}
            >
              <motion.span 
                initial={{ width: 0 }} 
                animate={{ width: 40 }} 
                transition={{ delay: 1.8, duration: 0.8 }}
                style={{ height: 2, background: "var(--color-cream)" }}
              />
              <motion.span
                animate={{ textShadow: ["0px 0px 0px rgba(255,140,0,0)", "0px 0px 20px rgba(255,140,0,0.8)", "0px 0px 0px rgba(255,140,0,0)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                CHRONOSYNC
              </motion.span>
              <motion.span 
                initial={{ width: 0 }} 
                animate={{ width: 40 }} 
                transition={{ delay: 1.8, duration: 0.8 }}
                style={{ height: 2, background: "var(--color-cream)" }}
              />
            </motion.div>
            
            <div style={{
              position: "absolute",
              bottom: "-2rem",
              left: 0,
              fontFamily: "var(--font-decorative)",
              color: "var(--color-gold)",
              letterSpacing: "0.2em",
              fontSize: "1rem",
              textTransform: "uppercase"
            }}>
              Samgatha
            </div>
            <div style={{
              position: "absolute",
              bottom: "-2rem",
              right: 0,
              fontFamily: "var(--font-decorative)",
              color: "var(--color-gold)",
              letterSpacing: "0.2em",
              fontSize: "1rem",
              textTransform: "uppercase"
            }}>
              Vashisht
            </div>
          </div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ marginTop: "1rem" }}
          >
            <Countdown />
          </motion.div>
        </motion.div>
      </section>

      {/* What is Savara Section */}
      <section className="section-container" style={{ background: "linear-gradient(to bottom, transparent, rgba(58,10,13,0.3) 50%, transparent)" }}>
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ maxWidth: 800, textAlign: "center", zIndex: 10 }}
        >
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "0.05em",
            marginBottom: "2rem",
          }}>
            <span className="heading-gradient">WHAT IS</span>{" "}
            <span style={{ color: "var(--color-cream)" }}>OBSCURA</span>
          </h2>
          
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "var(--color-text-primary)",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem"
          }}>
            <p>
              <strong style={{ color: "var(--color-cream)", fontWeight: 700, fontSize: "1.2rem" }}>OBSCURA</strong> is the new unified identity of <span style={{ color: "var(--color-orange)" }}>Samgatha × Vashisht</span> — the flagship techno-cultural fest of IIITDM Kancheepuram. It is the collision of innovation and tradition, engineering and artistry, where 5,000+ minds from premier institutions ignite five days of code, creativity, and culture.
            </p>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Under the banner of the theme of this year <strong style={{ color: "var(--color-gold)" }}>Chronosync</strong>, this edition transcends time itself — where the ancient meets the futuristic in a spectacle unlike any other.
            </p>
          </div>
        </motion.div>
      </section>

      {/* About the Fest Section */}
      <section className="section-container" style={{ padding: "8rem 2rem", position: "relative" }}>
        <div style={{ maxWidth: 1000, width: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "0.05em",
            }}
          >
            <span className="heading-gradient">ABOUT</span>{" "}
            <span style={{ color: "var(--color-cream)" }}>THE FEST</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--color-text-secondary)",
              maxWidth: 700,
              display: "flex",
              flexDirection: "column",
              gap: "2rem"
            }}
          >
            <p>
              Join us for Obscura 2026, the flagship techno-cultural fest of IIITDM Kancheepuram, a five-day celebration of innovation, creativity, and culture.
            </p>
            <p>
              The fest brings together 5,000+ bright minds from top institutions across India, uniting engineers, designers, and creators on one dynamic stage.
            </p>
            
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
              <Link href="/events" className="btn-primary btn-outline" style={{ borderImage: "linear-gradient(135deg, #FF8C00, #c41e3a) 1" }}>
                EXPLORE EVENTS
              </Link>
              <a href="#" className="btn-primary btn-outline" style={{ background: "rgba(0,0,0,0.5)" }}>
                DOWNLOAD EVENTS BROCHURE
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Flipbook Section */}
      <section style={{ padding: "4rem 2rem", position: "relative", zIndex: 1 }}>
        <Flipbook />
      </section>

      {/* Sponsors Section */}
      <Sponsors />

      {/* Footer */}
      <Footer />
    </main>
  );
}
