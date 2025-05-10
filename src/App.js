import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router';
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import {lazy, Suspence} from 'react';
import RestaurantMenu from "./components/RestaurantMenu";
import Demo from "./components/Demo";
// import Grocery from "./components/Grocery";
const Grocery=lazy(()=>import('./components/Grocery'));
import {Provider} from 'react-redux';
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
    </Provider>
  );
};
const appRoutes= createBrowserRouter([
  {
    path:"/",
    Component:AppLayout,
    children:[
      {
        path:'/',
        Component:Body
      },
      {
        path:'/about',
        Component:About
      },
      {
        path:'/contact-us',
        Component:ContactUs
      },
      {
        path:'restaurant/:resId',
        Component:RestaurantMenu
      },
      {
        path:'/grocery',
        Component:Grocery
      },
      {
        path:'/cart',
        Component:Cart
      }
    ],
    errorComponent:Error,
    
  },
  {
    path:'/demo',
    Component:Demo
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>);
