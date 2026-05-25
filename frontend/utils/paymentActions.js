export function updateStatus(payments, id, newStatus) {
    return payments.map((p) =>
        p.paymentId === id ? { ...p, status: newStatus } : p
    );
}