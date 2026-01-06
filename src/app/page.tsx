export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container flex justify-between items-center">
          <div className="logo-text">
            Edu<span className="logo-highlight">Scribe</span>
          </div>
          <nav className="flex gap-4 items-center nav-desktop">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content animate-fade-in">
            <span className="badge">🎓 Professional Academic Writing Excellence</span>
            <h1 style={{ marginBottom: '1.5rem', color: 'var(--navy-900)' }}>
              Your Path to Academic <br />
              <span className="text-gradient-teal">Excellence Begins Here</span>
            </h1>
            <p style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: '1.8' }}>
              Expert thesis, dissertation, and assignment writing services by <strong style={{ color: 'var(--navy-900)' }}>Soundar</strong> in Coimbatore.
              Empowering PhD scholars, researchers, and students across India and internationally with world-class academic content.
            </p>
            <div className="flex gap-3 justify-center" style={{ flexWrap: 'wrap' }}>
              <a href="https://wa.me/919381936268" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Start on WhatsApp
              </a>
              <a href="#services" className="btn btn-outline">
                Explore Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-4 justify-center" style={{ marginTop: '3rem', flexWrap: 'wrap' }}>
              <TrustBadge icon="✓" text="100% Original Content" />
              <TrustBadge icon="⚡" text="On-Time Delivery" />
              <TrustBadge icon="🔒" text="100% Confidential" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '5rem 0', background: 'var(--background-alt)' }}>
        <div className="container">
          <div className="grid grid-3">
            <StatCard number="500+" label="Projects Completed" color="var(--secondary)" />
            <StatCard number="250+" label="Happy Scholars" color="var(--accent)" />
            <StatCard number="12+" label="Years of Excellence" color="var(--navy-700)" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="badge">Our Expertise</span>
            <h2 style={{ color: 'var(--navy-900)' }}>
              Academic <span className="text-gradient-teal">Writing Services</span>
            </h2>
            <p>Comprehensive research and writing support across all academic disciplines, adhering to international standards of excellence.</p>
          </div>

          <div className="grid grid-3">
            <ServiceCard
              icon={<BookIcon />}
              title="Thesis Writing"
              desc="End-to-end thesis development with comprehensive research, data analysis, and scholarly writing for master's degree candidates."
              color="var(--teal-600)"
            />
            <ServiceCard
              icon={<GraduationIcon />}
              title="Dissertation Writing"
              desc="Complete dissertation support from proposal to defense, ensuring methodological rigor and academic excellence."
              color="var(--navy-700)"
            />
            <ServiceCard
              icon={<DocumentIcon />}
              title="Assignment Writing"
              desc="High-quality, plagiarism-free assignments across all subjects with proper citations and timely delivery."
              color="var(--accent)"
            />
            <ServiceCard
              icon={<SearchIcon />}
              title="Research Papers"
              desc="Journal-ready research papers with rigorous methodology, data analysis, and publication-quality writing."
              color="var(--green-600)"
            />
            <ServiceCard
              icon={<EditIcon />}
              title="Editing & Proofreading"
              desc="Professional editing and proofreading to refine your academic work to perfection with attention to detail."
              color="var(--teal-500)"
            />
            <ServiceCard
              icon={<StarIcon />}
              title="PhD Consultation"
              desc="Expert mentorship for PhD candidates on research design, methodology selection, and comprehensive strategy."
              color="var(--gold-600)"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-2 items-center gap-6">
            <div>
              <span className="badge">Why Choose EduScribe</span>
              <h2 style={{ color: 'var(--navy-900)', marginBottom: '1.5rem' }}>
                Your Trusted <span className="text-gradient-teal">Academic Partner</span>
              </h2>
              <p style={{ marginBottom: '2rem' }}>
                As a dedicated academic content writer in Coimbatore, I bring years of experience in delivering high-quality research and academic writing that meets international standards.
              </p>

              <div className="grid gap-3" style={{ marginBottom: '2rem' }}>
                <FeatureItem icon={<CheckIcon />} text="International Academic Standards" />
                <FeatureItem icon={<CheckIcon />} text="100% Original & Plagiarism-Free Content" />
                <FeatureItem icon={<CheckIcon />} text="On-Time Project Delivery Guarantee" />
                <FeatureItem icon={<CheckIcon />} text="Comprehensive Revision Support" />
                <FeatureItem icon={<CheckIcon />} text="Complete Confidentiality Assured" />
                <FeatureItem icon={<CheckIcon />} text="Expert Subject Matter Knowledge" />
              </div>

              <a href="#contact" className="btn btn-primary">Get Started Today</a>
            </div>

            <div className="card" style={{
              background: 'var(--gradient-teal)',
              color: 'white',
              padding: 'var(--spacing-3xl)',
              border: 'none'
            }}>
              <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.75rem' }}>
                Serving Scholars Worldwide
              </h3>
              <div className="flex flex-col gap-4">
                <AudienceItem icon="🎓" text="PhD Students & Scholars" />
                <AudienceItem icon="📚" text="Master's Degree Candidates" />
                <AudienceItem icon="👨‍🎓" text="College & University Students" />
                <AudienceItem icon="🔬" text="Research Professionals" />
                <AudienceItem icon="🏛️" text="Academic Institutions" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location/Service Area */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container text-center">
          <span className="badge">Global Reach, Local Expertise</span>
          <h2 style={{ color: 'var(--navy-900)', marginBottom: '3rem' }}>
            Serving Academic Excellence <span className="text-gradient-gold">Across Borders</span>
          </h2>
          <div className="grid grid-3">
            <LocationCard
              icon="📍"
              location="Coimbatore"
              description="Based in the heart of Tamil Nadu's education hub"
              highlight="Local Expertise"
            />
            <LocationCard
              icon="🇮🇳"
              location="All India"
              description="Serving scholars across Tamil Nadu and India"
              highlight="National Reach"
            />
            <LocationCard
              icon="🌏"
              location="International"
              description="Supporting scholars worldwide with quality service"
              highlight="Global Service"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-navy" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'white' }}>Simple & Transparent <span className="text-gradient-gold">Process</span></h2>
            <p style={{ color: 'var(--navy-100)' }}>Your academic success in four easy steps</p>
          </div>

          <div className="grid grid-2" style={{ gap: '2rem' }}>
            <ProcessStep number="1" title="Share Your Requirements" desc="Contact us via WhatsApp or email with your project details and deadlines." />
            <ProcessStep number="2" title="Receive Quotation" desc="Get a transparent quote based on your requirements and timeline." />
            <ProcessStep number="3" title="We Start Working" desc="Our expert team begins your project with thorough research and planning." />
            <ProcessStep number="4" title="Delivery & Support" desc="Receive your completed work with comprehensive revision support." />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'var(--background-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="badge">Get In Touch</span>
            <h2 style={{ color: 'var(--navy-900)' }}>
              Ready to Begin Your <span className="text-gradient-teal">Academic Journey</span>?
            </h2>
            <p>Connect with us today and take the first step towards academic excellence.</p>
          </div>

          <div className="grid grid-2 gap-6" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="card">
              <h3 style={{ color: 'var(--navy-900)', marginBottom: '1.5rem' }}>
                <PhoneIcon /> Contact Information
              </h3>

              <div className="flex flex-col gap-4">
                <ContactDetail
                  icon={<LocationIcon />}
                  label="Office Address"
                  value="No. 28, 2nd Street, Gandhipuram, Coimbatore, Tamil Nadu, India"
                />

                <ContactDetail
                  icon={<PhoneIcon />}
                  label="Mobile / WhatsApp"
                  value="+91 9381936268"
                  link="tel:+919381936268"
                />

                <ContactDetail
                  icon={<MailIcon />}
                  label="Email"
                  value="Available on WhatsApp"
                />
              </div>
            </div>

            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)',
              color: 'white',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Quick Connect</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '0.9375rem' }}>
                  Start a conversation on WhatsApp now. We're here to discuss your academic project requirements.
                </p>
                <a
                  href="https://wa.me/919381936268?text=Hello%20Soundar,%20I'm%20interested%20in%20your%20academic%20writing%20services."
                  className="btn"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    background: 'white',
                    color: 'var(--accent)',
                    fontWeight: '700'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--navy-900)',
        padding: '3rem 0 1.5rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <div className="logo-text" style={{
              color: 'white',
              fontSize: '2rem',
              marginBottom: '0.5rem'
            }}>
              Edu<span style={{ color: 'var(--accent-light)' }}>Scribe</span>
            </div>
            <p style={{ color: 'var(--navy-300)', fontSize: '0.9375rem' }}>
              Professional Academic Content Writing Services
            </p>
          </div>

          <div style={{
            borderTop: '1px solid var(--navy-700)',
            paddingTop: '1.5rem',
            color: 'var(--navy-400)',
            fontSize: '0.875rem'
          }}>
            <p>© {new Date().getFullYear()} EduScribe. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8125rem' }}>
              Coimbatore | Tamil Nadu | India | International Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component Functions
function ServiceCard({ icon, title, desc, color }: { icon: React.ReactNode; title: string; desc: string; color: string }) {
  return (
    <div className="card">
      <div className="service-icon" style={{ background: color }}>
        {icon}
      </div>
      <h3 style={{ marginBottom: '1rem', color: 'var(--navy-900)' }}>{title}</h3>
      <p style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}>{desc}</p>
    </div>
  );
}

function StatCard({ number, label, color }: { number: string; label: string; color: string }) {
  return (
    <div className="text-center" style={{ padding: '2rem' }}>
      <div style={{
        fontSize: '3.5rem',
        fontWeight: '800',
        color: color,
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-serif)',
        lineHeight: '1'
      }}>
        {number}
      </div>
      <p style={{ fontWeight: '600', color: 'var(--navy-800)', fontSize: '1.0625rem' }}>{label}</p>
    </div>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="feature-box">
      <div style={{ color: 'var(--secondary)', minWidth: '24px' }}>
        {icon}
      </div>
      <span style={{ fontWeight: '500', color: 'var(--navy-800)' }}>{text}</span>
    </div>
  );
}

function AudienceItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: 'var(--radius-md)',
      backdropFilter: 'blur(10px)'
    }}>
      <span style={{ fontSize: '1.5rem' }}>{icon}</span>
      <span style={{ fontWeight: '600' }}>{text}</span>
    </div>
  );
}

function LocationCard({ icon, location, description, highlight }: { icon: string; location: string; description: string; highlight: string }) {
  return (
    <div className="card">
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ marginBottom: '0.5rem', color: 'var(--navy-900)' }}>{location}</h3>
      <div style={{
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        background: 'var(--teal-50)',
        color: 'var(--teal-800)',
        borderRadius: 'var(--radius-full)',
        fontSize: '0.75rem',
        fontWeight: '600',
        marginBottom: '0.75rem'
      }}>
        {highlight}
      </div>
      <p style={{ fontSize: '0.9375rem' }}>{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div style={{
      display: 'flex',
      gap: '1.5rem',
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'var(--gradient-gold)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.75rem',
        fontWeight: '800',
        color: 'white',
        flexShrink: 0
      }}>
        {number}
      </div>
      <div>
        <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{title}</h4>
        <p style={{ color: 'var(--navy-100)', fontSize: '0.9375rem' }}>{desc}</p>
      </div>
    </div>
  );
}

function TrustBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.25rem',
      background: 'white',
      borderRadius: 'var(--radius-full)',
      boxShadow: 'var(--shadow-md)',
      fontSize: '0.875rem',
      fontWeight: '600',
      color: 'var(--navy-800)'
    }}>
      <span style={{ color: 'var(--green-600)', fontSize: '1.125rem' }}>{icon}</span>
      {text}
    </div>
  );
}

function ContactDetail({ icon, label, value, link }: { icon: React.ReactNode; label: string; value: string; link?: string }) {
  const content = (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
      <div style={{ color: 'var(--secondary)', minWidth: '24px', marginTop: '2px' }}>
        {icon}
      </div>
      <div>
        <strong style={{
          display: 'block',
          marginBottom: '0.25rem',
          fontSize: '0.875rem',
          color: 'var(--navy-800)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {label}
        </strong>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>{value}</span>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
      {content}
    </a>
  ) : content;
}

// Icon Components
function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}
