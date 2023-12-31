
 styled from "styled-components";
import SideMenu from "../Components/SideMenu";
import Header from "../Components/Header";
import HomeSection from "../Components/employment/HomeSection";
import Dashboard from "../Components/employment/Dashboard";
import { mobile, tablet } from "../responsive";
import MobileFooter from "../Components/MobileFooter";

const Container = styled.div`
  background: white;
height:100dvh;
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

const Cons = styled.div`
display:none;
${mobile({display:'block'})};
position:fixed;
bottom:0;
`

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
          <DashboardCon style={{ height: "100%", overflowX: "hidden" }}>
            <div
              style={{
                height: "90%",
                paddingBottom: "0",
                // overflowY: "scroll",
                paddingBottom: "60px",
                overflowX: "hidden",
              }}
            >
              <HomeSection />
              <Dashboard />
            </div>
            <Cons
              style={{
                height: "10%",
                width: "100%",
                background: "white",
                position: "",
                bottom: 0,
              }}
            >
              <MobileFooter route="employment" />
            </Cons>
          </DashboardCon>
        </Con>
      </Wrapper>
    </Container>
  );
};

export default Employment;
