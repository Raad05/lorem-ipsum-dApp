import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import Home from '../Components/Home/Home';
import DoctorLogin from '../Components/Login/DoctorLogin/DoctorLogin';
import Login from '../Components/Login/Login/Login';
import PatientLogin from '../Components/Login/PatientLogin/PatientLogin';
import DoctorPage from '../Components/Pages/DoctorPage/DoctorPage';
import MedicalRecords from '../Components/Pages/MedicalRecords/MedicalRecords';
import PatientPage from '../Components/Pages/PatientPage/PatientPage';
import PatientProfile from '../Components/Pages/PatientProfile/PatientProfile';
import DoctorSignup from '../Components/SignUp/DoctorSignup/DoctorSignup';
import PatientSignup from '../Components/SignUp/PatientSignup/PatientSignup';
import SignUp from '../Components/SignUp/SignUp/SignUp';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
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
    },
    {
        path: '/doctor-page',
        element: <DoctorPage></DoctorPage>
    },
    {
        path: "/patient-profile",
        element: <PatientProfile></PatientProfile>
    },
    {
        path: '/medical-records',
        element: <MedicalRecords></MedicalRecords>
    }
]);