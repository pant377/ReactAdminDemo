import { useState } from 'react'
import { Admin, Resource } from "react-admin";
import restProvider from 'ra-data-simple-rest';
import jsonServerProvider from "ra-data-json-server";
import Postlist from './components/Postlist';
import PostCreate from './components/PostCreate';
import EditPost from './components/EditPost';
import UserList from './components/UserList';

const dataProvider = jsonServerProvider("http://localhost:5000");


function App() {

  return (
   <Admin dataProvider={dataProvider}>
    <Resource name='posts' list={Postlist} create={PostCreate} edit={EditPost}></Resource>
    <Resource name='users' list={UserList} ></Resource>
   </Admin>
  )
}

export default App
