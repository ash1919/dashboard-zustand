import { stringify } from "querystring";
import React from "react";
import { toast } from "react-toastify";
import create from "zustand";
import FetchUser from "../api/fetchUser";

interface TableDataResponseObject {
  tableData: {
    age: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phoneNumber: number;
    _v: number;
    _id: number;
  }[];
  getApiData: () => void;
  editTableData: (
    name: TableDataResponseObject["tableData"][number],
    value: string | number,
    id: number | string
  ) => void;
}

const usetableData = create<TableDataResponseObject>((set) => ({
  tableData: [],

  getApiData: async () => {
    try {
      const res = await FetchUser();
      if (res?.data) {
        set((state) => (state.tableData = res?.data.data));
      }
    } catch (error) {
      toast.error("error");
    }
  },

  editTableData: (name, value, id) => {
    set((state) => {
      //   state.tableData[index][name]=value
      return {
        ...state,
        tableData: state.tableData.map((data, i) => {
          if (data._id === id) {
            return { ...data, [name as any]: value };
          }
          return { ...data };
        }),
      };
    });
  },
}));

export default usetableData;
