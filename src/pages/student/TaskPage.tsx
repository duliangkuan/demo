import { ClipboardList, CheckCircle, Clock } from 'lucide-react'

const tasks = [
  {
    id: 1,
    subject: '数学',
    type: 'AI测评',
    name: '第一章 有理数',
    deadline: '2025-01-15',
    status: 'pending',
    description: '完成第一章有理数的AI智能测评'
  },
  {
    id: 2,
    subject: '数学',
    type: '知识点强化',
    name: '数轴上的动点问题',
    deadline: '2025-01-16',
    status: 'pending',
    description: '针对数轴上的动点问题进行专项练习'
  },
  {
    id: 3,
    subject: '英语',
    type: '试卷',
    name: '单元复习试卷',
    deadline: '2025-01-17',
    status: 'completed',
    description: '完成单元复习试卷，包含词汇和语法测试'
  },
  {
    id: 4,
    subject: '语文',
    type: '默写抽背',
    name: '古诗词默写',
    deadline: '2025-01-18',
    status: 'pending',
    description: '完成指定古诗词的默写和抽背任务'
  }
]

function TaskPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <ClipboardList className="w-6 h-6 mr-2 text-blue-600" />
          学习任务
        </h2>

        {/* 筛选器 */}
        <div className="mb-6 flex flex-wrap gap-4">
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>全部任务</option>
            <option>待完成</option>
            <option>已完成</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>全科</option>
            <option>数学</option>
            <option>英语</option>
            <option>语文</option>
            <option>计算机</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>全部状态</option>
            <option>待完成</option>
            <option>已完成</option>
          </select>
        </div>

        {/* 任务列表 */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      task.subject === '数学' ? 'bg-blue-100 text-blue-700' :
                      task.subject === '英语' ? 'bg-green-100 text-green-700' :
                      task.subject === '语文' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {task.subject}
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                      {task.type}
                    </span>
                    {task.status === 'completed' ? (
                      <span className="flex items-center text-green-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        已完成
                      </span>
                    ) : (
                      <span className="flex items-center text-red-600 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        待完成
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{task.name}</h3>
                  <p className="text-gray-600 mb-2">{task.description}</p>
                  <p className="text-sm text-gray-500">截止时间: {task.deadline}</p>
                </div>
                {task.status === 'pending' && (
                  <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
                    开始
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TaskPage
