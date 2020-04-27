import gql from 'graphql-tag';

/**
 * token : {userID, Image, userType, selectedTheme}
 *
 */

// SIGNUP
const SIGNUP = gql`
  mutation SIGNUP(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    signUp(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      UserId
      Status
      Role
      Token
      Status
    }
  }
`;

// NEW PLAYLIST
const NEW_PLAYLIST = gql`
  mutation NEW_PLAYLIST($uid: String, $name: String!) {
    NewPlaylist(uid: $uid, name: $name) {
      Id
      Name
    }
  }
`;

// ADDS AUDIO TO PLAYLIST
const ADDTO_PLAYLIST = gql`
  mutation ADDTO_PLAYLIST($uid: String, $pid: String, $audioID: String!) {
    AddToPlaylist(uid: $uid, pid: $pid, audioID: $audioID) {
      Id
    }
  }
`;

// ADDS AUDIO TO PLAYLIST
const NEW_SUGGESTION = gql`
  mutation NEW_SUGGESTION(
    $title: String
    $author: String
    $category: String
    $discription: String
  ) {
    suggest(
      title: $title
      author: $author
      category: $category
      discription: $discription
    ) {
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

// Add to Recents
const ADDTORECENTS = gql`
  mutation ADDTORECENTS($uid: String, $nid: String!) {
    AddToRecents(uid: $uid, nid: $nid) {
      Id
      Title
      ImageURL
      Author
      Narrator
      Likes
    }
  }
`;

// Like
const LIKE = gql`
  mutation LIKE($uid: String, $audioId: String!) {
    like(uid: $uid, id: $audioId) {
      Audio {
        id
      }
    }
  }
`;

// Follow
const FOLLOW = gql`
  mutation FOLLOW($uid: String, $follow: String, $audioId: String!) {
    follow(uid: $uid, follow: $follow) {
      User {
        id
      }
    }
  }
`;

// ADDTO FAVORITES
const ADDTO_FAVORITES = gql`
  mutation ADDTO_FAVORITES($uid: String, $id: String!) {
    AddToFavs(uid: $uid, id: $id) {
      Id
      Title
      ImageURL
      Author
      Narrator
      Likes
    }
  }
`;

// REMOVEFROM PLAYLIST
const REMOVE_PLAYLIST = gql`
  mutation REMOVE_PLAYLIST($uid: String, $audioId: String!) {
    removeAudio(uid: $uid, id: $audioId) {
      Audio {
        id
      }
    }
  }
`;

export {
  NEW_PLAYLIST,
  REMOVE_PLAYLIST,
  ADDTO_PLAYLIST,
  ADDTO_FAVORITES,
  SIGNUP,
  ADDTORECENTS,
  LIKE,
  FOLLOW,
  NEW_SUGGESTION,
};
