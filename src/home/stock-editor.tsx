import React from "react";
import { useState } from "react";
import { IStock } from "./IStock";

type StockEditorProps = {
    addStock: (stock:IStock) => void
}

export const StockEditor = ({addStock}: StockEditorProps) => {

    const [stock, setStock] = useState<IStock>({stockName: "", stockCode: "", stockTreshhold: 0});

    return <div className="flex-container stock">
        <div><input type="text" onChange={(e) => setStock({...stock, stockName: e.target.value})}/></div>
        <div>|</div>
        <div><input type="text" onChange={(e) => setStock({...stock, stockCode: e.target.value})} /></div>
        <div>|</div>
        <div><input type="number" onChange={(e) => setStock({...stock, stockTreshhold: Number(e.target.value)})} /></div>
        <div>|</div>
        <div><button onClick={() => addStock(stock!)}>Add</button></div>
    </div>
}