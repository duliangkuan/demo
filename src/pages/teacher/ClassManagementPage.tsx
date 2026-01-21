import { useState } from 'react'
import { Plus, Search, Edit, Trash2, Eye, Download, RefreshCw } from 'lucide-react'

const classes = [
  { id: 1, name: '一年级1班', grade: '1年级', teacher: '张明华', studentCount: 10, createTime: '2025-08-23' },
  { id: 2, name: '一年级2班', grade: '1年级', teacher: '李小红', studentCount: 5, createTime: '2025-08-23' },
  { id: 3, name: '二年级1班', grade: '2年级', teacher: '张明华', studentCount: 5, createTime: '2025-08-23' },
  { id: 4, name: '二年级2班', grade: '2年级', teacher: '王大伟', studentCount: 2, createTime: '2025-08-23' },
  { id: 5, name: '三年级1班', grade: '3年级', teacher: '李小红', studentCount: 0, createTime: '2025-08-22' },
]

function ClassManagementPage() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGrade, setSelectedGrade] = useState('全部年级')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">班级管理</h2>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            <Plus className="w-5 h-5" />
            <span>添加班级</span>
          </button>
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
            <RefreshCw className="w-5 h-5" />
            <span>修复学生数量</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition">
            <Download className="w-5 h-5" />
            <span>导出</span>
          </button>
        </div>
      </div>

      {/* 搜索和筛选 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="班级名称或班主任姓名"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>全部年级</option>
            <option>1年级</option>
            <option>2年级</option>
            <option>3年级</option>
            <option>4年级</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
            搜索
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg transition">
            重置
          </button>
        </div>
      </div>

      {/* 提示信息 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
        <p className="text-blue-800 text-sm">
          提示: 如果发现班级的学生人数显示不准确,可以点击上方的"修复学生数量"按钮来重新统计所有班级的在读学生数量。
        </p>
        <button className="text-blue-600 hover:text-blue-800">×</button>
      </div>

      {/* 班级列表 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">班级列表</h3>
          <span className="text-sm text-gray-500">{classes.length}个班级</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">班级名称</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">年级</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">班主任</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">学生人数</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {classes.map((classItem) => (
                <tr key={classItem.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{classItem.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{classItem.grade}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{classItem.teacher}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{classItem.studentCount}人</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{classItem.createTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
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

      {/* 创建班级模态框 */}
      {showCreateModal && (
        <CreateClassModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  )
}

function CreateClassModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    teacher: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理创建逻辑
    alert('班级创建成功！')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">创建班级</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">班级名称</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">年级</label>
            <select
              value={formData.grade}
              onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">请选择年级</option>
              <option value="1">1年级</option>
              <option value="2">2年级</option>
              <option value="3">3年级</option>
              <option value="4">4年级</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">班主任</label>
            <input
              type="text"
              value={formData.teacher}
              onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
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

export default ClassManagementPage
