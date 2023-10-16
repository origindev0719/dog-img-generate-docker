import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProtocolComponent from "../layout"
import { ProtocolProvider } from "../context/DogByBreedContext"

const AppRouter: React.FC = () => {
  return (
    <ProtocolProvider>
      <Router>
        <Routes>
          <Route path="/" Component={ProtocolComponent} />
        </Routes>
      </Router>
    </ProtocolProvider>
  )
}

export default AppRouter
