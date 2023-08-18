import styled from "styled-components";
import {
  Dashboard,
  Settings,
  AccountBalanceWalletOutlined,
  PersonAddAlt1Outlined,
  DescriptionOutlined,
  FileCopyOutlined,
  CreditScoreOutlined,
  MenuBookOutlined,
  CallOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const Container = styled.div`
height:100vh;
background:white;
min-width:270px;
`;
const Wrapper = styled.div``;
const HeaderSection = styled.div``;
const HeaderSectionImg = styled.img`
width:100%;
pbject-fit:contain;
`;

const RoutesCon = styled.div`
margin-top:30px;
`
const Routes = styled.div`
padding:10px 6px;
align-self:center;
cursor:pointer;
border-bottom:1px solid #eee;
transition:1s all;

&:hover{
background:#e8fbd5;
transform:scale(1.05);
}
`
const RoutesText = styled.span`
// margin:0px 5px 6px;
font-size:14px;

`


const SideMenu = (route) => {
  return (
    <Container>
      <Wrapper>
        <HeaderSection>
          <HeaderSectionImg src={require(".././images/logo2.png")} alt="img" />
        </HeaderSection>
        <RoutesCon className="c">
          <Routes
            className="flex aic jcfs"
            style={{
              borderLeft: route === "dashboard" && "4px solid #1f5145",
              background: route === "dashboard" && "e8fbd5",
            }}
          >
            <Dashboard sx={{ color: "#292929", fontSize: "20px" }} />
            <RoutesText style={{ margin: "5px 6px 0" }}>
              <Link to="/" className="link">
                Dashboard
              </Link>
            </RoutesText>
          </Routes>
          <Routes
            className="flex aic jcfs"
            style={{
              borderLeft: route === "employment" && "4px solid #1f5145",
              background: route === "employment" && "e8fbd5",
            }}
          >
            <AccountBalanceWalletOutlined
              sx={{ color: "#292929", fontSize: "20px" }}
            />
            <RoutesText style={{ margin: "5px 6px 0" }}>
              <Link to="/employment" className="link">
                Emplyment Management
              </Link>
            </RoutesText>
          </Routes>
          <Routes className="flex aic jcsb">
            <span className="flex aic jcc">
              <PersonAddAlt1Outlined
                sx={{ color: "#292929", fontSize: "20px" }}
              />
              <RoutesText style={{ margin: "0 5px" }}>Wallet</RoutesText>
            </span>
            <span style={{ marginBottom: "5px" }}>
              <KeyboardArrowDown
                sx={{ color: "#292929", fontSize: "18px", marginTop: "5px" }}
              />
            </span>
          </Routes>
          <Routes className="flex aic jcsb">
            <span className="flex aic jcc">
              <DescriptionOutlined
                sx={{ color: "#292929", fontSize: "20px" }}
              />
              <RoutesText style={{ margin: "0 5px" }}>Paypal</RoutesText>
            </span>
            <span>
              <KeyboardArrowDown
                sx={{ color: "#292929", fontSize: "18px", marginTop: "5px" }}
              />
            </span>
          </Routes>
          <Routes className="flex aic jcsb">
            <span className="flex aic jcc">
              <FileCopyOutlined sx={{ color: "#292929", fontSize: "20px" }} />
              <RoutesText style={{ margin: "0 5px" }}>Compliance</RoutesText>
            </span>
            <span>
              <KeyboardArrowDown
                sx={{ color: "#292929", fontSize: "18px", marginTop: "5px" }}
              />
            </span>
          </Routes>
          <Routes className="flex aic jcsb">
            <span className="flex aic jcc">
              <CreditScoreOutlined
                sx={{ color: "#292929", fontSize: "20px" }}
              />
              <RoutesText style={{ margin: "0 5px" }}>Quick Loan</RoutesText>
            </span>
            <span>
              <KeyboardArrowDown
                sx={{ color: "#292929", fontSize: "18px", marginTop: "5px" }}
              />
            </span>
          </Routes>
          <Routes className="flex aic jcsb">
            <span className="flex aic jcc">
              <MenuBookOutlined sx={{ color: "#292929", fontSize: "20px" }} />
              <RoutesText style={{ margin: "0 5px" }}>Book Keeping</RoutesText>
            </span>
            <span>
              <KeyboardArrowDown
                sx={{ color: "#292929", fontSize: "18px", marginTop: "5px" }}
              />
            </span>
          </Routes>
          <Routes className="flex aic jcsb">
            <span className="flex aic jcc">
              <CallOutlined sx={{ color: "#292929", fontSize: "20px" }} />
              <RoutesText style={{ margin: "0 5px" }}>Support</RoutesText>
            </span>
            <span>
              <KeyboardArrowDown
                sx={{ color: "#292929", fontSize: "18px", marginTop: "5px" }}
              />
            </span>
          </Routes>
          <Routes
            className="flex aic jcsb"
            style={{
              borderLeft: route === "settings" && "4px solid #1f5145",
              background: route === "settings" && "e8fbd5",
            }}
          >
            <span className="flex aic jcc">
              <Settings sx={{ color: "#292929", fontSize: "20px" }} />
              <RoutesText style={{ margin: "0 5px" }}>Settings</RoutesText>
            </span>
            <span>
              {" "}
              <KeyboardArrowDown
                sx={{ color: "#292929", fontSize: "18px", marginTop: "5px" }}
              />
            </span>
          </Routes>
        </RoutesCon>
      </Wrapper>
    </Container>
  );
};

export default SideMenu;
