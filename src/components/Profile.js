import React from "react";
import styled from "styled-components";
import picture from "../images/profile-picture.png";
import SocialIconsContainer from "./SocialIconsContainer";

const Main = styled.div`
  height: 50%;
  padding: 8% 10% 0 10%;
`;

const ProfilePictue = styled.img`
  height: 80%;
  border: 2px solid #0f1416;
  border-radius: 100%;
  margin: auto;
  display: block;
  -webkit-box-shadow: 0px 0px 63px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 63px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 63px 0px rgba(0, 0, 0, 1);
  @media (max-width: 768px) {
    height: 60%;
    margin-top: 80px;
  }
`;

const Name = styled.h1`
  font-size: 6vw;
  text-align: center;
  padding: 0;
  margin: 20px 0 0 0;
  color: #0f1416;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  @media (max-width: 768px) {
    font-size: 12vw;
    margin: 40px 0 0 0;
  }
`;

const Position = styled.h2`
  font-size: 3vw;
  text-align: center;
  padding: 0;
  margin: 0;
  color: #0496aa;
  letter-spacing: 8px;
  font-family: "Open Sans", sans-serif;
  line-height: 1px;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

function Profile() {
  return (
    <Main>
      <ProfilePictue src={picture} />
      <Name>MEHDI TAIBI</Name>
      <Position>Full Stack Developer</Position>
      <SocialIconsContainer />
    </Main>
  );
}

export default Profile;
