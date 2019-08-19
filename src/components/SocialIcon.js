import React from "react";
import styled from "styled-components";

const Link = styled.a``;

const Image = styled.img`
  height: 50px;
  width: 50px;
  margin: 10px;
  display: block;
  &:hover {
    -webkit-box-shadow: 0px 0px 23px -4px rgba(5, 150, 170, 1);
    -moz-box-shadow: 0px 0px 23px -4px rgba(5, 150, 170, 1);
    box-shadow: 0px 0px 23px -4px rgba(5, 150, 170, 1);
    background-color: rgba(5, 150, 170, 0.2);
  }
  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

function SocialIcon(props) {
  return (
    <Link href={props.href} target="_blank">
      <Image src={props.src} />
    </Link>
  );
}

export default SocialIcon;
