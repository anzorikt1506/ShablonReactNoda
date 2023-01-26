import * as React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Idepartment } from "../../inteface/standartInP"; //импортировали интерфейс type пользователей
import { AppDispatch } from "../store";
import axios from "axios";
import env from "react-dotenv";
interface UserState {
  //создали интерфейс типов для state редюссора
  department: Idepartment[];
  isLoading: boolean;
  error: string;
  verithik: string;
  booleanverithik: boolean;
  selected: number
}
export const initialState: UserState = {
  department: [],
  isLoading: false,
  error: "",
  verithik: "",
  booleanverithik: false,
  selected: 0
};
export const departmentSlice = createSlice({
  name: "departmentSlice",
  initialState,
  reducers: {
    departament_selectDepartment(state,action: PayloadAction<number>){
     state.selected = action.payload
    },
    departament_loadTest(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },
    departament_trueTest(state, actions: PayloadAction<Idepartment[]>) {
      state.isLoading = false;
      state.department = actions.payload;
      state.error = "";
      state.verithik = "";
      state.booleanverithik = false;
    },
    departament_trueVerithik(state, actions: PayloadAction<string>) {
      state.isLoading = false;
      state.verithik = actions.payload;
      state.booleanverithik = true;
      state.error = "";
    },
    departament_falseVerithik(state, actions: PayloadAction<boolean>) {
      state.booleanverithik = actions.payload;
    },
    departament_object(state, actions: PayloadAction<Idepartment[]>) {
      state.department = actions.payload;
    },
    departament_errorTest(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.verithik = "";
      state.booleanverithik = false;
    },
  },
});

export default departmentSlice.reducer;

export const department_add_API = 
  (name: string, id_object: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(departmentSlice.actions.departament_loadTest("yy"));
      const response = await axios.post<Idepartment[]>(
        `${env.Server_URL}addDepartment`,
        {
          name: name,
          id_object: id_object
        }
      );
      if (response.data[0].bool === true) {
        dispatch(departmentSlice.actions.departament_trueVerithik(response.data[0].name));
      } else {
        dispatch(departmentSlice.actions.departament_trueTest(response.data));
      }
    } catch {
      dispatch(departmentSlice.actions.departament_errorTest("Не получилось"));
    }
  };

export const department_add_API_spis =
  (name: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(departmentSlice.actions.departament_loadTest("yy"));
      const response = await axios.post<Idepartment[]>(
        `${env.Server_URL}department`,
        {
          nameObject: name,
        }
      );
      dispatch(departmentSlice.actions.departament_trueTest(response.data));
    } catch {
      dispatch(departmentSlice.actions.departament_errorTest("Не получилось"));
    }
  };

export const department_object = (id_object:any) => async(dispatch:AppDispatch)=>{
  try{
    dispatch(departmentSlice.actions.departament_loadTest("yy"));
          const response = await axios.post<Idepartment[]>(
            `${env.Server_URL}department`,
        {
          nameObject: '',
        }
      );
     
      
      const department_filter =  response.data.filter((name)=>{return name.id_object == id_object})
      dispatch(departmentSlice.actions.departament_trueTest(department_filter));
  }catch{
    dispatch(departmentSlice.actions.departament_errorTest("Не получилось"));
  }
}  


export const department_red_name = (id:number,name:string) => async(dispatch:AppDispatch)=>{
  try{
    dispatch(departmentSlice.actions.departament_loadTest("yy"));
          const response = await axios.post<Idepartment[]>(
            `${env.Server_URL}departmentRedName`,
        {
          id: id,
          name: name
        }
      );
  }catch{
    dispatch(departmentSlice.actions.departament_errorTest("Не получилось"));
  }
}  

export const depatment_del = (id:number,id_object:number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(departmentSlice.actions.departament_loadTest("yy"));
    const response = await axios.post<Idepartment[]>(
      `${env.Server_URL}departmentdel`,
      {
        id: id
      }
    );
    
    const department_filter =  response.data.filter((name)=>{return name.id_object == id_object})
    dispatch(departmentSlice.actions.departament_trueTest(department_filter));
  } catch {
    dispatch(departmentSlice.actions.departament_errorTest("Не получилось"));
  }
};