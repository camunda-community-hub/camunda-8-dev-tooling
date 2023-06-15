import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import adminDmnService from '../service/AdminDmnService';
import AdminDmnList from '../components/AdminDmnList';
import AdminDmnEdit from '../components/AdminDmnEdit';

function AdminDmns() {

  const dmn = useSelector((state: any) => state.adminDmns.currentDmn)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(adminDmnService.getDmns());
  });

  return (
    dmn ? <AdminDmnEdit /> : <AdminDmnList />
  );
}

export default AdminDmns;
