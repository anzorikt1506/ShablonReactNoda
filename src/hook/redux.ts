import * as React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { str_numIn } from '../inteface/standartInP';
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const time_ms1 = (time_ms:any) => {
  let time_year_s,time_mouse_s,time_day_s,time_hors_s,time_min_s,time_sec_s
  let time_year = Math.floor(time_ms/31536000000); 
  let time_mouse= Math.floor(time_ms/2592000000);
  let time_day= Math.floor(time_ms/86400000);
  let time_hors= Math.floor(time_ms/3600000);
  let time_min= Math.floor(time_ms/60000);
  let time_sec= Math.floor(time_ms/1000);
 
  if(time_year < 1) time_year_s = '' ;
  if(time_mouse < 1) time_mouse_s = '' ;
  if(time_day < 1) time_day_s = '' ;
  if(time_hors < 1) time_hors_s = '' ;
  if(time_min < 1) time_min_s = '' ;
  if(time_sec < 1) time_sec_s = '';

 if(time_year >= 1 ) time_year_s = `${time_year}г.` ; time_mouse_s = `${time_mouse%12}мес.`;
 if(time_mouse >= 1 && time_mouse < 12 ) time_mouse_s = `${time_mouse}мес.`; time_day_s = `${time_day%30}дн.`;
 if(time_day >= 1 && time_day < 30 ) time_day_s = `${time_day}дн.`; time_hors_s = `${time_hors%24}ч.`;
 if(time_hors >= 1 && time_hors < 24) time_hors_s = `${time_hors}ч.`; time_min_s = `${time_min%60}мин.`;
 if(time_min >= 1 && time_min < 60) time_min_s = `${time_min}мин.`; time_sec_s = `${time_sec%60}сек.` ;
 if(time_sec >= 1 && time_sec < 60) time_sec_s = `${time_sec}сек.`;

 if(time_year_s == '0г.') time_year_s = '' ;
 if(time_mouse_s == '0мес.') time_mouse_s = '' ;
 if(time_day_s == '0дн.') time_day_s = '' ; 
 if(time_hors_s == '0ч.') time_hors_s = '' ;
 if(time_min_s == '0мин.') time_min_s = '' ;
 if(time_sec_s == '0сек.') time_sec_s = '';
 
 return `${time_year_s}${time_mouse_s}${time_day_s}${time_hors_s}${time_min_s}${time_sec_s} `
}


export const time_old = (firstDate1:any) => {
    if(firstDate1 != null){
    const firstDay = Date.parse(firstDate1);
    const toDay = Date.now();
    const time_ms = toDay - firstDay 
   const dd = time_ms1(time_ms) 
   return dd
    }else{
        return '';
    }

 }

 export const time_midl = (firstDate1:any,firstDate2:any) => {
  if(firstDate1 != null){
    const firstDay = Date.parse(firstDate2);
    const toDay = Date.parse(firstDate1);
    const time_ms = toDay - firstDay 
    const dd = time_ms1(time_ms) 
    return dd
  }else{
    return '';
  }

 }

export const data_default = () =>{
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
}

export const data_old = (day:number) =>{
    const today = new Date();
    today.setDate(today.getDate() - day)
    return `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
}

 export const str_navig_map = (Count_res:number,Count_res_str:number,True_str:any) => {
    if(Count_res != 0){
      const count_str = Math.ceil(Count_res/Count_res_str); 
      True_str = Number(True_str);
      const count_srt_left = count_str - True_str;
      if(True_str <=count_str){
         const map_str:str_numIn[]= [
            {key: 101,str:True_str-4, activ: 'disabled'},
            {key: 102,str:True_str-3, activ: 'disabled'},
            {key: 103,str:True_str-2, activ: 'disabled'},
            {key: 103,str:True_str-1, activ: 'disabled'},
            {key: 104, str:True_str, activ: 'activate'},
            {key: 105, str:True_str+1, activ: 'disabled'},
            {key: 106, str:True_str+2, activ: 'disabled'},
            {key: 107, str:True_str+3, activ: 'disabled'},
            {key: 108, str:True_str+4, activ: 'disabled'},
            {key: 109, str:True_str+5, activ: 'disabled'},
        ];
        if((True_str + 5) > count_str){map_str.pop()}
        if((True_str + 4) > count_str){map_str.pop()}
        if((True_str + 3) > count_str){map_str.pop()}
         if((True_str + 2) > count_str){map_str.pop()}
         if((True_str + 1) > count_str){map_str.pop()}
         if((True_str - 4) <= 0){map_str.shift()}
         if((True_str - 3) <= 0){map_str.shift()}
         if((True_str - 2) <= 0){map_str.shift()}
         if((True_str - 1) <= 0){map_str.shift()}
         if((True_str - 1) != 1 && (True_str - 1) > 0){map_str.unshift({key: 90, str:'...', activ: 'disabled'}); map_str.unshift({key: 89, str:'1', activ: 'disabled'})}
         if(count_srt_left > 3){map_str.push({key: 88, str:'...', activ: 'disabled'}); map_str.push({key: 87, str:`${count_str}`, activ: 'disabled'})}

         return map_str;
      }
     
 
    }else{
      return [];
    }
  
   }

 