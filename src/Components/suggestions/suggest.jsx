import React from 'react';

// TODO here manage the state of the Suggestion Box

const suggestionBox = () => (
  <div class="px-10 py-3 bord">
    <div class="flex items-center justify-between">
      <div class="text-center text-xl font-medium font-helvetica-rounded m-auto">
        Trending suggestion
      </div>
      <div class="p-2 shadow hover:shadow-none cursor-pointer hover:bg-gray-500 border border-gray-300 bg-gray-300 text-lg font-medium rounded-lg">
        New Suggestions
      </div>
    </div>
    <Suggestions />
  </div>
);

const Suggestions = () => (
  <div class="pt-5">
    <Suggestion />
  </div>
);

const Suggestion = () => (
  <div class="w-1/6 py-4 shadow-lg flex border rounded-lg  items-center px-4">
    <div class="">
      <div class="text-gray-700 text-center text-lg py-1 font-medium font-helvetica-rounded">
        Anna's Diary
      </div>
      <div class="text-gray-700 text-sm text-center pt-1">by Ralph Loren</div>
      <div class="text-xs text-center pt-2">32 Likes</div>
      <div class="w-64 uppercase hover:font-medium cursor-pointer pt-2 text-center">
        Like
      </div>
    </div>
  </div>
);

export default suggestionBox;
