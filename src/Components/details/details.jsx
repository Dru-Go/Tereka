import React, {useEffect, useReducer} from 'react';
import DetailReducer from '../../Reducer/detailReducer';
import Card from '../items/card_Item';

const INITIALSTATE = {
  id: '',
  name: '',
  type: '',
  followers: 0,
  image: '',
  audios: [],
};

const Details = ({match}) => {
  const [detailState, detail_Dispatcher] = useReducer(
    DetailReducer,
    INITIALSTATE
  );

  console.log(detailState);

  useEffect(() => {
    detail_Dispatcher({type: 'SEARCH', id: match.params.id});
  });

  return (
    <div class="main_details">
      <div class="">
        <div class="ml-20 lister">
          <div class="">
            <img src={detailState.image} class="rounded-full" alt="Narrator" />
          </div>
          <div class="p-16">
            <div class="text-4xl font-helvetica-rounded">
              {detailState.name}
            </div>
            <div class="text-lg italic font-medium">{detailState.type}</div>
            <div class="mt-4 text-sm">{detailState.followers} Followers</div>
            <div class="mt-2 text-sm">{detailState.audios.length} Audios</div>
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
          Published Audios
        </div>
        <div class="mt-5 ml-5 text-2xl flex items-center font-helvetica-rounded text-gray-600">
          {detailState.audios.map(audio => (
            <Card state={audio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
