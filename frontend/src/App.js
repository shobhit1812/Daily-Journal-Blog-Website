import { Route, Routes } from "react-router-dom"
import Login from "./component/forms/Login"
import Signup from "./component/forms/Signup"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import MyBlogs from "./pages/MyBlogs"
import WriteBlog from "./pages/WriteBlog"

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/write' element={<WriteBlog />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/myblogs' element={<MyBlogs />} />
      </Routes>
    </div>
  )
}

export default App
