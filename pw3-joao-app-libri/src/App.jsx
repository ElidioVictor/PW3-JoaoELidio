import  './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/layout/NavBar.jsx'
import Container from './components/layout/Container.jsx'
import CreateBooks from './components/Pages/CreateBooks.jsx'
import Home from './components/Pages/Home.jsx'
import ListBook from './components/Pages/ListBook.jsx'

function App() {
  return (
    <>
      <BrowserRouter>

        <Container>
          <Routes>
            <Route path='/' element={<NavBar/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/createBook' element={<CreateBooks/>}></Route>
            <Route path='/listBook' element={<ListBook/>}></Route>
            </Route>
          </Routes>
        </Container>
        
      </BrowserRouter>
    </>
  )
}

export default App
