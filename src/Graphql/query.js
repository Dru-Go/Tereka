import gql from 'graphql-tag';

const ALL_AUDIO_ITEMS = gql`
    query ALL_AUDIO_ITEMS {
      all_Audios {
        Id
        Title
        ImageURL
        Author
        Narrator
        Likes
        Url
        Type
        Duration
        Published
        CreatedAt
      }
    }
  `;


// Audio for playing
const PLAY_AUDIOS = gql`
  query PLAY_AUDIOS($id: String!) {
    PlayAudio(id: $id) {
      Audios {
        id
        title
        image
        url
        author
        narrator
        likes
      }
    }
  }
`;

const FAVORITES = gql`
  query FAVORITES($uid: String!) {
    Favs(uid: $uid) {
      Audios {
        id
        title
        image
        author
        narrator
        likes
      }
    }
  }
`;

const ALL_PLAYLISTS = gql`
  query ALL_PLAYLISTS($uid: String!) {
    Playlists(uid: $uid) {
      id
      name
    }
  }
`;

const PLAYLISTS_AUDIOS = gql`
  query PLAYLISTS_AUDIOS($uid: String!, $pid: String!) {
    Playlist(uid: $uid, pid: $pid) {
      Audios {
        id
        title
        image
        type
        author
        narrator
        likes
      }
    }
  }
`;

// Author Details
const AUTHOR_DETAILS = gql`
  query AUTHOR_DETAILS($id: String!) {
    name
    image
    type
    followers
    published_books
  }
`;

// Narrator Details
const NARRATOR_DETAILS = gql`
  query NARRATOR_DETAILS($id: String!) {
    name
    image
    type
    followers
    published_books
  }
`;

/**
 * searchKey will be a audio title
 *
 */
const SEARCH_AUDIO = gql`
  query SEARCH_AUDIO($searchKey: String!) {
    Audios(filter: {title: $searchKey}) {
      id
      image
      title
      author
      narrator
      likes
    }
  }
`;

/**
 * searchKey will be a name
 *
 */
const SEARCH_AUTHOR = gql`
  query SEARCH_AUTHOR($searchKey: String!) {
    Authors(filter: {name: $searchKey}) {
      id
      image
      name
      followers
      published_books
    }
  }
`;

/**
 * searchKey will be a name
 *
 */
const SEARCH_NARRATOR = gql`
  query SEARCH_NARRATOR($searchKey: String!) {
    Narrators(filter: {name: $searchKey}) {
      id
      image
      name
      followers
      published_audios
    }
  }
`;

export {
  SEARCH_AUDIO,
  SEARCH_NARRATOR,
  SEARCH_AUTHOR,
  NARRATOR_DETAILS,
  AUTHOR_DETAILS,
  PLAYLISTS_AUDIOS,
  ALL_PLAYLISTS,
  PLAY_AUDIOS,
  FAVORITES,
  ALL_AUDIO_ITEMS,
};
