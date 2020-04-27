<center>
    <img src="./public/avatar.png"  />
</center>


<center>

# Tereka Audiobook Player
</center>


## What is an Audiobook?
is a recording of a book or other work being read aloud. 

## What is an Narration?
is an audio recorded by narrators discribing action or process of a story.

## Vision 
To develop and provide a centralized platform that will entertain the needs of many literature enthusiasts by giving them a platform that they can go to in order to get different audio pieces of literature



## Status
Tereka has been in development since March 4 2017

## Docs

  - [Objectives](#objective)
  - [Codebase](#codebase)
    - [Technologies](#technologies)
    - [Folder Structure](#folder-structure)
    - [Code Style](#code-style)
  - [First time setup](#first-time-setup)
  - [Running the app locally](#running-the-app-locally)
- [Technical](docs/)
  - [Deployment](docs/deployments.md)
 


## Objectives

- [x] Map and illustrate design   
- [x] Basic Autentication 
- [x] Requesting Narration
- [ ] Change Account Information
- [x] Adding Narration to favorites
- [ ] Like/Dislike/Comment on a Narration
- [x] Add to favorites
- [x] Search for a narration
- [x] Play narration
- [ ] Subscribe to a narrator
- [x] View details of a Narrator
- [x] View most requested narrations
- [x] View most popular narrations
- [x] Make and add narration to personal playlists
- [ ] Search for Narrators or Authors

[Audio Library]: https://github.com/goldfire/howler.js/ 
[**Back End**]: https://github.com/goldfire/howler.js/ 
[iyossias]: iyossias777@gmail.com 

## Codebase

#### Technologies
- **Full-stack JavaScript**: We use Node.js to power our servers, and React to power our frontend apps. Almost all of the code you'll touch in this codebase will be JavaScript.

- **Front End**
	- React 
	- Apollo
	- Howler ([Audio Library])

- [**Back End**] by [Iyossias] 
	- Typescript
	- ...

#### Folder structure
<diV class="flex items-center justify-between">
<div>

Client 

```sh
tereka/
├── Components  # Individual Compoenents 
├── Context     # Contexts
├── Graphql     # Queries amd Mutation
├── Hooks       # Custom React Hooks 
├── Reducer     # Reducers 
└── Views       # Views 
```
</div>
<div>

Server

```sh
tereka/
├── Components  # Individual Compoenents
├── Context     # Contexts
├── Graphql     # Queries amd Mutation
├── Hooks       # Custom React Hooks 
├── Reducer     # Reducers 
└── Views       # Views 
```

</div>


</div>

<style>
.flex{
	display: flex;
	justify-content:space-around; 
	align-items: start;
}
</style>

### First time setup

#### Running the app locally

- ### Frontend

```sh
git clone https://github.com/Dru-Go/Tereka
git clone https://github.com/Dru-Go/tereka-dummy-server


yarn
yarn start
```

- ### Backend

```sh
git clone https://github.com/iyossias-eshete/BackupTirekaRepo

yarn

yarn start
```

# Technical

## Deployment

Heroku was used for deployment of the front-end 
