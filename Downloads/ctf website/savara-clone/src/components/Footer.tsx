"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" style={{
      position: "relative",
      zIndex: 1,
      padding: "6rem 2rem 2rem",
      background: "transparent", // Ensures background shows through
      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      fontFamily: "var(--font-body)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand Col */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L42 18L24 10L32 28L14 36L32 44L24 62L42 54L50 72L58 54L76 62L68 44L86 36L68 28L76 10L58 18L50 0Z" fill="var(--color-cream)"/>
              </svg>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.5rem",
              fontWeight: 900,
              color: "var(--color-cream)",
              letterSpacing: "0.05em",
            }}>
              OBSCURA
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "var(--color-text-muted)",
              letterSpacing: "0.05em",
              maxWidth: "280px"
            }}>
              Chronosync — Where Ancient Meets Future
            </p>
          </div>

          {/* Contact Col */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.2rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-cream)",
              marginBottom: "1.5rem",
            }}>
              CONTACT US
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <a href="mailto:obscura@iiitdm.ac.in" style={{
                display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-text-secondary)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.3s"
              }}>
                <Mail size={18} />
                obscura@iiitdm.ac.in
              </a>
              <a href="tel:+919391131165" style={{
                display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-text-secondary)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.3s"
              }}>
                <Phone size={18} />
                +91 93911 31165
              </a>
              <div style={{
                display: "flex", alignItems: "flex-start", gap: "1rem", color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: "1.6"
              }}>
                <MapPin size={18} style={{ marginTop: "4px", flexShrink: 0 }} />
                <span>
                  IIITDM Kancheepuram,<br/>
                  Melakkottaiyur, Nellikuppam Road,<br/>
                  Near Kandigai,<br/>
                  Off Vandalur-Kelambakkam Road,<br/>
                  Chennai, Tamil Nadu,<br/>
                  India - 600127
                </span>
              </div>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-text-secondary)", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold", marginTop: "0.5rem", letterSpacing: "0.1em", transition: "color 0.3s"
              }}>
                <MapPin size={18} />
                REACH CAMPUS
              </a>
            </div>
          </div>

          {/* Follow Us Col */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.2rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-cream)",
              marginBottom: "1.5rem",
            }}>
              FOLLOW US
            </h3>
            <a
              href="https://www.instagram.com/obscura.iiitdm/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                padding: "0.5rem 1rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "var(--color-cream)",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "all 0.3s ease",
                background: "rgba(255,255,255,0.02)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)" }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)" }}
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "2rem",
          paddingBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--color-text-muted)",
            letterSpacing: "0.05em",
            textAlign: "center"
          }}>
            © 2026 OBSCURA Chronosync — IIITDM Kancheepuram. All rights reserved.
          </p>
          
          <button 
            style={{
              position: "absolute",
              right: 0,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--color-cream)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
