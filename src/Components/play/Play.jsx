import React, {useContext, useState, useEffect} from 'react';
import PlayBar from './playBar';
import Play from './controls/play';
import Pause from './controls/pause';
import Loading from '../../Views/loading/loading';
import Sad from '../error/sad';
import {PLAY_AUDIOS, RECENTS} from '../../Graphql/query';
import {ADDTORECENTS} from '../../Graphql/mutations';
import {AudioContext} from '../../Context/audioContext';
import {AuthContext} from '../../Context/authContext';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {Link} from 'react-router-dom';
import {Howl, Howler} from 'howler';
import Fav from './controls/addToFav';
import AddToPlaylist from './controls/addToPlaylist';
import usePageTitle from '../../Hooks/usePageTitle';
import forward from './svg/forwardP.svg';
import prev from './svg/prevP.svg';
import back from './svg/back.svg';

const styles = {
  inFav:
    'p-2 mt-2 cursor-pointer bg-green-100 text-green-300 zoom-9 hover:text-green-500 rounded-full',
  fav: 'p-2 mt-2 cursor-pointer bg-green-200  text-green-500 rounded-full',
  author:
    'pt-4 text-center font-bold  cursor-pointer hover:underline text-color capitalize',
  narrator: 'font-medium',
  title: 'uppercase font-helvetica-rounded font-bold text-3xl',
};

const Player = ({match}) => {
  const [signed, setSigned] = useState(true);
  const [AddToRecents] = useMutation(ADDTORECENTS, {
    update(cache, {data: {NewRecent}}) {
      const data = cache.readQuery({
        query: RECENTS,
        variables: {uid: context.user.UserId.toString()},
      });

      console.log('Cached Query is ', data.recents);

      cache.writeQuery({
        query: RECENTS,
        variables: {uid: context.user.UserId.toString()},
        data: {recents: [NewRecent, ...data.recents]},
      });
    },
  });
  const context = useContext(AuthContext);
  const audioId = match.params.id;
  const [load, setLoad] = useState(false);
  const {loading, error, data} = useQuery(PLAY_AUDIOS, {
    variables: {id: audioId},
  });

  const [
    curTime,
    ,
    duration,
    ,
    playing,
    setPlaying,
    curPlay,
    setCurPlay,
    sound,
    setSound,
  ] = useContext(AudioContext);

  useEffect(() => {
    console.log('Audio ID is ', audioId);

    if (!context.user) {
      setSigned(false);
    }
    if (audioId !== ':id') {
      if (data && data.play_Audio) {
        setCurPlay(data.play_Audio);
        sound.stop();
        setSound(
          new Howl({
            src: [data.play_Audio.Url],
          })
        );
        sound.html5 = true;
        setPlaying(!playing);
        if (context.user) {
          AddToRecents({
            variables: {
              uid: context.user.UserId.toString(),
              nid: data.play_Audio.Id,
            },
          });
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  sound.once('load', () => {
    setLoad(true);
  });

  sound.on('play', () => {
    setLoad(false);
  });

  sound.on('end', function () {
    setPlaying(false);
  });

  Howler.volume(0.7);

  usePageTitle(
    data && data.play_Audio
      ? data.play_Audio.Title
      : curPlay
      ? curPlay.Title
      : 'Tereka AudioBook Player'
  );

  if (loading && !data) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!curPlay) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) {
    console.log(error);
    return (
      <div>
        <Sad />
      </div>
    );
  }

  return (
    <>
      <div>
        <div class="p-10 flex items-center justify-between">
          <div>
            <Link to="/">
              <div class="p-4 hover:bg-green-200 rounded-full">
                <img src={back} alt="backSVG" />
              </div>
            </Link>
          </div>
          <div className={styles.narrator}>Narrator: {curPlay.Narrator}</div>
        </div>
        <div class="">
          <img class="m-auto w-1/4 " src={curPlay.ImageURL} alt="" />
        </div>
      </div>
      <div class="play border">
        <div class=" flex items-start justify-around">
          <Fav audio={audioId} />
          <div class="">
            <div className={styles.title}>{curPlay.Title}</div>
            <div className={styles.author}>{curPlay.Author}</div>
          </div>
          {/* Here Onclick we change the fill to another color*/}
          <AddToPlaylist audioID={curPlay.Id} />
        </div>

        {/* playBar */}
        {load ? (
          <div class="m-auto">
            <Loading />
          </div>
        ) : null}
        {!signed ? (
          <div class="m-auto">
            <div class="text-sm font-medium text-red-800">Please Signin to Play this Audio</div>
          </div>
        ) : null}
        <PlayBar curTime={curTime} duration={duration} />
        <div class="flex items-center mt-10">
          <div class="flex items-center m-auto w-70p justify-center">
            <div class="cursor-pointer">
              <img src={prev} alt="prevSVG" />
            </div>
            {playing ? (
              <Play setPlay={setPlaying} />
            ) : (
              <Pause setPlay={setPlaying} />
            )}

            <div class="cursor-pointer">
              <img src={forward} alt="forwardSVG" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
