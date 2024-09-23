import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import LoginWithFormik from "./components/LoginWithFormik";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login-with-formik" element={<LoginWithFormik />}></Route>
        <Route path="register" element={<SignupForm />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
