import { Eye, Download } from 'lucide-react'

const classes = [
  { id: 1, name: '一年级1班', grade: '1年级', teacher: '张明华', studentCount: 10 },
  { id: 2, name: '一年级2班', grade: '1年级', teacher: '李小红', studentCount: 5 },
  { id: 3, name: '二年级1班', grade: '2年级', teacher: '张明华', studentCount: 5 },
]

function ClassManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">班级管理</h2>
        <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
          <Download className="w-5 h-5" />
          <span>导出</span>
        </button>
      </div>

      {/* 班级列表 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">班级名称</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">年级</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">班主任</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">学生人数</th>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>查看</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ClassManagementPage
