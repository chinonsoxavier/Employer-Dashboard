import { KeyboardArrowRight, NotificationsOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";
import { mmobile, newlmobile, tablet } from "../responsive";
const Container = styled.div`
  background: white;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 15px 12px;
  ${newlmobile({padding:'6px 8px'})}
`;
const Wrapper = styled.div``;
const Left = styled.div`
flex:1;
`;
const Logo = styled.div``;
const LogoText = styled.span`
font-size:35px;
`;
const Right = styled.div`
flex:1;
`;

const UserCard = styled.div`
${tablet({marginLeft:'30px'})}
`
const UserCardLeft = styled.div``
const UserCardLeftImgCon = styled.div`
width:50px;
`
const UserCardLeftImg = styled.img`
width:40px;
`
const UserCardRight = styled.div``
const UserCardRightTextCon = styled.div``
const UserCardRightText = styled.span`
  font-weight: 600;
  font-size: 14px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  ${mmobile({fontSize:'13px'})}
`;
const UserCardRightTextLt = styled.span`
  font-weight: 300px;
  font-size: 12px;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper className="flex aic jcc">
        <Left>
          <Logo>
            <LogoText>LOGO</LogoText>
          </Logo>
        </Left>
        <Right className="flex aic jcfe">
          <Badge badgeContent={2} color="primary" sx={{fontSize:'14px'}} >
            <NotificationsOutlined sx={{fontSize:'22px'}} />
          </Badge>
          <UserCard className="flex aic jcc" style={{ marginLeft: "20px" }}>
            <UserCardLeft>
              <UserCardLeftImgCon>
                <UserCardLeftImg
                  src={require(".././images/person.png")}
                  alt=""
                />
              </UserCardLeftImgCon>
            </UserCardLeft>
            <UserCardRight className="flex aifs jcsb fdc">
              <UserCardRightText>Kalu Abaisiama</UserCardRightText>
              <UserCardRightTextCon className="flex aic jcsb">
                <UserCardRightTextLt>Admin</UserCardRightTextLt>
                <KeyboardArrowRight sx={{ fontSize: "13px" }} />
              </UserCardRightTextCon>
            </UserCardRight>
          </UserCard>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
