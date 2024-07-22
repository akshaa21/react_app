import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {


  return (
    <UserContextProvider>
    <div className="flex flex-wrap min-h-screen items-center -mb-10"
          style={{backgroundImage : `url(https://images.pond5.com/snowflakes-png-alpha-backgroundgood-happy-footage-082946943_iconl.jpeg)`,}
          }>
      <div className="w-full max-w-lg h-full m-auto bg-white rounded-sm p-5">
        <h2 className='text-4xl font-bold text-blue-800 pb-3 mb-2'>Hello User</h2>
          <Login/>
          <Profile/>
      </div>     
    </div>
    </UserContextProvider>
  )
}

export default App
