import React, { useState } from 'react'
import { UserCheck, Plus, Search, CheckCircle, XCircle, FileText, Upload } from 'lucide-react'

const students = [
  { id: 1, name: '张三', class: '一年级1班', progress: 85, status: 'pass' },
  { id: 2, name: '李四', class: '一年级1班', progress: 72, status: 'fail' },
  { id: 3, name: '王五', class: '一年级2班', progress: 90, status: 'pass' },
]

const subjects = ['高等数学', '计算机基础', '大学英语', '大学语文']
const chapters = {
  '高等数学': ['第一章 函数与极限', '第二章 导数与微分', '第三章 积分'],
  '计算机基础': ['第一章 计算机基础', '第二章 操作系统', '第三章 数据结构'],
  '大学英语': ['词汇学习', '语法学习', '音标学习'],
  '大学语文': ['第一章 古代文学', '第二章 现代文学', '第三章 默写抽背'],
}

function StudentManagementPage() {
  const [activeTab, setActiveTab] = useState<'progress' | 'tasks'>('progress')
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedChapter, setSelectedChapter] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <UserCheck className="w-6 h-6 mr-2 text-green-600" />
          学员管理
        </h2>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
          <Plus className="w-5 h-5" />
          <span>添加学员</span>
        </button>
      </div>

      {/* 标签页 */}
      <div className="bg-white rounded-lg shadow-lg">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('progress')}
              className={`px-6 py-3 font-semibold border-b-2 transition ${
                activeTab === 'progress'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-600'
              }`}
            >
              查看通关情况
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className={`px-6 py-3 font-semibold border-b-2 transition ${
                activeTab === 'tasks'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-600'
              }`}
            >
              布置学习任务
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'progress' ? (
            <ProgressView />
          ) : (
            <TaskAssignmentView />
          )}
        </div>
      </div>
    </div>
  )
}

function ProgressView() {
  return (
    <div className="space-y-6">
      {/* 筛选器 */}
      <div className="flex flex-wrap gap-4">
        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>全部科目</option>
          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>全部章节</option>
        </select>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
          查询
        </button>
      </div>

      {/* 学员列表 */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">学员姓名</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">班级</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">通关进度</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.class}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{student.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {student.status === 'pass' ? (
                    <span className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      已通关
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600">
                      <XCircle className="w-4 h-4 mr-1" />
                      未通关
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">查看详情</button>
                    <button className="text-green-600 hover:text-green-900">手动通关</button>
                    <button className="text-orange-600 hover:text-orange-900">重测</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 学情报告 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">学情报告</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">平均通关率</div>
            <div className="text-2xl font-bold text-blue-600">82%</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">已完成章节</div>
            <div className="text-2xl font-bold text-green-600">156/200</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">待通关学员</div>
            <div className="text-2xl font-bold text-red-600">12人</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TaskAssignmentView() {
  const [taskType, setTaskType] = useState<'text' | 'paper'>('text')
  const [taskContent, setTaskContent] = useState('')

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">布置学习任务</h3>
        
        {/* 任务类型选择 */}
        <div className="mb-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setTaskType('text')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                taskType === 'text'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              <FileText className="w-5 h-5 inline mr-2" />
              文字任务
            </button>
            <button
              onClick={() => setTaskType('paper')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                taskType === 'paper'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              <Upload className="w-5 h-5 inline mr-2" />
              上传试卷
            </button>
          </div>
        </div>

        {taskType === 'text' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">任务内容</label>
              <textarea
                value={taskContent}
                onChange={(e) => setTaskContent(e.target.value)}
                placeholder="请输入学习任务内容..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">选择科目</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
                  <option>请选择科目</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">截止时间</label>
                <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
              发布任务
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">试卷类型</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
                <option>请选择试卷类型</option>
                <option>单元复习</option>
                <option>期中考</option>
                <option>期末考</option>
                <option>模拟卷</option>
                <option>真题卷</option>
                <option>押题卷</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">上传试卷</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">拖拽文件到此处或点击上传</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
                  选择文件
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">选择科目</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
                  <option>请选择科目</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">截止时间</label>
                <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
              发布考试
            </button>
          </div>
        )}
      </div>

      {/* 已发布任务列表 */}
      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">已发布任务</h3>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold text-gray-800">数学 - 第一章 有理数</div>
                <div className="text-sm text-gray-600">发布时间: 2025-01-10 10:00:00</div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">已发布</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold text-gray-800">英语 - 单元复习试卷</div>
                <div className="text-sm text-gray-600">发布时间: 2025-01-09 14:30:00</div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">已发布</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentManagementPage
