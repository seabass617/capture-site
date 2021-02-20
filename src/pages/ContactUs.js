import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import ScrollTop from "../components/ScrollTop";

const Contact = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch!</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle></Circle>
            <h2>Send us an email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle></Circle>
            <h2>Call us</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle></Circle>
            <h2>Messenger pigeon!</h2>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h1 {
    padding: 1rem 0rem;
    color: white;
  }
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
  @media (max-width: 1300px) {
    margin-top: 5rem;
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #23d997;
  @media (max-width: 1300px) {
    width: 2rem;
    height: 2rem;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    color: white;
    @media (max-width: 700px) {
      font-size: 2rem;
    }
  }
`;
export default Contact;
