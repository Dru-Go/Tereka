import React, {useState, useContext} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {AuthContext} from '../../../Context/authContext';

import {Redirect} from 'react-router-dom';

import {ADDTO_FAVORITES} from '../../../Graphql/mutations';
import {FAVORITES} from '../../../Graphql/query';

const styles = {
  inFav:
    'p-2 mt-2 cursor-pointer bg-green-100 text-green-300 zoom-9 hover:text-green-500 rounded-full',
  fav: 'p-2 mt-2 cursor-pointer bg-green-200  text-green-500 rounded-full',
};

const Fav = ({audio}) => {
  const [fav, setFav] = useState(false);

  const context = useContext(AuthContext);

  const [Newfavorites, {error}] = useMutation(ADDTO_FAVORITES, {
    update(cache, {data: {AddToFavs}}) {
      const data = cache.readQuery({
        query: FAVORITES,
        variables: {uid: context.user.UserId.toString()},
      });

      console.log('Cached Query is ', data.fav_Audios);

      cache.writeQuery({
        query: FAVORITES,
        variables: {uid: context.user.UserId.toString()},
        data: {fav_Audios: [...data.fav_Audios, AddToFavs]},
      });
    },
  });

  if (error) {
    console.log('Error addin favorites ', error);
  }

  if (!context.user) {
    console.log('User has not signed in');
    return <Redirect to="/login" />;
  }

  const handleClick = () => {
    setFav(!fav);

    if (!fav && audio !== 'Current' && context.user) {
      Newfavorites({
        variables: {uid: context.user.UserId.toString(), id: audio},
      });
    }
  };

  return (
    <div className={fav ? styles.fav : styles.inFav} onClick={handleClick}>
      <svg
        width="25.886"
        class="fill-current"
        height="26.307"
        viewBox="0 0 25.886 26.307"
      >
        <g transform="translate(-2 -2)">
          <circle
            cx="1.973"
            cy="1.973"
            r="1.973"
            transform="translate(17.487 9.892)"
          />
          <circle
            cx="1.973"
            cy="1.973"
            r="1.973"
            transform="translate(8.453 9.892)"
          />
          <path d="M14.93,2A13.044,13.044,0,0,0,2,15.154,13.044,13.044,0,0,0,14.93,28.307,13.057,13.057,0,0,0,27.886,15.154,13.057,13.057,0,0,0,14.93,2Zm.013,23.677A10.437,10.437,0,0,1,4.589,15.154,10.437,10.437,0,0,1,14.943,4.631,10.437,10.437,0,0,1,25.3,15.154,10.437,10.437,0,0,1,14.943,25.677Zm0-5.261a5.159,5.159,0,0,1-4.465-2.631H8.316a7.071,7.071,0,0,0,13.254,0H19.409a5.159,5.159,0,0,1-4.465,2.631Z" />
        </g>
      </svg>
    </div>
  );
};

export default Fav;
