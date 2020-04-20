import gql from 'graphql-tag';

const ALL_AUDIO_ITEMS = gql`
  query ALL_AUDIO_ITEMS {
    all_Audios {
      Id
      Title
      ImageURL
      Type
      Author
      Narrator
      Likes
    }
  }
`;

const ALL_PLAYLISTS = gql`
  query ALL_PLAYLISTS($uid: String!) {
    all_Playlists(uid: $uid) {
      Id
      Name
    }
  }
`;

const PLAYLISTS_AUDIOS = gql`
  query PLAYLISTS_AUDIOS($uid: String!, $pid: String!) {
    playlist_Audios(uid: $uid, pid: $pid) {
      Id
      Title
      ImageURL
      Author
      Narrator
      Likes
      Url
    }
  }
`;

const SEARCH_AUDIO = gql`
  query SEARCH_AUDIO($title: String) {
    search_Audios(title: $title) {
      Id
      Title
      ImageURL
      Author
      Narrator
    }
  }
`;
const SEARCH_SUGGESTIONS = gql`
  query SEARCH_SUGGESTIONS($title: String) {
    search_Suggestion(title: $title) {
      Id
      Title
      Author
      Likes
      Category
      Status
    }
  }
`;

const SUGGESTIONS = gql`
  query SUGGESTIONS {
    suggestions {
      Id
      Title
      Likes
      Author
      Category
      Discription
      Status
      CreatedAt
    }
  }
`;

// Audio for playing
const PLAY_AUDIOS = gql`
  query PLAY_AUDIOS($id: String!) {
    play_Audio(id: $id) {
      Id
      Title
      ImageURL
      Author
      Narrator
      Likes
      Url
    }
  }
`;

const FAVORITES = gql`
  query FAVORITES($uid: String!) {
    fav_Audios(uid: $uid) {
      Id
      Title
      ImageURL
      Author
      Narrator
      Likes
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
  SUGGESTIONS,
  SEARCH_SUGGESTIONS,
};
