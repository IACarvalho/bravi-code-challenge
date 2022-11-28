import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { Home } from "./Pages/Home"
import { User } from "./Pages/User"
import { Navbar } from "./Components/Navbar"
import { UserForm } from "./Pages/UserForm"
import { ContactForm } from "./Pages/ContactForm"

export default function App() {
  return (
    <>
    <Router>
      <Navbar>
        <Routes>
          <Route path="/" element = { <Home /> } />
          <Route path="/users" element = { <User /> } />
          <Route path="/new-user" element = { <UserForm />} />
          <Route path="/new-contact" element = { <ContactForm /> } />
        </Routes>
      </Navbar>
    </Router>
    </>
  )
}