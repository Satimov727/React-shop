import { Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { Purchases } from "./pages/Purchases"
import { Navigation } from "./components/Navigation"

function App() {

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/basket" element={<Purchases />} />
      </Routes>
    </>
  )

}

export default App
