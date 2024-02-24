import styled from "styled-components";

const ImageDiv = styled.div`
  text-align:center;
  height:150px; 
  margin-top:10px;
  margin-bottom:10px;
  `;

const Image = styled.img`
  width:160px;
  height:160px;
`;

const Temp = styled.div`
  margin-top:10px;
  font-size:35px;
  color: #fff;
  text-transform:uppercase;
  text-align:center;
  font-weight:500;
`;

const City = styled(Temp)`
  color:yellow;
  font-weight:400;
  font-size:40px;
`;

const Country = styled(City)`
  color:lightgray;
  font-weight:600;
  font-size:18px;
`;

const Cord = styled.div`
  display:flex;
  justify-content:center;
  align-item:center;
  gap:10px;
  margin-top:10px;
  text-align:center;
`;

const LatLog = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-item:center;
  padding:10px;
`;


const LatLogSpan = styled.span`
  font-weight:bold;
  color:lightgray;
  font-size:18px;
  padding:5px;
`;

const DataContainer = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:10px;
`;

const Element = styled.div`
  text-align:center;
`;

const TextEL = styled.div`
  font-size:14px;
  color:#999;
  font-weight:400;
`;

export default { ImageDiv, Image, Temp, City, Country, Cord, LatLog, LatLogSpan, DataContainer, Element, TextEL };