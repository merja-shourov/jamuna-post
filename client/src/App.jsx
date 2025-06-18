import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import IndexLayout from "./dashboard/layout/IndexLayout"
import AdminPage from "./dashboard/pages/AdminPage"
import LoginPage from "./dashboard/pages/LoginPage"
import ProtectedDashboard from './dashboard/middleware/ProtectedDashboard'
import ProtectedRole from './dashboard/middleware/ProtectedRole'


function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/dashboard" element={<ProtectedDashboard />}>
            <Route path="" element={<IndexLayout />}>
              <Route path="" element={<Navigate to={"/dashboard/admin"} />}>
                <Route path="admin" element={<AdminPage></AdminPage>} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
