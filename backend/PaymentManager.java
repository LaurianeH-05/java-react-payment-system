package backend;
import java.util.ArrayList;

public class PaymentManager {


    ArrayList<Payment> payments = new ArrayList<>();

    public void addPayment(Payment p) {
        payments.add(p);
    }

    public void completePayment(int id) {
        for (Payment p : payments) {
            if (p.paymentId == id) {
                p.markCompleted();
            }
        }
    }

    public void failPayment(int id) {
        for (Payment p : payments) {
            if (p.paymentId == id) {
                p.markFailed();
            }
        }
    }

    public void retryPayment(int id) {
        for (Payment p: payments) {
            if (p.paymentId == id) {
                p.retry();
            }
        }
    }

    public void refundPayment(int id) {
        for (Payment p : payments) {
            if (p.paymentId == id) {
                p.refund();
            }
        }
    }

    public void getStatusSummary() {

    int pending = 0;
    int completed = 0;
    int failed = 0;
    int refunded = 0;

    for (Payment p : payments) {
        switch (p.status) {
            case "PENDING": pending++; break;
            case "COMPLETED": completed++; break;
            case "FAILED": failed++; break;
            case "REFUNDED": refunded++; break;
            default: 
                System.out.println("Case NOT handled.");
        }
    }

    System.out.println("PENDING: " + pending);
    System.out.println("COMPLETED: " + completed);
    System.out.println("FAILED: " + failed);
    System.out.println("REFUNDED: " + refunded);
}

    public void printAll() {
        for (Payment p : payments) {
            p.printDetails();
            System.out.println("-----");
        }
    }
}