import { useState } from 'react'
import { FileText, Upload, Printer, RefreshCw, Camera } from 'lucide-react'

function AIErrorBookPage() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [errorQuestions] = useState([
    {
      id: 1,
      question: '以下哪个算法被广泛用于自然语言处理中的文本分类任务?',
      userAnswer: 'B. K最近邻 (KNN)',
      correctAnswer: 'C. 支持向量机 (SVM)',
      explanation: '支持向量机在处理高维数据和文本分类任务中具有优势。',
      diagnosis: '对文本分类算法的理解不够深入，需要加强相关理论学习。',
      similarQuestions: [
        '以下哪个算法适合处理高维稀疏数据?',
        '文本分类任务中，哪个算法对特征选择不敏感?'
      ]
    }
  ])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader()
        reader.onload = (e) => {
          const target = e.target
          if (target?.result) {
            setUploadedImages(prev => [...prev, target.result as string])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const handleGenerateSimilar = () => {
    // 模拟生成举一反三题目
    alert('正在生成举一反三题目...')
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FileText className="w-6 h-6 mr-2 text-blue-600" />
          AI错题本
        </h2>

        {/* 上传错题 */}
        <div className="mb-6 p-6 border-2 border-dashed border-gray-300 rounded-lg">
          <div className="text-center">
            <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">拍照上传错题</h3>
            <p className="text-sm text-gray-500 mb-4">支持拍照或从相册选择图片</p>
            <label className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg cursor-pointer transition">
              <Upload className="w-5 h-5 inline mr-2" />
              选择图片
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {uploadedImages.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-4">
              {uploadedImages.map((img, index) => (
                <div key={index} className="relative">
                  <img src={img} alt={`上传图片 ${index + 1}`} className="w-full h-32 object-cover rounded" />
                  <button
                    onClick={() => setUploadedImages(prev => prev.filter((_, i) => i !== index))}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 系统错题列表 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">系统错题</h3>
          <div className="space-y-4">
            {errorQuestions.map((question) => (
              <div key={question.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">题目</h4>
                  <p className="text-gray-700">{question.question}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-600">你的答案：</span>
                    <p className="text-red-600 font-semibold">{question.userAnswer}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">正确答案：</span>
                    <p className="text-green-600 font-semibold">{question.correctAnswer}</p>
                  </div>
                </div>

                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
                  <h5 className="font-semibold text-gray-800 mb-1">答案解析</h5>
                  <p className="text-gray-700 text-sm">{question.explanation}</p>
                </div>

                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <h5 className="font-semibold text-gray-800 mb-1">AI诊断</h5>
                  <p className="text-gray-700 text-sm">{question.diagnosis}</p>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2">举一反三题目</h5>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {question.similarQuestions.map((sq, index) => (
                      <li key={index}>{sq}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={handleGenerateSimilar}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>生成举一反三</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 打印错题集 */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">一键打印错题集</h3>
              <p className="text-sm text-gray-600">生成格式化的错题集，方便打印复习</p>
            </div>
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              <Printer className="w-5 h-5" />
              <span>打印错题集</span>
            </button>
          </div>
        </div>
      </div>

      {/* 打印样式 */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-content, .print-content * {
            visibility: visible;
          }
          .print-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default AIErrorBookPage
