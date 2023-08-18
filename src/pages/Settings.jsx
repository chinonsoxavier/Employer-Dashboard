import styled from "styled-components";
import SideMenu from "../Components/SideMenu";
import Header from "../Components/Header";
import HomeSection from "../Components/settings/HomeSection";
import Dashboard from "../Components/settings/Dashboard";
import { metablet, mmobile } from "../responsive";
import MobileHeader from "../Components/settings/MobileHeader";
// import HomeSection from "../Components/Settings/HomeSection";
// import Dashboard from "../Components/Settings/Dashboard";

const Container = styled.div`
  background: #eee;
`;
const Wrapper = styled.div``;
const Con = styled.div``;
const SideMenuCon = styled.div`
  ${metablet({display:'none'})}
`;
const HeaderCon = styled.div`
  ${mmobile({ display: "none" })}
`;
const MbHeaderCon = styled.div`
  ${metablet({display:'block'})};
  display:none;
  background:white;
`;
const HomeSectionCon = styled.div`
  ${mmobile({padding:'12px 15px'})}
`;

const Settings = () => {
  return (
    <Container>
      <Wrapper className="flex aifs jcc">
        <SideMenuCon
          className="flex1"
          style={{
            boxShadow: " 0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
            position: "sticky",
            top: 0,
          }}
        >
          <SideMenu route='settings' />
        </SideMenuCon>
        <Con className="flex4">
          <HeaderCon style={{ position: "sticky", top: 0, zIndex: 999 }}>
            <Header />
          </HeaderCon>
          <MbHeaderCon>
            <MobileHeader route='settings' />
          </MbHeaderCon>
          <HomeSectionCon style={{ boxSizing: "border-box", padding: "12px 0" }}>
            <HomeSection />
          </HomeSectionCon>
        </Con>
      </Wrapper>
    </Container>
  );
};

export default Settings;
