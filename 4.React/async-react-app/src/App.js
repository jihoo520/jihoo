import logo from './logo.svg';
import './App.css';
import {Sync,Async } from './Sync';
import UserList from './UserList';
import { BlogApp } from './BlogApp';
import { Fetch, Axios } from './Async';

function App() {
  return (
    <div className="App">
      <UserList/>
      <BlogApp/>

    </div>
  );
}

export default App;
