import { useState } from 'react';
import styled from '@emotion/styled';
import { FormQuoter } from './components';
import brandImg from './assets/img/imagen-criptos.png';
import './styles/styles.css';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    -webkit-column-gap: 2rem;
    column-gap: 2rem;
  }
`

const Header = styled.h1`
  font-family: 'Lato',sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &:after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const Img = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`
// TODO: Here send last request, to show results
// TODO: retrive this data: PRICE HIGHDAY LOWDAY CHANGEPCTDAY
// ? https://min-api.cryptocompare.com/data/pricemultifull?fsyms=[CRIPTO-KEY]&tsyms={KEY-COIN}

const CriptoApp = () => {
  const [retriveResultCriptos, setRetriveResultCriptos] = useState([]);
  return (
    <Container>
      <Img src={brandImg} alt="Cripto Quiter App" />
      <div>
        <Header>Cripto Quiter in real Time, try it!</Header>
        <FormQuoter setRetriveResultCriptos={setRetriveResultCriptos} />
      </div>
    </Container>
  )
}

export default CriptoApp
