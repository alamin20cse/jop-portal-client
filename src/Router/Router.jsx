import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/Home/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApplay from "../Pages/Home/JobApplay";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJob/MyPostedJobs";
import ViewApplication from "../Pages/ViewApplication";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Rout not Fount</h2>,
      children:[

        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
          
        },
        {
          path:'/jobs/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'/jobapplay/:id',
          element:<PrivateRoute><JobApplay></JobApplay></PrivateRoute>,
          // loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'/myapplication',
          element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {
          path:'/addjob',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>,
        },
        {
          path:'/mypostedjobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path:'/viewApplications/:job_id',
          element:<PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`)
        }
        

      ],
      
    },
  ]);
  export default router