import React from 'react';

const changePassword = () => (
  <div class="mt-20 ml-16">
    <div class="text-3xl font-thin ">Change Your Account Password</div>
    <div class="p-2 bg-white mt-6 rounded-lg border w-1/6">
      <input
        type="password"
        class="focus:outline-none text-sm text-gray-800 w-full bg-transparent"
        placeholder="Old Password"
        name="old"
      />
    </div>
    <div class="p-2 bg-white mt-6 rounded-lg border w-1/6">
      <input
        type="password"
        class="focus:outline-none text-sm text-gray-800 w-full bg-transparent"
        placeholder="Create Password"
        name="new"
      />
    </div>

    <div class="text-xs text-gray-500 mt-2">
      <div>Warning: Information is required</div>
      <div>Warning: Password must be greater than 8 charactors long</div>
    </div>
    <div class="p-2 bg-white mt-6 rounded-lg border w-1/6">
      <input
        type="password"
        class="focus:outline-none text-sm text-gray-800 w-full bg-transparent"
        placeholder="Create Password"
        name="confirm"
      />
    </div>
    <div class="rounded-lg font-medium w-1/6 uppercase bg-transparent hover:bg-green-200 text-green-800 border mt-10 cursor-pointer px-2 py-1 text-xs text-center">
      save
    </div>
  </div>
);

export default changePassword;
