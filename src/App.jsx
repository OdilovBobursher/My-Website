import { Route, Routes } from "react-router-dom";
import './App.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
//import { Header } from 'antd/es/layout/layout'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import Shop from './pages/Shop/Shop'

function App() {
//  const [modal, setModal] = useState(0)

//  const [date, setDate] = useState(false);

//  const showDate = () => {
//    console.log(date);
//  }
  return (
    <>
    <Header />
    <Routes>
      
      <Route path='/' element={<Home />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Shop' element={<Shop />}/>
    </Routes>

    <Footer />        
  {/*    <button onClick={() => showData()}>show data</button> */}


  {/*  <button onClick={() => setModal((prev) => !prev)}>
      {modal ? "Close Modal" : "show Modal"}
    </button>
    {modal === true ? ( 
    <div className="modal">
      salom
      <button onClick={() => setModal(false)} className='btn_x'>x</button>
    </div>
    ) : (
       <></>
       )}
       { modal ? (
        <div onClick={() => setModal(false)}
        className="overlay"></div>
    ) : ( 
      <></>
  )} */}
    </>
  )
}

export default App
