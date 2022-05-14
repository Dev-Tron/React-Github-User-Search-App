import React, { useState, useEffect } from "react";
import styled from "styled-components";


    const Card = styled.div`
      background-color: ${Props => Props.theme.boxColor};
    `;

    const Wrapper1 = styled.div`
      display: grid;
    `;

    const Avatar = styled.img`
      width: 30px;
      height: auto;
    `;

    const Name = styled.h1`
      font-size: large;
    `;

    const User = styled.p`
      color: #0079FF;
    `;

    const Creation = styled.p`
      color: ${Props => Props.theme.tagLineColor};  
    `

function Data() {
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [bio, setBio] = useState('');
    const [repos, setRepos] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [location, setLocation] = useState('');
    const [blog, setBlogUrl] = useState('');
    const [twitter, setTwitter] = useState('');
    const [company, setCompany] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState('null');
  
    useEffect(() => {
      fetch("https://api.github.com/users/octocat")
          .then(res => res.json())
          .then(data => {
              setData(data);
          });
    }, []);
  
    const setData = ( {
       avatar_url, 
       name, 
       login, 
       created_at, 
       bio, 
       public_repos, 
       followers, 
       following, 
       location, 
       blog, 
       twitter_username, 
       company
      
      } ) => {
       setAvatar(avatar_url);
       setName(name);
       setUserName(login);
       setCreatedBy(created_at);
       setBio(bio);
       setRepos(public_repos);
       setFollowers(followers);
       setFollowing(following);
       setLocation(location);
       setBlogUrl(blog);
       setTwitter(twitter_username);
       setCompany(company);
  
       };
  
    return (
      <Card>
        <Wrapper1>
          <Avatar src={avatar}/>
          <Name>
            {name}
          </Name>
          <User>
            @{userName}
          </User>
          <Creation>
            Joined {createdBy}
          </Creation>
        </Wrapper1>
      </Card>
  
    );
  }

  export default Data;