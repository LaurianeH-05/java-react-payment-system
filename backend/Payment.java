/* owns behavior + state */

public class Payment {
    double amount;
    String currency;
    String status;
    int paymentId;
    double fee;

    public static final String PENDING = "PENDING";
    public static final String COMPLETED = "COMPLETED";
    public static final String FAILED = "FAILED";
    public static final String REFUNDED = "REFUNDED";

    public Payment(double amount, String currency, int paymentId, double fee) {
        this.amount = amount;
        this.currency = currency;
        this.paymentId = paymentId;
        this.fee = fee;
        this.status = PENDING;
    }

    public void markCompleted() {
        status = COMPLETED;
    }

    public void markFailed() {
        status = FAILED;
    }

    public void REFUNDED() {
        status = REFUNDED;
    }

    public void retry() {
        if (!status.equals(FAILED)) {
            System.out.println("Cannot retry unless FAILED");
            return;
        } else {
        status = PENDING;
        }
    }

    public void refund() {
        if (status.equals(COMPLETED)) {
            status = REFUNDED;
        } else {
            System.out.println("Only COMPLETED payments can be refunded");
        }
    }

    public void printDetails() {
        System.out.println(amount);
        System.out.println(currency);
        System.out.println(status);
        System.out.println(paymentId);
        System.out.println(fee);
    }
}