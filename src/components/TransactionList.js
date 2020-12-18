import React, { useContext, useEffect }from 'react'
import { GlobalContext } from '../contexts/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
    const { transactions, dispatch } = useContext(GlobalContext);
    
    // 初始化从缓存获取数据
    useEffect(() => {
        const state = JSON.parse(localStorage.getItem('state'));
        dispatch({ type: 'GET_TRANSACTIONS_FOM_LOCALSTORAGE', data: state });
    }, []);
  
    // 数据变化存入缓存
    useEffect(() => { 
        const state = JSON.stringify({ transactions });
        localStorage.setItem('state', state);
    },[transactions])

    return (
        <div>
            <h3>历史记录</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction transaction={transaction} key={transaction.id}/>
                ) )}
                   
                </ul>
        </div>
    )
}
