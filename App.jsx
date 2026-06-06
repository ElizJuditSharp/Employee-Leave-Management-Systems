import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login           from './Login.jsx'
import EmployeeDash    from './EmployeeDash.jsx'
import ApplyLeave      from './ApplyLeave.jsx'
import LeaveStatus     from './LeaveStatus.jsx'
import AdminDash       from './AdminDash.jsx'
import EmployeeProfile from './EmployeeProfile.jsx'
import Register from './Register.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                      element={<Login />} />
        <Route path="/dashboard"             element={<EmployeeDash />} />
        <Route path="/apply"                 element={<ApplyLeave />} />
        <Route path="/status"                element={<LeaveStatus />} />
        <Route path="/admin"                 element={<AdminDash />} />
        <Route path="/admin/employee/:id"    element={<EmployeeProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="*"                      element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
