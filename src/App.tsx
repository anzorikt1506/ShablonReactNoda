import React, { useReducer } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hook/redux';
import { useEffect, useState } from "react";
import { isAnyOf } from '@reduxjs/toolkit';
import { department_add_API_spis } from './store/reducers/departmentSlice';
import AddtiketC from './Component/Addtiket/AddtiketC';





 
 
	 
// function notifyMe() {
//   if (!("Notification" in window)) {
//     alert("Браузер не поддерживает уведомления");
//   } else if (Notification.permission === "granted") {
//     const notification = setTimeout(()=>{new Notification("Hi there!", {
// 			tag : "ache-mail",
// 			body : "Пора сделать паузу и отдохнуть",
// 			icon : "http://kinolife.su/content/img/kino-img/15693665524683.jpg"
// 		})}, 2000)  ;
//   } else if (Notification.permission !== "denied") {
//     Notification.requestPermission().then((permission) => {
//       if (permission === "granted") {
//         const notification = setTimeout(()=>{new Notification("Hi there!")}, 2000)  ;
//       }
//     });
//   }
// }

function App() {

  const {department} = useAppSelector((state)=>state.departmentSlice)

  const dispatch = useAppDispatch()
  
  useEffect(() => { 

      if(Object(department).length == 0){dispatch(department_add_API_spis(''));}

  }, []);


 

return(
  <>
  {(5 == 5)&&(<AddtiketC/>)}
  </>
)
}

export default App;
