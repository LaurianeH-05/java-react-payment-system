{/* owns payments state, performs updates, decides how data changes */}
import { updateStatus } from './utils/paymentActions';

function fetchPayments() {
    return [
        { paymentId: 1, amount:100, status: "PENDING"},
        { paymentId: 2, amount:200, status: "COMPLETED"},
    ]
}

function App() {
    {/* equivalent to java's ArrayList<payment> payments */}
    const [payments, setPayments] = useState([]);

    setPayments(fetchPayments());

    function getStatusSummary() {
    const summary = {
        PENDING: 0,
        COMPLETED: 0,
        FAILED: 0,
        REFUNDED: 0,
    }
    payments.forEach(p => {
        summary[p.status]++;
    });
    return summary;
    }

    function printAllPayments() {
        payments.forEach(p => {
            console.log(`Payment ${p.paymentId}: ${p.amount} - ${p.status}`);
        });
    }

    return (
        <div>
            {/* map is equivalent to java's for loop */}
            {payments.map((p) => (
                <TransactionCard
                paymentId={p.paymentId}
                amount={p.amount}
                status={(p.status)}
                currency={p.currency}
                fee={p.fee}
                markCompleted={() => setPayments((prev) => updateStatus(prev, p.paymentId, "COMPLETED"))}
                markFailed={() => setPayments((prev) => updateStatus(prev, p.paymentId, "FAILED"))}
                retryPayment={() => setPayments((prev) => updateStatus(prev, p.paymentId, "PENDING"))}
                markRefunded={() => setPayments((prev) => updateStatus(prev, p.paymentId, "REFUNDED"))}
                />
                
            ))};
        </div>

    );
}

export default App;