import { useState } from 'react'
import { Target, BarChart3 } from 'lucide-react'

const subjects = ['高等数学', '计算机基础', '大学英语', '大学语文']
const difficulties = ['简单', '中等', '困难']
const questionTypes = ['选择题', '填空题', '计算题']

function AIPracticePage() {
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedChapter, setSelectedChapter] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState<any>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [stats, setStats] = useState({ total: 0, correct: 0, wrong: 0 })

  const generateQuestion = () => {
    if (!selectedSubject || !selectedChapter) {
      alert('请先选择学科和章节')
      return
    }

    const question = {
      id: Date.now(),
      question: '以下哪个算法被广泛用于自然语言处理中的文本分类任务?',
      options: [
        'A. 决策树',
        'B. K最近邻 (KNN)',
        'C. 支持向量机 (SVM)',
        'D. 随机森林'
      ],
      correctAnswer: 'C',
      explanation: '支持向量机 (SVM) 在处理高维数据和文本分类任务中具有优势，能够有效处理文本特征空间。',
      tags: ['自然语言处理', '文本分类', '支持向量机 (SVM)']
    }

    setCurrentQuestion(question)
    setSelectedAnswer('')
    setShowAnswer(false)
  }

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) {
      alert('请选择答案')
      return
    }

    setShowAnswer(true)
    setStats(prev => ({
      total: prev.total + 1,
      correct: selectedAnswer === currentQuestion.correctAnswer ? prev.correct + 1 : prev.correct,
      wrong: selectedAnswer !== currentQuestion.correctAnswer ? prev.wrong + 1 : prev.wrong
    }))
  }

  const handleNextQuestion = () => {
    generateQuestion()
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 左侧题目区域 */}
      <div className="lg:col-span-2 space-y-6">
        {/* 筛选器 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Target className="w-6 h-6 mr-2 text-blue-600" />
            AI精准练
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">学科</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">全部学科</option>
                {subjects.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">章节</label>
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">全部章节</option>
                <option value="ch1">第一章</option>
                <option value="ch2">第二章</option>
                <option value="ch3">第三章</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">难度</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">全部难度</option>
                {difficulties.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">题型</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">全部题型</option>
                {questionTypes.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={generateQuestion}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            生成题目
          </button>
        </div>

        {/* 题目展示 */}
        {currentQuestion ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">题目</h3>
              <p className="text-gray-700">{currentQuestion.question}</p>
            </div>

            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option: string, index: number) => {
                const optionLetter = option.split('.')[0]
                const isSelected = selectedAnswer === optionLetter
                const isCorrect = optionLetter === currentQuestion.correctAnswer
                const showResult = showAnswer && (isSelected || isCorrect)

                return (
                  <button
                    key={index}
                    onClick={() => !showAnswer && setSelectedAnswer(optionLetter)}
                    disabled={showAnswer}
                    className={`w-full text-left p-4 rounded-lg border-2 transition ${
                      showResult
                        ? isCorrect
                          ? 'border-green-500 bg-green-50'
                          : isSelected
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200'
                        : isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>

            {showAnswer && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">答案解析</h4>
                <p className="text-gray-700 mb-2">{currentQuestion.explanation}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentQuestion.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex space-x-3">
              {!showAnswer ? (
                <button
                  onClick={handleSubmitAnswer}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                  提交答案
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                  下一题
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-gray-500">请先选择筛选条件并生成题目</p>
          </div>
        )}
      </div>

      {/* 右侧统计区域 */}
      <div className="space-y-6">
        {/* 学习统计 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
            学习统计
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">总答题数</span>
              <span className="font-semibold">{stats.total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">正确</span>
              <span className="font-semibold text-green-600">{stats.correct}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">错误</span>
              <span className="font-semibold text-red-600">{stats.wrong}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">正确率</span>
              <span className="font-semibold">
                {stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">收藏题目</span>
              <span className="font-semibold">0</span>
            </div>
          </div>
        </div>

        {/* 领域掌握度 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">领域掌握度</h3>
          <div className="space-y-3">
            {['机器学习', '深度学习', 'NLP', 'CV', '强化学习'].map((domain, index) => (
              <div key={domain}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">{domain}</span>
                  <span className="text-sm text-gray-600">{index * 20}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${index * 20}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 快捷工具 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">快捷工具</h3>
          <div className="space-y-2">
            <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-4 rounded-lg transition">
              错题本
            </button>
            <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold py-2 px-4 rounded-lg transition">
              收藏夹
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPracticePage
