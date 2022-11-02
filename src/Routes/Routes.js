import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import DoctorLogin from '../Components/Login/DoctorLogin/DoctorLogin';
import Login from '../Components/Login/Login/Login';
import PatientLogin from '../Components/Login/PatientLogin/PatientLogin';
import PatientPage from '../Components/Pages/PatientPage/PatientPage';
import DoctorSignup from '../Components/SignUp/DoctorSignup/DoctorSignup';
import PatientSignup from '../Components/SignUp/PatientSignup/PatientSignup';
import SignUp from '../Components/SignUp/SignUp/SignUp';

export const router = createBrowserRouter([
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
    },
    {
        path: '/patient-page',
        element: <PatientPage></PatientPage>
    }
]);