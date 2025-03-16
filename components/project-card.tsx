import type React from "react"
import { Calendar, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  period: string
  description: string
  link?: string
  technologies: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, period, description, link, technologies }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="flex items-center gap-1 text-gray-600 mb-4">
        <Calendar size={16} />
        <span>{period}</span>
      </div>
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Visit Project <ExternalLink size={16} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard

