import { AttachMoneyOutlined, ElectricalServicesOutlined, LocalAtmOutlined, Notifications, NotificationsNoneOutlined, PersonAddAlt1Outlined, PriceChangeOutlined, RemoveRedEyeOutlined, RequestQuoteOutlined, SavingsOutlined, SendOutlined, VisibilityOff, WifiCalling3Outlined, WifiOffOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { mmobile, mobile, newlmobile, smobile } from '../responsive';
import MobileFooter from './MobileFooter';
import { useState } from 'react';
const Container = styled.div`
  display: none;
  box-sizing: border-box;
  padding: 0 15px;
  ${smobile({ padding: "0 7px" })}
  ${newlmobile({ display: "block" })};
  height: 100vh;
`;
const Wrapper = styled.div`
height:100%;
`
const Top = styled.div`
height:9%;
width:100%;
`
const Middle = styled.div`
  height: 84%;
  width: 100%;
  box-sizing:border-box;
//   padding-bottom:10px;
`;
const Bottom = styled.div`
  height: 8%;
// padding-bottom:10px;
  width: 100%;
`;
const Header = styled.div`
box-sizing:border-box;
padding:6px 0;
position:sticky;
${mmobile({padding:'7px 0'})}

top:0;
`
const HeaderLeft = styled.div``
const HeaderRight = styled.div``
const HeaderRightIcon = styled.div`
background:#eee;
border-radius:6px;
padding:8px;
${mobile({padding:'4px'})}
`;
const HeaderImgCon = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #145044;
  border-radius:50%;
  ${mobile({width:'33px',height:'33px'})}
`;
const HeaderImg = styled.img`
width:100%;
`
const HeaderText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size:18px;
  margin:0 8px;
  ${mobile({fontSize:'16px'})}
`;
const QuickStatsCon = styled.div`
  box-sizing: border-box;
  padding:12px 7px;
  width:100%;
  ${smobile({padding:'2px 4px'})}
`;
const QuickStatsHeaderCon = styled.div`
  padding-bottom: 15px;
  ${newlmobile({ paddingBottom: "2px" })}
`;
const QuickStatsHeaderText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #3c3c3c;
  font-weight: 500;
  ${smobile({ fontSize: "14px" })}
`;
const QuickStatsWrapper = styled.div`
gap:8px;
width:100%;
`
const QuickStats = styled.div`
  background: #eee;
  padding: 10px;
  border-radius: 14px;
  flex: 1;
  min-width: 40px;
  ${newlmobile({ padding: "10px 9px" })}

`;
const QuickStatsLtText = styled.span`
  white-space: nowrap;
  color: #3c3c3c;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  padding: 8px 0;
  ${smobile({ padding: "1px 0" })};
  ${newlmobile({ padding: "4px 0" })};
  ${mobile({fontSize:'12px'})}
`;
const QuickStatsText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #3c3c3c;
  white-space: nowrap;
  font-weight: 500;
  ${smobile({ fontSize: "12px" })};
  ${smobile({ padding: "1px 0" })};
  ${mobile({fontSize:'12.5px',marginTop:'-5px'})}
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
  ${newlmobile({ padding: "15px 6px" })};
  ${smobile({ padding: "15px 10px",marginTop:'20px' })};
`;
const DashboardFundsLeft = styled.div`
flex:1;
`;
const DashboardFundsRight = styled.div`
flex:1;
${newlmobile({width:'100%'})}
`;
const DashboardFundsText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  ${smobile({ fontSize: "14px" })}
`;
const DashboardFundsPrice = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  font-weight: 500;
  ${smobile({fontSize:'19px'})}
`;
const DashboardFundsPriceCon = styled.div`
${newlmobile({
justifyContent:'space-between',
padding:'6px 0',

})}
`;
const DashboardFundsButton = styled.button`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #d9eacf;
  border-radius: 16px;
  border: none;
  color: #11453b;
  padding: 5px 10px;
  white-space: nowrap;
  ${newlmobile({width:'100%',marginTop:'13px'})};
  cursor:pointer;
`;

const QuickActionsCon = styled.div`
width:100%;
`
const QuickActionsHeaderCon = styled.div`
padding:10px 0;
${newlmobile({padding:'5px 0'})};
`
const QuickActionsHeaderText = styled.span`
font-weight:500;
color:#3c3c3c;
${smobile({fontSize:'12px'})};
`
const QuickActionsWrapper = styled.div`
border:1px solid #eee;
border-radius:7px;
display:grid;
grid-template-columns:1fr 1fr 1fr;
grid-gap:20px;
box-sizing:border-box;
padding:13px 0;
`
const QuickActions = styled.div`
width:100%;
cursor:pointer;
min-width:70px;

&:hover{
    transform:scale(1.06);
}
`
const QuickActionsIcons = styled.div`
background:lightgreen;
border-radius:7px;
width:50px;
height:40px;
display:flex;
align-items:Center;
justify-content:center;
`
const QuickActionsText = styled.span`
font-size:10px;
  ${smobile({fontSize:'10px'})}
`


const MobileDashboard = () => {
        const [view, setView] = useState(false);

  return (
    <Container>
      <Wrapper className="flex aic jcsb fdc">
        <Top>
          <Header className="flex aic jcsb">
            <HeaderLeft className="flex aic jcc">
              <HeaderImgCon>
                <HeaderImg src={require(".././images/person.png")} alt="" />
              </HeaderImgCon>
              <HeaderText>Hello Wasiu</HeaderText>
            </HeaderLeft>
            <HeaderRight>
              <HeaderRightIcon>
                <NotificationsNoneOutlined />
              </HeaderRightIcon>
            </HeaderRight>
          </Header>
        </Top>
        <Middle className="flex aic jcsb fdc">
          <QuickStatsCon>
            <QuickStatsHeaderCon>
              <QuickStatsHeaderText>QUICK STATS</QuickStatsHeaderText>
            </QuickStatsHeaderCon>
            <QuickStatsWrapper className="flex aic jcc">
              <QuickStats className="flex aifs jcc fdc">
                <QuickStatsLtText>Total Payroll</QuickStatsLtText>
                <QuickStatsText>$2,298,044,345,05</QuickStatsText>
              </QuickStats>
              <QuickStats className="flex aifs jcc fdc">
                <QuickStatsLtText>Total Payroll</QuickStatsLtText>
                <QuickStatsText>$2,298,044,345,05</QuickStatsText>
              </QuickStats>
            </QuickStatsWrapper>
          </QuickStatsCon>
          <DashboardFunds className=" aic jcsb w100 fdc">
            <DashboardFundsLeft className="w100">
              <DashboardFundsText>Wallet Balance</DashboardFundsText>
              <DashboardFundsPriceCon className="flex aic jcfs">
                {view ? (
                  <DashboardFundsPrice>$12,560,078,00</DashboardFundsPrice>
                ) : (
                  <DashboardFundsPrice>*************</DashboardFundsPrice>
                )}
                {view ? (
                  <RemoveRedEyeOutlined onClick={() => setView(false)} />
                ) : (
                  <VisibilityOff onClick={() => setView(true)} />
                )}
              </DashboardFundsPriceCon>
            </DashboardFundsLeft>
            <DashboardFundsRight className="w100">
              <DashboardFundsButton>Fund Wallet</DashboardFundsButton>
            </DashboardFundsRight>
          </DashboardFunds>
          <QuickActionsCon>
            <QuickActionsHeaderCon>
              <QuickActionsHeaderText>QUICK ACTIONS</QuickActionsHeaderText>
            </QuickActionsHeaderCon>
            <QuickActionsWrapper>
              <QuickActions className="flex aic jcc fdc">
                <QuickActionsIcons style={{ background: "#f0f7eb" }}>
                  <SavingsOutlined sx={{ color: "#12453b" }} />
                </QuickActionsIcons>
                <QuickActionsText>Pay Salaries</QuickActionsText>
              </QuickActions>
              <QuickActions className="flex aic jcc fdc">
                <QuickActionsIcons style={{ background: "#ffedec" }}>
                  <PersonAddAlt1Outlined
                    sx={{ color: "#ea4e4b", fontSize: "20px" }}
                  />
                </QuickActionsIcons>
                <QuickActionsText>Add Employee</QuickActionsText>
              </QuickActions>
              <QuickActions className="flex aic jcc fdc">
                <QuickActionsIcons style={{ background: "#f0eeff" }}>
                  <PriceChangeOutlined
                    sx={{ color: "#b6aded", fontSize: "20px" }}
                  />
                </QuickActionsIcons>
                <QuickActionsText>Send Payslips</QuickActionsText>
              </QuickActions>
              <QuickActions className="flex aic jcc fdc">
                <QuickActionsIcons style={{ background: "#fff2db" }}>
                  <RequestQuoteOutlined
                    sx={{ color: "#fdb231", fontSize: "20px" }}
                  />
                </QuickActionsIcons>
                <QuickActionsText>Edit Salaries</QuickActionsText>
              </QuickActions>
              <QuickActions className="flex aic jcc fdc">
                <QuickActionsIcons style={{ background: "#e5f6fe" }}>
                  <AttachMoneyOutlined
                    sx={{ color: "#2d7797", fontSize: "20px" }}
                  />
                </QuickActionsIcons>
                <QuickActionsText>Get a Loan</QuickActionsText>
              </QuickActions>
              <QuickActions className="flex aic jcc fdc">
                <QuickActionsIcons style={{ background: "#e7fbef" }}>
                  <SendOutlined sx={{ color: "#219653", fontSize: "20px" }} />
                </QuickActionsIcons>
                <QuickActionsText>Make a Transfer</QuickActionsText>
              </QuickActions>
              <QuickActions className="flex aic jcc fdc">
                <QuickActionsIcons style={{ background: "#Eaf6fc" }}>
                  <WifiCalling3Outlined
                    sx={{ color: "#32a7e2", fontSize: "20px" }}
                  />
                </QuickActionsIcons>
                <QuickActionsText>Airtime</QuickActionsText>
              </QuickActions>
              <QuickActions className="flex aic jcc fdc">
                <QuickActionsIcons style={{ background: "#f8edf9" }}>
                  <WifiOffOutlined
                    sx={{ color: "#b548c6", fontSize: "20px" }}
                  />
                </QuickActionsIcons>
                <QuickActionsText>Data</QuickActionsText>
              </QuickActions>
              <QuickActions className="flex aic jcc fdc">
                <QuickActionsIcons style={{ background: "#fff3e5" }}>
                  <ElectricalServicesOutlined
                    sx={{ color: "#ff8700", fontSize: "20px" }}
                  />
                </QuickActionsIcons>
                <QuickActionsText>Electricity</QuickActionsText>
              </QuickActions>
            </QuickActionsWrapper>
          </QuickActionsCon>
        </Middle>
        <Bottom>
          <MobileFooter route="dashboard" />
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default MobileDashboard