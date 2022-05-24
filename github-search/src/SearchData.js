import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import img1 from './images/icon-search.svg';
import loco from "./images/icon-location.svg";
import web from "./images/icon-website.svg";
import comp from "./images/icon-company.svg";
import twitterIcon from "./images/icon-twitter.svg";

    const Container = styled.main`
      width: 100%;
      height: auto;
    `

    const Card = styled.div`
      background-color: ${Props => Props.theme.boxColor};
      margin-top: 5%;
      border-radius: 10px;
      padding: 6% 6% 12% 6%;
      box-shadow: 0 1.6rem 3rem -1rem rgba(0, 0, 0, 0.2);

      @media (min-width: 1440px) {
        padding: 5% 0 5% 5%;
        }
    `

    const GitForm = styled.form`
    `
    
    const ButtonWrapper = styled.div`
      margin-top: 7%;
      background-color: ${Props => Props.theme.boxColor};
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding: 6px;
      justify-content: space-between;
      transition: all 0.5s ease;
      box-shadow: 0 1.6rem 3rem -1rem rgba(0, 0, 0, 0.2);

      @media (min-width: 768px) {
            margin-top: 4%;
        }
    `

    const UserInput = styled.input`
      flex: .9;
      width: 100%;
      border: none;
      background-color: transparent;
      resize: none;
      outline: none;
      transition: all 0.5s ease;
      color: ${Props => Props.theme.tagLineColor};
    `

     const SearchIcon = styled.img`
      width: 20px;
      height: auto;
      margin-left: 3%;
    `

    const ErrorMessage = styled.span`
      margin-right: 5%;
      color: #F74646;
      font-weight: 600;
    `

    const Press = styled.button`
      width: 30%;
      height: auto;
      padding: 5%;
      background-color: #0079FF;
      border-radius: 10px;
      color: white;
      border: none;
      font-family: 'Space Mono', monospace;

        &:hover {
          background-color: #60ABFF;
          transition: all 0.5s ease;
        }

        @media (min-width: 768px) {
            width: 20%;
            padding: 3% 1%;
        }

        @media (min-width: 1440px) {
            padding: 2%;
            width: 14%;
        }
    `
    
    const Wrapper1 = styled.div`
      display: flex;
      gap: 5%;
    `

    const OverWrap = styled.div`
       @media (min-width: 1440px) {
            display: flex;
            flex-direction: column;
            width: 65%;
            margin-left: 21%;
            margin-top: -9%;
       }
    `

    const SmallWrap = styled.div`
      display: flex;
      flex-direction: column;

      @media (min-width: 1440px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
        }
    `

    const Avatar = styled.img`
      width: 25%;
      height: 18%;
      border-radius: 50%;
      margin: 5% 0 0 0;

      @media (min-width: 1440px) {
          margin: 0;
          width: 20%;
          height: auto;
        }
    `

    const Name = styled.h2`
      font-size: large;
      color: ${Props => Props.theme.titleColor};
      transition: all 0.5s ease;
      margin-bottom: 0;

      @media (min-width: 768px) {
        font-size: xx-large;
      }

      @media (min-width: 1440px) {
        margin-top: 0;
      }
    `

    const User = styled.a`
      color: #0079FF;
      font-size: small;

      @media (min-width: 768px) {
        font-size: large;
      }

      @media (min-width: 1440px) {
            order: 3;
            margin-top: -15%;
        }
    `

    const Creation = styled.p`
      color: ${Props => Props.theme.tagLineColor}; 
      font-size: small; 
      margin-top: 5%;
      transition: all 0.5s ease;

      @media (min-width: 768px) {
        font-size: large;
      }

      @media (min-width: 1440px) {
        order: 2;
      }
    `

    const Bios = styled.p`
      color: ${Props => Props.theme.tagLineColor}; 
      font-size: small; 
      margin-top: 8%;

      @media (min-width: 768px) {
        font-size: large;
      }
    `

    const Table = styled.table`
      background-color: ${Props => Props.theme.pageBackground};
      width: 100%;
      border-radius: 10px;
      text-align: center;
      margin-top: 3%;
      padding: 5%;
      transition: all 0.5s ease;

      @media (min-width: 768px) {
        padding: 2%;
      }
    `

    const TableRow  = styled.tr`
      line-height: 2em;
    `

    const TableCell = styled.td`
      color: ${Props => Props.theme.tagLineColor};
      font-size: small; 
      transition: all 0.5s ease;

      @media (min-width: 768px) {
        font-size: large;
      }
    `

    const TableHeader = styled.th`
      color: ${Props => Props.theme.titleColor};
      font-size: small; 
      transition: all 0.5s ease;

      @media (min-width: 768px) {
        font-size: large;
      }
    `

    const Wrapper2 = styled.div`
      margin-top: 8%;
      display: grid;
      width: 100%;
      height: auto;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
    `

    const Loco = styled.img`
      width: 15px;
      height: 20px;
      margin-top: 5%;

      @media (min-width: 768px) {
        margin-top: 8%;
      }
    `

    const LocoData = styled.p`
      color: ${Props => Props.theme.tagLineColor};
      font-size: small; 
      transition: all 0.5s ease;

      @media (min-width: 768px) {
        font-size: large;
      }
    `

    const Web = styled.img`
      width: 18px;
      height: 20px;
      margin-top: 1%;
      
    `

    const WebData = styled.a`
      color: ${Props => Props.theme.tagLineColor};
      font-size: small; 
      transition: all 0.5s ease;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      @media (min-width: 768px) {
        font-size: large;
      }
    `

    const Twitter = styled.img`
      width: 18px;
      height: 20px;
      margin-top: 3%;
    `

    const Tweet = styled.a`
      color: ${Props => Props.theme.tagLineColor};
      font-size: small; 
      transition: all 0.5s ease;
      margin-top: 3%;

      @media (min-width: 768px) {
        font-size: large;
      }
    `

    const Company = styled.img`
      width: 18px;
      height: 20px;
      margin-top: 3%;
    `

    const CompUrl = styled.a`
      color: ${Props => Props.theme.tagLineColor};
      font-size: small; 
      transition: all 0.5s ease;
      margin-top: 3%;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      @media (min-width: 768px) {
        font-size: large;
      }
    `

    const DataControl = `
      display: flex;
      flex-direction: row;
      gap: 1rem;
    `

    const Location = styled.div`
      ${DataControl}
    `

    const Website = styled.div`
      ${DataControl}

      @media (min-width: 768px) {
        margin-top: 8%;
      }
    `
    const TwitterProfile = styled.div`
      ${DataControl}
    `
    const CompanySite = styled.div`
      ${DataControl}
    `

function Data() {
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [created, setCreation] = useState('');
    const [logIn, setLogIn] = useState('');
    const [bio, setBio] = useState('');
    const [repos, setRepos] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [location, setLocation] = useState('');
    const [blog, setBlogUrl] = useState('');
    const [twitter, setTwitter] = useState('');
    const [company, setCompany] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState('');
    
  
    useEffect(() => {
      fetch("https://api.github.com/users/octocat")
          .then(res => res.json())
          .then(data => {
              setData(data);
          });
    }, []);

      const setData = ( {
       avatar_url,
       html_url,
       login,
       name, 
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
       setUserName(html_url);
       setCreation(created_at);
       setLogIn(login);
       setBio(bio);
       setRepos(public_repos);
       setFollowers(followers);
       setFollowing(following);
       setLocation(location);
       setBlogUrl(blog);
       setTwitter(twitter_username);
       setCompany(company);
       };
      
      const createdDate = dayjs(created).format("DD MMM YYYY")

      const handleSearch = (e) => {
        setUserInput(e.target.value)
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${userInput}`)
          .then(res => res.json())
          .then(data => {
              if (data.message) {
                setError(data.message)
              }
              else {
                setData(data);
                setError(null);
              }
            })
            setUserInput("")
      };
      
      

     return (
      <Container>
          <GitForm onSubmit={handleSubmit} >
            <ButtonWrapper>
              <SearchIcon src= {img1} alt="search-icon" />
              <UserInput type='text' value={userInput} placeholder={error ? null : "Search Github username..."} onChange={handleSearch} />
              {error ? <ErrorMessage>No results
              </ErrorMessage> : null }
              <Press>
                Search
              </Press>
            </ButtonWrapper>
          <Card>
            <Wrapper1>
              <Avatar src={avatar} />
                <SmallWrap>
                  <Name>
                    {name ? `${name}` : `${logIn}`}
                  </Name>
                  <User href={userName}>
                    @{logIn}
                  </User>
                  <Creation>
                    {`Joined ${createdDate}`}
                  </Creation>
                </SmallWrap>
              </Wrapper1>
              <OverWrap>
                <Bios style={bio ? { opacity: 1 } : { opacity: 0.75 }}>
                  {bio ? `${bio}` : `This profile has no bio.`}
                </Bios>
                <Table>
                <TableRow>
                    <TableCell>Repos</TableCell>
                    <TableCell>Followers</TableCell>
                    <TableCell>Following</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeader>{repos}</TableHeader>
                    <TableHeader>{followers}</TableHeader>
                    <TableHeader>{following}</TableHeader>
                  </TableRow>
                </Table>
                <Wrapper2>
                  <Location>
                    <Loco src={loco} style={location ? { opacity: 1 } : { opacity: 0.75 }} href={location} alt="pin-point" />
                    <LocoData style={location ? { opacity: 1 } : { opacity: 0.75 }} href={location}>
                      {location ? `${location}` : `Not Available.`}
                    </LocoData>
                  </Location>
                  <Website>
                    <Web src={web} style={blog ? { opacity: 1 } : { opacity: 0.75 }} href={blog} alt="chain-link" />
                    <WebData style={blog ? { opacity: 1 } : { opacity: 0.75 }} href={blog}>
                      {blog ? `${blog}` : `Not Available.`}
                    </WebData>
                  </Website>
                  <TwitterProfile>
                    <Twitter src={twitterIcon} style={twitter ? { opacity: 1 } : { opacity: 0.75 }} href={twitter} alt="twitter-logo" />
                    <Tweet style={twitter ? { opacity: 1 } : { opacity: 0.75 }} href={twitter}>
                      {twitter ? `${twitter}` : `Not Available.`}
                    </Tweet>
                  </TwitterProfile>
                  <CompanySite>
                    <Company src={comp} style={company ? { opacity: 1 } : { opacity: 0.75 }} href={company} alt="building-icon" />
                    <CompUrl style={company ? { opacity: 1 } : { opacity: 0.75 }} href={company}>
                      {company ? `${company}` : `Not Available.`}
                    </CompUrl>
                  </CompanySite>
                </Wrapper2>
              </OverWrap>
          </Card>
        </GitForm>
      </Container>
    );
  }

export default Data;