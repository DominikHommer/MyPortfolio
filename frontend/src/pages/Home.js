import React from 'react';
import { Link } from 'react-scroll';
import { SiLinkedin, SiGithub, SiResearchgate, SiPython, SiPytorch, SiTensorflow, SiScikitlearn, SiReact, SiPostgresql, SiDocker, SiTypescript, SiCplusplus, SiC, SiNumpy, SiPandas } from 'react-icons/si';
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
              <h1>Dominik<br /><span className="name-blue">Hommer.</span></h1>
              <p className="hero-subtitle">ML Engineer &nbsp;·&nbsp; AI Researcher &nbsp;·&nbsp; Builder</p>
              <p className="hero-description">
                AI security, computer vision and efficient machine learning. Co-founder of Casdo Labs, building Patronus Protect and publishing on-device AI-security models. First author of a published journal article in Array. B.Sc. graduate and currently enrolled in the Mathematics for Business and Industry master’s program at OTH Regensburg.
              </p>
              <div className="hero-buttons">
                <Link to="research" smooth duration={500} className="btn-primary">
                  Explore Research <FaArrowRight style={{ fontSize: '0.75rem' }} />
                </Link>
                <Link to="contact" smooth duration={500} className="btn-secondary">
                  Get in Touch
                </Link>
                <a className="btn-secondary" href={`${process.env.PUBLIC_URL}/CV_Dominik_Hommer.pdf`} target="_blank" rel="noopener noreferrer">Download CV</a>
              </div>
              <div className="hero-tags">
                <span className="hero-tag">First-author journal publication</span>
                <span className="hero-tag">10,000+ monthly model downloads</span>
                <span className="hero-tag">40,000+ total model downloads</span>
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
                      <div className="hero-tl-date">17 October 2026</div>
                      <div className="hero-tl-title">First-author article published</div>
                      <div className="hero-tl-sub">Array · Elsevier</div>
                      <span className="badge badge-completed">Published</span>
                    </div>
                  </div>

                  <div className="hero-timeline-item">
                    <div className="hero-tl-dot"></div>
                    <div className="hero-tl-content">
                      <div className="hero-tl-date">May — July 2026</div>
                      <div className="hero-tl-title">VisLang-Seg</div>
                      <div className="hero-tl-sub">Mitacs Globalink Research Internship</div>
                      <span className="badge badge-completed">Completed</span>
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
                      <div className="hero-tl-date">April 2026</div>
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
                I develop machine-learning methods and turn them into practical systems. My bachelor thesis introduced geometry-aware losses for Vision Transformer-based table segmentation and led to a first-author article published in Array. I am currently enrolled in the Mathematics for Business and Industry master’s program at OTH Regensburg.
              </p>
              <p className="about-text">
                My experience spans a Mitacs research internship in Canada, applied machine learning at Audi and AVL, and co-founding Casdo Labs. At Patronus, I work on prompt-injection detection, compact security models and runtime controls for AI agents.
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
                <FaMapMarkerAlt /> Germany
              </span>
              <a href="mailto:dominik@patronus.studio" className="about-contact-item">
                <FaEnvelope /> dominik@patronus.studio
              </a>
              <a href="https://github.com/DominikHommer" target="_blank" rel="noopener noreferrer" className="about-contact-item">
                <SiGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/dominikhommer" target="_blank" rel="noopener noreferrer" className="about-contact-item">
                <SiLinkedin /> LinkedIn
              </a>
              <a href="https://www.researchgate.net/profile/Dominik-Hommer" target="_blank" rel="noopener noreferrer" className="about-contact-item">
                <SiResearchgate /> ResearchGate
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
                <span className="tech-item"><SiReact size={13}/> React</span><span className="tech-item">Hugging Face</span><span className="tech-item">ONNX Runtime</span>
                <span className="tech-item"><SiPandas size={13}/> Pandas</span>
                <span className="tech-item"><SiNumpy size={13}/> NumPy</span>
              </div>
            </div>

            <div className="tech-category">
              <h4>AI &amp; ML</h4>
              <div className="tech-items">
                <span className="tech-item">Deep Learning</span>
                <span className="tech-item">Computer Vision</span>
                <span className="tech-item">Multi-task Learning</span>
                <span className="tech-item">LLMs</span>
                <span className="tech-item">Model Evaluation</span><span className="tech-item">Quantization</span>
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
                Introduced a geometry-aware loss function for Vision Transformer-based table cell segmentation. Axis-alignment, morphological closing and spur suppression improve structural consistency. Evaluated on PubTables-1M; the resulting first-author article was published online in Array on 17 October 2026.
              </p>
              <div className="tags-row">
                <span className="tag tag-blue">PyTorch</span>
                <span className="tag tag-purple">ViT</span>
                <span className="tag">Transformers</span>
                <span className="tag">Computer Vision</span>
              </div>
              <a href="#research" className="project-link">
                Research details <FaExternalLinkAlt size={10} />
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
              <a href="https://github.com/DominikHommer/docdig-vogelwarte" target="_blank" rel="noopener noreferrer" className="project-link">
                View code <FaExternalLinkAlt size={10} />
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
                Patronus Protect is an on-device AI firewall. It combines provider-independent AI-traffic detection with local inspection for prompt injection, sensitive data and risky tool calls across supported browsers, applications and agents.
              </p>
              <p className="about-text">
                The scanning engine, <strong>Patronus Ark</strong>, combines native rules, compact classifiers and quantized transformers in a Rust/Python cascade. Security inspection runs locally; allowed requests still go to the selected AI provider. I connect model research with practical deployment and runtime policies.
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
                    <p>Provider-independent detection uses signals from AI traffic across supported apps and protocols.</p>
                  </div>
                </div>
                <div className="patronus-feature">
                  <FaShieldAlt className="patronus-feature-icon" />
                  <div>
                    <strong>Real-Time Data Protection</strong>
                    <p>Local inspection identifies PII, secrets and sensitive documents so policies can mask or block detected risks.</p>
                  </div>
                </div>
                <div className="patronus-feature">
                  <FaShieldAlt className="patronus-feature-icon" />
                  <div>
                    <strong>Threat Detection &amp; Action Control</strong>
                    <p>Specialized models assess suspicious instructions and supported tool calls; policies determine the response.</p>
                  </div>
                </div>
                <div className="patronus-feature">
                  <FaShieldAlt className="patronus-feature-icon" />
                  <div>
                    <strong>Local-First Architecture</strong>
                    <p>Native rules handle simple cases; lightweight classifiers and ONNX transformers provide deeper inspection when needed.</p>
                  </div>
                </div>
              </div>

              <div className="patronus-links">
                <a href="https://patronus.studio" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Visit patronus.studio <FaExternalLinkAlt size={11} />
                </a>
                <a href="https://github.com/patronus-protect/patronus-security" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <SiGithub size={14} /> Patronus Ark
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

      <section id="models" className="projects-section">
        <div className="container">
          <div className="section-label">Open Models · Hugging Face</div>
          <h2 className="section-heading">AI Security Models</h2>
          <p className="about-text">Models and deployment variants published through Patronus: <strong>10,000+ monthly downloads and 40,000+ total downloads</strong>. Verified on 13 October 2026: 12,513 in the preceding month, 49,007 all-time, across 18 public repositories. These are repository downloads, not unique users.</p>
          <div className="projects-grid model-grid">
            {[
              ['Wolf Defender', 'Prompt-injection detection', 'Multilingual mmBERT classifiers with adversarial augmentation and hard-negative training. Small v2: 95.21% F1 on Qualifire (5,000 examples); quantized ONNX export as small as 96.30 MB.', 'wolf-defender-prompt-injection-small', ['mmBERT', 'ONNX', 'INT8 / INT4']],
              ['Lion Warden', 'Multi-task security', 'One shared encoder, seven security heads: injection, threat, sensitive documents, routing, and tool type, action and data-flow risk. Masked multi-task training; reported mean head F1 0.937 on held-out test sets.', 'lion-warden-ai-security-classifier', ['Multi-task learning', 'Local inference']],
              ['Wolf Defender Jev', 'Context-aware decisions', '151M-parameter model that scores possible answers to security questions using agent context, tool output and proposed actions. Calibrated probabilities, 15 languages and CPU inference.', 'wolf-defender-jev', ['Agent context', 'Calibration']],
              ['Orca Sonar', 'Document classification', 'Classifies document topics to support data-loss-prevention policies and sensitive-document routing.', 'orca-sonar-document-classifier', ['DLP', 'Classification']],
              ['Husky', 'Agent tool risk', 'Dedicated models for tool type, operation and security properties, including sensitive or untrusted sources and external sinks.', 'husky-nose-tool-security-properties-classifier', ['Tool use', 'Agent security']],
              ['Panther Read and GLiNER Edge', 'Routing and entity extraction', 'Intent classifiers support request routing; quantized upstream GLiNER models support local entity extraction. The GLiNER releases are deployment adaptations of existing models.', 'panther-read-intent-classifier', ['Intent routing', 'PII']]
            ].map(([name, category, description, repo, tags]) => (
              <article className="project-card-new" key={name}>
                <div className="project-card-label">{category}</div>
                <h3>{name}</h3><p>{description}</p>
                <div className="tags-row">{tags.map(tag => <span className="tag tag-blue" key={tag}>{tag}</span>)}</div>
                <a href={`https://huggingface.co/patronus-studio/${repo}`} target="_blank" rel="noopener noreferrer" className="project-link">Model card <FaExternalLinkAlt size={10} /></a>
              </article>
            ))}
          </div>
          <p className="model-note">Benchmark figures are developer-reported model-card results for the specified evaluation sets. Deployment speed and quantized-model quality depend on the selected artifact and hardware.</p>
          <a href="https://huggingface.co/patronus-studio" target="_blank" rel="noopener noreferrer" className="btn-secondary">Browse all models <FaExternalLinkAlt size={11} /></a>
        </div>
      </section>
      <hr className="section-divider" />

      {/* ===== RESEARCH ===== */}
      <section id="research" className="research-section">
        <div className="container">
          <div className="section-label">Research</div>
          <h2 className="section-heading">Research Work</h2>
          <div className="research-list">
            <article className="research-item" id="publication">
              <div className="research-date">Published 17 Oct 2026</div>
              <div className="research-content">
                <span className="badge badge-completed">Published · Open access</span>
                <h4>Geometry-Aware Losses for Structurally Consistent Table Segmentation</h4>
                <p><strong>Dominik Hommer, Stefanie Vogl.</strong> Array, Volume 32 (2026), Article 101347. This first-author article grew out of my bachelor thesis on geometry-aware learning for Vision Transformer-based table segmentation. The loss improves region-level F1 by up to 9 percentage points over a BCE–Dice baseline without increasing inference cost.</p>
                <p className="model-note">DOI: 10.1016/j.array.2026.101347 · Available online 17 October 2026 · CC BY 4.0</p>
                <div className="hero-buttons">
                  <a href="https://www.sciencedirect.com/science/article/pii/S2590005626006703" target="_blank" rel="noopener noreferrer" className="btn-primary">Read on ScienceDirect <FaExternalLinkAlt size={11} /></a>
                  <a href="https://doi.org/10.1016/j.array.2026.101347" target="_blank" rel="noopener noreferrer" className="btn-secondary">DOI <FaExternalLinkAlt size={11} /></a>
                  <a href="https://www.researchgate.net/publication/416121392_Geometry-aware_losses_for_structurally_consistent_table_segmentation" target="_blank" rel="noopener noreferrer" className="btn-secondary">Paper on ResearchGate <FaExternalLinkAlt size={11} /></a>
                </div>
                <div className="tags-row"><span className="tag tag-blue">Journal article</span><span className="tag">Table segmentation</span><span className="tag">Geometry-aware loss</span></div>
              </div>
            </article>


            <div className="research-item">
              <div className="research-date">May — July 2026</div>
              <div className="research-content">
                <h4>VisLang-Seg: Integrating Vision Transformers &amp; LLMs for Context-Aware Multimodal Image Segmentation</h4>
                <p>
                  Mitacs Globalink research internship in Edmonton, Canada. Developed a resource-efficient two-stage cancer-cell segmentation architecture combining lightweight preprocessing and candidate selection with Vision Transformers and LLM-based multimodal segmentation.
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
                  Geometry-aware loss with axis-alignment, morphological closing and spur-suppression terms. Evaluated on PubTables-1M: up to 9 percentage points improvement in region-level detection over a BCE-Dice baseline, with comparable pixel-level performance and no added inference-time overhead.
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
              <div className="research-date">2024 — 2026</div>
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
              <div className="work-date">Apr 2025 — Apr 2026</div>
              <div className="work-content">
                <h4>Working Student – Data Science &amp; Backend</h4>
                <div className="work-company">Trinnovative GmbH · Regensburg</div>
                <ul className="work-bullets">
                  <li>Data science pipelines and backend development for production systems.</li>
                </ul>
              </div>
            </div>

            <div className="work-item">
              <div className="work-date">Oct 2025 — Feb 2026</div>
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
              <div className="work-date">Sep 2018 — Aug 2021</div>
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
                <h4>Master’s program in Mathematics for Business and Industry</h4>
                <div className="education-school">OTH Regensburg, Germany</div>
                <div className="education-date">Currently enrolled</div>
              </div>
              <span className="badge badge-active">Enrolled</span>
            </div>

            <div className="education-item">
              <div className="education-content">
                <h4>B.Sc. Artificial Intelligence and Data Science</h4>
                <div className="education-school">University of Applied Sciences Regensburg (OTH)</div>
                <div className="education-date">Oct 2022 – April 2026 · 210 ECTS · Overall grade 1.8 (German scale)</div>
              </div>
              <span className="badge badge-completed">Completed</span>
            </div>

            <div className="education-item">
              <div className="education-content">
                <h4>Abitur</h4>
                <div className="education-school">Upper Vocational School Amberg · German Abitur Prize in Physics</div>
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
          <a href="mailto:dominik@patronus.studio" className="btn-email">
            <FaEnvelope /> dominik@patronus.studio
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
          <a href="https://www.researchgate.net/profile/Dominik-Hommer" target="_blank" rel="noopener noreferrer" className="footer-link"><SiResearchgate /> ResearchGate</a>
          <a href="https://huggingface.co/patronus-studio" target="_blank" rel="noopener noreferrer" className="footer-link">Hugging Face</a>
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
