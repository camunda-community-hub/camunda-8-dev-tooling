import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";

const Layout = () => {

  return (
    <>
      <AdminNavbar />
      <div className="container-fluid bg-light main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
