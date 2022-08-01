import React, { useEffect } from "react";
import { CgCloseO } from "react-icons/cg";
import usetableData from "../../app/tableData";

type Props = {
  open: boolean;
  onClose: () => void;
  id: number | string;
};
const handleSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault();
  // console.log(e.target);
  usetableData();
};
const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
  e.preventDefault();

};
const modal = (props: Props) => {
  const { open, onClose, id } = props;
  const fetchTableData = usetableData((state) => state.getApiData);
  const tableDatas = usetableData((state) => state.tableData);
  const filteredData = tableDatas.filter((data) => id === data._id);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchTableData();
  }, [open, fetchTableData]);
  if (!open) return null;
  return (
    <>
      <div className="modal_overlay " />
      <div className="modal_style w-[45%] px-4 py-8 rounded-md">
        <div className="flex items-center justify-between pb-12">
          <div>
            <p className=" text-2xl font-semibold">Edit</p>
          </div>
          <button onClick={onClose}>
            <CgCloseO className="text-white! text-2xl" />
          </button>
        </div>
        {filteredData.map((data) => (
          <form
            className="flex flex-col gap-y-8"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex gap-x-2 items-center justify-around">
              <div className="flex flex-col items-start justify-start gap-x-2">
                {" "}
                <div className="text-lg font-medium">First Name</div>
                <input
                  type="text"
                  name="firstname"
                  value={data.firstname}
                  placeholder="Enter your first name"
                  className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                  onChange={(e) => handleSubmit(e)}
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-x-2">
                {" "}
                <div className="text-lg font-medium">Last Name</div>
                <input
                  type="text"
                  name="lastname"
                  value={data.lastname}
                  placeholder="Enter your last name"
                  className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                />
              </div>
            </div>
            <div className="flex gap-x-8 items-center justify-around">
              <div className="flex flex-col items-start justify-start gap-x-2">
                {" "}
                <div className="text-lg font-medium">Email</div>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  placeholder="Enter your email"
                  className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-x-2">
                {" "}
                <div className="text-lg font-medium">Phone</div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  placeholder="Enter your phone no"
                  className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col items-start ml-20 gap-x-2 ">
              {" "}
              <div className="text-lg font-medium">Age</div>
              <input
                type="text"
                name="age"
                value={data.age}
                placeholder="Enter your age"
                className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
              />
            </div>
            <button
              type="submit"
              className="bg-[#FFEE58]  mt-4 py-2 w-24 mx-auto rounded-lg text-black font-semibold"
            >
              Submit
            </button>
          </form>
        ))}
      </div>
    </>
  );
};

export default modal;
