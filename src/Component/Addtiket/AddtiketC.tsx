import { eventNames } from "process";
import React from "react";
import {useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import  {departmentSlice, department_add_API_spis, department_object } from "../../store/reducers/departmentSlice";



import Addtiket from "./Addtiket";



// interface ObjectF {

// }
const AddtiketC: React.FC = ({

}) => {



    const dispatch = useAppDispatch()
    const {department} = useAppSelector((state)=>state.departmentSlice)
  useEffect(() => {
    if(department.length == 0){

      dispatch(department_add_API_spis(''));

    }

  }, []);

  const buildingM = [
      {num:0,name:'Гостиница'},
      {num:1,name:'ЛОК'}
    ]
    const [buildingName, buildingFname] = useState<any>('');
    const [buildingNum, buildingFnum] = useState<any>('');
    const [login, loginF] = useState<string>('');
    const [id_roli, idF] = useState<number>(777);
    const [id_object, id_ob_F] = useState<number>(777);
    const [id_department, id_dep_F] = useState<number>(777);
    const [Floor, FloorF] = useState<any>('');
    const [opis, opisF] = useState<string>('');
    const [room, roomF] = useState<any>('');
    const clickBuilding = async(e:any) => {
      buildingFname(e.target.innerHTML)
      buildingFnum(e.target.id) 
    }
    const changeLogin = async(e:any) => {
      loginF(e.target.innerHTML)
      const vse_id = e.target.id.split(',');
      id_ob_F(vse_id[0])
      id_dep_F(vse_id[1])
      idF(vse_id[2]) 

    }
    const changeOpis = (e:any) => opisF(e.target.value)
    const changeFloor = (e:any) => FloorF(e.target.value)
    const changeRomm = (e:any) => roomF(e.target.value)
   const roles1 = department.filter((roles)=> roles.id == 0 )
    
   const avtoriz = () => {
         switch(true){
      case id_roli==777 || id_object==77 || id_department==77:
        alert('Не выбран исполнитель')
        break;
      case buildingName == '' ||  buildingNum == '':
        alert('Не выбрано Здание')
        break;  
      case   Floor == '':
        alert('Не указан Этаж')
        break;
      case room == '':
        alert('Не указан кабинет или номер')
        break; 
      case opis == '':
        alert('Нет описания')
        break;       
      default:
       dispatch(
        department_object('f'))
         dispatch(departmentSlice.actions.departament_errorTest('1'))
         opisF('')
         FloorF('')
         roomF('')
         
      break;  
     }
    }

return (
 
<>
  
  {0 != 0 ?(
    <a>ffff</a>
  ) : (
<Addtiket
   opis={opis}
   changeOpis={changeOpis}
   buildingName={buildingName}
   buildingM={buildingM}
   clickBuilding={clickBuilding}
   login={login}
   Floor={Floor}
   changeLogin={changeLogin}
   changeFloor={changeFloor}
   changeRomm={changeRomm}
   avtoriz={avtoriz}
   roles={roles1}
   room={room}
   />
  )}
   
</>
  );
  
};

export default  React.memo(AddtiketC);
