import { CreditScoreOutlined, DescriptionOutlined, GridViewOutlined, Home, HomeOutlined, PersonAdd, PersonAddAlt, PersonAddAlt1Outlined, Settings, SettingsOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
const Container = styled.div`
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75)
box-sizing:border-box;
height:100%;
padding:0px 2px;
margin-top:-1px;
border-top:1px solid #eee;
`;
const Wrapper = styled.div`
  padding-top: -8px;
  box-sizing: border-box;
`;
const Links = styled.div`
// display:flex;
text-align:center;
cursor:pointer;
`
const LinksIcon = styled.div`
  margin-bottom: -8px;
`;
const LinksText = styled.span`
font-size:14px;
${mobile({fontSize:'11px'})}
`
const MobileFooter = ({route}) => {
  return (
    <Container>
      <Wrapper className="flex aic jcsb">
        <Links className="flex aic jcc fdc">
          <Link to="/" className="link">
            <LinksIcon>
              {route === "dashboard" ? (
                <Home sx={{ color: "#292929", fontSiz2: "20px" }} />
              ) : (
                <HomeOutlined sx={{ color: "#145044", fontSiz2: "20px" }} />
              )}
            </LinksIcon>
            <LinksText>Home</LinksText>
          </Link>
        </Links>
        <Links className="flex aic jcc fdc">
          <Link to="/employment" className="link">
            <LinksIcon>
              {route === "employment" ? (
                <PersonAdd sx={{ color: "#145044", fontSize: "20px" }} />
              ) : (
                <PersonAddAlt1Outlined
                  sx={{ color: "#292929", fontSize: "20px" }}
                />
              )}
            </LinksIcon>
            <LinksText>Employee</LinksText>
          </Link>
        </Links>
        <Links className="flex aic jcc fdc">
          <Link to="/settings" className="link">
            <LinksIcon>
              {route === "settings" ? (
                <Settings sx={{ color: "#145044", fontSiz2: "20px" }} />
              ) : (
                <SettingsOutlined sx={{ color: "#292929", fontSiz2: "20px" }} />
              )}
            </LinksIcon>
            <LinksText>Settings</LinksText>
          </Link>
        </Links>
        <Links className="flex aic jcc fdc">
          <LinksIcon>
            <CreditScoreOutlined sx={{ color: "#292929", fontSize: "22px" }} />{" "}
          </LinksIcon>
          <LinksText>Loans</LinksText>
        </Links>
        <Links className="flex aic jcc fdc">
          <LinksIcon>
            <GridViewOutlined sx={{ color: "#292929", fontSiz2: "20px" }} />
          </LinksIcon>
          <LinksText>More</LinksText>
        </Links>
      </Wrapper>
    </Container>
  );
}

export default MobileFooter