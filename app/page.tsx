import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image 
            src="/images/hero_landscape_1788846848879.jpg" 
            alt="Moody Kerala Landscape" 
            fill 
            className={styles.heroImage}
            priority
          />
        </div>
        
        <nav className={styles.nav}>
          <div className="text-sans">Ranjith NS</div>
          <div className={styles.navLinks}>
            <Link href="#work">Work</Link>
            <Link href="#about">About</Link>
            <Link href="#stories">Stories</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </nav>

        <div className={styles.heroContent}>
          <h1 className="title-large text-serif uppercase">Ranjith NS</h1>
          <p className="text-small text-sans uppercase" style={{ marginTop: '1rem', letterSpacing: '0.2em' }}>Photography / Visual Stories</p>
          <p className={`${styles.heroIntro} text-sans`}>
            Capturing people, places and moments through a cinematic perspective.
          </p>
        </div>

        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <span>↓</span>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="section-padding container">
        <div className="text-small text-sans uppercase">Selected Work</div>
        
        <div className={styles.galleryGrid}>
          {/* Item 1 */}
          <div className={`${styles.galleryItem} ${styles.galleryItem1} img-reveal`}>
            <Image src="/images/gallery_travel_1788846863013.jpg" alt="Ethereal Kerala" fill sizes="(max-width: 768px) 100vw, 50vw" />
            <div className={styles.galleryOverlay}>
              <div>
                <h3 className="text-serif" style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Ethereal Kerala</h3>
                <p className="text-small text-sans" style={{opacity: 0.7}}>Landscape / Travel</p>
              </div>
              <span className="text-small text-sans" style={{ textDecoration: 'underline' }}>View Story</span>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className={`${styles.galleryItem} ${styles.galleryItem2} img-reveal`}>
            <Image src="/images/gallery_portrait_1788846878094.jpg" alt="Between Moments" fill sizes="(max-width: 768px) 100vw, 33vw" />
            <div className={styles.galleryOverlay}>
              <div>
                <h3 className="text-serif" style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Between Moments</h3>
                <p className="text-small text-sans" style={{opacity: 0.7}}>Portraits</p>
              </div>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className={`${styles.galleryItem} ${styles.galleryItem3} img-reveal`}>
            <Image src="/images/gallery_documentary_1788846895687.jpg" alt="After Dark" fill sizes="(max-width: 768px) 100vw, 33vw" />
            <div className={styles.galleryOverlay}>
              <div>
                <h3 className="text-serif" style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Monsoon Stories</h3>
                <p className="text-small text-sans" style={{opacity: 0.7}}>Documentary</p>
              </div>
            </div>
          </div>
          
          {/* Item 4 */}
          <div className={`${styles.galleryItem} ${styles.galleryItem4} img-reveal`}>
             <Image src="/images/gallery_travel_1788846863013.jpg" alt="Travel" fill sizes="(max-width: 768px) 100vw, 50vw" />
            <div className={styles.galleryOverlay}>
              <div>
                <h3 className="text-serif" style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>After Dark</h3>
                <p className="text-small text-sans" style={{opacity: 0.7}}>Urban / Night</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section id="stories" className={`${styles.featuredStory} container section-padding`}>
        <div className={styles.featuredImageWrapper}>
          <Image src="/images/featured_monsoon_1788846911626.jpg" alt="Monsoon Stories" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.featuredContent}>
          <h2 className="title-medium text-serif uppercase" style={{ marginBottom: '1.5rem' }}>Monsoon Stories</h2>
          <p className="text-sans" style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.1rem' }}>
            "Rain changes the rhythm of Kerala. Streets become reflections, ordinary moments become cinematic, and every frame feels temporary."
          </p>
          <Link href="#" className={`${styles.exploreLink} text-sans`}>Explore Story →</Link>
        </div>
      </section>

      {/* Photography Categories */}
      <section className="section-padding container">
        <div className={styles.categoriesList}>
          {['PORTRAITS', 'TRAVEL', 'STREET', 'LANDSCAPES', 'DOCUMENTARY', 'FASHION'].map((category) => (
            <div key={category} className={`${styles.categoryItem} text-serif uppercase`}>
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* About The Photographer */}
      <section id="about" className="section-padding container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutPortrait}>
            <Image src="/images/about_portrait_1788846926224.jpg" alt="Ranjith NS" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.aboutContent}>
            <div className="text-small text-sans uppercase" style={{ marginBottom: '2rem' }}>About</div>
            <h2 className="title-medium text-serif" style={{ marginBottom: '2rem' }}>
              "I photograph the quiet details that often disappear when we move too quickly."
            </h2>
            <p className="text-sans" style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Specializing in cinematic visual storytelling, I focus on the interplay between light, emotion, and environment. My approach is rooted in an editorial aesthetic—seeking out high contrast, deep shadows, and honest moments to create images that feel like stills from a film.
            </p>
            <Link href="#" className={`${styles.exploreLink} text-sans`}>More About Me →</Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding container">
        <div className={styles.statsGrid}>
          <div>
            <div className={styles.statNumber}>08+</div>
            <div className={styles.statLabel}>Years Photographing</div>
          </div>
          <div>
            <div className={styles.statNumber}>120+</div>
            <div className={styles.statLabel}>Stories Captured</div>
          </div>
          <div>
            <div className={styles.statNumber}>18</div>
            <div className={styles.statLabel}>Countries</div>
          </div>
          <div>
            <div className={styles.statNumber}>42</div>
            <div className={styles.statLabel}>Featured Projects</div>
          </div>
        </div>
      </section>

      {/* Clients / Publication */}
      <section className="section-padding container">
        <div className={styles.clientsList}>
          <span className="text-serif uppercase">Vogue</span>
          <span className="text-serif uppercase">National Geographic</span>
          <span className="text-serif uppercase">Adobe</span>
          <span className="text-serif uppercase">Sony</span>
          <span className="text-serif uppercase">Canon</span>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding container">
        <div className={styles.testimonial}>
          <p className={`${styles.quote} text-serif`}>
            "Every photograph feels like a frame from a story that already existed."
          </p>
          <div className="text-small text-sans uppercase" style={{ letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
            — Creative Director, Editorial Magazine
          </div>
        </div>
      </section>

      {/* Contact / Final CTA */}
      <section id="contact" className={styles.contactCta}>
        <div className={styles.contactBackground}>
          <Image src="/images/contact_cta_1788846940791.jpg" alt="Abstract Background" fill />
        </div>
        <div className={styles.contactContent}>
          <h2 className="title-large text-serif uppercase" style={{ marginBottom: '1.5rem' }}>
            Let's create something worth remembering.
          </h2>
          <p className="text-sans" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
            For collaborations, portraits, campaigns and visual stories.
          </p>
          <Link href="mailto:hello@example.com" className={`${styles.ctaButton} text-sans`}>
            Start a Project →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="text-sans">© {new Date().getFullYear()} Ranjith NS. All Rights Reserved.</div>
        <div className={`${styles.footerLinks} text-sans`}>
          <Link href="#">Instagram</Link>
          <Link href="#">Email</Link>
          <Link href="#">Location</Link>
        </div>
        <div className="text-sans text-small">
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            Back to Top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
