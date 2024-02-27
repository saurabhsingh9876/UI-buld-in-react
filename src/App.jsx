
import './App.css'
import Feed from './component/button/Feed'
import Hcard from './component/card/Hcard'
import Vcard from './component/card/Vcard'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Navbar from './component/nvabar/Navbar'
import Signup from './component/signup/Signup'

function App() {
  

  return (
    <>
    <div className='ml-5 mr-5 h-[100%] mb-1 '>
    <Navbar/>
    <Header/>
    <Feed/>
   <Hcard/>
   <Hcard/>
   <Hcard/>
   <Hcard/>
   <p className='text-3xl text-slate-700 ml-[20%] mt-4'>Related Deal you may like</p>
   <div className='flex   ml-[15%] w-[70%] flex-wrap mt-7 mb-3 '>
   <Vcard/>
   <Vcard/>
   <Vcard/>
   <Signup/>

   </div>
  
      <Footer/>
    </div>
   
      
    </>
  )
}

export default App
