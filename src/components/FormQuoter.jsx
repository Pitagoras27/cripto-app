import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { PATH_API } from "../config/endpoints.js";
import { coins } from "../data/coins.js";
import { useSelect } from "../hooks/useSelect";
import { AlertMessage } from "./AlertMessage.jsx";

const Input = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  -webkit-transition: background-color .3s ease;
  transition: background-color .3s ease;
  margin-top: 30px;
`

export const FormQuoter = ({ setRetriveResultCriptos }) => {
  const [ getCriptoOptions, setGetCriptoOptions] = useState([]);
  const [ alertError, setAlertError] = useState(false);
  const [ alertErrorMessage, setAlertErrorMessage] = useState('');

  const [ currencySelected, CurrencySelector ] = useSelect('Choose your Coin', coins);
  const [ criptoSelected, CriptoSelector ] = useSelect('Choose your Cripto', getCriptoOptions);

  useEffect(() => {

    const getData = async() => {
      try {
        const currencyData = await fetch(`${PATH_API}/top/mktcapfull?limit=20&tsym=USD`);
        const { Data } = await currencyData.json();

        const criptoData = Data.map(item => ({
            id: item.CoinInfo.Name,
            name: item.CoinInfo.FullName
          })
        );

        setGetCriptoOptions(criptoData);

      } catch(err) {
        setAlertErrorMessage('Don\'t retrive information, try later')
        setAlertError(true);
      }
    }

    getData();
  }, [currencySelected]);

  const onSubmitGetCryptoInfo = (e) => {
    e.preventDefault();

    if([currencySelected, criptoSelected].includes('')) {
      setAlertErrorMessage('All fields are mandatory');
      setAlertError(true);
      return;
    }

    setAlertError(false);
    setRetriveResultCriptos({ currencySelected, criptoSelected });
  }

  return (
    <>
      { alertError && (<AlertMessage>{alertErrorMessage}</AlertMessage>)}
      <form onSubmit={onSubmitGetCryptoInfo}>
          <CurrencySelector />
          <CriptoSelector />

          <Input type="submit" />
      </form>
    </>
  )
}
