import React from 'react';

const details = () => (
  <div class="main_details">
    <div class="border-b ">
      <div class="ml-20 lister">
        <div class="">
          <img src="../avatar.png" class="rounded-full" alt="Narrator" />
        </div>
        <div class="p-16">
          <div class="text-4xl font-helvetica-rounded">Ralph Loren</div>
          <div class="text-lg italic font-medium">Narrator</div>
          <div class="mt-4 text-sm">28 Followers</div>
          <div class="mt-2 text-sm">12 Audios</div>
        </div>
        <div class="flex mt-64">
          {/* TODO onClick change the text to following */}
          <div class="mx-2  py-1 cursor-pointer px-4 text-padd-color rounded-full">
            Follow
          </div>
          {/* TODO onClick open a model that includes an input for searching and a button to add a new suggestion  */}
          <div class=" py-1 px-4 cursor-pointer text-padd-color rounded-full">
            Suggest Book
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="my-5 ml-8 text-2xl font-helvetica-rounded text-gray-600">
        Published Narrations
      </div>
      <div class="my-5 ml-5 text-2xl font-helvetica-rounded text-gray-600">
        ...
      </div>
    </div>
  </div>
);

export default details;