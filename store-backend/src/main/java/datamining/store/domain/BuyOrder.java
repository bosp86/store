package datamining.store.domain;

public class BuyOrder {

    private int product_id;
    private String credit_card;
    private String address;
    private String credit_card_holder;

    public int getProduct_id() {
        return this.product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public String getCredit_card() {
        return this.credit_card;
    }

    public void setCredit_card(String credit_card) {
        this.credit_card = credit_card;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCredit_card_holder() {
        return this.credit_card_holder;
    }

    public void setCredit_card_holder(String credit_card_holder) {
        this.credit_card_holder = credit_card_holder;
    }

}