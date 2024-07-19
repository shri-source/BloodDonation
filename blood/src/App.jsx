import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Menu from './components/Menu';
import Donors from './pages/Donors';
import Home from './pages/Home';
import NewDonor from './pages/NewDonor';
import Prospect from './pages/Prospect';
import Prospects from './pages/Prospects';
import Donor from './pages/Donor'
function App() {

  const Layout = () => {
    return(
      <div className='flex'>
        <div>
          <Menu />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/donors',
          element:<Donors />
        },
        {
          path:'/prospects',
          element:<Prospects />
        },
        {
          path:'/prospect/:id',
          element:<Prospect/>
        },
        {
          path:'/newdonor',
          element:<NewDonor/>
        },
        {
          path:'/donor/:id',
          element:<Donor />
        }
      ]
    }
  ])
  return (
 <>
 <RouterProvider  router= {router} />
 </>
  )
}

export default App
