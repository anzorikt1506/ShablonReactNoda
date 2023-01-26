import { eventNames } from "process";
import React from "react";
import { buildingIn,  Idepartment } from "../../inteface/standartInP";

interface ObjectF {
  opis:string
  buildingName:any
  login:string
  Floor:number
  buildingM:buildingIn[]
  changeOpis:(e:any)=>void
  clickBuilding:(e:any)=>void
  changeLogin:(e:any)=>void
  changeFloor:(e:any)=>void
  changeRomm: (e:any)=>void
  avtoriz:()=>void
  roles:Idepartment[]
  room:number
}
const Addtiket: React.FC<ObjectF> = ({
  login,
  Floor,
  changeLogin,
  changeFloor,
  avtoriz,
  roles,
  changeRomm,
  room,
  buildingM,
  clickBuilding,
  buildingName,
  opis,
changeOpis
}) => {

  return (
    <>
       <div className="container">


<div className="row justify-content-center">

    <div className="col-xl-4 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
            
                <div className="row">

                    <div className="col-lg-12">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Новая заявка</h1>
                            </div>
                            <form className="user">
                                <div className="form-group">
                                    <span>Исполнитель</span>
                                    <input type="text"
                                      readOnly
                                      autoComplete="off"
                                      className="form-control form-control-user dropdown-toggle" 
                                      data-toggle="dropdown"  
                                      aria-haspopup="true" 
                                      aria-expanded="false"
                                      id="dropdownMenuButton"  aria-describedby="emailHelp"
                                      placeholder="Выберете исполнителя"
                                      value={login}/>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
 
 
                {roles.map((sort) => (
                  
                    <a key={sort.id} 
                       onClick={changeLogin} 
                       id={`${sort.id_object},${sort.id_object},${sort.id}`}  
                       className="dropdown-item point" >
                             {sort.name}
                    </a>
                 
                  
          ))}
  </div>

                                </div>

                                <div className="form-group">
                                    <span>Здание</span>
                                    <input type="text"
                                      readOnly
                                      autoComplete="off"
                                      className="form-control form-control-user dropdown-toggle" 
                                      data-toggle="dropdown"  
                                      aria-haspopup="true" 
                                      aria-expanded="false"
                                      id="dropdownMenuButton"  aria-describedby="emailHelp"
                                      placeholder="Выберете исполнителя"
                                      value={buildingName}/>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
 
 
                {buildingM.map((sort) => (
                  
                    <a key={sort.num} 
                       onClick={clickBuilding} 
                       id={`${sort.num}`}  
                       className="dropdown-item point" >
                             {sort.name}
                    </a>
                 
                  
          ))}
  </div>

                                </div>



                                <div className="form-group">
                                  Этаж  
                                    <input autoComplete="off" onChange={changeFloor} type="number" className="form-control form-control-user"
                                        id="exampleInputPassword" value={Floor} placeholder="Укажите этаж"/>
                                </div>

                                <div className="form-group">
                                  Номер или Кабинет 
                                    <input autoComplete="off" onChange={changeRomm} type="number" className="form-control form-control-user"
                                        id="exampleInputPassword" value={room} placeholder="Укажите этаж"/>
                                </div>
                                
                                <div className="form-group">
                                  Описание задачи 
                                    <textarea style={{height:'150px'}} autoComplete="off" onChange={changeOpis}  className="form-control "
                                        id="exampleInputPassword" value={opis} placeholder="Краткое описание задачи"/>
                                </div>

                                <p onClick={avtoriz} className="btn btn-primary btn-user btn-block">
                                    Отправить заявку
                                </p>
                                

                            </form>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
    </>
  );
};

export default  React.memo(Addtiket);



