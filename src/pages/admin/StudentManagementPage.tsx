import { useState } from 'react'
import { Search, Download, DollarSign } from 'lucide-react'

const students = [
  { id: 1, name: '张三', studentId: '2024001001', class: '一年级1班', phone: '13800138001', fee: 5000, feeStatus: 'paid' },
  { id: 2, name: '李四', studentId: '2024001002', class: '一年级1班', phone: '13800138002', fee: 5000, feeStatus: 'unpaid' },
  { id: 3, name: '王五', studentId: '2024002001', class: '一年级2班', phone: '13800138003', fee: 5000, feeStatus: 'paid' },
]

function StudentManagementPage() {
  const [showFeeModal, setShowFeeModal] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<any>(null)

  const handleAddFee = (student: any) => {
    setSelectedStudent(student)
    setShowFeeModal(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">学员管理</h2>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
            <Download className="w-5 h-5" />
            <span>导出学员信息</span>
          </button>
        </div>
      </div>

      {/* 搜索 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="搜索学员姓名、学号或手机号"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* 学员列表 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">学号</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">班级</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">手机号</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">费用</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">缴费状态</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.studentId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.class}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">¥{student.fee}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.feeStatus === 'paid' ? (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        已缴费
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        未缴费
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleAddFee(student)}
                      className="text-blue-600 hover:text-blue-900 flex items-center space-x-1"
                    >
                      <DollarSign className="w-4 h-4" />
                      <span>添加收费信息</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 添加收费信息模态框 */}
      {showFeeModal && selectedStudent && (
        <AddFeeModal
          student={selectedStudent}
          onClose={() => {
            setShowFeeModal(false)
            setSelectedStudent(null)
          }}
        />
      )}
    </div>
  )
}

function AddFeeModal({ student, onClose }: { student: any; onClose: () => void }) {
  const [formData, setFormData] = useState({
    amount: '',
    paymentDate: '',
    paymentMethod: '',
    note: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('收费信息添加成功！')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">添加收费信息 - {student.name}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">缴费金额</label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">缴费日期</label>
            <input
              type="date"
              value={formData.paymentDate}
              onChange={(e) => setFormData({ ...formData, paymentDate: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">缴费方式</label>
            <select
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">请选择缴费方式</option>
              <option value="cash">现金</option>
              <option value="bank">银行转账</option>
              <option value="alipay">支付宝</option>
              <option value="wechat">微信支付</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">备注</label>
            <textarea
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              确认
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

export default StudentManagementPage
