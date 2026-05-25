{/* owns payments state, performs updates, decides how data changes */}

function markCompleted(id) {
    setPayments((prevPayments) =>
        prevPayments.map((p) =>
            p.paymentId === id ? { ...p, status: 'COMPLETED' } : p
        )
    );
}

function markFailed(id) {
    setPayments((prevPayments) =>
        prevPayments.map((p) =>
            p.paymentId === id ? { ...p, status: 'FAILED' } : p
        )
    );
}

function retryPayment(id) {
    setPayments((prevPayments) =>
        prevPayments.map((p) =>
            p.paymentId === id ? { ...p, status: 'PENDING' } : p
        )
    );
}

function markRefunded(id) {
    setPayments((prevPayments) =>
        prevPayments.map((p) =>
            p.paymentId === id ? { ...p, status: 'REFUNDED' } : p
        )
    );
}

function App() {
    {/* equivalent to java's ArrayList<payment> payments */}
    const [payments, setPayments] = useState([{
        paymentId : 1,
        amount: 100,
        status: 'PENDING'
    },
    {
        paymentId : 2,
        amount: 200,
        status: 'COMPLETED'
    },
    ]);


    return (
        <div>
            {/* map is equivalent to java's for loop */}
            {payments.map((p) => (
                <TransactionCard
                paymentId={p.paymentId}
                amount={p.amount}
                status={p.status}
                currency={p.currency}
                fee={p.fee}
                markCompleted={() => markCompleted(p.paymentId)}
                markFailed={() => markFailed(p.paymentId)}
                retryPayment={() => retryPayment(p.paymentId)}
                markRefunded={() => markRefunded(p.paymentId)}
            />
                
            ))};
        </div>

    );
}

export default App;