import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import StudentLayout from './layouts/StudentLayout'
import TeacherLayout from './layouts/TeacherLayout'
import AdminLayout from './layouts/AdminLayout'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student/*" element={<StudentLayout />} />
        <Route path="/teacher/*" element={<TeacherLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
