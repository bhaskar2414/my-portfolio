import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bhaskar Zala - Senior Software Engineer",
  description:
    "Portfolio of Bhaskar Zala, a Senior Software Engineer with 9+ years of experience in frontend development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 bg-white shadow-sm">
              <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                  <a href="#" className="text-xl font-bold text-blue-600">
                    Bhaskar Zala
                  </a>
                  <ul className="hidden md:flex space-x-8">
                    <li>
                      <a href="#about" className="hover:text-blue-600 transition-colors">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#skills" className="hover:text-blue-600 transition-colors">
                        Skills
                      </a>
                    </li>
                    <li>
                      <a href="#experience" className="hover:text-blue-600 transition-colors">
                        Experience
                      </a>
                    </li>
                    <li>
                      <a href="#projects" className="hover:text-blue-600 transition-colors">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="#education" className="hover:text-blue-600 transition-colors">
                        Education
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:text-blue-600 transition-colors">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <button className="md:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </nav>
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'