import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import usetableData from "../../app/tableData";
import AddUser from "../../api/addUser";

type Props = { open: boolean; onClose: () => void };

const AddUserModal = (props: Props) => {
  const { open, onClose } = props;
  const fetchTableData = usetableData((state) => state.getApiData);
  const tableDatas = usetableData((state) => state.tableData);

  const [userData, setUserData] = useState({
    age: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await AddUser(userData);
    if (res) onClose();
  };

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
                value={userData?.firstName}
                placeholder="Enter your first name"
                className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    firstName: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-x-2">
              {" "}
              <div className="text-lg font-medium">Last Name</div>
              <input
                type="text"
                name="lastname"
                value={userData?.lastName}
                placeholder="Enter your last name"
                className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    lastName: e.currentTarget.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex gap-x-8 items-center justify-around">
            <div className="flex flex-col items-start justify-start gap-x-2">
              {" "}
              <div className="text-lg font-medium">Phone</div>
              <input
                type="tel"
                name="phoneNumber"
                value={userData?.phoneNumber}
                placeholder="Enter your phone no"
                className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    phoneNumber: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col items-start gap-x-2 ">
              {" "}
              <div className="text-lg font-medium">Age</div>
              <input
                type="text"
                name="age"
                value={userData?.age}
                placeholder="Enter your age"
                className="px-6 py-2 rounded-md bg-slate-800 border border-gray-600 shadow-md placeholder:text-gray-300"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    age: e.currentTarget.value,
                  })
                }
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
      </div>
    </>
  );
};

export default AddUserModal;
