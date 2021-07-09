import React from "react";
import { IStock } from "./IStock";


type StockProps = {
    index: number
    stock: IStock
    removeStock: (index: number) => void
}

export const Stock = ({stock, index, removeStock}: StockProps) => {
    return <div className="flex-container stock">
        <div>{index+1}.</div>
        <div>{stock.stockName}</div>
        <div>|</div>
        <div>{stock.stockCode}</div>
        <div>|</div>
        <div>{stock.stockTreshhold}</div>
        <div>|</div>
        <div><button onClick={() => removeStock(index)}>X</button></div>
    </div>
}