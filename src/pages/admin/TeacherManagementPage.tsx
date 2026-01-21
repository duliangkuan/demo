import React, { useState } from 'react'
import { Users, Plus, Search, Edit, Trash2, Download } from 'lucide-react'

const teachers = [
  { id: 1, name: '张明华', email: 'zhang@example.com', phone: '13800138001', status: 'active' },
  { id: 2, name: '李小红', email: 'li@example.com', phone: '13800138002', status: 'active' },
  { id: 3, name: '王大伟', email: 'wang@example.com', phone: '13800138003', status: 'active' },
]

function TeacherManagementPage() {
  const [showCreateModal, setShowCreateModal] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">老师管理</h2>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            <Plus className="w-5 h-5" />
            <span>创建老师账号</span>
          </button>
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
            <Download className="w-5 h-5" />
            <span>导出</span>
          </button>
        </div>
      </div>

      {/* 搜索 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="搜索老师姓名、邮箱或手机号"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* 老师列表 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">手机号</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{teacher.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      正常
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 创建老师模态框 */}
      {showCreateModal && (
        <CreateTeacherModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  )
}

function CreateTeacherModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('老师账号创建成功！')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">创建老师账号</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">手机号</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">初始密码</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              创建
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition"
            >
              取消
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TeacherManagementPage
