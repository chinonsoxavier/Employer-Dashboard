import styled from "styled-components";
import SideMenu from "../Components/SideMenu";
import Header from "../Components/Header";
import HomeSection from "../Components/employment/HomeSection";
import Dashboard from "../Components/employment/Dashboard";
import { mobile, tablet } from "../responsive";
import MobileFooter from "../Components/MobileFooter";

const Container = styled.div`
  background: white;
`;
const Wrapper = styled.div``;
const Con = styled.div``;
const Div = styled.div`
  ${tablet({ display: "none" })}
`;

const DashboardCon = styled.div`
box-sizing: border-box;
padding: 12px 25px;
height: 100vh;
${mobile({padding:'6px 10px'})}
`;

const HeaderCon = styled.div`
  ${mobile({ display: "none" })}
`;

const Employment = () => {
  return (
    <Container>
      <Wrapper className="flex aifs jcc">
        <Div
          className="flex1"
          style={{
            boxShadow: " 0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
            position: "sticky",
            top: 0,
          }}
        >
          <SideMenu route="employment" />
        </Div>
        <Con className="flex4">
          <HeaderCon style={{ position: "sticky", top: 0, zIndex: 999 }}>
            <Header />
          </HeaderCon>
          <DashboardCon style={{}}>
            <div
              style={{ height: "90%", overflowY: "scroll", paddingBottom: "0" }}
            >
              <HomeSection />
              <Dashboard />
            </div>
            <div
              style={{
                height: "10%",
                width: "100%",
                background: "white",
                position: "",
                bottom: 0,
              }}
            >
              <MobileFooter route="employment" />
            </div>
          </DashboardCon>
        </Con>
      </Wrapper>
    </Container>
  );
};

export default Employment;
