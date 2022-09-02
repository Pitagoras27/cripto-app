import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import brandImg from './assets/img/imagen-criptos.png';
import { FormQuoter, ResultQuote, Spinner } from './components';
import { PATH_API } from './config/endpoints';
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

const CriptoApp = () => {
  const [retriveResultCriptos, setRetriveResultCriptos] = useState([]);
  const [results, setResults] = useState({});
  const [loader, setLoader] = useState(false);
  
  useEffect(() => {
    const retriveResults = Object.keys(retriveResultCriptos);
    if(retriveResults.length > 0) {
      setResults({});
      setLoader(true);
      const { currencySelected, criptoSelected } = retriveResultCriptos;
      
      const getData = async() => {
        try {
          const res = await fetch(`${PATH_API}/pricemultifull?fsyms=${criptoSelected}&tsyms=${currencySelected}`);
          const getResult = await res.json();

          setResults(getResult.DISPLAY[criptoSelected][currencySelected]);
          setLoader(false);
        } catch (error) {
          console.log({error});
          setLoader(false);
        }
      }
      
      getData();
    }
    
  }, [retriveResultCriptos]);

  return (
    <Container>
      <Img src={brandImg} alt="Cripto Quiter App" />
      <div>
        <Header>Cripto Quiter in real Time, try it!</Header>
        <FormQuoter setRetriveResultCriptos={setRetriveResultCriptos} />
        { loader && <Spinner /> }
        { results.PRICE && <ResultQuote results={results} />}
      </div>
    </Container>
  )
}

export default CriptoApp
