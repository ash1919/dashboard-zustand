import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import AddUser from "../api/addUser";
import usetableData from "../app/tableData";
import AddUserModal from "./common/AddUserModal";
import DeleteModal from "./common/DeleteModal";
import Modal from "./common/Modal";

const Tabel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tableId, setTableId] = useState(0);
  const [isClose, setIsClose] = useState(false);
  const [addUserModal, setAddUserModal] = useState(false);
  const fetchTableData = usetableData((state) => state.getApiData);
  const tableDatas = usetableData((state) => state.tableData);

  const handleClick = (id: number) => {
    setIsOpen(true);
    setTableId(id);
  };

  useEffect(() => {
    fetchTableData();
  }, [isClose, tableDatas]);

  return (
    <section>
      <div className="container mx-auto max-w-7xl px-6 text-white">
        <div className="pb-10 flex items-start justify-between">
          <button
            type="button"
            className="px-5 py-2 bg-yellow-500 text-black rounded-lg"
            onClick={() => setAddUserModal(true)}
          >
            Add user
          </button>
          <button
            type="button"
            className="px-3 py-1 border border-white rounded-md"
          >
            filter
          </button>
        </div>
        <div>
          <table className="w-full">
            <thead className="border-b-2 border-gray-400">
              <tr>
                <th className="py-2 px-8">Sr.No</th>
                <th className="py-2 px-8">First Name</th>
                <th className="py-2 px-8">Last Name</th>
                <th className="py-2 px-8">Age</th>
                <th className="py-2 px-8">Contact No</th>
                <th className="py-2 px-8">Edit</th>
                <th className="py-2 px-8">Delete</th>
              </tr>
            </thead>
            {tableDatas &&
              tableDatas
                .sort((data1: any, data2: any) => {
                  const data1Title = data1?.firstName?.toLowerCase();
                  const data2Title = data2?.firstName?.toLowerCase();
                  return data2Title > data1Title
                    ? -1
                    : data1Title > data2Title
                    ? 1
                    : 0;
                })
                .map((data) => (
                  <tbody className="border-b border-gray-400" key={data._id}>
                    <tr>
                      <td className="py-4 px-8">{data._id}</td>
                      <td className="py-4 px-8">{data?.firstName}</td>
                      <td className="py-4 px-8">{data?.lastName}</td>
                      <td className="py-4 px-8">{data.age}</td>
                      <td className="py-4 px-8">{data.phoneNumber}</td>

                      <td className="py-4 px-8">
                        <button
                          className="cursor-pointer edit-modal"
                          onClick={() => handleClick(data._id)}
                        >
                          <FaEdit />
                        </button>
                      </td>
                      <td className="py-4 px-8">
                        {" "}
                        <button
                          className="cursor-pointer"
                          onClick={() => {
                            setIsClose(true);
                            setTableId(data._id);
                          }}
                        >
                          <MdDeleteForever className="text-xl" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
          </table>
          <Modal open={isOpen} onClose={() => setIsOpen(false)} id={tableId} />
          <DeleteModal
            open={isClose}
            onClose={() => setIsClose(false)}
            id={tableId}
          />
          <AddUserModal
            open={addUserModal}
            onClose={() => setAddUserModal(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default Tabel;
