import { useState } from 'react'
import { Upload, Search, Edit, Trash2, Eye } from 'lucide-react'

const papers = [
  { id: 1, name: '单元复习试卷', type: '单元复习', subject: '数学', createTime: '2025-01-10' },
  { id: 2, name: '期中考试试卷', type: '期中考', subject: '英语', createTime: '2025-01-09' },
  { id: 3, name: '期末考试试卷', type: '期末考', subject: '语文', createTime: '2025-01-08' },
]

function PaperManagementPage() {
  const [showUploadModal, setShowUploadModal] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">试卷管理</h2>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          <Upload className="w-5 h-5" />
          <span>上传试卷</span>
        </button>
      </div>

      {/* 搜索和筛选 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索试卷名称"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>全部类型</option>
            <option>单元复习</option>
            <option>期中考</option>
            <option>期末考</option>
            <option>模拟卷</option>
            <option>真题卷</option>
            <option>押题卷</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>全部科目</option>
            <option>数学</option>
            <option>英语</option>
            <option>语文</option>
            <option>计算机</option>
          </select>
        </div>
      </div>

      {/* 试卷列表 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">试卷名称</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">科目</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {papers.map((paper) => (
                <tr key={paper.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{paper.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.createTime}</td>
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

      {/* 上传试卷模态框 */}
      {showUploadModal && (
        <UploadPaperModal onClose={() => setShowUploadModal(false)} />
      )}
    </div>
  )
}

function UploadPaperModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    subject: '',
    file: null as File | null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('试卷上传成功！')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">上传老师端试卷</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">试卷名称</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">试卷类型</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">请选择试卷类型</option>
              <option value="unit">单元复习</option>
              <option value="midterm">期中考</option>
              <option value="final">期末考</option>
              <option value="mock">模拟卷</option>
              <option value="real">真题卷</option>
              <option value="prediction">押题卷</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">科目</label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">请选择科目</option>
              <option value="math">数学</option>
              <option value="english">英语</option>
              <option value="chinese">语文</option>
              <option value="computer">计算机</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">上传试卷文件</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">支持 PDF、Word 或 Excel 格式</p>
              <label className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg cursor-pointer transition">
                选择文件
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.xlsx,.xls"
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

export default PaperManagementPage
