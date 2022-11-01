import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import DoctorLogin from './Components/Login/DoctorLogin/DoctorLogin';
import Login from './Components/Login/Login/Login';
import PatientLogin from './Components/Login/PatientLogin/PatientLogin';
import DoctorSignup from './Components/SignUp/DoctorSignup/DoctorSignup';
import PatientSignup from './Components/SignUp/PatientSignup/PatientSignup';
import SignUp from './Components/SignUp/SignUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/home',
      element: <Home></Home>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path: '/patient-login',
      element: <PatientLogin></PatientLogin>
    },
    {
      path: '/doctor-login',
      element: <DoctorLogin></DoctorLogin>
    },
    {
      path: '/patient-signup',
      element: <PatientSignup></PatientSignup>
    },
    {
      path: '/doctor-signup',
      element: <DoctorSignup></DoctorSignup>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
