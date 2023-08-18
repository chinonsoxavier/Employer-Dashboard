import { AccountBalanceWalletOutlined, DateRangeOutlined, LocalAtmOutlined, PersonAddAlt1Outlined, RemoveRedEyeOutlined, SendOutlined, VisibilityOff } from "@mui/icons-material";
import styled from "styled-components";
import { InventoryBreakpoint, newlmobile } from "../responsive";
import { useState } from "react";
const Container = styled.div`
  box-sizing: border-box;
  padding: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  ${newlmobile({display:'none'})}
`;
const Wrapper = styled.div``;
const Con = styled.div`
gap:25px;
margin-top:25px;
`;
const Left = styled.div`
flex:4;
`;
const LeftTextCon = styled.div``;
const BigText = styled.span`
  font-size: 35px;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const SmText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size:14px;
  font-weight:400;
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
  ${newlmobile({padding:'32px 12px'})};
`;
const DashboardFundsLeft = styled.div``;
const DashboardFundsRight = styled.div``;
const DashboardFundsText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const DashboardFundsPrice = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size:24px;
  font-weight:500;
  margin-right:10px;
  cursor:pointer;
`;
const DashboardFundsPriceCon = styled.div`

`;
const DashboardFundsButton = styled.button`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #d9eacf;
  border-radius: 16px;
  border: none;
  color: #11453b;
  padding:5px 10px;
  white-space:nowrap;
`;

const LinksCon = styled.div`
  grid-gap: 30px;
  margin-top: 30px;
  height: 100%;
  width:100%;
  display:grid;
  ${InventoryBreakpoint({gridGap:'10px'})}
  grid-template-columns:1fr 1fr 1fr 1fr;
`;
const Links = styled.div`
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
//   padding: 20px;
  border-radius: 13px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
//   flex: 1;
  cursor: pointer;
  transition: 1s all;
  border:1px solid #eee;
  min-width:70px;
  min-height:100px;
  height: 100%;
  ${InventoryBreakpoint({minWidth:'70px',height:'70px'})}
  &:hover {
    transform: Scale(1.06);
  }
`;
const LinksIcon = styled.div`
height:30px;
width:30px;
border-radius:5px;
display:flex;
align-items:center;
justify-content:center;
`;
const LinksText = styled.span`
  font-size: 13px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 9px;
  text-align: center;
  ${InventoryBreakpoint({fontSize:'10px'})}
`;
const Right = styled.div`
  height: max-content;
  flex:1;
  min-width:140px;
`;
const PayRoll = styled.div`
  height: max-content;
  border-radius: 13px;
  background: white;
  height: 100%;
  border: 1px solid #eee;
`;
const PayRollHeader = styled.div`
  background: #d9eacf;
  width:100%;
  padding:10px 0;
  border-top-right-radius:13px;
  border-top-left-radius:13px;
`;
const PayRollHeaderText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight:600;
  color:gray;
`;
const PayRollIconTxtCon = styled.div`
//   padding: 5px 0;
  padding-top:10px;
`;
const PayRollIcon = styled.div``;
const PayRollIconText = styled.span`
font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
font-size:13px;
color:gray;
`;
const DateCon = styled.div`
// padding:5px 0;
padding-bottom:10px;
border-bottom:1px solid #eee;
`
const DateConText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
font-weight:500;
  `;
const PayRollEmployeeCon = styled.div`
box-sizing:border-box;
padding:13px 10px;
`;
const PayRollEmployee = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: gray;
`;
const PayRollEmpNum = styled.span`
  font-weight: 700;
  font-size:24px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin:10px 0;
`;
const PayRollEmpDataCon = styled.div`
width:100%;
`;
const PayRollEmpDataConLeft = styled.div`
border-top:10px solid red;
// height:12px;
flex:1;
width:100%;
`;
const PayRollEmpDataConRight = styled.div`
  border-top:10px solid  blue;
//   height: 12px;
  flex:1;
  width:100%;
`;
const PayRollEmpData = styled.div`
display:flex;
flex-direction:column;

`;
const PayRollEmpText = styled.span`
font-size:11px;
font-weight:600;
color:grey;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const DashboardHome = () => {

    const [view,setView]=useState(false)

  return (
    <Container>
      <Wrapper>
        <LeftTextCon className="flex aifs jcc fdc">
          <BigText>Welcome Abaisama</BigText>
          <SmText>Pay and manage your employee in minutes</SmText>
        </LeftTextCon>
        <Con className="flex aic jcc" >
          <Left className="flex aic jcsb fdc" >
            <DashboardFunds className="flex aic jcsb w100">
              <DashboardFundsLeft>
                <DashboardFundsText>Wallet Balance</DashboardFundsText>
                <DashboardFundsPriceCon className="flex aic jcfs">
                    {view ? 
                  <DashboardFundsPrice>$12,560,078,00</DashboardFundsPrice>
                  :
                  <DashboardFundsPrice>**************</DashboardFundsPrice>
                    }
                    {
                        view ?
                        <RemoveRedEyeOutlined onClick={()=>setView(false)} />
                        :
                        <VisibilityOff onClick={()=>setView(true)} />
                    }
                </DashboardFundsPriceCon>
              </DashboardFundsLeft>
              <DashboardFundsRight>
                <DashboardFundsButton>Fund Wallet</DashboardFundsButton>
              </DashboardFundsRight>
            </DashboardFunds>
            <LinksCon className=" aic jcsb w100">
              <Links>
                <LinksIcon style={{ background: "#feeded" }}>
                  <PersonAddAlt1Outlined
                    sx={{ color: "#292929", fontSize: "20px" }}
                  />
                </LinksIcon>
                <LinksText>Add Employee</LinksText>
              </Links>
              <Links>
                <LinksIcon style={{ background: "#cde6cb" }}>
                  <LocalAtmOutlined
                    sx={{ color: "#292929", fontSize: "20px" }}
                  />
                </LinksIcon>
                <LinksText>Pay Salaries</LinksText>
              </Links>
              <Links>
                <LinksIcon style={{ background: "#9ad0b0" }}>
                  <SendOutlined sx={{ color: "#292929", fontSize: "20px" }} />
                </LinksIcon>
                <LinksText>Pay Compliances</LinksText>
              </Links>
              <Links>
                <LinksIcon style={{ background: "#a6c6f6" }}>
                  <AccountBalanceWalletOutlined
                    sx={{ color: "#292929", fontSize: "20px" }}
                  />
                </LinksIcon>
                <LinksText>Quick Loan</LinksText>
              </Links>
            </LinksCon>
          </Left>
          <Right>
            <PayRoll>
              <PayRollHeader className="flex aic jcc">
                <PayRollHeaderText>Next Payroll</PayRollHeaderText>
              </PayRollHeader>
              <PayRollIconTxtCon className="flex aic jcc">
                <PayRollIcon className="flex aic jcc">
                  <DateRangeOutlined sx={{ color: "gray", gontSize: "12px" }} />
                </PayRollIcon>
                <PayRollIconText>Friday</PayRollIconText>
              </PayRollIconTxtCon>
              <DateCon className="flex aic jcc">
                <DateConText>09/11/2022</DateConText>
              </DateCon>
              <PayRollEmployeeCon className="flex aifs jcc fdc">
                <PayRollEmployee>Total Employee</PayRollEmployee>
                <PayRollEmpNum>64</PayRollEmpNum>
                <PayRollEmpDataCon className="flex aic jcc">
                  <PayRollEmpDataConLeft>
                    <PayRollEmpData>
                      <PayRollEmpText>Male</PayRollEmpText>
                      <PayRollEmpText>32</PayRollEmpText>
                    </PayRollEmpData>
                  </PayRollEmpDataConLeft>
                  <PayRollEmpDataConRight>
                    <PayRollEmpData>
                      <PayRollEmpText>Female</PayRollEmpText>
                      <PayRollEmpText>32</PayRollEmpText>
                    </PayRollEmpData>
                  </PayRollEmpDataConRight>
                </PayRollEmpDataCon>
              </PayRollEmployeeCon>
            </PayRoll>
          </Right>
        </Con>
      </Wrapper>
    </Container>
  );
};

export default DashboardHome;
