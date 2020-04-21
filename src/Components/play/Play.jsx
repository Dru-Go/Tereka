import React, {useContext} from 'react';
import './play_style.css';
import PlayBar from './playBar';
import Play from './controls/play';
import Pause from './controls/pause';
import Loading from '../../Views/loading/loading';
import Sad from '../error/sad';
import {PLAY_AUDIOS} from '../../Graphql/query';
import {AudioContext} from '../../Context/audioContext';
import {useQuery} from '@apollo/react-hooks';
import {Howl} from 'howler';
import Fav from './controls/addToFav';
import AddToPlaylist from './controls/addToPlaylist';
import usePageTitle from '../../Hooks/usePageTitle';
import {useEffect} from 'react';

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
  const audioId = match.params.id;

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
    if (audioId !== 'current') {
      if (data && data.play_Audio) {
        setCurPlay(data.play_Audio);
        sound.pause();
        setSound(
          new Howl({
            src: [data.play_Audio.Url],
          })
        );
        sound.html5 = true;
        setPlaying(!playing);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  usePageTitle(data && data.play_Audio ? data.play_Audio.Title : curPlay.Title);

  if (loading && !data) {
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
      <div class="bord play-img border-gray-400">
        <div class="p-10 flex items-center justify-between">
          <div>
            <div class="p-4 rounded-full">
              <svg width="14" height="14" viewBox="0 0 16 16">
                <path
                  class="aw "
                  d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z"
                  transform="translate(-4 -4)"
                />
              </svg>
            </div>
          </div>
          <div className={styles.narrator}>Narrator: {curPlay.Narrator}</div>
        </div>
        <div class="">
          <img class="m-auto w-1/4 " src={curPlay.ImageURL} alt="" />
        </div>
      </div>
      <div class="bord play absolute w-80p bottom-0 border">
        <div class="bord  flex items-start justify-around">
          <Fav audio={audioId} />
          <div class="">
            <div className={styles.title}>{curPlay.Title}</div>
            <div className={styles.author}>{curPlay.Author}</div>
          </div>
          {/* Here Onclick we change the fill to another color*/}
          <AddToPlaylist audioID={curPlay.Id} />
        </div>

        {/* playBar */}
        <PlayBar curTime={curTime} duration={duration} />
        <div class="bord flex items-center mt-16">
          <div class="flex items-center ml-40 w-70p justify-center">
            <div class="cursor-pointer">
              <svg class="w-8 h-8 b8uyt" viewBox="0 0 17.5 12">
                <path
                  d="M11,18V6L2.5,12Zm.5-6L20,18V6Z"
                  transform="translate(-2.5 -6)"
                />
              </svg>
            </div>
            {playing ? (
              <Play setPlay={setPlaying} />
            ) : (
              <Pause setPlay={setPlaying} />
            )}
            <div class="cursor-pointer">
              <svg class="w-8 h-8 b8uyt" viewBox="0 0 17.5 12">
                <path
                  d="M4,18l8.5-6L4,6ZM13,6V18l8.5-6Z"
                  transform="translate(-4 -6)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
