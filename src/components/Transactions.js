import React from 'react';

function Transactions(props) {
    return(
        <div className="transaction-wrapper">
            <div className="transaction-title">Transactions: </div><br />
            {
                props.list.map(item => <>
                    <span>{item.time}</span> - <span>{item.amount}</span> - <span>{item.type}</span><br />
                </>)
            }
        </div>
    )
}

export default Transactions