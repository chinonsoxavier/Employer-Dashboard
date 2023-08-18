import styled from "styled-components";
import { mobile } from "../../responsive";
const Container = styled.div`
width:100%;
// background:red;
border-bottom:1px solid #eee;
`;
const Wrapper = styled.div`
  width: 100%;
  padding:12px 6px;
`;
const Left = styled.div`
flex:3;
gap:8px;
`;
const LeftImgCon = styled.div`
height:50px;
width:50px;
border-radius:50%;
${mobile({width:'40px',height:'40px'})};
`;
const LeftImg = styled.img`
object-fit:contain;
width:100%;
height:100%;
`;
const LeftTextCon = styled.div`
`;
const LeftText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size:16px;
  font-weight:400;
  ${mobile({fontSize:'14px'})}
`;
const LeftTextSm = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size:13px;
  font-weight:300;
    ${mobile({fontSize:'12px'})}
`;
const Right = styled.div`
flex:1;
`;
const RightText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight:500;
  font-size:19px;
  color:#145044;
  ${mobile({fontSize:'13px'})}
`;
const Card = () => {
  return <Container>
    <Wrapper className="flex aife jcsb" >
        <Left className="flex aic jcfs" >
        <LeftImgCon className="flex aic jcc" >
            <LeftImg src={require('../../images/person.png')} />
        </LeftImgCon>
        <LeftTextCon className="flex aifs jcfs fdc" >
            <LeftText>
                Caleb Nwafor
            </LeftText>
            <LeftTextSm>Accountant</LeftTextSm>
            <LeftTextSm>Female|Monthly</LeftTextSm>
        </LeftTextCon>
        </Left>
        <Right>
            <RightText>$250,789,00</RightText>
        </Right>
    </Wrapper>
  </Container>;
};

export default Card;
