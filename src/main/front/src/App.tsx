import ReactDOM from "react-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Undefined from "./pages/Undefined";
import FeelTester from './pages/FeelTester';
import AdminDmns from './pages/AdminDmns';
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-icons-1.7.2.css';
import 'dmn-js/dist/assets/diagram-js.css';
import 'dmn-js/dist/assets/dmn-js-decision-table.css';
import 'dmn-js/dist/assets/dmn-js-decision-table-controls.css';
import 'dmn-js/dist/assets/dmn-js-drd.css';
import 'dmn-js/dist/assets/dmn-js-literal-expression.css';
import 'dmn-js/dist/assets/dmn-js-shared.css';
import 'dmn-js/dist/assets/dmn-font/css/dmn.css';
import 'dmn-js-properties-panel/dist/assets/dmn-js-properties-panel.css';
import 'dmn-js-properties-panel/dist/assets/properties-panel.css';
import './assets/css/custom.css';

function App() {

  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FeelTester />} />
            <Route path="feel" element={<FeelTester />} />
            <Route path="dmn" element={<AdminDmns />} />
            <Route path="*" element={<Undefined />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
