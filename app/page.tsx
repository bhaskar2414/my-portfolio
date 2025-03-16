import Image from "next/image"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import ExperienceCard from "@/components/experience-card"
import ProjectCard from "@/components/project-card"
import EducationCard from "@/components/education-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image src="/bhaskar-img.jpeg?height=256&width=256" alt="Bhaskar Zala" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">Bhaskar Zala</h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Senior Software Engineer</h2>
              <p className="text-lg md:text-xl max-w-2xl mb-8">
                Passionate frontend developer with 9+ years of experience, specializing in Vue.js and React. Building
                high-performance, user-friendly web applications with a focus on scalability and modern UI/UX.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="mailto:bhaskar2414@hotmail.com"
                  className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-full hover:bg-blue-50 transition-colors"
                >
                  <Mail size={18} />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/bhaskar-zala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-full hover:bg-blue-50 transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/bhaskar2414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-full hover:bg-blue-50 transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Passionate frontend developer with 9+ years of experience, specializing in Vue.js and React. Skilled in
              building high-performance, user-friendly web applications with a focus on scalability, accessibility, and
              modern UI/UX.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Proficient in JavaScript, TypeScript, state management, and API integrations. Adept at collaborating with
              cross-functional teams to deliver seamless digital experiences. Always eager to explore new technologies
              and optimize frontend performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Phone className="text-blue-600" size={20} />
                    <span>(+91) 9574713552</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="text-blue-600" size={20} />
                    <span>bhaskar2414@hotmail.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="text-blue-600" size={20} />
                    <span>Ahmedabad, India</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Languages</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>English</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </li>
                  <li className="flex justify-between">
                    <span>Hindi</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </li>
                  <li className="flex justify-between">
                    <span>Gujarati</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Technical Skills</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend Development */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Frontend Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>JavaScript (ES6+), TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Vue.js (Vue 2 & Vue 3), React.js (Hooks, Context API, Redux)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Next.js, Nuxt.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Component Libraries: Vuetify, Quasar, Material UI, Ant Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Web Performance Optimization (Lazy Loading, Code Splitting, Caching)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Web Accessibility (ARIA, WCAG)</span>
                  </li>
                </ul>
              </div>

              {/* Backend & API Development */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Backend & API Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Node.js (Express)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>PHP (Laravel)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>RESTful APIs, GraphQL (Apollo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Authentication (OAuth, JWT, Firebase)</span>
                  </li>
                </ul>
              </div>

              {/* DevOps & Tooling */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-4">DevOps & Tooling</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Git, GitHub, GitLab, Bitbucket</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>CI/CD (GitHub Actions, GitLab CI/CD)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Webpack, Vite, Babel, ESLint</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Docker (Basic)</span>
                  </li>
                </ul>
              </div>

              {/* Testing & Other Skills */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Testing & Other Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Unit Testing: Jest, Vue Test Utils, React Testing Library</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>E2E Testing: Cypress, Playwright</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Chrome DevTools, Postman</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Agile & Scrum Methodologies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Code Reviews & Best Practices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>Mentorship & Leadership</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <ExperienceCard
                title="Senior Frontend Engineer"
                company="Sixberries Ltd"
                period="06/2020 - Present"
                location="Ahmedabad, India"
                responsibilities={[
                  "Developed and maintained high-performance frontend applications using Vue.js & React.js",
                  "Led UI/UX improvements to enhance user experience and application speed",
                  "Conducted code reviews, performance optimizations, and deployed best practices",
                  "Integrated RESTful APIs & GraphQL with frontend applications",
                ]}
              />
              <ExperienceCard
                title="Senior Software Engineer"
                company="Frendy"
                period="09/2019 - 05/2020"
                location="Ahmedabad, India"
                responsibilities={[
                  "Developed full-stack applications with React Native (frontend) & Laravel (backend)",
                  "Implemented dynamic UI components and improved app performance",
                  "Managed deployments and backend integrations",
                ]}
              />
              <ExperienceCard
                title="Senior Web Developer"
                company="MatrixHive Technologies Pvt. Ltd."
                period="01/2019 - 08/2019"
                location="Ahmedabad, India"
                responsibilities={[
                  "Built scalable web applications using Vue.js & Laravel",
                  "Led code reviews, UI enhancements, and API integrations",
                ]}
              />
              <ExperienceCard
                title="Senior Web Developer"
                company="ManekTech"
                period="12/2017 - 12/2018"
                location="Ahmedabad, India"
                responsibilities={[
                  "Focused on Laravel development and Vue.js-based frontend",
                  "Developed REST APIs and handled backend optimizations",
                  "Provided technical support and maintenance",
                ]}
              />
              <ExperienceCard
                title="Web Developer"
                company="Dasinfomedia"
                period="04/2015 - 11/2017"
                location="Ahmedabad, India"
                responsibilities={[
                  "Developed custom WordPress plugins & themes",
                  "Led a team for frontend projects and provided support",
                  "Conducted code reviews and implemented best practices",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Tutti"
                period="04/2022 - Present"
                description="A platform that connects artists with creative spaces. Designed to streamline creative space bookings, offering an intuitive interface for discovering, managing, and booking venues for various creative projects."
                link="https://www.tutti.space"
                technologies={["Vue.js", "Node.js", "RESTful APIs", "Responsive Design"]}
              />
              <ProjectCard
                title="Grow Pharma"
                period="07/2021 - 04/2022"
                description="Medical cannabis access platform connecting patients, doctors, and pharmacies. Streamlines the process of consultations, prescriptions, and product distribution through a user-friendly and compliant system."
                link="http://doctor.grow-pharma.com"
                technologies={["Vue.js", "Node.js", "Authentication", "Healthcare APIs"]}
              />
              <ProjectCard
                title="Frendy"
                period="08/2019 - 05/2020"
                description="Social commerce platform enhancing online shopping experience. Enables users to discover, share, and purchase products seamlessly with community-driven recommendations and intuitive UI."
                link="https://www.frendy.in"
                technologies={["React Native", "Laravel", "Mobile UI/UX", "E-commerce"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <EducationCard
                degree="MSc IT - Software Development"
                institution="KSV University, LDRP Campus, Gandhinagar"
                period="2013 - 2015"
                grade="76.50%"
              />
              <EducationCard
                degree="BSc IT"
                institution="Swami Vivekanand College, Surendranagar"
                period="2010 - 2013"
                grade="78%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <Phone size={24} />
                    <span>(+91) 9574713552</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail size={24} />
                    <span>bhaskar2414@hotmail.com</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <MapPin size={24} />
                    <span>Ahmedabad, India</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <h4 className="text-xl font-medium mb-4">Social Profiles</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/bhaskar-zala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-50 transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="https://github.com/bhaskar2414"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg text-gray-800">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Bhaskar Zala. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

