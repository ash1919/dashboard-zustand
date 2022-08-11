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
getApiData:()=>void;
editTableData:(name:TableDataResponseObject["tableData"][number],value:string|number, id: number|string)=>void;
}

const usetableData = create<TableDataResponseObject>((set) => ({
    tableData:[],
    getApiData : async () => {
        const res = await FetchUser();
        if (res.success === true) {
            set((state)=>state.tableData=res.data)
        }
        },
    editTableData:(name,value,id)=>{
        set((state) => {
            // state.tableData[index][name]=value
            return{
                ...state,
                tableData: state.tableData.map((data,i)=>{
                    if(data._id===id){
                        return {...data,[name as any]:value}
                    }
                    return {...data}
                })
            }
        })  
    }
}))

export default usetableData;