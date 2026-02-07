import React from 'react'
import AppRoutes from "./routes/AppRoutes";
import Toast from './components/common/Toast';

const App = () => {
  return (
    <div className="bg-[#020617] min-h-screen text-white">
      <AppRoutes />
      <Toast />
    </div>
  )
}

export default App
