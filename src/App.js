import React, { Component } from 'react';
import Transactions from './components/Transactions';
import './styles.css';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            balanceAmount: 0,
            transactionList: [],
            inputAmount: '',
        }
    }

    onChange = e => this.setState({inputAmount: e.target.value})

    addorRemoveTransactions = type => {
        const inputAmount = parseInt(this.state.inputAmount);
        const { transactionList } = this.state;
        if(inputAmount) {
            const newTransaction = { time: new Date().toISOString(), amount: inputAmount, type };
            let balanceAmount = 0, isStateSet = true;
            if(type === 'Add') {
                balanceAmount = this.state.balanceAmount + inputAmount;
                isStateSet = true;
            } else if(type === 'Remove') {
                if (this.state.balanceAmount < 1) {
                    isStateSet = false;
                } else {
                    balanceAmount = this.state.balanceAmount - inputAmount;
                }
            }

            if(isStateSet) {
                this.setState({
                    transactionList: [...transactionList, newTransaction],
                    balanceAmount: balanceAmount,
                    inputAmount: ''
                });
            }
        }
    }

    render() {
        const { balanceAmount, transactionList, inputAmount } = this.state;

        return (
            <div className="wrapper">
                <h1>Expense Tracker - Basic</h1>
                <div className="input-wrapper">
                    <p>Balance : {balanceAmount}</p>
                    <input type="number" placeholder="Enter transaction amount" value={inputAmount} onChange={this.onChange} required /> <br />
                    <button onClick={() => this.addorRemoveTransactions('Add')}>Add</button>
                    <button onClick={() => this.addorRemoveTransactions('Remove')}>Remove</button>
                </div>
                {transactionList && transactionList.length > 0 && <Transactions list={transactionList}/>}
            </div>
        )
    }
}

export default App