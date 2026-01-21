import { Routes, Route, NavLink, useNavigate, Navigate as RouterNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Target, FileText, ClipboardList } from 'lucide-react'
import AITestPage from '../pages/student/AITestPage'
import AIPracticePage from '../pages/student/AIPracticePage'
import AIErrorBookPage from '../pages/student/AIErrorBookPage'
import TaskPage from '../pages/student/TaskPage'

function StudentLayout() {
  const navigate = useNavigate()

  const navItems = [
    { path: 'test', label: 'AI通关测', icon: BookOpen },
    { path: 'practice', label: 'AI精准练', icon: Target },
    { path: 'errorbook', label: 'AI错题本', icon: FileText },
    { path: 'tasks', label: '学习任务', icon: ClipboardList },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <div className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回</span>
            </button>
            <h1 className="text-xl font-bold">学生端</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* 主导航 */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-3 border-b-2 transition ${
                      isActive
                        ? 'border-blue-600 text-blue-600 font-semibold'
                        : 'border-transparent text-gray-600 hover:text-blue-600'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              )
            })}
          </nav>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="test" element={<AITestPage />} />
          <Route path="practice" element={<AIPracticePage />} />
          <Route path="errorbook" element={<AIErrorBookPage />} />
          <Route path="tasks" element={<TaskPage />} />
          <Route path="" element={<RouterNavigate to="test" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default StudentLayout
