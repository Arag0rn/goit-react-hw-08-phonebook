
import {  useEffect } from "react";
import {  Routes, Route} from "react-router-dom";
import { Layout } from "./Layout";
 import { HomePage } from "pages/HomePage";
import { Contacts } from "pages/Contacts";
import { LogPage } from "pages/LogPage";
import { RegPage } from "pages/RegPage";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { refreshUser } from "Redux/Auth/operation";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";


export const App =()=>{
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

    return isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} /> 
        <Route path="login"  element={
          <RestrictedRoute redirectTo="/contacts" component={<LogPage />}  />} />
        <Route path="registration"  element={
          <RestrictedRoute redirectTo="/registration" component={<RegPage />}  />} />
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={<Contacts />} />} />
      </Route>
    </Routes> 
  );

}

