import type React from "react"
import { Calendar, MapPin } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, period, location, responsibilities }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <h4 className="text-lg font-medium text-blue-600 mb-2">{company}</h4>
      <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{period}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>
      {responsibilities.length > 0 && (
        <div>
          <h5 className="font-medium mb-2 text-gray-700">Responsibilities:</h5>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ExperienceCard

