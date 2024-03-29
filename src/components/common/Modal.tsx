import React, { useEffect } from "react";
import { CgCloseO } from "react-icons/cg";
import postUser from "../../api/postUser";
import usetableData from "../../app/tableData";

type Props = {
  open: boolean;
  onClose: () => void;
  id: number | string;
};

const Modal = (props: Props) => {
  const { open, onClose, id } = props;
  const fetchTableData = usetableData((state) => state.getApiData);
  const tableDatas = usetableData((state) => state.tableData);

  const filteredData = tableDatas.filter((data) => id === data._id);
  const editTableData = usetableData((state) => state.editTableData);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    editTableData(e.currentTarget.name as any, e.currentTarget.value, id);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const dataFormat = {
      firstName: filteredData[0].firstName,
      lastName: filteredData[0].lastName,
      age: filteredData[0].age,
      phoneNumber: filteredData[0].phoneNumber,
    };

    const res = await postUser(id, dataFormat);
    if (res) onClose();
  };

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
            key={data._id}
          >
            <div className="flex gap-x-2 items-center justify-around">
              <div className="flex flex-col items-start justify-start gap-x-2">
                {" "}
                <div className="text-lg font-medium">First Name</div>
                <input
                  type="text"
                  name="firstname"
                  value={data.firstName}
                  placeholder="Enter your first name"
                  className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-x-2">
                {" "}
                <div className="text-lg font-medium">Last Name</div>
                <input
                  type="text"
                  name="lastname"
                  value={data.lastName}
                  placeholder="Enter your last name"
                  className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <div className="flex items-center justify-around">
              <div className="flex flex-col items-start justify-start gap-x-2">
                {" "}
                <div className="text-lg font-medium">Phone</div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  placeholder="Enter your phone no"
                  className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="flex flex-col items-start gap-x-2 ">
                {" "}
                <label className="text-lg font-medium">Age</label>
                <input
                  type="text"
                  name="age"
                  value={data.age}
                  placeholder="Enter your age"
                  className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
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

export default Modal;
