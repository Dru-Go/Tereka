import gql from 'graphql-tag';

/**
 * token : {userID, Image, userType, selectedTheme}
 *
 */

// LOGIN
const SIGNIN_USERMUTATION = gql`
  mutation SIGNIN_USERMUTATION($email: String!, $password: String!) {
    signInUser(email: {email: $email, password: $password}) {
      token
      user {
        id
      }
      theme
    }
  }
`;

// SIGNUP
const SIGNUP_USERMUTATION = gql`
  mutation SIGNUP_USERMUTATION(
    $name: String!
    $email: String!
    $password: String!
    $theme: String
  ) {
    signUpUser(
      values: {name: $name, email: $email, password: $password, theme: $theme}
    ) {
      token
      user {
        id
      }
    }
  }
`;

// Get Audios
const ALL_AUDIO_ITEMS = gql`
  query ALL_AUDIO_ITEMS {
    Audios {
      id
      title
      image
      author
      narrator
      likes
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

// ADDTO FAVORITES
const ADDTO_FAVORITES = gql`
  mutation ADDTO_FAVORITES($audioId: String!) {
    addTo_Favorites(id: $audioId) {
      Audio {
        id
      }
    }
  }
`;

const ALL_PLAYLISTS = gql`
  query ALL_PLAYLISTS {
    Playlists {
      id
      name
    }
  }
`;

const PLAYLISTS_AUDIOS = gql`
  query PLAYLISTS_AUDIOS($pid: String!) {
    Playlist(id: $pid) {
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

// ADDS AUDIO TO PLAYLIST
const ADDTO_PLAYLIST = gql`
  mutation ADDTO_PLAYLIST($audioId: String!) {
    addTo_Playlist(id: $audioId) {
      Audio {
        id
      }
    }
  }
`;

// REMOVEFROM PLAYLIST
const REMOVE_PLAYLIST = gql`
  mutation REMOVE_PLAYLIST($audioId: String!) {
    removeAudio(id: $audioId) {
      Audio {
        id
      }
    }
  }
`;

// NEW PLAYLIST
const NEW_PLAYLIST = gql`
  mutation NEW_PLAYLIST($name: String!) {
    newPlaylist(name: $name) {
      id
      name
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
  NEW_PLAYLIST,
  NARRATOR_DETAILS,
  AUTHOR_DETAILS,
  REMOVE_PLAYLIST,
  ADDTO_PLAYLIST,
  PLAYLISTS_AUDIOS,
  ALL_PLAYLISTS,
  PLAY_AUDIOS,
  FAVORITES,
  ADDTO_FAVORITES,
  SIGNIN_USERMUTATION,
  SIGNUP_USERMUTATION,
  ALL_AUDIO_ITEMS,
};
