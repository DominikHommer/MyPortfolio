import React from 'react';
import { Link } from 'react-scroll';
import { SiLinkedin, SiGithub, SiPython, SiPytorch, SiTensorflow, SiScikitlearn, SiReact, SiPostgresql, SiDocker, SiTypescript, SiCplusplus, SiC, SiNumpy, SiPandas } from 'react-icons/si';
import { FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaExternalLinkAlt, FaShieldAlt } from 'react-icons/fa';
import '../components/portfolio.css';

// Patronus wolf-shield logo (inline SVG)
// eslint-disable-next-line
const PatronusLogo = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 100 112" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 4 L94 20 L94 62 Q94 88 50 106 Q6 88 6 62 L6 20 Z" fill="#0ea5e9"/>
    <path d="M50 13 L85 27 L85 60 Q85 81 50 96 Q15 81 15 60 L15 27 Z" fill="#0369a1"/>
    <path d="M42 68 Q38 76 34 80 Q42 74 50 78 Q58 74 66 80 Q62 76 58 68 Q54 72 50 70 Q46 72 42 68Z" fill="#38bdf8"/>
    <ellipse cx="50" cy="50" rx="17" ry="20" fill="#38bdf8"/>
    <ellipse cx="50" cy="36" rx="13" ry="14" fill="#38bdf8"/>
    <path d="M39 31 L35 20 L45 29 Z" fill="#38bdf8"/>
    <path d="M61 31 L65 20 L55 29 Z" fill="#38bdf8"/>
    <ellipse cx="44" cy="34" rx="2.5" ry="3" fill="#0c4a6e"/>
    <ellipse cx="56" cy="34" rx="2.5" ry="3" fill="#0c4a6e"/>
    <ellipse cx="50" cy="42" rx="4.5" ry="3" fill="#7dd3fc"/>
    <path d="M46 42 Q50 45 54 42" stroke="#0369a1" strokeWidth="1.2" fill="none"/>
  </svg>
);

const Home = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="page-wrapper">

      {/* ===== HERO ===== */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-grid">

            {/* Left */}
            <div className="hero-left">
              <h1>Dominik</h1>
              <h1 className="name-blue">Hommer.</h1>
              <p className="hero-subtitle">ML Engineer &nbsp;·&nbsp; AI Researcher &nbsp;·&nbsp; Builder</p>
              <p className="hero-description">
                Completed B.Sc. in Artificial Intelligence &amp; Data Science at OTH Regensburg (March 2026). Thesis: geometry-aware loss for ViT-based table structure recognition. Incoming M.Sc. student at Uppsala University (Machine Learning &amp; Statistics, Sept 2026). Founder of Casdo Labs — building Patronus, an AI security platform.
              </p>
              <div className="hero-buttons">
                <Link to="projects" smooth duration={500} className="btn-primary">
                  View Projects <FaArrowRight style={{ fontSize: '0.75rem' }} />
                </Link>
                <Link to="contact" smooth duration={500} className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
              <div className="hero-tags">
                <span className="hero-tag">3 Research Projects</span>
                <span className="hero-tag">DAAD Scholarship</span>
                <span className="hero-tag">Python, PyTorch, APIs</span>
              </div>
            </div>

            {/* Right — Timeline Card */}
            <div>
              <div className="hero-timeline-card">
                <h4>Timeline</h4>
                <div className="hero-timeline-items">

                  <div className="hero-timeline-item">
                    <div className="hero-tl-dot"></div>
                    <div className="hero-tl-content">
                      <div className="hero-tl-date">Sept 2026</div>
                      <div className="hero-tl-title">M.Sc. Data Science</div>
                      <div className="hero-tl-sub">Uppsala University, Sweden</div>
                      <span className="badge badge-upcoming">Upcoming</span>
                    </div>
                  </div>

                  <div className="hero-timeline-item">
                    <div className="hero-tl-dot"></div>
                    <div className="hero-tl-content">
                      <div className="hero-tl-date">May 2026 — ongoing</div>
                      <div className="hero-tl-title">VisLang-Seg</div>
                      <div className="hero-tl-sub">DAAD-funded Research Project</div>
                      <span className="badge badge-ongoing">Ongoing</span>
                    </div>
                  </div>

                  <div className="hero-timeline-item">
                    <div className="hero-tl-dot dot-green"></div>
                    <div className="hero-tl-content">
                      <div className="hero-tl-date">2026 — present</div>
                      <div className="hero-tl-title">Casdo Labs — Co-Founder</div>
                      <div className="hero-tl-sub">AI Security Platform (Patronus)</div>
                      <span className="badge badge-active">Active</span>
                    </div>
                  </div>

                  <div className="hero-timeline-item">
                    <div className="hero-tl-dot dot-green"></div>
                    <div className="hero-tl-content">
                      <div className="hero-tl-date">March 2026</div>
                      <div className="hero-tl-title">B.Sc. AI &amp; Data Science</div>
                      <div className="hero-tl-sub">OTH Regensburg · Geometry Loss Thesis</div>
                      <span className="badge badge-completed">Completed</span>
                    </div>
                  </div>

                  <div className="hero-timeline-item">
                    <div className="hero-tl-dot dot-gray"></div>
                    <div className="hero-tl-content">
                      <div className="hero-tl-date">Oct 2022</div>
                      <div className="hero-tl-title">Started B.Sc. at OTH Regensburg</div>
                      <div className="hero-tl-sub">Artificial Intelligence &amp; Data Science</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ===== ABOUT ===== */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-single">
            <div className="section-label">About Me</div>
            <h2 className="about-heading">I'm Dominik —<br />ML Engineer &amp; AI Researcher.</h2>
            <div className="about-body">
              <p className="about-text">
                B.Sc. graduate (AI &amp; Data Science, OTH Regensburg, March 2026) and incoming M.Sc. student at Uppsala University (Data Science · ML &amp; Statistics). My thesis introduced a geometry-aware loss function for Vision Transformer-based table cell segmentation.
              </p>
              <p className="about-text">
                Industry experience at Audi, Siemens, and AVL. Co-Founder of Casdo Labs — building Patronus Protect, an AI security platform for enterprises.
              </p>
            </div>
            <div className="tags-row">
              <span className="tag tag-blue">AI Security</span>
              <span className="tag tag-blue">Computer Vision</span>
              <span className="tag tag-purple">Vision Transformers</span>
              <span className="tag tag-purple">LLMs</span>
              <span className="tag">Machine Learning</span>
              <span className="tag tag-orange">Startup Co-Founder</span>
            </div>
            <div className="about-contact-row">
              <span className="about-contact-item">
                <FaMapMarkerAlt /> Regensburg &nbsp;(from Sept 2026: Uppsala)
              </span>
              <a href="mailto:dominik.hommer@web.de" className="about-contact-item">
                <FaEnvelope /> dominik.hommer@web.de
              </a>
              <a href="https://github.com/DominikHommer" target="_blank" rel="noopener noreferrer" className="about-contact-item">
                <SiGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/dominikhommer" target="_blank" rel="noopener noreferrer" className="about-contact-item">
                <SiLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ===== TECHNOLOGIES ===== */}
      <section id="skills" className="technologies-section">
        <div className="container">
          <div className="section-label">Technologies</div>
          <h2 className="technologies-heading">Technologies I Work With</h2>
          <div className="tech-grid">

            <div className="tech-category">
              <h4>Languages</h4>
              <div className="tech-items">
                <span className="tech-item"><SiPython size={13}/> Python</span>
                <span className="tech-item"><SiC size={13}/> C</span>
                <span className="tech-item"><SiCplusplus size={13}/> C++</span>
                <span className="tech-item"><SiTypescript size={13}/> TypeScript</span>
                <span className="tech-item">SQL</span>
              </div>
            </div>

            <div className="tech-category">
              <h4>Frameworks</h4>
              <div className="tech-items">
                <span className="tech-item"><SiPytorch size={13}/> PyTorch</span>
                <span className="tech-item"><SiTensorflow size={13}/> TensorFlow</span>
                <span className="tech-item"><SiScikitlearn size={13}/> scikit-learn</span>
                <span className="tech-item"><SiReact size={13}/> React</span>
                <span className="tech-item"><SiPandas size={13}/> Pandas</span>
                <span className="tech-item"><SiNumpy size={13}/> NumPy</span>
              </div>
            </div>

            <div className="tech-category">
              <h4>AI &amp; ML</h4>
              <div className="tech-items">
                <span className="tech-item">Deep Learning</span>
                <span className="tech-item">Computer Vision</span>
                <span className="tech-item">Object Detection</span>
                <span className="tech-item">LLMs</span>
                <span className="tech-item">LangChain</span>
              </div>
            </div>

            <div className="tech-category">
              <h4>Tools &amp; Infra</h4>
              <div className="tech-items">
                <span className="tech-item"><SiPostgresql size={13}/> PostgreSQL</span>
                <span className="tech-item"><SiDocker size={13}/> Docker</span>
                <span className="tech-item">Git</span>
                <span className="tech-item">FastAPI</span>
                <span className="tech-item">CI / CD</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-label">Projects</div>
          <h2 className="section-heading">Selected Work</h2>
          <div className="projects-grid">

            <div className="project-card-new">
              <div className="project-card-label">Computer Vision · Research</div>
              <h3>ViT Table Structure Recognition</h3>
              <p>
                Introduced a geometry-aware loss function for Vision Transformer-based table cell segmentation. Three regularization terms enforce row alignment, connected component constraints, and cell boundary precision. Evaluated on PubTables-1M.
              </p>
              <div className="tags-row">
                <span className="tag tag-blue">PyTorch</span>
                <span className="tag tag-purple">ViT</span>
                <span className="tag">Transformers</span>
                <span className="tag">Computer Vision</span>
              </div>
              <a href="https://github.com/DominikHommer" target="_blank" rel="noopener noreferrer" className="project-link">
                View Project <FaExternalLinkAlt size={10} />
              </a>
            </div>

            <div className="project-card-new">
              <div className="project-card-label">Deep Learning · OCR</div>
              <h3>Document Intelligence</h3>
              <p>
                Deep learning system extracting structured data from handwritten historical tables. Digitizing Swiss ornithological records for conservation research. Combines semantic OCR with record digitization.
              </p>
              <div className="tags-row">
                <span className="tag tag-blue">PyTorch</span>
                <span className="tag">OCR</span>
                <span className="tag">Computer Vision</span>
                <span className="tag">Deep Learning</span>
              </div>
              <a href="https://github.com/DominikHommer" target="_blank" rel="noopener noreferrer" className="project-link">
                View Project <FaExternalLinkAlt size={10} />
              </a>
            </div>

            <div className="project-card-new">
              <div className="project-card-label">Machine Learning · Automotive</div>
              <h3>Driving Style Recognition</h3>
              <p>
                Unsupervised driving style recognition system developed at Audi AG. Uses autoencoders, time series methods, and clustering to segment driving behaviour — no labelled data required. Analysed error sequence frequencies via data mining.
              </p>
              <div className="tags-row">
                <span className="tag tag-blue">PyTorch</span>
                <span className="tag">Autoencoders</span>
                <span className="tag">Time Series</span>
                <span className="tag">Clustering</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ===== PATRONUS ===== */}
      <section id="patronus" className="patronus-section">
        <div className="container">
          <div className="patronus-grid">

            <div className="patronus-left">
              <div className="section-label">Startup · 2026</div>
              <h2 className="section-heading" style={{ marginBottom: '6px' }}>
                Patronus Protect
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '20px', marginTop: 0 }}>
                Co-Founder &nbsp;·&nbsp; Casdo Labs
              </p>
              <p className="about-text">
                Patronus Protect is a system-wide AI security layer for enterprises. It acts as a central control instance for all AI interactions — protecting sensitive data, detecting threats in real time, and giving organisations full control over how AI is used across every application and provider.
              </p>
              <p className="about-text">
                A core differentiator is the <strong>local-first architecture</strong>: Patronus Protect runs directly on the end device, with no reliance on external cloud infrastructure. This ensures GDPR compliance, eliminates data transfer risks, and extends protection even to locally-run and offline AI models.
              </p>

              <div className="patronus-problems">
                <div className="patronus-problem-label">Problems We Solve</div>
                <div className="patronus-problem-grid">
                  <div className="patronus-problem-item">
                    <span className="patronus-problem-dot"></span>
                    <span>Shadow AI — uncontrolled tool usage with no visibility</span>
                  </div>
                  <div className="patronus-problem-item">
                    <span className="patronus-problem-dot"></span>
                    <span>Data leaks — sensitive company data sent to external AI systems</span>
                  </div>
                  <div className="patronus-problem-item">
                    <span className="patronus-problem-dot"></span>
                    <span>Prompt injection &amp; manipulation attacks</span>
                  </div>
                  <div className="patronus-problem-item">
                    <span className="patronus-problem-dot"></span>
                    <span>No control over autonomous AI actions &amp; decisions</span>
                  </div>
                  <div className="patronus-problem-item">
                    <span className="patronus-problem-dot"></span>
                    <span>Fragmented security — no unified strategy across tools</span>
                  </div>
                </div>
              </div>

              <div className="patronus-features">
                <div className="patronus-feature">
                  <FaShieldAlt className="patronus-feature-icon" />
                  <div>
                    <strong>System-Wide Monitoring</strong>
                    <p>All AI interactions captured across every app and provider — inputs, outputs, and automated actions. Full Shadow AI detection.</p>
                  </div>
                </div>
                <div className="patronus-feature">
                  <FaShieldAlt className="patronus-feature-icon" />
                  <div>
                    <strong>Real-Time Data Protection</strong>
                    <p>Sensitive content detected and blocked before it leaves the device. GDPR-compliant by design, no cloud routing of confidential data.</p>
                  </div>
                </div>
                <div className="patronus-feature">
                  <FaShieldAlt className="patronus-feature-icon" />
                  <div>
                    <strong>Threat Detection &amp; Action Control</strong>
                    <p>Prompt injection and manipulation attacks stopped in real time. Full control over which AI actions are permitted or restricted.</p>
                  </div>
                </div>
                <div className="patronus-feature">
                  <FaShieldAlt className="patronus-feature-icon" />
                  <div>
                    <strong>Local-First Architecture</strong>
                    <p>On-device processing with no cloud dependency. Works with cloud AI, local models, and hybrid environments. Minimal latency, maximum privacy.</p>
                  </div>
                </div>
              </div>

              <div className="patronus-links">
                <a href="https://patronus.studio" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Visit patronus.studio <FaExternalLinkAlt size={11} />
                </a>
                <a href="https://www.linkedin.com/company/patronus-protect/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <SiLinkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="patronus-right">
              <div className="patronus-logo-card">
                <img
                  src={`${process.env.PUBLIC_URL}/Patronus_Logo_4096_4096.png`}
                  alt="Patronus Protect Logo"
                  style={{ width: 90, height: 90, objectFit: 'contain' }}
                />
                <div className="patronus-logo-name">Patronus Protect</div>
                <div className="patronus-logo-sub">by Casdo Labs</div>
                <span className="badge badge-active" style={{ marginTop: '8px' }}>Active · 2026</span>
              </div>
              <div className="patronus-tagline">
                "The missing security layer for the practical use of AI in enterprises."
              </div>
              <div className="patronus-caps">
                {['Monitoring', 'Data Protection', 'Threat Detection', 'Policy Enforcement', 'Action Control', 'Transparency'].map(cap => (
                  <span key={cap} className="tag">{cap}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ===== RESEARCH ===== */}
      <section id="research" className="research-section">
        <div className="container">
          <div className="section-label">Research</div>
          <h2 className="section-heading">Research Work</h2>
          <div className="research-list">

            <div className="research-item">
              <div className="research-date">May 2026 — ongoing</div>
              <div className="research-content">
                <h4>VisLang-Seg: Integrating Vision Transformers &amp; LLMs for Context-Aware Multimodal Image Segmentation</h4>
                <p>
                  DAAD scholarship. Integrating Vision Transformers with LLMs for context-aware multimodal image segmentation with cross-modal reasoning between visual and textual representations.
                </p>
                <div className="tags-row">
                  <span className="tag tag-blue">PyTorch</span>
                  <span className="tag tag-purple">ViT</span>
                  <span className="tag tag-purple">Transformers</span>
                  <span className="tag">Multimodal</span>
                </div>
              </div>
            </div>

            <div className="research-item">
              <div className="research-date">2025 — 2026</div>
              <div className="research-content">
                <h4>Vision Transformer-Based Table Structure Recognition with a Novel Geometry-Aware Loss Function</h4>
                <p>
                  Geometry-aware loss with axis arguments, morphological closing, and gap suppression terms. Evaluated on PubTables-1M: up to 1.9pp region-level F1 over BCE baseline.
                </p>
                <div className="tags-row">
                  <span className="tag tag-blue">PyTorch</span>
                  <span className="tag tag-purple">ViT</span>
                  <span className="tag">Transformers</span>
                  <span className="tag">Computer Vision</span>
                </div>
              </div>
            </div>

            <div className="research-item">
              <div className="research-date">2024 — 2025</div>
              <div className="research-content">
                <h4>Document Digitalization using Deep Learning and Computer Vision</h4>
                <p>
                  Handwritten table digitization using deep learning. Swiss ornithological record digitization for conservation. Presented at scientific conference.
                </p>
                <div className="tags-row">
                  <span className="tag tag-blue">PyTorch</span>
                  <span className="tag">OpenCV</span>
                  <span className="tag">Computer Vision</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ===== WORK EXPERIENCE ===== */}
      <section id="workexp" className="work-section">
        <div className="container">
          <div className="section-label">Work Experience</div>
          <h2 className="section-heading">Where I've Worked</h2>
          <div className="work-list">

            <div className="work-item">
              <div className="work-date">2025 — Apr 2026</div>
              <div className="work-content">
                <h4>Working Student – Data Science &amp; Backend</h4>
                <div className="work-company">Trinnovative GmbH · Regensburg</div>
                <ul className="work-bullets">
                  <li>Data science pipelines and backend development for production systems.</li>
                </ul>
              </div>
            </div>

            <div className="work-item">
              <div className="work-date">2025 — Feb 2026</div>
              <div className="work-content">
                <h4>Tutor – CodeClinic (Programming)</h4>
                <div className="work-company">OTH Regensburg</div>
                <ul className="work-bullets">
                  <li>Supporting students in programming courses at the university's coding clinic.</li>
                </ul>
              </div>
            </div>

            <div className="work-item">
              <div className="work-date">Oct 2024 — Mar 2025</div>
              <div className="work-content">
                <h4>Intern – Data Science &amp; AI</h4>
                <div className="work-company">Audi AG · Ingolstadt</div>
                <ul className="work-bullets">
                  <li>Used data mining algorithms to analyze error sequence frequencies.</li>
                  <li>Created an unsupervised model for driving style recognition using autoencoders, time series methods, and clustering.</li>
                  <li>Built LLM-based assistants to streamline processes, integrating external documents as a knowledge base.</li>
                </ul>
              </div>
            </div>

            <div className="work-item">
              <div className="work-date">May 2024 — Aug 2024</div>
              <div className="work-content">
                <h4>Working Student – AI Engineering</h4>
                <div className="work-company">AVL Software and Functions GmbH</div>
                <ul className="work-bullets">
                  <li>Developed an autocompletion feature using traditional methods and LLMs.</li>
                  <li>Full-stack development of an efficient web application (frontend + backend).</li>
                </ul>
              </div>
            </div>

            <div className="work-item">
              <div className="work-date">Sep 2018 — Jul 2021</div>
              <div className="work-content">
                <h4>Mechatronics Apprentice</h4>
                <div className="work-company">Siemens AG · Amberg</div>
                <ul className="work-bullets">
                  <li>Installation, maintenance, and troubleshooting of mechanical and electronic systems.</li>
                  <li>Operated automated production lines at Siemens manufacturing facilities.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ===== EDUCATION ===== */}
      <section id="education" className="education-section">
        <div className="container">
          <div className="section-label">Education</div>
          <h2 className="section-heading">Academic Background</h2>
          <div className="education-list">

            <div className="education-item">
              <div className="education-content">
                <h4>M.Sc. Data Science</h4>
                <div className="education-school">Uppsala University, Sweden</div>
                <div className="education-date">Sept 2026</div>
              </div>
              <span className="badge badge-upcoming">Upcoming</span>
            </div>

            <div className="education-item">
              <div className="education-content">
                <h4>B.Sc. Artificial Intelligence and Data Science</h4>
                <div className="education-school">University of Applied Sciences Regensburg (OTH)</div>
                <div className="education-date">Oct 2022 – March 2026</div>
              </div>
              <span className="badge badge-completed">Completed</span>
            </div>

            <div className="education-item">
              <div className="education-content">
                <h4>GED / Abitur</h4>
                <div className="education-school">Upper Secondary School Amberg</div>
                <div className="education-date">July 2022</div>
              </div>
            </div>

            <div className="education-item">
              <div className="education-content">
                <h4>Vocational Training in Mechatronics</h4>
                <div className="education-school">Mechatronics Vocational School Amberg</div>
                <div className="education-date">Aug 2021</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ===== INTERESTS ===== */}
      <section id="hobbies" className="hobbies-section">
        <div className="container">
          <div className="section-label">Outside of Work</div>
          <h2 className="section-heading">Interests &amp; Hobbies</h2>
          <div className="hobbies-grid">
            <div className="hobby-item"><span className="hobby-emoji">🎒</span> Backpacking</div>
            <div className="hobby-item"><span className="hobby-emoji">🏊</span> Swimming</div>
            <div className="hobby-item"><span className="hobby-emoji">🌊</span> Sea &amp; Water</div>
            <div className="hobby-item"><span className="hobby-emoji">✈️</span> Travel</div>
            <div className="hobby-item"><span className="hobby-emoji">🏋️</span> Gym</div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Open to research collaborations, opportunities, and interesting conversations.</p>
          <a href="mailto:dominik.hommer@web.de" className="btn-email">
            <FaEnvelope /> dominik.hommer@web.de
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <span className="footer-copy">© 2026 Dominik Hommer</span>
        <div className="footer-links">
          <a href="https://github.com/DominikHommer" target="_blank" rel="noopener noreferrer" className="footer-link">
            <SiGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/dominikhommer" target="_blank" rel="noopener noreferrer" className="footer-link">
            <SiLinkedin /> LinkedIn
          </a>
          <a href="https://patronus.studio" target="_blank" rel="noopener noreferrer" className="footer-link">
            <img src={`${process.env.PUBLIC_URL}/Patronus_Logo_4096_4096.png`} alt="Patronus" style={{ width: 18, height: 18, objectFit: 'contain' }} /> Patronus
          </a>
        </div>
        <button className="back-to-top" onClick={scrollToTop}>
          Back to top ↑
        </button>
      </footer>

    </div>
  );
};

export default Home;
