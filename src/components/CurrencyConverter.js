import React from 'react'
import {useState} from 'react'
import CurrencyConverter from ",/ExchangeRate"
function CurrencyConverter() {
    const currencies = ['BTC','ETH','USD','XRP','LTC','ADA']
    const [chosenPrimaryCurrency,setChosenPrimaryCurrency] = useState('BTC');
    const [chosenSecondaryCurrency,setChosenSecondaryCurrency] = useState('BTC');
    const [amount, setAmount] = useState(1);
    return (
        <div className = "currency-converter">
            <h2> currency converter</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Primary Currency: </td>
                            <td>
                               <input
                                type= "number"
                                name="currency-amount-1"
                                value ={amount}
                                onChange={(e) => setAmount(e.target.value)}
                               />    
                           </td>
                                   
                           <td>
                           <select
                                      value={chosenPrimaryCurrency}
                                      name="currency-option-1"
                                      className="currency-options"
                                      onChange={(e)=> setChosenPrimaryCurrency(e.target)}
                                    >
                                                {currencies.map((currency, _index)=>(<option key={_index}>{currency}</option>))}
                                    </select>
                           </td>
                        </tr>


                        <tr>
                            <td>Secondary Currency: </td>
                            <td>
                               <input
                                type= "number"
                                name="currency-amount-2"
                                value ={""}
                               />    
                           </td>
                                   
                           <td>
                           <select
                                      value={chosenSecondaryCurrency}
                                      name="currency-option-2"
                                      className="currency-options"
                                      onChange={(e)=> setChosenSecondaryCurrency(e.target)}
                                    >
                 {currencies.map((currency, _index)=>(<option key={_index}>{currency}</option>))}

                                    </select>
                           </td>
                        </tr>
                    </tbody>
                 </table>
            <ExchangeRate/>
        </div>
    )
}

export default CurrencyConverter
