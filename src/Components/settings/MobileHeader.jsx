import { ArrowBack, Menu, NotificationsNoneOutlined,  } from "@mui/icons-material";
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Container = styled.div`
background:white;

`
const Wrapper = styled.div`
width:94%;
padding:10px 0;
`
const Con = styled.div``
const ConText = styled.span`
font-size:14px;
`
const LeftIcon = styled.div`
  background:#eee;
  width:30px;
  height:30px;
  border-radius:5px;
`

const MobileHeader = () => {
  return (
    <Container className="flex aic jcc" >
      <Wrapper className="flex aic jcsb">
        <Con>
        <Link to='/' className="link" >
          <LeftIcon className='flex aic jcc' >
            {/* <Menu /> */}
            <ArrowBack sx={{fontSize:'15px'}} />
          </LeftIcon>
        </Link>
        </Con>
        <Con>
          <ConText>Settings</ConText>
        </Con>
        <Con>
          <NotificationsNoneOutlined />
        </Con>
      </Wrapper>
    </Container>
  );
}

export default MobileHeader