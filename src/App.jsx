import { RouterProvider } from 'react-router-dom'
import './App.css'
import 'react-day-picker/dist/style.css';
import router from './Router/Route/Router';

function App() {

  return (
    <div className=''>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
