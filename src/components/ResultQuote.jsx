import styled from "@emotion/styled";
import { BASE } from "../config/endpoints";

const Container = styled.div`
  color: #FFF;
  font-family: 'Lato',sans-serif;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;

  p {
    font-size: 24px;

    span {
      display: block;
      font-weight: 700;
    }
  }
`;

const Img = styled.img`
  display: block;
  width: 120px;
`

const PSecondary = styled.p`
  font-size: 18px !important;
  line-height: 26px;

  span {
    display: block;
    font-weight: 700;
  }
`

export const ResultQuote = ({results}) => {
  const {
    IMAGEURL: icon,
    PRICE: price,
    HIGHDAY: highday,
    LOWDAY: lowday,
    CHANGEPCT24HOUR: changes24Hours,
    LASTUPDATE: lastUpdate
  } = results;
  console.log(`${BASE}/${icon}`)

  return (
    <Container>
      <Img
        src={ `${BASE}/${icon}` }
        alt="criptocurrency"
      />
      <div>
        <p> The current price is:
          <span>{price}</span>
        </p>
        
        <PSecondary> Highest price of the day is:
          <span>{highday}</span>
        </PSecondary>
        
        <PSecondary> Lowest price of the day is:
          <span>{lowday}</span>
        </PSecondary>

        <PSecondary> Latest Variations are:
          <span>{changes24Hours}</span>
        </PSecondary>

        <PSecondary> Latest Update are:
          <span>{lastUpdate}</span>
        </PSecondary>
      </div>
    </Container>
  )
}
