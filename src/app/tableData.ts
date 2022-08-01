
import React from 'react'
import create from 'zustand'
import FetchUser from "../api/fetchUser";


interface TableDataResponseObject {
    tableData:{
    age: number;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    phoneNumber: number;
    _v: number;
    _id: number;
}[];
getApiData:()=>void
  }

const usetableData = create<TableDataResponseObject>((set) => ({
    tableData:[],
    getApiData : async () => {
        const res = await FetchUser();
        if (res.success === true) {
            set((state)=>state.tableData=res.data)
        }
        },
    // editTableData:(value:string)=>{
    //     set((state)=>({
    //         ...state.tableData,
    //         tableData:
    //     }))
    // }
}))

export default usetableData;