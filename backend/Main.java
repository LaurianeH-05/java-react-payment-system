package backend;
public class Main {
    public static void main(String[] args) {

        PaymentManager manager = new PaymentManager();

        Payment p1 = new Payment(100, "USD", 1, 2.5);
        Payment p2 = new Payment(50, "USD", 2, 1.2);
        Payment p3 = new Payment(75, "USD", 3, 2.6);

        manager.addPayment(p1);
        manager.addPayment(p2);
        manager.addPayment(p3);

        manager.completePayment(1);
        manager.refundPayment(1);
        manager.failPayment(2);
        manager.retryPayment(2);

        manager.printAll();
    }
}