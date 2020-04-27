import React from 'react';
import Carousel from 'react-grid-carousel';
import Loading from '../../Views/loading/loading';
import Sad from '../error/sad';
import {useQuery} from '@apollo/react-hooks';
import {Link} from 'react-router-dom';
import {POPULAR} from '../../Graphql/query';

// TODO: Add Conditions to only Displayed in the home page
const MidPromo = () => {
  const {loading, error, data} = useQuery(POPULAR);
  if (loading) {
    return <Loading />;
  }
  if (error && !data) {
    console.log('Error in the Popular Views', error);
    return <Sad />;
  }

  return (
    <div class="mid ">
      <div class="ml-10 text-sm text-gray-500 font-medium uppercase">
        Popular
      </div>
      <div class="ml-4 mt-6 h-full mb-10 bg-gray-200">
        <Carousel cols={3} rows={1} gap={2}>
          {data.popular.map((audio) => (
            <Carousel.Item>
              <Item state={audio} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MidPromo;

const Item = ({state}) => (
  <Link to={'/play/' + state.Id}>
    <div class="m-2 flex items-center ">
      <div class="mx-2 zoom-8 border  rounded-lg px-4 py-2 flex">
        <div class="w-1/2 cursor-pointer  -mt-8">
          <img
            class="rounded-lg m-auto w-40 h-56 hover:shadow"
            src={state.ImageURL}
            alt=""
          />
        </div>
        <div class="w-1/2  pl-2">
          <div class="font-helvetica-rounded py-1 cursor-pointer">
            {state.Title}
          </div>
          <div class="text-sm py-1 font-medium cursor-pointer hover:underline">
            Author {state.Author}
          </div>
          <div class="text-sm py-1 font-medium cursor-pointer hover:underline">
            Narrator {state.Narrator}
          </div>

          <div class="text-sm py-1 font-medium cursor-pointer hover:underline">
            Likes {state.Likes}
          </div>
        </div>
      </div>
    </div>
  </Link>
);
