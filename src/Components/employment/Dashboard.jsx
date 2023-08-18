import { Add, FilterList, GridViewOutlined, Menu, Search } from "@mui/icons-material";
import styled from "styled-components";
import Card from "./Card";
import { mmobile, mobile } from "../../responsive";
import { useState } from "react";
const Container = styled.div``;
const Wrapper = styled.div``;
const HeaderCon = styled.div`
margin:15px 0;
`;
const HeaderWrapper = styled.div`
  width: 80%;
  ${mmobile({ width: "100%" })};
  border: 1px solid #eee;
  background: white;
  gap: 3px;
  padding: 3px;
  border-radius: 5px;
`;
const HeaderTextCon = styled.div`
  flex: 1;
  padding: 7px 0;
  border-radius: 5px;
  transition:1s all ;
  ${mobile({ padding: "3px 0" })};
`;
const HeaderText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  ${mobile({fontSize:'14px'})}
`;

const InputWrapper = styled.div`
gap:10px;
padding-bottom:10px;
margin-bottom:10px;
border-bottom:1px solid #eee;

`
const InputCon = styled.div`
border-radius:9px;
width:100%;
border:1px solid #eee;
// height:40px;
padding-right:8px;
`
const Input = styled.input`
padding:10px 0;
border: none;
  height: 100%;
  outline: none;
  width: 100%;
  border-radius: 9px;
  padding-left:8px;
  ${mobile({padding:'6px 0',paddingLeft:'5px'})}

  &::placeholder{
    color:grey;
    opacity:.7;
  }
`;

const FilterListCon = styled.div`
background:#eee;
padding:5px;
width:40px;
border-radius:5px;
height:100%;
${mobile({padding:'4px'})}
`

const LinksWrapper = styled.div``
const LinksCon = styled.div``
const Links = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const LinksInput = styled.input``
const LinksTxt = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  opacity:.6;
  color:grey;
  font-size:15px;
`;

const CardsCon = styled.div`
width:90%;
margin-top:15px;
`
const AddButton = styled.div`
border-radius:50%;
width:34px;
height:34px;
background:#145044;
color:white;
position:fixed;
bottom:80px;
right:50px;
cursor:pointer;
`;

const Dashboard = () => {

    const [employee,setEmployee]=useState(true)

  return (
    <Container>
      <Wrapper>
        <HeaderCon className="flex aic jcc">
          <HeaderWrapper className="flex aic jcc">
            <HeaderTextCon
              onClick={() => setEmployee(true)}
              className="flex aic jcc"
              style={{
                background: employee ? "#145044" : "#eee",
                color: employee ? "white" : "#145044",
              }}
            >
              <HeaderText>All Employee</HeaderText>
            </HeaderTextCon>
            <HeaderTextCon
              onClick={() => setEmployee(false)}
              className="flex aic jcc"
              style={{
                background: employee ? "#eee" : "#145044",
                color: employee ? "#145044" : "white",
              }}
            >
              <HeaderText>Departments</HeaderText>
            </HeaderTextCon>
          </HeaderWrapper>
        </HeaderCon>
        <InputWrapper className="flex aic jcc">
          <InputCon className="flex aic jcfe">
            <Input placeholder="search" />
            <Search sx={{ opacity: 0.4 }} />
          </InputCon>
          <FilterListCon className="flex aic jcc">
            <FilterList />
          </FilterListCon>
        </InputWrapper>
        <LinksWrapper className="flex aic jcsb">
          <LinksCon className="flex aic jcc">
            <Links>
              <Menu sx={{ fontSize: "23px", opacity: 0.6 }} />
            </Links>
            <Links
              style={{
                margin: "0 7px",
                borderRight: "1px solid #eee",
                borderLeft: "1px solid #eee",
                padding: "0 6px",
              }}
            >
              <GridViewOutlined sx={{ fontSize: "22px", opacity: 0.6 }} />
            </Links>
            <Links>
              <LinksTxt>Archived</LinksTxt>
            </Links>
          </LinksCon>
          <div>
            <LinksInput type="checkbox" />
            <LinksTxt>Select</LinksTxt>
          </div>
        </LinksWrapper>
        <CardsCon className="flex aic jcc fdc">
          <AddButton className="flex aic jcc">
            <Add />
          </AddButton>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsCon>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
