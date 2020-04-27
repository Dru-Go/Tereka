import React from 'react';
import ErrorPage from '../error/error';
import {withRouter} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {NARRATOR_DETAILS} from '../../Graphql/query';
import Loading from '../../Views/loading/loading';
import Sad from '../error/sad';
import Card from '../items/card_Item';

// Displays only Narrators details
const Details = ({match}) => {
  const {loading, error, data} = useQuery(NARRATOR_DETAILS, {
    variables: {id: match.params.id},
  });

  if (error) {
    console.log('Error in the Favorites ', error);
    return (
      <div>
        <Sad />
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!data || !data.details_Narrator) {
    return (
      <div class="mt-32">
        <ErrorPage status="401" />
      </div>
    );
  }
  return (
    <div class="main_details">
      <div class="">
        <div class="ml-20 lister">
          <div class="">
            <img src={data.details_Narrator.User.ImageURL} class="rounded-full" alt="Narrator" />
          </div>
          <div class="p-16">
            <div class="text-2xl font-helvetica-rounded">
              {data.details_Narrator.User.Name}
            </div>
            <div class="text-lg italic font-medium">Narrator</div>
            <div class="mt-4 text-sm">{data.details_Narrator.Followers} Followers</div>
            <div class="mt-2 text-sm">{data.details_Narrator.Audios.length} Published Audios</div>
          </div>
          <div class="flex mt-64">
            {/* TODO onClick change the text to following */}
            <div class="mx-2  text-sm cursor-pointer hover:underline py-2 px-3 text-center font-medium text-padd-color rounded-full">
              Follow
            </div>
            {/* TODO onClick open a model that includes an input for searching and a button to add a new suggestion  */}
            <div class=" text-sm w-32 p-2 text-center hover:underline font-medium cursor-pointer text-padd-color rounded-full">
              Suggest Book
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="my-5 ml-8 font-helvetica-rounded text-gray-500">
          Published Audios
        </div>
        <div class="mt-5 ml-5 text-2xl grid grid-cols-3 gap-5 font-helvetica-rounded text-gray-600">
          {data.details_Narrator.Audios.map(audio => (
            <Card state={audio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Details);
