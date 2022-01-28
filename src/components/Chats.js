import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import { ChatEngine } from 'react-chat-engine';
import { auth } from "../firebase";

import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const navigate  = useNavigate();
  const { user } = useAuth();
  const [ loading, setLoading ] = useState(true);

  const handleLogout = async function handleLogout() {
    await auth.signOut()
    navigate("/")
  }

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "test.jpg", { type: 'image/jpeg' });
  }


  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    axios.get('https://api.chatengine.io/users/me/', {
      headers:{
        "project-id": "d0f2a0d5-a62b-4239-9ee5-bc9f466d3155" ,
        "user-name": user.email,
        "user-secret": user.uid,
      }
    })
    .then(() => {
      setLoading(false);
    })
    .catch(() => {
        let formdata = new FormData();
        formdata.append('email', user.email);
        formdata.append('username', user.email);
        formdata.append('secret', user.uid);

        getFile(user.photoURL)
          .then((avatar) => {
            formdata.append('avatar', avatar, avatar.name)

            axios.post('https://api.chatengine.io/users/',
              formdata,
              { headers: { "private-key": "8f7015d9-e318-4388-b54f-efa10b740d21" }}
            )
            .then(() => setLoading(false))
            .catch(e => console.log('e', e.response))
          })
      })
    }, [user, navigate]);

  if (!user || loading) return 'Loading......'

    return (
      <div className='chats-page'>
        <div className='nav-bar'>
          <div className='logo-tab'>
            Messenger
          </div>
          <div onClick={handleLogout} className='logout-tab'>
            Logout
          </div>
        </div>

        <ChatEngine
          height='calc(100vh - 66px)'
          projectID='d0f2a0d5-a62b-4239-9ee5-bc9f466d3155'
          userName={user.email}
          userSecret={user.uid}
        />
      </div>
    )
}

export default Chats;
