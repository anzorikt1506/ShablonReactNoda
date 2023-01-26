import * as React from 'react';

export interface standartInP{
    name: string
    price: number
}
export interface IObject{
    id: number
    name: string
    bool?: boolean
}
export interface Itasks{
    id: number
    id_users?: number
    id_roles: number
    id_department:number
    id_object:number
    status:number
    building?:number
    room?:number
    floor?:number
    data_statrt?:any
    data_v_rabote?:any
    data_end?:any
    data_no?:any
    opisanie:string
    prichina?:string
}
export interface Idepartment{
    id: number
    id_object: number
    name: string
    bool?: boolean
}
export interface IRoles{
    id: number
    id_object: number
    id_department: number
    name: string
    email: string
    bool?: boolean
    status: number
}
export interface Iusers{
    id: number
    id_object: number
    id_departament: number
    id_roles:number
    fio: any
    bool?: boolean
    status: number
    password:any
}
export interface statusM {
    id:number,
    text:string
  }
  export interface avtorizRole {
    id:number,
    status:number,
    name:string,
    token:{
        accessToken:string,
        refreshToken:string
    }
  }
 export interface buildingIn{
    num: number,
    name:string
   }
   export interface str_numIn{
    key:number,
    str: any ,
    activ:string
   }  
  