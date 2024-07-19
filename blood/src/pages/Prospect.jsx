function Prospect() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="m-[20px] h-[80vh] w-[450px] shadow-lg">
        <h2 className="font-semibold m-[30px]">Prospect</h2>
        <ul className="m-[30px]">
          <li className="mt-[10px]">
            <strong>Name:</strong> James kruger
          </li>
          <li className="mt-[10px]">
            <strong>Address:</strong> 123 main st, USA
          </li>
          <li className="mt-[10px]">
            <strong>Tel:</strong> +123 890 654
          </li>
          <li className="mt-[10px]">
            <strong>Blood type:</strong> AB+
          </li>
          <li className="mt-[10px]">
            <strong>Desease:</strong> None
          </li>
          <li className="mt-[10px]">
            <strong>Date:</strong> 12/07/2024
          </li>
          <li className="mt-[10px]">
            <strong>Weight:</strong> 50Kg
          </li>
          <li className="mt-[10px]">
            <strong>Status:</strong> Pending
          </li>
        </ul>
        <span className="block m-[10px]">Do you want Approve James to Donor</span>
        <button className="m-[10px] bg-red-400 p-[5px] cursor-pointer w-[150px] text-white rounded-[5px]">Approve</button>
      </div>
    </div>
  );
}

export default Prospect;
