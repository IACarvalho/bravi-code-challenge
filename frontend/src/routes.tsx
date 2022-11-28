import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { Home } from "./Pages/Home"
import { User } from "./Pages/User"
import { Navbar } from "./Components/Navbar"

export default function App() {
  return (
    <>
    <Router>
      <Navbar>
        <Routes>
          <Route path="/" element = { <Home /> } />
          <Route path="/users" element = { <User /> } />
        </Routes>
      </Navbar>
    </Router>
    </>
  )
}