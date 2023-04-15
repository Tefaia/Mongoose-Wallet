import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext({});

const { ethereun }: any = window;

const getEthereumContract = async () => {
    const provider = new ethers.BrowserProvider(ethereun);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, await signer);
    return transactionContract;
}


export const TransactionsProvider = ({ children }) => {
    return (
        <TransactionContext.Provider value={'test'}>
            {children}
        </TransactionContext.Provider>
    )
}