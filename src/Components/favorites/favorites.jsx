import React, {useState, useContext} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {FAVORITES} from '../../Graphql/query';
import Loading from '../../Views/loading/loading';
import {AuthContext} from '../../Context/authContext';
import {Redirect} from 'react-router-dom';
import Sad from '../error/sad';
import Card from './card_Item';

// FAVORITES
// // TODO Remove Favorite
// // TODO Select Operation

const styles = {
  toggled:
    'text-center p-2 font-medium rounded-lg h-10 mr-3 bg-red-300 cursor-pointer',
  UnToggled:
    'text-center p-2 font-medium rounded-lg h-10 mr-3 bg-gray-200 hover:bg-red-200 cursor-pointer',
};

const Favorites = () => {
  const context = useContext(AuthContext);

  const [toggleRemove, setToggleRemove] = useState(false);

  const {loading, error, data} = useQuery(FAVORITES, {
    variables: {uid: context.user.UserId.toString()},
    skip: context.user === null,
  });

  if (!context.user) {
    console.log('User has not signed in');
    return <Redirect to="/login" />;
  }

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

  if (!data || !data.fav_Audios) {
    return (
      <div>
        <Sad />
      </div>
    );
  }

  return (
    <>
      <div>
        <div class="flex justify-between items-center">
          <div class="text-xl ml-6 font-helvetica-rounded text-gray-800">
            Favorites
          </div>
          <div
            className={toggleRemove ? styles.toggled : styles.UnToggled}
            onClick={() => setToggleRemove(!toggleRemove)}
          >
            Remove
          </div>
        </div>
        <div class="grid grid-cols-3 gap-5 mt-8 items-center">
          {data.fav_Audios.map((state) => (
            <>
              <Card state={state} toggleRemove={toggleRemove} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
