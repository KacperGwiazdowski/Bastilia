import React from "react";
import { IStock } from "./IStock";
import { Stock } from "./stock";
import { StockEditor } from "./stock-editor";
import "./stocks.css"


let stocks: IStock[] = [
    {stockName: "Apple", stockCode: "AAPL", stockTreshhold: 2137},
    {stockName: "Microsoft", stockCode: "MSFT", stockTreshhold: 2137},
    {stockName: "Amazon", stockCode: "AMZN", stockTreshhold: 2137},
]

export const Stocks = () => {


    const removeStock = (index: number) => {
        console.log(index);
    }  

    const addStock = (stock: IStock) => {
        console.log(stock)
    }

    return <div className="stocks flex-container vertical">
        <div>Stocks watched:</div>
        {stocks.map((x, index) => <Stock removeStock={removeStock} index={index} stock={x} key={x.stockName} />)}
        <StockEditor addStock={addStock} />
    </div>
}