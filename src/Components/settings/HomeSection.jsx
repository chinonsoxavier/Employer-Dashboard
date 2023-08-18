import { KeyboardArrowDown, KeyboardArrowLeft } from "@mui/icons-material";
import { AddAPhotoRounded } from "@mui/icons-material";

import { TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { ltablet, mobile } from "../../responsive";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
width:94%;
`;
const BuisinessProfile = styled.div`
  border-radius: 13px;
  padding: 9px;
  background: white;

`;
const BuisinessProfileTxt = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  ${mobile({fontSize:'13px'})}
`;

const ProfileDetailsWrapper = styled.div`
  background: white;
  border-radius: 5px;
  padding: 6px;
  margin-top: 10px;
`;
const ProfileDetailsCon = styled.div`
  border-radius: 5px;
  border: 1px solid #eee;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const ProfileDetails = styled.div`
  border: 1px solid #eee;
  padding: 10px 0;
  cursor: pointer;
`;
const ProfileDetailsText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  ${mobile({fontSize:'12px'})}
`;

const CompanyInfo = styled.div`
  background: white;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 6px;
  margin-top: 10px;
`;

const CompanyInfoHeader = styled.div`
  border-bottom: 1px solid #eee;
  padding: 7px 0;
  margin: 2px 0;
`;
const CompanyInfoHeaderText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  font-weight: 500;
  ${mobile({fontSize:'14px'})}
`;

const UploadInfosCon = styled.div`
  box-sizing: border-box;
  padding: 0 5px;
  background: white;
`;
const UploadInfos = styled.div`
  padding-top: 12px;
  background: white;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
`;
const Logo = styled.div`
  gap: 20px;
    margin:8px 0;
`;
const LogoImgCon = styled.div``;
const LogoImg = styled.img`
  object-fit: contain;
  width: 90px;
  height: 90px;
`;

const LogoBtnLabel = styled.button`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #145044;
  color: #145044;
  background: rgb(231, 250, 231);
  border-radius: 5px;
  padding: 2px 4px;
`;
const LogoBtn = styled.button`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #145044;
  color: #145044;
  background: rgb(231, 250, 231);
  border-radius: 5px;
  padding: 2px 4px;
`;

const TextFieldCon = styled.div`
${ltablet({width:'100%'})};
margin-top:20px;
`;
const Registered = styled.div``;
const RegisteredText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
`;
const RegisteredTextCon = styled.div`
  margin: 4px 0;
`;
const RegisteredBtntCon = styled.div`
  gap: 6px;
`;
const RegisteredBtn = styled.div`
  border-radius: 5px;
  //   background: #145044;
  height: 20px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
`;

const Format = styled.div`
  margin: 12px 0;
`;
const FormatText = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 11px;
  margin: 0 5px;
`;

const InputInformation = styled.div`
  margin: 18px 0;
`;

const ButtonWrapper = styled.div`
background:white;
width:100%;
padding:20px 10px;
box-sizing:border-box;
`

const ButtonCon = styled.div`
gap:10px;
`
const Button = styled.div`
border-radius:16px;
padding:10px 20px;
height:13px;
width:100px;
cursor:pointer;
`

const HomeSection = () => {
  const [avatar, setAvatar] = useState(null);
  const [CACDoc, setCACDoc] = useState(null);
  const [Address, setAddress] = useState(null);
  const [yes,setYes]=useState(true)
 const handleFileInputChange = (e) => {
    const file = e.target.files[0];
   setAvatar(file);
 };
 const handleFileInputChange2 = (e) => {
    const file = e.target.files[1];
   setCACDoc(file);
 };
 const handleFileInputChange3 = (e) => {
    const file = e.target.files[2];
   setAddress(file);
 };
  return (
    <Container>
      <Wrapper>
        <BuisinessProfile className="flex aic jcsb">
          <BuisinessProfileTxt>Buisiness Profile</BuisinessProfileTxt>
          <KeyboardArrowDown />
        </BuisinessProfile>
        <ProfileDetailsWrapper>
          <ProfileDetailsCon>
            <ProfileDetails
              style={{ background: "rgb(231, 250, 231)" }}
              className="flex aic jcc"
            >
              <ProfileDetailsText style={{ fontWeight: "500" }}>
                Company
              </ProfileDetailsText>
            </ProfileDetails>
            <ProfileDetails className="flex aic jcc">
              <ProfileDetailsText>CEO/Founder</ProfileDetailsText>
            </ProfileDetails>
            <ProfileDetails className="flex aic jcc">
              <ProfileDetailsText>Company/Director</ProfileDetailsText>
            </ProfileDetails>
            <ProfileDetails className="flex aic jcc">
              <ProfileDetailsText>Account Information</ProfileDetailsText>
            </ProfileDetails>
            <ProfileDetails className="flex aic jcc">
              <ProfileDetailsText>Branch/Department</ProfileDetailsText>
            </ProfileDetails>
            <ProfileDetails className="flex aic jcc">
              <ProfileDetailsText>KYC Information</ProfileDetailsText>
            </ProfileDetails>
          </ProfileDetailsCon>
        </ProfileDetailsWrapper>
        <CompanyInfo>
          <CompanyInfoHeader className="flex aic jcfs">
            <KeyboardArrowLeft sx={{ color: "gray" }} />
            <CompanyInfoHeaderText>
              Edit Company Information
            </CompanyInfoHeaderText>
          </CompanyInfoHeader>
        </CompanyInfo>
        <UploadInfosCon>
          <UploadInfos>
            <Logo className="flex aife jcfs settingsLink">
              {avatar ? (
                <LogoImgCon>
                  <LogoImg src={URL.createObjectURL(avatar)} alt="" />
                </LogoImgCon>
              ) : (
                <AddAPhotoRounded />
              )}
              <label
                htmlFor="file-input"
                className="flex aic jcc"
                style={{
                  fontFamily:
                    ' "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                  border: "1px solid #145044",
                  color: " #145044",
                  background: "rgb(231, 250, 231)",
                  borderRadius: "5px",
                  padding: " 2px 4px",
                
                }}
              >
                <span style={{fontSize:'12px'}}>Upload a file</span>
                <input
                  type="file"
                  name="avatar"
                  id="file-input"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileInputChange}
                  className=""
                  style={{
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    padding: 0,
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0,0,0,0)",
                    borderWidth: 0,
                  }}
                />
              </label>
            </Logo>
            <TextFieldCon>
              <TextField
                fullWidth
                id=""
                className="settingsInput"
                label="Company Name"
                placeholder="eg:Juyonna Travels"
                variant="outlined"
                defaultValue="Joyonna travels"
              />
            </TextFieldCon>
            <Registered className="settingsLink flex aifs jcc fdc">
              <RegisteredTextCon>
                <RegisteredText>Is your company registered?</RegisteredText>
              </RegisteredTextCon>
              <RegisteredBtntCon className="flex aic jcfs">
                <RegisteredBtn
                  onClick={() => setYes(true)}
                  style={{
                    background: yes ? "#145044" : "white",
                    color: yes ? "white" : "#145044",
                    border: yes ? "none" : "1px solid #145044",
                  }}
                >
                  Yes
                </RegisteredBtn>
                <RegisteredBtn
                  onClick={() => setYes(false)}
                  style={{
                    color: yes ? "#145044" : "white",
                    border: yes ? "1px solid #eee" : "#145044",
                    background: yes ? "white" : "#145044",
                  }}
                >
                  No
                </RegisteredBtn>
              </RegisteredBtntCon>
              <Format className="flex aic jcfs">
                <div className="addProductItem" id="inputFile">
                  <label
                    htmlFor="Cac Doc."
                    className="flex aic jcc"
                    style={{
                      fontFamily:
                        ' "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                      border: "1px solid #145044",
                      color: " #145044",
                      background: "rgb(231, 250, 231)",
                      borderRadius: "5px",
                      padding: " 2px 4px",
                    }}
                  >
                    <span style={{fontSize:'12px'}}>Upload CAC Doc</span>
                    <input
                      type="file"
                      name="avatar"
                      id="Cac Doc."
                      accept=".jpg,.jpeg,.png"
                      onChange={handleFileInputChange2}
                      className=""
                      style={{
                        position: "absolute",
                        width: "1px",
                        height: "1px",
                        padding: 0,
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0,0,0,0)",
                        borderWidth: 0,
                      }}
                    />
                  </label>
                </div>
                {/* <LogoBtn>Upload CAC Doc.</LogoBtn> */}
                <FormatText>Jpeg and Png Only (2mb max)</FormatText>
              </Format>
            </Registered>
            <InputInformation className="settingsLink">
              <TextField
                fullWidth
                className="settingsInput"
                label="Office Address"
                placeholder="17,Simbat Abiola Way ,Ikeja"
                variant="outlined"
                defaultValue="17,Simbat Abiola Way ,Ikeja"
              />
              <Format className="flex aic jcfs">
                <div className="addProductItem" id="inputFile3">
                  <label
                    htmlFor="Address"
                    className="flex aic jcc"
                    style={{
                      fontFamily:
                        ' "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                      border: "1px solid #145044",
                      color: " #145044",
                      background: "rgb(231, 250, 231)",
                      borderRadius: "5px",
                      padding: " 0 4px",
                    }}
                  >
                    <span style={{fontSize:'12px'}} >Upload Proof of address</span>
                    <input
                      type="file"
                      name="avatar"
                      id="Address"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleFileInputChange3}
                      className=""
                      style={{
                        position: "absolute",
                        width: "1px",
                        height: "1px",
                        padding: 0,
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0,0,0,0)",
                        borderWidth: 0,
                      }}
                    />
                  </label>
                </div>
                <FormatText>eg Nepa bill,etc</FormatText>
              </Format>
            </InputInformation>
            <InputInformation>
              <TextField
                fullWidth
                className="settingsInput"
                label="Company size"
                placeholder="number of employee`s"
                variant="outlined"
                defaultValue="20 and above"
              />
            </InputInformation>
            <InputInformation>
              <TextField
                fullWidth
                className="settingsInput"
                label="Pension code"
                placeholder="Pension code"
                variant="outlined"
                defaultValue="1dd93739393739837"
              />
            </InputInformation>
            <InputInformation>
              <TextField
                fullWidth
                className="settingsInput"
                label="PAYE State"
                placeholder="PAYE State"
                variant="outlined"
                defaultValue="Lagos"
              />
            </InputInformation>
            <InputInformation>
              <TextField
                fullWidth
                className="settingsInput"
                label="PAYE Id"
                placeholder="PAYE Id"
                variant="outlined"
                defaultValue="N-72883g3b383"
              />
            </InputInformation>
            <InputInformation>
              <TextField
                fullWidth
                className="settingsInput"
                label="NHF Code"
                placeholder="NHF code"
                variant="outlined"
                defaultValue="10002988383837733"
              />
            </InputInformation>
            <InputInformation>
              <TextField
                fullWidth
                className="settingsInput"
                label="Website"
                placeholder="company website "
                variant="outlined"
                defaultValue="www.customerwebsite.com"
              />
            </InputInformation>
            <InputInformation>
              <TextField
                fullWidth
                className="settingsInput"
                label="Industry"
                placeholder="company type"
                variant="outlined"
                defaultValue="Travel and Touring"
              />
            </InputInformation>
          </UploadInfos>
        </UploadInfosCon>
        <ButtonWrapper>
          <ButtonCon className="flex aic jcfs">
            <Button
              className="flex aic jcc"
              style={{ border: "1px solid #145044", color: "#145044" }}
            >
              Cancel
            </Button>
            <Button
              className="flex aic jcc"
              style={{ background: "#145044", color: "white" }}
            >
              Save
            </Button>
          </ButtonCon>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default HomeSection;
