import React from 'react'
import styled from 'styled-components'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from '@mui/material/Link';

import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
import { Grid } from '@mui/material';
const Container = styled.div`
display: flex;
background-color: rgba(0, 0, 0, 0.9);
padding: 0px;
`
const Logo = styled.h1`
color: #0CCE6B;
margin: 0px 0px;
`
const Desc = styled.h3`
margin: 15px 0px;
color: white;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props)=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Right = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 1;
`
const Title=styled.h2`
margin-bottom: 30px;
color: white;
`
const List=styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem=styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const ContactItem=styled.div`
   margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment=styled.img`
    width: 50%;
`
function Footer() {
    return (
        <Container>
            <Left>
                <Logo>Stream Matrix</Logo>
                <Desc>Connect with us.</Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>

                    <SocialIcon color='E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Stream Matrix Legal Center</Title>
                <Grid container alignItems='center'>
                  <ChevronRightIcon sx={{color: 'success.main', mt: '2px'}}/>
                  <Link
                    component="button"
                    variant="h6"
                    underline='none'
                    sx={{color: 'white', ml: '5px'}}
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    Legal Center
                  </Link>
                </Grid>
            </Center>
            <Right>
                <Title>Make Payment Through</Title>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
            </Right>

        </Container>
    )
}

export default Footer
