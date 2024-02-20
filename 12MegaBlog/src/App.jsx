import conf from './conf/conf'
import './App.css'
import { useState , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Header, Footer } from './components'

function App() {
  const [loading, setLoading]  = useState(true)
  const dispatch = useDispatch()

  useEffect (() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  }, [])


  return !loading ? (
    <div className='w-full  min-h-screen bg-gray-400 flex flex-wrap content-between'>
      <Header />
      Todo:{/* <Outlet /> */}
      <Footer/>
    </div>
  ) : (null) ;
   
}

export default App
