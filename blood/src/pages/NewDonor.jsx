

function NewDonor() {
  return (
    <div className="flex item-center justify-center min-h-screen">
        
        <div className="m-[20px] p-[20px] h-[85vh] w-[410px] shadow-lg">
        <h2 className="font-semibold">New Donor</h2>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Name:</label>
          <input type="text" placeholder="james frunger"
          className="border-2 border-[#555] border-solid p-[10px] w-[380px]"
          />
        </div>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Address:</label>
          <input type="text" placeholder="123 main st, usa"
          className="border-2 border-[#555] border-solid p-[10px] w-[380px]"
          />
        </div>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Tel:</label>
          <input type="text" placeholder="+912 321 232"
          className="border-2 border-[#555] border-solid p-[10px] w-[380px]"
          />
        </div>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Blood Group:</label>
          <input type="text" placeholder="AB+"
          className="border-2 border-[#555] border-solid p-[10px] w-[380px]"
          />
        </div>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Email:</label>
          <input type="text" placeholder="james@gmail.com"
          className="border-2 border-[#555] border-solid p-[10px] w-[380px]"
          />
        </div>

        </div>

        <div className="m-[20px] p-[20px] h-[70vh] w-[410px] shadow-lg ">
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Weight:</label>
          <input type="text" placeholder="55kg"
          className="border-2 border-[#555] border-solid p-[10px] w-[380px]"
          />
        </div>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Date:</label>
          <input type="date" placeholder="12/07/2024"
          className="border-2 border-[#555] border-solid p-[10px] w-[380px]"
          />
        </div>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Desease:</label>
          <input type="text" placeholder="Hypertension"
          className="border-2 border-[#555] border-solid p-[10px] w-[380px]"
          />
        </div>

        <button className="cursor-pointer bg-[#444] text-white p-[10px] w-[379px]">Create</button>
        </div>

    </div>
  )
}

export default NewDonor