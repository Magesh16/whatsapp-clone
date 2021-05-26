import {React,useState, useEffect} from "react";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from "pusher-js";
import axios from "./axios";

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(()=>{
      axios.get('/messages/sync')
      .then(response=>{
        console.log(response.data)

      });
  }, [])




  useEffect(()=>{
    const pusher = new Pusher('47388a1a360a82e967c9', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(data) =>{
      alert(JSON.stringify(data));
    });
  }, []);
console.log(messages);

  return (
    <div className="app">
      <div className='app_body'>
      <Sidebar/>
      <Chat/>
      </div>
    </div>
  );
}

export default App;
