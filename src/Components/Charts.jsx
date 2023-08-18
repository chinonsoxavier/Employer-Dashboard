import { KeyboardArrowDown } from '@mui/icons-material';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';
import { newlmobile } from '../responsive';
const Container = styled.div`
box-sizing:box-sizing;
padding:25px;
${newlmobile({display:'none'})}
`;
const Wrapper = styled.div`
background:white;
border-radius:13px;
 box-shadow:0px 0px 15px -10px rgba(0, 0, 0, 0.75);
 padding:25px;
`
const Header = styled.div`
margin-bottom:20px;
`
const HeaderTextCon = styled.div``
const HeaderText = styled.span`
font-size:22px;
font-weight:600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const HeaderTextSm = styled.span`
font-size:12px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const ChartsData = styled.div``

const Charts = () => {
     
const data = [
  {
    name: "JAN",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "MAR",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: " APR",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: " MAY",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: " JUNE",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: " JULY",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: " AUG",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: " SEP",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: " OCT",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: " NOV",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: " DEC",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
  return (
    <Container>
      <Wrapper>
        <Header className="flex aic jcsb">
          <HeaderTextCon className="flex aifs jcc fdc">
            <HeaderTextSm>Inflow</HeaderTextSm>
            <HeaderText style={{ color: "green" }}>$1,567,552</HeaderText>
          </HeaderTextCon>
          <HeaderTextCon className="flex aifs jcc fdc">
            <HeaderTextSm>Outflow</HeaderTextSm>
            <HeaderText style={{ color: "red" }}>$1,567,552</HeaderText>
          </HeaderTextCon>
          <HeaderTextCon className="flex aic jcc">
            <HeaderTextSm>Inflow/Outflow</HeaderTextSm>
            <KeyboardArrowDown sx={{ fontSize: "15px" }} />
          </HeaderTextCon>
        </Header>
        <ChartsData>
          <ResponsiveContainer width="95%" aspect={5 / 2} minWidth={100}  >
            <LineChart width='100%' height={300} data={data}>
              {/* <CartesianGrid strokeDasharray="" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip />
          <Legend /> */}
          <Line type='basis' dataKey="pv" stroke="red"  />
          <Line type="basis" dataKey="uv" stroke="green" />
          </LineChart>
          </ResponsiveContainer>
        </ChartsData>
      </Wrapper>
    </Container>
  );
}

export default Charts