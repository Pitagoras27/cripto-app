import styled from "@emotion/styled";

const Div = styled.div`
  background-color: #B7322C;
  color: #FFF;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: 'Lato',sans-serif;
  font-weight: 700;
  text-align: center;  
`

export const AlertMessage = ({ children }) => (<Div>{children}</Div>);