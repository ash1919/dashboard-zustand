import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import usetableData from "../app/tableData";
import DeleteModal from "./common/DeleteModal";
import Modal from "./common/Modal";

const Tabel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tableId, setTableId] = useState(0);
  const [isClose, setIsClose] = useState(false);
  const fetchTableData = usetableData((state) => state.getApiData);
  const tableDatas = usetableData((state) => state.tableData);

  const handleClick = (id: number) => {
    setIsOpen(true);
    setTableId(id);
  };

  useEffect(() => {
    fetchTableData();
  }, []);
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-6 text-white">
        <div>
          <table>
            <thead className="border-b-2 border-gray-400">
              <tr>
                <th className="py-2 px-8">Sr.No</th>
                <th className="py-2 px-8">First Name</th>
                <th className="py-2 px-8">Last Name</th>
                <th className="py-2 px-8">Age</th>
                <th className="py-2 px-8">Email</th>
                <th className="py-2 px-8">Contact No</th>
                <th className="py-2 px-8">Edit</th>
                <th className="py-2 px-8">Delete</th>
              </tr>
            </thead>
            {tableDatas.map((data) => (
              <tbody className="border-b border-gray-400" key={data._id}>
                <tr>
                  <td className="py-4 px-8">{data._id}</td>
                  <td className="py-4 px-8">{data.firstname}</td>
                  <td className="py-4 px-8">{data.lastname}</td>
                  <td className="py-4 px-8">{data.age}</td>
                  <td className="py-4 px-8">{data.email}</td>
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
                      onClick={() => setIsClose(true)}
                    >
                      <MdDeleteForever className="text-xl" />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <Modal open={isOpen} onClose={() => setIsOpen(false)} id={tableId} />
          <DeleteModal open={isClose} onClose={() => setIsClose(false)} />
        </div>
      </div>
    </section>
  );
};

export default Tabel;
