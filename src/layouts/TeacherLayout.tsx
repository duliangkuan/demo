import React from 'react'
import { Routes, Route, NavLink, useNavigate, Navigate as RouterNavigate } from 'react-router-dom'
import { ArrowLeft, Users, UserCheck, LayoutDashboard } from 'lucide-react'
import ClassManagementPage from '../pages/teacher/ClassManagementPage'
import StudentManagementPage from '../pages/teacher/StudentManagementPage'

function TeacherLayout() {
  const navigate = useNavigate()

  const navItems = [
    { path: 'dashboard', label: '仪表盘', icon: LayoutDashboard },
    { path: 'classes', label: '班级管理', icon: Users },
    { path: 'students', label: '学员管理', icon: UserCheck },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <div className="bg-green-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:bg-green-700 px-3 py-2 rounded transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回</span>
            </button>
            <h1 className="text-xl font-bold">教师端学生管理系统</h1>
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
                        ? 'bg-green-50 text-green-600 font-semibold'
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
            <Route path="dashboard" element={<ClassManagementPage />} />
            <Route path="classes" element={<ClassManagementPage />} />
            <Route path="students" element={<StudentManagementPage />} />
            <Route path="" element={<RouterNavigate to="dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default TeacherLayout
