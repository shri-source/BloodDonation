import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Prospects() {

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "bloodType", headerName: "BloodType", width: 130 },
    { field: "disease", headerName: "Disease", width: 90 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: () => {
        return (
          <>
            <Link to={`/prospect/123`}>
              <button className="bg-gray-400 text-white cursor-pointer p-3">
                Approve
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: () => {
        return (
          <>
            <FaTrash className="text-red-500 m-2 cursor-pointer" />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id:1,
      name:"john doe",
      address:"123 pi nine, city, USA",
      bloodType:"O-",
      disease:"Asthma"
    },
    {
      id:2,
      name:"jane smith",
      address:"831 pi nine, nework, USA",
      bloodType:"A-",
      disease:"thais"
    },
    {
      id:3,
      name:"David miller",
      address:"092 pi nine, afrika, USA",
      bloodType:"B+",
      disease:"Heart"
    },
    {
      id:4,
      name:"Eion smith",
      address:"784 pi nine, city, south",
      bloodType:"AB",
      disease:"shoulder"
    },
    {
      id:5,
      name:"morgan doe",
      address:"131 pi nine, city, canada",
      bloodType:"B+",
      disease:"stomach"
    },
    {
      id:6,
      name:"john smith",
      address:"23 pi nine, city, moni",
      bloodType:"A+",
      disease:"head"
    },
    {
      id:7,
      name:"Lately doe",
      address:"19 pi nine, city, canada",
      bloodType:"AB+",
      disease:"footay"
    },
    {
      id:8,
      name:"Sonum milet",
      address:"20 pi yut, city, uprop",
      bloodType:"AB+",
      disease:"nelson"
    },
    
  ]
  return (
    <div className="w-[75vw]">
    <div className="flex items-center justify-between m-[30px]">
      <h1 className="m-[20px] text-[20px]">All Donors</h1>
    </div>

    <div className="m-[30px]">
      <DataGrid rows = {rows} columns={columns} checkboxSelection />
    </div>
  </div>
);
}

export default Prospects