
// import { lazy, Suspense } from "react";
import {  Routes, Route} from "react-router-dom";
import { Layout } from "./Layout";
// import { HomePage } from "pages/HomePage";
import { Contacts } from "pages/Contacts";



export const App =()=>{

    return (
      <Routes>
      <Route path="/" element={<Layout/>}>
        {/* <Route index element={<HomePage />} /> */}
        <Route index element={<Contacts />} />
      </Route>
    </Routes> 
  );

}
