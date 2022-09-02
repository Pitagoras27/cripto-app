import styled from "@emotion/styled";
import { coins } from "../data/coins.js";
import { useSelect } from "../hooks/useSelect";

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

export const FormQuoter = () => {
  const [ currencySelected, CurrencySelector ] = useSelect('Choose your Coin', coins);
  const [ criptoSelected, CriptoSelector ] = useSelect('Choose your Cripto');

  // TODO: do request to: // https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=[`currencySelected`]

  const onSubmitGetCryptoInfo = (e) => {
    e.preventDefault();
    // Validate fields it's not empty

    // If correct data sed info to parent via function state
    // console.log(currencySelected);
  }

  return (
    <form onSubmit={onSubmitGetCryptoInfo}>
        <CurrencySelector />
        <CriptoSelector />

        <Input type="submit" />
    </form>
  )
}
