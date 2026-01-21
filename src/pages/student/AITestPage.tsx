import React, { useState } from 'react'
import { BookOpen, FileText, CheckCircle, XCircle } from 'lucide-react'

const subjects = [
  { id: 'math', name: '高等数学', color: 'blue' },
  { id: 'computer', name: '计算机基础', color: 'green' },
  { id: 'english', name: '大学英语', color: 'orange' },
  { id: 'chinese', name: '大学语文', color: 'purple' },
]

const chapters = {
  math: [
    { id: '1', name: '第一章 函数与极限' },
    { id: '2', name: '第二章 导数与微分' },
    { id: '3', name: '第三章 积分' },
  ],
  computer: [
    { id: '1', name: '第一章 计算机基础' },
    { id: '2', name: '第二章 操作系统' },
    { id: '3', name: '第三章 数据结构' },
  ],
  english: [
    { id: '1', name: '词汇学习' },
    { id: '2', name: '语法学习' },
    { id: '3', name: '音标学习' },
  ],
  chinese: [
    { id: '1', name: '第一章 古代文学' },
    { id: '2', name: '第二章 现代文学' },
    { id: '3', name: '第三章 默写抽背' },
  ],
}

function AITestPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('')
  const [selectedChapter, setSelectedChapter] = useState<string>('')
  const [showReport, setShowReport] = useState(false)
  const [testStarted, setTestStarted] = useState(false)

  const handleStartTest = () => {
    if (selectedSubject && selectedChapter) {
      setTestStarted(true)
      // 模拟测试完成后显示报告
      setTimeout(() => {
        setTestStarted(false)
        setShowReport(true)
      }, 2000)
    }
  }

  const handleGenerateReport = () => {
    setShowReport(true)
  }

  if (showReport) {
    return <TestReportPage 
      subject={subjects.find(s => s.id === selectedSubject)?.name || ''}
      chapter={chapters[selectedSubject as keyof typeof chapters]?.find(c => c.id === selectedChapter)?.name || ''}
      onBack={() => setShowReport(false)}
    />
  }

  if (testStarted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">正在生成测评题目...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
          AI智能测评
        </h2>

        {/* 科目选择 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">选择科目</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => {
                  setSelectedSubject(subject.id)
                  setSelectedChapter('')
                }}
                className={`p-4 rounded-lg border-2 transition ${
                  selectedSubject === subject.id
                    ? `border-${subject.color}-500 bg-${subject.color}-50`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold">{subject.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 章节选择 */}
        {selectedSubject && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">选择章节</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {chapters[selectedSubject as keyof typeof chapters]?.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => setSelectedChapter(chapter.id)}
                  className={`p-3 rounded-lg border-2 transition text-left ${
                    selectedChapter === chapter.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {chapter.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 开始测评按钮 */}
        {selectedSubject && selectedChapter && (
          <div className="mt-6">
            <button
              onClick={handleStartTest}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg"
            >
              开始测评
            </button>
          </div>
        )}
      </div>

      {/* 测评记录 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">测评记录</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm">查看全部 {'>'}</button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span className="text-gray-700">高等数学 - 第一章 函数与极限</span>
            <span className="text-green-600 font-semibold">85分</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span className="text-gray-700">计算机基础 - 第一章 计算机基础</span>
            <span className="text-green-600 font-semibold">92分</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function TestReportPage({ subject, chapter, onBack }: { subject: string; chapter: string; onBack: () => void }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <FileText className="w-6 h-6 mr-2 text-blue-600" />
          测评报告
        </h2>
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-800"
        >
          返回
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{subject} - {chapter}</h3>
          <p className="text-gray-600">测评时间: {new Date().toLocaleString('zh-CN')}</p>
        </div>

        {/* 成绩概览 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">总分</div>
            <div className="text-2xl font-bold text-blue-600">85</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">正确题数</div>
            <div className="text-2xl font-bold text-green-600">17/20</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">正确率</div>
            <div className="text-2xl font-bold text-orange-600">85%</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">用时</div>
            <div className="text-2xl font-bold text-purple-600">15分钟</div>
          </div>
        </div>

        {/* 知识点掌握情况 */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">知识点掌握情况</h4>
          <div className="space-y-3">
            {['函数概念', '极限计算', '连续性', '导数应用'].map((topic, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">{topic}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-48 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${75 + index * 5}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">{75 + index * 5}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 学习建议 */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-yellow-600" />
            学习建议
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>建议加强极限计算相关练习，特别是洛必达法则的应用</li>
            <li>函数连续性概念需要进一步巩固，建议复习相关理论</li>
            <li>导数应用题目正确率较高，继续保持</li>
            <li>建议每天练习10-15道相关题目，巩固薄弱知识点</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AITestPage
