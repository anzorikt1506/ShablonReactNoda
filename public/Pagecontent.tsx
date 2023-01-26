// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Route, Routes } from "react-router-dom";
// import { useAppSelector } from "../../hook/redux";
// import AddtiketC from "../Addtiket/AddtiketC";
// import Colorsystem from "../Colorsystem/Colorsystem";
// import ColorsystemC from "../Colorsystem/ColorsystemC";
// import Contentrow from "../Contentrow/Contentrow";
// import ContentTasksC from "../ContentTasks/ContentTasksC";
// import Datatables from "../Datatables/Datatables";
// import DepartmentC from "../Department/DepartmentC";
// import ObjectC from "../Object/ObjectC";
// import Pagehading from "../Pagehading/Pagehading";
// import Projectcard from "../Projectcard/Projectcard";
// import RolesC from "../Roles/RolesC";


// function Pagecontent() {
//   const {status} = useAppSelector((state)=>state.rolesSlice)
//   return (
//     <div className="container-fluid">
//       <Routes>
//        {(status == 0)&&(
//                 <Route
//           path="/"
//           element={[ <ColorsystemC />,]}
//         />
//        )}

//        {(status == 3)&&(
//                 <Route
//           path="/spis"
//           element={[ <ColorsystemC />,]}
//         />
//        )}

//         <Route
//           path="/:id"
//           element={[ <ContentTasksC />,]}
//         />
//       {(status >= 1 && status <= 3)&&(
//         <Route 
//         path="/" 
//         element={<AddtiketC />} 
//         /> 
//       )}


//      {(status == 3)&&(
//       <>
//               <Route 
//         path="/object" 
//         element={<ObjectC />} 
//         /> 
//         <Route 
//         path="/department" 
//         element={<DepartmentC />} 
//         /> 
//         <Route 
//         path="/roles" 
//         element={<RolesC />} 
//         /> 
//       </>
//      )}

//       </Routes>

//     </div>
//   );
// }

// export default Pagecontent;
