import { Search, TuneOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { newlmobile } from '../responsive';

const Container = styled.div``
const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 25px;
  ${newlmobile({display:'none'})}
`;
const Header = styled.div`

`
const HeaderText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight:500;
  font-size:22px;
`;

const InputWrapper = styled.div`
gap:15px;
// position:sticky;
// top:10px;
`
const InputCon = styled.div`
width:100%;
border:1px solid gray;
height:30px;
border-radius:15px;
margin:10px 0;
`
const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  // background:transparent;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  padding-left:10px;

  &::placeholder {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
    font-weight: 500;
  }
`;
const InputIcon = styled.div`
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 0 7px;
  background: #9ad0b0;
  height: 100%;
  width: 40px;
  cursor: pointer;
`;

const FilterCon = styled.div`
background:white;
padding:0 6px;
border:1px solid grey;
border-radius:13px;
width:60px;
height:30px;
cursor:pointer;
`
const FilterText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
font-size:13px;
  `;

const MyActivitiesCon = styled.div`

`
const MyActivities = styled.div``
const MyActivitiesDate = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight:500;
`;
const MyActivitiesWrapper = styled.div`
  padding: 10px 20px;
  background: white;
  border-radius:13px;
  box-shadow:0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  height:60px;
  margin:8px 0;
`;
const MyActivitiesDiv = styled.div`
display:flex;
align-items:flex-start;
justify-content:space-between;
flex-direction:column;
height:100%;
`;
const MyActivitiesWrapperTopTxt = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size:13px;
`;
const MyActivitiesWrapperBottomLeft = styled.div`
`;
const MyActivitiesWrapperBottomImgCon = styled.div`
border-radius:50%;
width:30px;
height:30px;
background:lightgreen;
color:white;
margin-right:10px;
`;
const MyActivitiesWrapperBottomImg = styled.img`
`;
const MyActivitiesWrapperBottomTxt = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size:15px;
  font-weight:400;
`;

const Activities = () => {

    const Myacticities = [
      {
        date: "Wednessday,November 09,2023",
        activities: [
          {
            type: "PAYROLL",
            img: "",
            name: "Badmus Kemis",
            activity: "Paid Wednessday,November 09,2023",
            Employee:62,
            time:'15:15'
          },
          {
            type: "PAYROLL",
            img: "",
            name: "Kalu Abasiama ",
            activity: "Added New Employee",
            Employee:'04',
          },
        ],
      },

      {
        date: "Wednessday,November 04,2023",
        activities: [
          {
            type: "Bonus",
            img: "",
            name: "Badmus Kemis",
            activity: "Added New Bonus",
            Bonus:"XMAS Bonus",
          },
          {
            type: "Wallet",
            img: "",
            name: "Badmus Kemis",
            activity: "Paid Wednessday,November 09,2023",
            Amount:'1.168,889,93',
            time:'15:15'
          },
        ],
      },
      
    ];

  return (
    <Container>
      <Wrapper>
        <Header className="flex aic jcfs w100">
          <HeaderText>Recent Activities</HeaderText>
        </Header>
        <InputWrapper className="flex aic jcc">
          <InputCon className="flex aic jcc">
            <Input type="search" placeholder="search employees" />
            <InputIcon className="flex aic jcc">
              <Search />
            </InputIcon>
          </InputCon>
          <FilterCon className="flex aic jcsa ">
            <TuneOutlined sx={{ fontSize: "17px" }} />
            <FilterText>Filter</FilterText>
          </FilterCon>
        </InputWrapper>
        <MyActivitiesCon>
          <MyActivities>
            <MyActivitiesDate>Wednessday,November 09,2023</MyActivitiesDate>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
          </MyActivities>
          <MyActivities>
            <MyActivitiesDate>Wednessday,November 09,2023</MyActivitiesDate>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
          </MyActivities>
          <MyActivities>
            <MyActivitiesDate>Wednessday,November 09,2023</MyActivitiesDate>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
          </MyActivities>
          <MyActivities>
            <MyActivitiesDate>Wednessday,November 09,2023</MyActivitiesDate>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
          </MyActivities>
          <MyActivities>
            <MyActivitiesDate>Wednessday,November 09,2023</MyActivitiesDate>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
          </MyActivities>
          <MyActivities>
            <MyActivitiesDate>Wednessday,November 09,2023</MyActivitiesDate>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
          </MyActivities>
          <MyActivities>
            <MyActivitiesDate>Wednessday,November 09,2023</MyActivitiesDate>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
            <MyActivitiesWrapper className='flex aic jcsb' >
              {/* <MyActivitiesWrapperTop className="flex aic jcsb"> */}
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>PAYROLL</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomLeft className="flex aic jcc">
                  <MyActivitiesWrapperBottomImgCon className="flex aic jcc">
                    BM
                  </MyActivitiesWrapperBottomImgCon>
                  <MyActivitiesWrapperBottomTxt>
                    Badmus Kermia
                  </MyActivitiesWrapperBottomTxt>
                </MyActivitiesWrapperBottomLeft>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>ACTIVITY</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  Paid November 09,2023 Salary
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>EMPLOYEE</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>52</MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
              <MyActivitiesDiv>
                <MyActivitiesWrapperTopTxt>TIME</MyActivitiesWrapperTopTxt>
                <MyActivitiesWrapperBottomTxt>
                  16:15
                </MyActivitiesWrapperBottomTxt>
              </MyActivitiesDiv>
            </MyActivitiesWrapper>
          </MyActivities>
        </MyActivitiesCon>
      </Wrapper>
    </Container>
  );
}

export default Activities