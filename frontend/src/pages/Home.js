import React from "react";
import { SiGithub, SiLinkedin, SiResearchgate } from "react-icons/si";
import { FiArrowUpRight, FiArrowDown, FiArrowRight } from "react-icons/fi";
import "../components/portfolio.css";

const External = ({ href, children, className = "text-link" }) => (
  <a
    href={href}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
    <FiArrowUpRight aria-hidden="true" />
  </a>
);
const Label = ({ number, children }) => (
  <div className="section-label">
    <span>{number}</span>
    {children}
  </div>
);

const models = [
  [
    "Wolf Defender",
    "Prompt-injection detection",
    "Multilingual mmBERT classifiers. Small v2 reports 95.21% F1 on Qualifire (5,000 examples); ONNX exports include a 96.30 MB INT8/INT4 variant.",
    "wolf-defender-prompt-injection-small",
  ],
  [
    "Lion Warden",
    "One encoder, seven security heads",
    "Injection, threat, sensitive documents, routing and tool risk. Masked multi-task training; reported mean head F1 of 0.937 on held-out test sets.",
    "lion-warden-ai-security-classifier",
  ],
  [
    "Wolf Defender Jev",
    "Context-aware security decisions",
    "151M parameters, calibrated probabilities and 15 languages. Evaluates security questions using agent context, tool output and proposed actions.",
    "wolf-defender-jev",
  ],
  [
    "Orca Sonar",
    "Sensitive-document routing",
    "Document-topic classification for data-loss-prevention policies and sensitive-document routing.",
    "orca-sonar-document-classifier",
  ],
  [
    "Husky",
    "Understanding tool risk",
    "Dedicated models for tool type, operation and security properties, including untrusted sources and external sinks.",
    "husky-nose-tool-security-properties-classifier",
  ],
  [
    "Panther Read & GLiNER Edge",
    "Routing & entity extraction",
    "Intent classifiers for request routing and quantized upstream GLiNER models for local entity extraction. GLiNER releases are deployment adaptations.",
    "panther-read-intent-classifier",
  ],
];
const experience = [
  [
    "2025–26",
    "trinnovative",
    "Data Science & Backend",
    "Data pipelines and backend development.",
  ],
  [
    "2025–26",
    "OTH Regensburg",
    "CodeClinic Tutor",
    "Helping students work through programming problems.",
  ],
  [
    "2024–25",
    "Audi",
    "Data Science & AI Intern",
    "Unsupervised driving-style recognition, error-sequence analysis and LLM assistants.",
  ],
  [
    "2024",
    "AVL Software and Functions",
    "AI Engineering",
    "LLM-based and classical autocompletion; full-stack application development.",
  ],
  [
    "2018–21",
    "Siemens",
    "Mechatronics Apprentice",
    "Industrial automation, production systems and hands-on engineering.",
  ],
];

function RouteDrawing() {
  return (
    <aside
      className="route-note"
      aria-label="My path from mechatronics to AI research"
    >
      <div className="note-top">
        <span>A path of my own</span>
        <span>2018 — now</span>
      </div>
      <svg
        className="route-drawing"
        viewBox="0 0 440 380"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="route-guide"
          d="M44 30V350M220 30V350M396 30V350M24 90H416M24 190H416M24 290H416"
        />
        <path
          className="route-trace"
          d="M68 80C68 145 226 104 262 155C316 232 113 182 126 259C139 329 328 334 371 260C416 183 328 161 319 211C310 257 379 225 389 159"
        />
        <circle cx="68" cy="80" r="5" className="route-point" />
        <circle cx="126" cy="259" r="5" className="route-point" />
        <circle cx="389" cy="159" r="5" className="route-point route-current" />
        <path d="m381 165 8-8 5 10" className="route-arrow" />
        <text x="82" y="66">
          01 / MECHATRONICS
        </text>
        <text x="38" y="286">
          02 / MACHINE LEARNING
        </text>
        <text x="230" y="133">
          03 / RESEARCH & BUILDING
        </text>
      </svg>
      <div className="note-bottom">
        <span>Follow the question.</span>
        <span className="note-cross" aria-hidden="true">
          ＋
        </span>
      </div>
    </aside>
  );
}

function Home() {
  return (
    <main id="main-content">
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-topline">
            <span>AI researcher & engineer</span>
            <span className="location-mark">Based in Germany</span>
          </div>
          <div className="hero-grid">
            <div className="hero-left">
              <h1>
                Dominik
                <br />
                <span>
                  Hommer<span className="name-period">.</span>
                </span>
              </h1>
              <p className="hero-description">
                I research how machines learn.
                <br />
                And build things that put it to work.
              </p>
              <div className="hero-actions">
                <a href="#research" className="button-primary">
                  Selected research <FiArrowDown aria-hidden="true" />
                </a>
              </div>
            </div>
            <RouteDrawing />
          </div>
          <div className="hero-foot">
            <span>AI security · Computer vision · Efficient models</span>
            <a href="#about">
              A little about me <FiArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="research" className="research-section">
        <div className="container">
          <Label number="01">Research</Label>
          <div className="section-heading-row">
            <h2>
              Questions worth
              <br />
              <span className="accent-word">following.</span>
            </h2>
            <p>
              From the geometry of a table
              <br />
              to the context inside an image.
            </p>
          </div>
          <article id="publication" className="publication">
            <div className="publication-margin">
              <span className="status">Published · Open access</span>
              <span>Array / Elsevier</span>
              <span>17 October 2026</span>
              <span className="margin-index" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="publication-main">
              <div className="eyebrow">First-author journal article</div>
              <h3>
                Geometry-aware losses for structurally consistent table
                segmentation
              </h3>
              <p className="authors">
                <strong>Dominik Hommer</strong> & Stefanie Vogl
              </p>
              <p>
                Better structure, without a bigger model. My bachelor thesis
                introduces geometric priors into the training loss of a Vision
                Transformer: aligned boundaries, closed regions and fewer
                artifacts.
              </p>
              <p>
                Evaluated on PubTables-1M, with up to{" "}
                <strong>
                  9 percentage points improvement in region-level F1
                </strong>{" "}
                over a BCE–Dice baseline and no additional inference cost.
              </p>
              <div className="publication-links">
                <External
                  href="https://www.sciencedirect.com/science/article/pii/S2590005626006703"
                  className="button-primary"
                >
                  Read on ScienceDirect
                </External>
                <External href="https://doi.org/10.1016/j.array.2026.101347">
                  DOI
                </External>
                <External href="https://www.researchgate.net/publication/416121392_Geometry-aware_losses_for_structurally_consistent_table_segmentation">
                  ResearchGate
                </External>
              </div>
              <p className="citation">
                Array 32 (2026), 101347 · DOI 10.1016/j.array.2026.101347 · CC
                BY 4.0
              </p>
            </div>
          </article>
          <div className="research-pair">
            <article className="research-note">
              <span className="eyebrow">Edmonton, Canada / May–July 2026</span>
              <h3>
                Looking beyond
                <br />
                the pixels.
              </h3>
              <h4>VisLang-Seg · Mitacs Globalink</h4>
              <p>
                A research internship exploring efficient cancer-cell
                segmentation. Lightweight candidate selection feeds a second
                stage combining Vision Transformers and LLM-based multimodal
                learning.
              </p>
              <span className="note-caption">
                Computer vision / Multimodal learning
              </span>
            </article>
            <article className="research-note">
              <span className="eyebrow">OTH Regensburg / 2024–2026</span>
              <h3>
                Old records.
                <br />
                New ways to read them.
              </h3>
              <h4>DocDig · Document intelligence</h4>
              <p>
                Turning handwritten Swiss ornithological tables into structured
                information using deep learning and computer vision. Presented
                as a research poster in Erfurt.
              </p>
              <External href="https://github.com/DominikHommer/docdig-vogelwarte">
                Explore the code
              </External>
            </article>
          </div>
        </div>
      </section>

      <section id="patronus" className="patronus-section">
        <div className="container">
          <Label number="02">Building</Label>
          <div className="patronus-panel">
            <div className="patronus-intro">
              <span className="eyebrow">
                Co-founder / Casdo Labs / Since January 2026
              </span>
              <h2>
                Patronus
                <br />
                <span>Protect.</span>
              </h2>
              <p className="patronus-deck">
                Prompt injection.
                <br />
                Sensitive data. Tool risk.
              </p>
              <div className="patronus-links">
                <External
                  href="https://patronus.studio"
                  className="button-primary"
                >
                  Visit Patronus
                </External>
                <External href="https://github.com/patronus-protect/patronus-security">
                  Patronus Ark
                </External>
              </div>
            </div>
            <div className="patronus-detail">
              <img
                className="patronus-original-logo"
                src={`${process.env.PUBLIC_URL}/Patronus_Logo_4096_4096.png`}
                alt="Patronus Protect original logo"
                width="90"
                height="105"
              />
              <h3>
                A local security layer
                <br />
                for real AI workflows.
              </h3>
              <p>
                An on-device AI firewall for prompt injection, sensitive data
                and risky tool calls. Provider-independent detection across
                supported applications, browsers and agents.
              </p>
              <div className="architecture">
                <span>Native rules</span>
                <FiArrowRight aria-hidden="true" />
                <span>Small classifiers</span>
                <FiArrowRight aria-hidden="true" />
                <span>Quantized models</span>
              </div>
              <p className="small-copy">
                Patronus Ark combines Rust and Python in a layered scanning
                engine. Inspection runs locally; allowed requests continue to
                the selected AI provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="models" className="models-section">
        <div className="container">
          <Label number="03">Open models</Label>
          <div className="section-heading-row">
            <h2>
              Open models.
              <br />
              <span className="accent-word">Local inference.</span>
            </h2>
            <div className="download-stat">
              <strong>
                40,000<span>+</span>
              </strong>
              <span>total model downloads</span>
            </div>
          </div>
          <div className="model-grid">
            {models.map(([name, category, description, repo], i) => (
              <article className="model-row" key={name}>
                <div className="model-index">0{i + 1}</div>
                <div className="model-content">
                  <span className="eyebrow">{category}</span>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <External
                    href={`https://huggingface.co/patronus-studio/${repo}`}
                  >
                    Model card
                  </External>
                </div>
              </article>
            ))}
          </div>
          <div className="models-foot">
            <External href="https://huggingface.co/patronus-studio">
              All models on Hugging Face
            </External>
            <p>
              10,000+ monthly downloads. Snapshot: 13 Oct 2026 — 12,513 monthly,
              49,007 total across 18 repositories, including deployment
              variants. Downloads are not unique users. Benchmarks are
              model-card reports; quantized performance depends on the artifact
              and hardware.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <Label number="04">The person behind the work</Label>
          <div className="about-grid">
            <h2>
              A curious mind.
              <br />
              An independent
              <br />
              <span className="accent-word">streak.</span>
            </h2>
            <div className="about-copy">
              <p className="about-lead">
                I like understanding how things work. Then finding out what else
                they could do.
              </p>
              <p>
                My route into AI started with mechatronics at Siemens. Since
                then, it has taken me through an AI and Data Science degree,
                applied work at Audi and AVL, a research summer in Canada, and
                co-founding Casdo Labs.
              </p>
              <p>
                Outside of work, I’m drawn to backpacking, the water and the
                freedom to take a different route. I bring that same curiosity
                back to the questions on my desk.
              </p>
              <div className="about-links">
                <External href="https://github.com/DominikHommer">
                  <SiGithub aria-hidden="true" /> GitHub
                </External>
                <External href="https://www.linkedin.com/in/dominikhommer">
                  <SiLinkedin aria-hidden="true" /> LinkedIn
                </External>
                <External href="https://www.researchgate.net/profile/Dominik-Hommer">
                  <SiResearchgate aria-hidden="true" /> ResearchGate
                </External>
              </div>
            </div>
          </div>
          <div className="background-grid">
            <div id="education">
              <h3 className="eyebrow">Education</h3>
              <div className="education-entry">
                <span className="status">Currently enrolled</span>
                <h4>M.Sc. Mathematics for Business and Industry</h4>
                <p>OTH Regensburg · Since October 2026</p>
              </div>
              <div className="education-entry">
                <span className="eyebrow">2022–2026</span>
                <h4>B.Sc. Artificial Intelligence and Data Science</h4>
                <p>OTH Regensburg · 210 ECTS</p>
              </div>
              <details className="background-details">
                <summary>
                  Earlier education <span>+</span>
                </summary>
                <p>
                  Abitur, Amberg · 2022
                  <br />
                  German Abitur Prize in Physics
                </p>
                <p>Mechatronics vocational training · 2018–2021</p>
              </details>
            </div>
            <div id="workexp">
              <h3 className="eyebrow">Experience</h3>
              {experience.map(([date, company, role, detail]) => (
                <details className="experience-entry" key={company}>
                  <summary>
                    <span>{date}</span>
                    <span>
                      <strong>{company}</strong>
                      <small>{role}</small>
                    </span>
                    <span className="details-plus">+</span>
                  </summary>
                  <p>{detail}</p>
                </details>
              ))}
            </div>
          </div>
          <div id="skills" className="toolkit">
            <span className="eyebrow">Tools I work with</span>
            <p>
              Python · C / C++ · TypeScript · PyTorch · TensorFlow · Hugging
              Face · ONNX Runtime · scikit-learn · NumPy · Pandas · React ·
              PostgreSQL · Docker · Git · FastAPI · CI/CD
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-top">
            <span className="eyebrow">
              Have a question or a project in mind?
            </span>
            <span className="contact-cross" aria-hidden="true">
              ↗
            </span>
          </div>
          <h2>
            Let’s see
            <br />
            <span className="accent-word">where it goes.</span>
          </h2>
          <a href="mailto:dominik@patronus.studio" className="contact-email">
            dominik@patronus.studio <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
      <footer className="footer container">
        <span>© {new Date().getFullYear()} Dominik Hommer</span>
        <div>
          <External href="https://github.com/DominikHommer">GitHub</External>
          <External href="https://www.researchgate.net/profile/Dominik-Hommer">
            ResearchGate
          </External>
          <a href="#hero" className="text-link">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
export default Home;
