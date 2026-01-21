import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full">
        <div className="text-center mb-8">
          <GraduationCap className="w-20 h-20 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">专升本教育平台</h1>
          <p className="text-gray-600">前端演示 Demo</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/student"
            className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 text-center"
          >
            <div className="text-2xl font-bold mb-2">学生端</div>
            <div className="text-sm opacity-90">AI通关测、精准练、错题本</div>
          </Link>
          
          <Link
            to="/teacher"
            className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 text-center"
          >
            <div className="text-2xl font-bold mb-2">老师端</div>
            <div className="text-sm opacity-90">班级管理、学员管理</div>
          </Link>
          
          <Link
            to="/admin"
            className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 text-center"
          >
            <div className="text-2xl font-bold mb-2">管理端</div>
            <div className="text-sm opacity-90">系统管理、数据管理</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
