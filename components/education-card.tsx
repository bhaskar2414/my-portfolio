import type React from "react"
import { Calendar, Award } from "lucide-react"

interface EducationCardProps {
  degree: string
  institution: string
  period: string
  grade: string
}

const EducationCard: React.FC<EducationCardProps> = ({ degree, institution, period, grade }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-800">{degree}</h3>
      <h4 className="text-lg font-medium text-blue-600 mb-2">{institution}</h4>
      <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{period}</span>
        </div>
        <div className="flex items-center gap-1">
          <Award size={16} />
          <span>Grade: {grade}</span>
        </div>
      </div>
    </div>
  )
}

export default EducationCard

