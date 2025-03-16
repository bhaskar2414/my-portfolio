import type React from "react"

interface SkillBadgeProps {
  name: string
  level: number
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-center mb-2">{name}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  )
}

export default SkillBadge

