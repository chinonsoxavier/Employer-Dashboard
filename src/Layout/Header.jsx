import styled from "styled-components";
const Container = styled.div`
padding:10px;
color:white;
`;
const Wrapper = styled.div``;
const Left = styled.div``;
const LeftLogo = styled.div``;
const LeftLogoImg = styled.img`
  width: 70%;
`;
const Right = styled.div``;
const RightTextCon = styled.div`
   margin:0 10px;
`;
const RightText = styled.div``;
const RightButton = styled.button`
padding:10px;
border-radius:19px;
border:none;
color:white;
background:${props=>props.blue?'blue' : 'orange'}
`;

const Header = () => {

    const links = [
        {
            name:'Search Deliveries'
        },
        {
            name:'How it Works'
        },
        {
            name:'Help'
        },
        {
            name:'Blog'
        },
        {
            name:'Log in'
        },
        {
            name:'Search Deliveries'
        },
    ]

  return (
    <Container>
      <Wrapper className="w100 flex aic jcsb">
        <Left className="flex aic jcfs">
          <LeftLogo>
            <LeftLogoImg src={require("../../images/logo.png")} />
          </LeftLogo>
        </Left>
        <Right className="flex aic jcfe">
          {links.map((item, i) => (
            <RightTextCon key={i}>
              <RightText>{item.name}</RightText>
            </RightTextCon>
          ))}
          <RightTextCon>
            <RightButton blue>
                Transporter Sign Up
            </RightButton>
          </RightTextCon>
          <RightTextCon>
            <RightButton>
                Get Free Quotes
            </RightButton>
          </RightTextCon>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
