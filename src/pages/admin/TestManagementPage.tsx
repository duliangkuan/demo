import React, { useState } from 'react'
import { BookOpen, Upload, Search, Edit, Trash2 } from 'lucide-react'

const tests = [
  { id: 1, subject: '高等数学', chapter: '第一章 函数与极限', questionCount: 20, createTime: '2025-01-10' },
  { id: 2, subject: '计算机基础', chapter: '第一章 计算机基础', questionCount: 15, createTime: '2025-01-09' },
  { id: 3, subject: '大学英语', chapter: '词汇学习', questionCount: 25, createTime: '2025-01-08' },
]

function TestManagementPage() {
  const [showUploadModal, setShowUploadModal] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">测评管理</h2>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          <Upload className="w-5 h-5" />
          <span>上传题目</span>
        </button>
      </div>

      {/* 搜索 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="搜索科目、章节"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* 题目列表 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">科目</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">章节</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">题目数量</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tests.map((test) => (
                <tr key={test.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{test.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.chapter}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.questionCount}题</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.createTime}</td>
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

      {/* 上传题目模态框 */}
      {showUploadModal && (
        <UploadTestModal onClose={() => setShowUploadModal(false)} />
      )}
    </div>
  )
}

function UploadTestModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    subject: '',
    chapter: '',
    file: null as File | null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('题目上传成功！')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">上传学生端AI通关测题目</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">科目</label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">请选择科目</option>
              <option value="math">高等数学</option>
              <option value="computer">计算机基础</option>
              <option value="english">大学英语</option>
              <option value="chinese">大学语文</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">章节</label>
            <input
              type="text"
              value={formData.chapter}
              onChange={(e) => setFormData({ ...formData, chapter: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="请输入章节名称"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">上传题目文件</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">支持 Excel、Word 或 JSON 格式</p>
              <label className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg cursor-pointer transition">
                选择文件
                <input
                  type="file"
                  accept=".xlsx,.xls,.doc,.docx,.json"
                  onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              上传
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

export default TestManagementPage
