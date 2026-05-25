{/* displays payments (UI), shows buttons, requests changes */}
function TransactionCard(props) {
    return (
        <div>
            <h3>Payment #{props.paymentID}</h3>
            <p>Amount: {props.amount}</p>
            <p>Currency: {props.currency}</p>
            <p>Fee: {props.fee}</p>
            <p>Status: {props.status}</p>
            <button onClick={props.markCompleted}>Complete</button>
            <button onClick={props.markFailed}>Fail</button>
            <button onClick={props.retryPayment}>Retry</button>
            <button onClick={props.markRefunded}>Refund</button>
        </div>
    );
}

export default TransactionCard;