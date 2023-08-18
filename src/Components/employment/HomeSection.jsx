import styled from "styled-components";
import { mmobile, mobile } from "../../responsive";
const Container = styled.div``;
const Wrapper = styled.div``;
const TextCon = styled.div`
margin-bottom:10px;
${mmobile({justifyContent:'center'})}
`;
const Text = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size:35px;
  font-weight:500;
  ${mobile({fontSize:'13px'})};
  ${mmobile({fontSize:'23px'})};
`;
const DashboardFunds = styled.div`
  background: #11453b;
  background: #145044;
  color: white;
  border-radius: 13px;
  padding: 32px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  ${mobile({padding:'10px'})}
  ${mmobile({padding:'23px '})}
`;
const DashboardFundsLeft = styled.div``;
const DashboardFundsRight = styled.div``;
const DashboardFundsText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const DashboardFundsPrice = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  font-weight: 500;
  ${mobile({fontSize:'20px'})}
`;
const DashboardFundsPriceCon = styled.div``;
const HomeSection = () => {
  return (
    <Container>
      <Wrapper>
        <TextCon className="flex aic jcfs">
          <Text>Easipay`s Team</Text>
        </TextCon>
        <DashboardFunds className="flex aic jcsb w100">
          <DashboardFundsLeft>
            <DashboardFundsText>Total Employees</DashboardFundsText>
            <DashboardFundsPriceCon className="flex aic jcfs">
              <DashboardFundsPrice>12874</DashboardFundsPrice>
            </DashboardFundsPriceCon>
          </DashboardFundsLeft>
          <DashboardFundsRight>
          </DashboardFundsRight>
        </DashboardFunds>
      </Wrapper>
    </Container>
  );
};

export default HomeSection;
