import { useEffect, useState } from 'react'
import workspaceCover from './assets/workspace-cover.png'
import './App.css'

const EMAIL = 'mussayibdros@gmail.com'

const categories = [
  'Programming',
  'Frontend',
  'Computer Science',
  'AI & ML',
  'Generative AI & RAG',
  'Databases',
  'Development Tools',
]

const technologies = [
  { name: 'Python', category: 'Programming', description: 'Readable scripting for data and AI.' },
  { name: 'Java', category: 'Programming', description: 'Object-oriented application development.' },
  { name: 'C', category: 'Programming', description: 'Low-level programming fundamentals.' },
  { name: 'JavaScript', category: 'Programming', description: 'Interactive experiences for the web.' },
  { name: 'SQL', category: 'Programming', description: 'Querying and shaping relational data.' },
  { name: 'HTML5', category: 'Frontend', description: 'Semantic foundations for web pages.' },
  { name: 'CSS3', category: 'Frontend', description: 'Responsive layouts and visual styling.' },
  { name: 'JavaScript', category: 'Frontend', description: 'Dynamic behavior in the browser.' },
  { name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first interface styling.' },
  { name: 'Data Structures & Algorithms', category: 'Computer Science', description: 'Organizing data and designing efficient solutions.' },
  { name: 'Object-Oriented Programming', category: 'Computer Science', description: 'Modeling software with reusable objects.' },
  { name: 'Problem Solving', category: 'Computer Science', description: 'Breaking complex challenges into clear steps.' },
  { name: 'Machine Learning', category: 'AI & ML', description: 'Learning useful patterns from data.' },
  { name: 'Deep Learning', category: 'AI & ML', description: 'Neural networks for complex signals.' },
  { name: 'Large Language Models', category: 'AI & ML', description: 'Understanding and generating language.' },
  { name: 'Transformers', category: 'AI & ML', description: 'Attention-based models for sequences.' },
  { name: 'Fine-Tuning', category: 'AI & ML', description: 'Adapting pretrained models to specific tasks.' },
  { name: 'Agentic AI', category: 'AI & ML', description: 'Systems that reason, plan, and use tools.' },
  { name: 'RAG', category: 'Generative AI & RAG', description: 'Grounding answers in retrieved context.' },
  { name: 'Embeddings', category: 'Generative AI & RAG', description: 'Representing meaning as numerical vectors.' },
  { name: 'ChromaDB', category: 'Generative AI & RAG', description: 'Storing and retrieving vector embeddings.' },
  { name: 'Vector Databases', category: 'Generative AI & RAG', description: 'Finding information by vector similarity.' },
  { name: 'Semantic Search', category: 'Generative AI & RAG', description: 'Searching by meaning, not just keywords.' },
  { name: 'Similarity Search', category: 'Generative AI & RAG', description: 'Matching closely related representations.' },
  { name: 'Retrieval Pipelines', category: 'Generative AI & RAG', description: 'Connecting ingestion, indexing, and retrieval.' },
  { name: 'Supabase', category: 'Databases', description: 'Open-source backend and Postgres platform.' },
  { name: 'SQLite', category: 'Databases', description: 'Lightweight, embedded relational storage.' },
  { name: 'Docker', category: 'Development Tools', description: 'Portable containers for applications.' },
  { name: 'Git', category: 'Development Tools', description: 'Tracking changes and collaborating on code.' },
  { name: 'GitHub', category: 'Development Tools', description: 'Hosting code and collaborating on projects.' },
  { name: 'VS Code', category: 'Development Tools', description: 'An extensible editor for development.' },
]

const brandIcons = {
  Python: ['python', '3776AB'],
  Java: ['openjdk', '437291'],
  C: ['c', 'A8B9CC'],
  JavaScript: ['javascript', 'F7DF1E'],
  HTML5: ['html5', 'E34F26'],
  CSS3: ['css3', '1572B6'],
  'Tailwind CSS': ['tailwindcss', '06B6D4'],
  ChromaDB: ['chroma', 'F7CA58'],
  Supabase: ['supabase', '3FCF8E'],
  SQLite: ['sqlite', '003B57'],
  Docker: ['docker', '2496ED'],
  Git: ['git', 'F05032'],
  GitHub: ['github', '181717'],
  'VS Code': ['visualstudiocode', '007ACC'],
}

const explorations = [
  ['Deep Learning', 'Learning representations from complex, real-world data.'],
  ['LLM Engineering', 'Turning language models into useful software.'],
  ['RAG Architecture', 'Connecting generation with grounded knowledge.'],
  ['Transformer Models', 'Understanding attention and model architectures.'],
  ['Fine-Tuning', 'Adapting models for focused, meaningful tasks.'],
  ['Agentic AI', 'Exploring systems that reason, plan, and act.'],
  ['AI-powered Applications', 'Bringing intelligence into everyday experiences.'],
  ['Full-Stack Engineering', 'Connecting thoughtful interfaces to reliable systems.'],
]

const projects = [
  {
    name: 'Agriprofit AI',
    visual: 'agriculture',
    image: '/images/projects/agriprofit-ai.png',
    category: 'AGRICULTURE / AI',
    tagline: 'Crop planning is complex and resources are limited.',
    description: 'Agricultural intelligence for yield prediction, crop planning, profitability analysis, and resource optimization.',
    tags: ['AI', 'Crop prediction', 'Exact stack to confirm'],
    links: [],
  },
  {
    name: 'Vidya AI',
    visual: 'education',
    image: '/images/projects/vidya-ai.png',
    category: 'EDUCATION / ACCESSIBILITY',
    tagline: 'Language barriers can leave learners behind.',
    description: 'A multilingual education platform exploring speech recognition, translation, and text-to-speech for tribal and regional languages.',
    tags: ['Speech recognition', 'Translation', 'Exact stack to confirm'],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Google AI'],
    links: [
      ['GitHub', 'https://github.com/mussayib87/vidya-a.i.-learning-platform'],
      ['Live demo', 'https://vidya-a-i-learning-platform.vercel.app'],
    ],
  },
  {
    name: 'Mediax AI',
    visual: 'healthcare',
    image: '/images/projects/mediax-ai.png',
    category: 'HEALTHCARE / CONCEPT',
    tagline: 'Personal health information can be fragmented.',
    description: 'A healthcare companion concept for health records, medication reminders, monitoring, and emergency assistance.',
    tags: ['Healthcare', 'AI concept', 'Exact stack to confirm'],
    links: [],
  },
  {
    name: 'AI Stylist',
    visual: 'fashion',
    image: '/images/projects/ai-stylist.png',
    category: 'LIFESTYLE / PERSONALIZATION',
    tagline: 'Finding a personal style can be overwhelming.',
    description: 'An AI-powered assistant exploring personalized fashion and styling recommendations.',
    tags: ['AI', 'Personalization', 'Exact stack to confirm'],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Google AI'],
    links: [
      ['GitHub', 'https://github.com/mussayib87/styleai-companion'],
      ['Live demo', 'https://styleai-companion.vercel.app'],
    ],
  },
  {
    name: 'Medscan AI',
    visual: 'imaging',
    image: '/images/projects/medscan-ai.png',
    category: 'HEALTHCARE / DEEP LEARNING',
    tagline: 'Medical imaging presents complex challenges.',
    description: 'An experimental deep learning project exploring chest X-ray classification; not a clinical diagnostic tool.',
    tags: ['Deep learning', 'Image classification', 'Exact stack to confirm'],
    links: [],
  },
  {
    name: 'Placement Resource Hub',
    visual: 'career',
    image: '/images/projects/placement-resource-hub.png',
    category: 'EDUCATION / RESOURCES',
    tagline: 'Preparation resources are scattered.',
    description: 'A centralized platform concept for placement preparation and educational resources.',
    tags: ['Web application', 'Education', 'Exact stack to confirm'],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    links: [
      ['GitHub', 'https://github.com/mussayib87/placement-pathway-79'],
      ['Live demo', 'https://placement-pathway-79.vercel.app'],
    ],
  },
  {
    name: 'Raksha AI',
    visual: 'safety',
    image: '/images/projects/raksha-ai.png',
    category: 'PERSONAL SAFETY / AI',
    tagline: 'Support should feel close when it matters.',
    description: 'A personal safety concept centered on protective guidance and timely support.',
    tags: ['Personal safety', 'AI concept', 'Exact stack to confirm'],
    technologies: ['React', 'Vite'],
    links: [
      ['GitHub', 'https://github.com/mussayib87/raksha-ai'],
    ],
  },
  {
    name: 'Surakshaa AI Responder',
    visual: 'response',
    image: '/images/projects/surakshaa-ai-responder.png',
    category: 'EMERGENCY RESPONSE / AI',
    tagline: 'Every moment after an alert matters.',
    description: 'An emergency response concept focused on clear alerts and coordinated assistance.',
    tags: ['Emergency response', 'AI concept', 'Exact stack to confirm'],
    links: [
      ['GitHub', 'https://github.com/mussayib87/Surakshaa-A.i-responder-'],
    ],
  },
]

const technologyLogos = {
  React: ['react', '61DAFB'],
  TypeScript: ['typescript', '3178C6'],
  Vite: ['vite', '646CFF'],
  'Tailwind CSS': ['tailwindcss', '06B6D4'],
  'Google AI': ['googlegemini', '8E75B2'],
}

const journey = [
  ['Learning the foundations', 'Building a foundation in programming, data structures, algorithms, and problem solving.'],
  ['From AI curiosity to real-world projects', 'Exploring AI, Generative AI, LLMs, and RAG through hands-on building.'],
  ['Learning by collaborating', 'Participating in hackathons and experimenting with AI-powered solutions for real-world problems.'],
  ['What comes next', 'Growing into a software engineer who builds thoughtful, reliable technology with meaningful impact.'],
]

const notes = [
  'Understanding RAG architectures',
  'Exploring Large Language Models',
  'Building AI-powered applications',
  'Deep Learning experiments',
  'Agentic AI systems',
  'Lessons from hackathons and project development',
]

function ArrowIcon({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 16 16" fill="none">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ThemeIcon({ theme }) {
  return theme === 'light' ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5v1.7m0 11.6v1.7m7.5-7.5h-1.7M4.2 10H2.5m12.8-5.3-1.2 1.2M5.9 14.1l-1.2 1.2m10.6 0-1.2-1.2M5.9 5.9 4.7 4.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="10" cy="10" r="3.3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M16.4 12.1A7 7 0 0 1 7.9 3.6a7 7 0 1 0 8.5 8.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.58 1.2 3.21.92.1-.72.39-1.2.7-1.47-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.24-5.11 5.51.4.35.75 1.02.75 2.06v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67ZM7 8.23a1.55 1.55 0 1 1 .02-3.1 1.55 1.55 0 0 1-.02 3.1ZM18.34 18h-2.67v-4.18c0-1-.02-2.3-1.4-2.3-1.4 0-1.61 1.1-1.61 2.22V18H10V9.4h2.56v1.18h.04a2.8 2.8 0 0 1 2.52-1.39c2.7 0 3.22 1.78 3.22 4.1Z" />
    </svg>
  )
}

function Header({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['Home', '#home'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Journey', '#journey'],
    ['Blog', '#blog'],
    ['Let’s Talk', '#contact'],
  ]

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="wordmark" href="#home" onClick={closeMenu}>mussayib.dev</a>
        <nav id="primary-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={onThemeChange}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            <ThemeIcon theme={theme} />
          </button>
          <button
            className="icon-button menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

function SectionHeading({ number, eyebrow, title, description, id }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{number} / {eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <span>{label}</span>
      <ArrowIcon className="social-arrow" />
    </a>
  )
}

function TechIcon({ name }) {
  const brand = brandIcons[name]
  const initials = name === 'Data Structures & Algorithms'
    ? 'DSA'
    : name === 'Object-Oriented Programming'
      ? 'OOP'
      : name === 'Large Language Models'
        ? 'LLM'
        : name.slice(0, 2).toUpperCase()

  return (
    <span
      className={brand ? 'tech-icon has-brand' : 'tech-icon'}
      data-brand={brand?.[0]}
      style={brand ? { '--brand-color': `#${brand[1]}` } : undefined}
      aria-hidden="true"
    >
      {brand && (
        <img
          src={`https://cdn.simpleicons.org/${brand[0]}/${brand[1]}`}
          alt=""
          loading="lazy"
          onError={(event) => { event.currentTarget.hidden = true }}
        />
      )}
      <span className="tech-icon-fallback">{initials}</span>
    </span>
  )
}

function TechnicalArsenal() {
  const [activeCategory, setActiveCategory] = useState('All technologies')
  const filteredTechnologies = activeCategory === 'All technologies'
    ? technologies
    : technologies.filter((technology) => technology.category === activeCategory)

  return (
    <section className="section arsenal-section" id="skills" aria-labelledby="arsenal-title">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="TOOLS OF THE TRADE"
          title={<>Technical <em>Arsenal</em></>}
          description="The languages, tools, and ideas I’m learning, exploring, and building with. Pick a category to take a closer look."
          id="arsenal-title"
        />
        <div className="filter-list" role="group" aria-label="Filter technologies by category">
          {['All technologies', ...categories].map((category) => (
            <button
              className={activeCategory === category ? 'filter-chip is-active' : 'filter-chip'}
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {filteredTechnologies.length} technologies in {activeCategory}.
        </p>
        <div className="technology-list">
          {filteredTechnologies.map((technology) => (
            <article
              className="technology-chip"
              key={`${technology.category}-${technology.name}`}
              tabIndex="0"
              aria-label={`${technology.name}: ${technology.description}`}
              data-tooltip={technology.description}
            >
              <TechIcon name={technology.name} />
              <span className="technology-name">{technology.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="status-dot" /> CURIOUS MIND. PURPOSEFUL BUILDER.</p>
            <h1><strong>Mussayib</strong> <span><em>Kachi</em></span></h1>
            <p className="hero-role">
              <span className="hero-role-title" aria-label="Software Engineer, Data Science Enthusiast, AI Enthusiast">
                <span>Software <strong>Engineer</strong></span>
                <span>Data <em>Science</em> Enthusiast</span>
                <span>AI <em>Enthusiast</em></span>
              </span>
              <span aria-hidden="true">·</span> Bhatkal, India
            </p>
            <p className="hero-summary">Building <em>thoughtful</em> software. Exploring what AI can do for the <strong>real world</strong>.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects <ArrowIcon /></a>
              <a className="button button-secondary" href={`mailto:${EMAIL}?subject=Resume%20request`}>Request résumé <ArrowIcon /></a>
            </div>
            <div className="social-links">
              <SocialLink href="https://github.com/mussayib87" label="GitHub">
                <GithubIcon />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/mussayib-kachi-755656336/" label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
            </div>
            <p className="availability-note">Profile photo and résumé file to be added.</p>
          </div>
          <figure className="hero-visual">
            <img src={workspaceCover} alt="A quiet workspace with a laptop overlooking the coast" />
            <figcaption className="image-caption">
              <span className="caption-mark" aria-hidden="true">✳</span>
              <span>Building, one commit at a time</span>
              <span className="caption-location">Bhatkal, India</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <Activity />
    </>
  )
}

function Activity() {
  const [activity, setActivity] = useState({ status: 'loading', contributions: [], total: 0 })

  useEffect(() => {
    const controller = new AbortController()

    async function loadContributions() {
      try {
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/mussayib87?y=last', {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        })

        if (!response.ok) {
          throw new Error(`Contribution service returned HTTP ${response.status}.`)
        }

        const result = await response.json()
        const contributions = result.contributions

        if (!Array.isArray(contributions) || contributions.some((day) => (
          !day
          || typeof day.date !== 'string'
          || !/^\d{4}-\d{2}-\d{2}$/.test(day.date)
          || !Number.isInteger(day.count)
          || day.count < 0
        ))) {
          throw new Error('Contribution service returned invalid daily data.')
        }

        setActivity({
          status: contributions.length ? 'ready' : 'empty',
          contributions,
          total: contributions.reduce((sum, day) => sum + day.count, 0),
        })
      } catch (error) {
        if (!controller.signal.aborted) {
          setActivity({
            status: 'error',
            contributions: [],
            total: 0,
            error: error.message,
          })
        }
      }
    }

    loadContributions()
    return () => controller.abort()
  }, [])

  const weeks = Math.ceil(activity.contributions.length / 7)
  const monthLabels = []
  let previousMonth = ''

  activity.contributions.forEach((day, index) => {
    const month = day.date.slice(0, 7)
    if (month !== previousMonth) {
      monthLabels.push({
        label: new Date(`${month}-01T12:00:00`).toLocaleString('en', { month: 'short' }),
        week: Math.floor(index / 7),
      })
      previousMonth = month
    }
  })

  return (
    <section className="activity-section">
      <div className="container activity-card">
        <div className="activity-heading">
          <div>
            <p className="eyebrow">BUILDING, ONE COMMIT AT A TIME</p>
            <h2>GitHub activity</h2>
            {(activity.status === 'ready' || activity.status === 'empty') && (
              <p className="activity-total" aria-live="polite">
                <strong>{activity.total.toLocaleString()}</strong> contributions in the last 12 months
              </p>
            )}
          </div>
          <a className="text-link" href="https://github.com/mussayib87" target="_blank" rel="noreferrer">
            @mussayib87 <ArrowIcon />
          </a>
        </div>
        {activity.status === 'loading' && (
          <p className="activity-message" role="status">Loading live contribution history…</p>
        )}
        {activity.status === 'error' && (
          <p className="activity-message activity-error" role="alert">
            Live contribution history could not be loaded. {activity.error} Please try again later.
          </p>
        )}
        {activity.status === 'empty' && (
          <p className="activity-message" role="status">No contributions were reported for the last 12 months.</p>
        )}
        {activity.status === 'ready' && (
          <>
            <div className="activity-calendar-scroll">
              <div className="activity-calendar">
                <div className="weekday-labels" aria-hidden="true">
                  {['Sun', '', 'Tue', '', 'Thu', '', 'Sat'].map((day, index) => (
                    <span key={index}>{day}</span>
                  ))}
                </div>
                <div className="calendar-main">
                  <div
                    className="month-labels"
                    style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
                    aria-hidden="true"
                  >
                    {monthLabels.map(({ label, week }, index) => (
                      <span key={`${label}-${week}-${index}`} style={{ gridColumn: week + 1 }}>{label}</span>
                    ))}
                  </div>
                  <div
                    className="contribution-grid"
                    style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
                    role="group"
                    aria-label="Daily GitHub contributions over the last 12 months"
                  >
                    {activity.contributions.map(({ date, count }) => {
                      const [year, month, day] = date.split('-').map(Number)
                      const formattedDate = new Date(year, month - 1, day).toLocaleDateString('en', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })
                      const level = count === 0 ? 0 : count <= 3 ? 1 : count <= 6 ? 2 : count <= 9 ? 3 : 4
                      const tooltip = `${count} ${count === 1 ? 'contribution' : 'contributions'} on ${formattedDate}`

                      return (
                        <span
                          className="contribution-day"
                          data-level={level}
                          key={date}
                          title={tooltip}
                          role="img"
                          aria-label={tooltip}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="activity-legend">
              <span>Each square represents one day</span>
              <span className="legend-key">
                Less
                {[0, 1, 2, 3, 4].map((level) => <i data-level={level} key={level} />)}
                More
              </span>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <SectionHeading number="01" eyebrow="THE PERSON BEHIND THE CODE" title={<>Who is <em>Mussayib?</em></>} />
        <div className="about-copy">
          <p>I’m a third-year Computer Science Engineering student specializing in Data Science, passionate about software engineering, artificial intelligence, and building real-world technology solutions.</p>
          <p>I’m particularly interested in Deep Learning, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Transformers, Fine-Tuning, Agentic AI, and AI-powered full-stack development.</p>
          <p>What excites me most is implementing AI in challenging domains such as agriculture, healthcare, education, and other industries where people may not traditionally expect AI to make a difference. I love solving real-world problems, experimenting with emerging technologies, and continuously learning through building.</p>
        </div>
      </div>
    </section>
  )
}

function Curiosity() {
  return (
    <section className="section curiosity-section" id="curiosity">
      <div className="container">
        <SectionHeading number="03" eyebrow="FOLLOWING MY CURIOSITY" title={<>What I’m <em>Exploring</em></>} />
        <div className="exploration-grid">
          {explorations.map(([title, description], index) => (
            <article className="exploration-item" key={title}>
              <span className="exploration-index">0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ArrowIcon className="exploration-arrow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="SELECTED PROJECTS"
          title={<>Things I’ve <em>Built</em></>}
          description="Explorations at the intersection of software, intelligence, and everyday life."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card-${project.visual}`} key={project.name}>
              <div className={`project-art project-art-${project.visual}`}>
                <img
                  src={project.image}
                  alt={`${project.name} project cover`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="project-card-body">
                <div className="project-card-top">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3><strong>{project.name.split(' ').slice(0, -1).join(' ')}</strong> <em>{project.name.split(' ').at(-1)}</em></h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>
                {project.technologies?.length > 0 && (
                  <div className="project-technologies" aria-label="Confirmed technologies">
                    {project.technologies.map((technology) => {
                      const [icon, color] = technologyLogos[technology]
                      return (
                        <span className="project-technology" key={technology} title={technology}>
                          <img
                            src={`https://cdn.simpleicons.org/${icon}/${color}`}
                            alt=""
                            loading="lazy"
                            onError={(event) => { event.currentTarget.hidden = true }}
                          />
                          {technology}
                        </span>
                      )
                    })}
                  </div>
                )}
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  {project.links.length ? project.links.map(([label, href]) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer">{label}<ArrowIcon /></a>
                  )) : <span>Repository coming soon</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section className="section journey-section" id="journey">
      <div className="container journey-layout">
        <div className="journey-intro">
          <SectionHeading number="05" eyebrow="ALWAYS A WORK IN PROGRESS" title={<>My <em>Journey</em></>} />
          <div className="education-card">
            <p className="eyebrow">CURRENTLY STUDYING</p>
            <h3>Computer Science, with a Data Science lens</h3>
            <p>Bachelor of Engineering · Computer Science and Engineering (Data Science).</p>
            <p>Anjuman Institute of Technology and Management, Bhatkal.</p>
            <div className="education-details"><span>Current semester: 5th</span><span>Expected graduation: 2028</span></div>
          </div>
        </div>
        <div className="journey-list">
          {journey.map(([title, description], index) => (
            <article className="journey-item" key={title}>
              <span className="journey-marker">0{index + 1}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        <SectionHeading
          number="06"
          eyebrow="NOTES FROM THE WORKBENCH"
          title={<>Ideas, Experiments & <em>Learnings</em></>}
          description="A space for what I’m learning along the way. Articles are coming soon."
        />
        <div className="notes-list">
          {notes.map((note, index) => (
            <article className="note-item" key={note}>
              <span className="note-index">0{index + 1}</span>
              <h3>{note}</h3>
              <span className="note-status">PLANNED</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [notice, setNotice] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    if (!name || !email || !message) {
      setNotice('Please complete each field before sending your message.')
      return
    }
    const subject = `Portfolio inquiry from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setNotice('Your email application should now open with your message ready to send. If it does not, email me directly at mussayibdros@gmail.com.')
    window.location.href = mailto
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-intro">
          <SectionHeading
            number="07"
            eyebrow="SAY HELLO"
            title={<>Let’s build something <em>meaningful</em> together.</>}
            description="Have an idea, an opportunity, or something interesting to share? I’d love to hear from you."
          />
          <div className="contact-details">
            <a href={`mailto:${EMAIL}`}>{EMAIL}<ArrowIcon /></a>
            <a href="tel:+919742800658">+91 9742800658<ArrowIcon /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="4" placeholder="Tell me what you have in mind…" required />
          <button className="button button-primary submit-button" type="submit">Send message <ArrowIcon /></button>
          {notice && <p className="form-notice" role="status">{notice}</p>}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <a className="wordmark" href="#home">mussayib.dev</a>
          <p>Built with curiosity. Based in Bhatkal.</p>
        </div>
        <p>© 2026 Mussaiyb Kachi</p>
        <div className="footer-socials">
          <a href="https://github.com/mussayib87" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
          <a href="https://www.linkedin.com/in/mussayib-kachi-755656336/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [theme, setTheme] = useState(() => window.localStorage.getItem('portfolio-theme') || 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Header theme={theme} onThemeChange={toggleTheme} />
      <main>
        <Home />
        <About />
        <TechnicalArsenal />
        <Curiosity />
        <Projects />
        <Journey />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
