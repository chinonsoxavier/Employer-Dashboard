import styled from "styled-components";
import Header from '.././Components/Header'
import SideMenu from '.././Components/SideMenu'
import Dashboard from "../Components/Dashboard";
import Charts from "../Components/Charts";
import Activities from "../Components/Activities";
import { ltablet, metablet, newlmobile } from "../responsive";
import MobileDashboard from "../Components/MobileDashboard";
const Container = styled.div`
  background: #eee;
  height:100%;
  ${newlmobile({height:'100vh',background:'white'})}
`;
const Wrapper = styled.div``;
const HeaderCon = styled.div`
${newlmobile({display:'none'})}
`;
const Con = styled.div``;
const Div = styled.div`
  ${ltablet({display:'none'})}
`;

const HomeSection = () => {
  return <Container>
    <Wrapper className="flex aifs jcc" >
<Div className="flex1" style={{  boxShadow:' 0px 0px 15px -10px rgba(0, 0, 0, 0.75)',position:'sticky',top:0
}}  >
  <SideMenu route='dashboard' />
</Div>
<Con className="flex4"  >
  <HeaderCon>
  <div className="sideMenuHome" style={{position:'sticky',top:0,zIndex:999}} >
  <Header/>
  </div>
  </HeaderCon>
  <Dashboard/>
  <MobileDashboard/>
  <Charts/>
  <Activities/>
</Con>
    </Wrapper>
  </Container>;
};

export default HomeSection;
