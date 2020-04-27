import React, {useContext} from 'react';
import ErrorPage from '../error/error';
import {useQuery} from '@apollo/react-hooks';
import {RECENTS} from '../../Graphql/query';
import Loading from '../../Views/loading/loading';
import {AuthContext} from '../../Context/authContext';
import Card from '../items/card_Item';

const RecentlyPlayed = () => {
  const context = useContext(AuthContext);

  const {loading, error, data} = useQuery(RECENTS, {
    variables: {uid: context.user.UserId.toString()},
    skip: context.user === null,
  });

  if (!context.user) {
    console.log('User has not signed in');
    return (
      <div class="mt-32 bg-gray-100">
        <ErrorPage status="401" />
      </div>
    );
  }

  if (loading) {
    return (
      <div class="float-right">
        <Loading />
      </div>
    );
  }

  if (error) {
    console.log(error);
    return (
      <div class="mt-32 bg-gray-100">
        <ErrorPage status="400" />
      </div>
    );
  }

  if (!data || !data.recents || data.recents.length === 0) {
    console.log('Data from the recently played', data);
    return (
      <div class="mt-32 bg-gray-100">
        <ErrorPage status="404" />
      </div>
    );
  }

  return (
    <div>
      <div class="text-xl ml-6 font-helvetica-rounded text-gray-800">
        Recently Played
      </div>
      <div class="grid grid-cols-3 gap-5 mt-8 items-center">
        {data.recents.map((audio) => (
          <Card state={audio.Narration} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
