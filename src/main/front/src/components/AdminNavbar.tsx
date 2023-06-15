import {  Link, NavLink } from "react-router-dom";
import logo from '../assets/img/logo.svg';
import { useTranslation } from "react-i18next";

function AdminNavbar() {
  const { t } = useTranslation();

  return (
    <>
      <nav className={"navbar navbar-light bg-light"} >
        <div className="container-fluid">
          <Link to="/home"><img height="50" src={logo} className="custom-logo" alt="Camunda" /></Link>
        </div>
       
          <div className="bg-primary menu">
            <NavLink className={({ isActive }) =>
              isActive ? "text-light menu-item selected" : "text-light menu-item"
            } to="/feel">{t("Feel Tester")}</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "text-light menu-item selected" : "text-light menu-item"
            } to="/dmn">{t("DMN")}</NavLink>

           
          </div>
      </nav>
      </>
  );
}

export default AdminNavbar;
