import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import IndexLayout from "./dashboard/layout/IndexLayout"
import AdminPage from "./dashboard/pages/AdminPage"
function App() {
  return (
  <>
    <BrowserRouter >
      <Routes>
        <Route path="/dashboard" element={<IndexLayout></IndexLayout>}>
          <Route path="" element={<Navigate to={"/dashboard/admin"}></Navigate>}>
            <Route path="admin"  element={<AdminPage></AdminPage>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
