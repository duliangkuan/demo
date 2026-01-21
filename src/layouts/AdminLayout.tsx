import { Routes, Route, NavLink, useNavigate, Navigate as RouterNavigate } from 'react-router-dom'
import { ArrowLeft, Users, GraduationCap, FileText, BookOpen, Settings } from 'lucide-react'
import TeacherManagementPage from '../pages/admin/TeacherManagementPage'
import StudentManagementPage from '../pages/admin/StudentManagementPage'
import ClassManagementPage from '../pages/admin/ClassManagementPage'
import TestManagementPage from '../pages/admin/TestManagementPage'
import PaperManagementPage from '../pages/admin/PaperManagementPage'

function AdminLayout() {
  const navigate = useNavigate()

  const navItems = [
    { path: 'teachers', label: '老师管理', icon: Users },
    { path: 'students', label: '学员管理', icon: GraduationCap },
    { path: 'classes', label: '班级管理', icon: Settings },
    { path: 'tests', label: '测评管理', icon: BookOpen },
    { path: 'papers', label: '试卷管理', icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <div className="bg-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:bg-purple-700 px-3 py-2 rounded transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回</span>
            </button>
            <h1 className="text-xl font-bold">管理端</h1>
            <div className="text-sm">系统管理员</div>
          </div>
        </div>
      </div>

      {/* 侧边栏和内容区域 */}
      <div className="flex">
        {/* 左侧导航栏 */}
        <div className="w-64 bg-white border-r shadow-sm min-h-[calc(100vh-4rem)]">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                      isActive
                        ? 'bg-purple-50 text-purple-600 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
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

        {/* 主内容区域 */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="teachers" element={<TeacherManagementPage />} />
            <Route path="students" element={<StudentManagementPage />} />
            <Route path="classes" element={<ClassManagementPage />} />
            <Route path="tests" element={<TestManagementPage />} />
            <Route path="papers" element={<PaperManagementPage />} />
            <Route path="" element={<RouterNavigate to="teachers" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
