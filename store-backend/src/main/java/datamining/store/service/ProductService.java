package datamining.store.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    String product_list_sql = " SELECT id,name,price,quantity,category from product";

    public Object getProductList() {

        return jdbcTemplate.queryForList(product_list_sql);
    }

}