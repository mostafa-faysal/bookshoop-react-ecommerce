import './App.css'
import { Outlet } from 'react-router'
import Nav from './components/nav/Nav'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

