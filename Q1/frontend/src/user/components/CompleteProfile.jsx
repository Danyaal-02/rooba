import React from "react";

export default function CompleteProfile() {
  return (
    <div>
      <div className="w-full p-4 border-b-4 border-[#D9D9D9] ">
        <div className="flex gap-10">
          <label class="checkbox style-g">
            <input type="checkbox" />
            <div class="checkbox__checkmark"></div>
          </label>

          <h1 className="text-xl font-bold">Complete Profile</h1>
        </div>
        <div className="flex justify-end mt-10 ">
          <button className="px-10 py-4 text-white bg-blue-500">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
}
