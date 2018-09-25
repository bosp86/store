package datamining.store.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import datamining.store.domain.BuyOrder;

@Service
public class ProductService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    String product_list_sql = "SELECT id,name,price,quantity,category from product";

    String product_by_id_sql = "SELECT id,name,price,quantity,category from product where id = ?";

    String product_detail_by_id_sql = "SELECT `key`, `value` from product_detail where product_id = ? order by `key`";

    String insert_order_sql = "INSERT into product_order(product_id,credit_card,address,credit_card_holder) values( ?, ?,?,?)";

    private static final Logger LOG = LoggerFactory.getLogger(ProductService.class);

    public Object getProductList() {

        return jdbcTemplate.queryForList(product_list_sql);
    }

    public Object buyProduct(BuyOrder order) {

        jdbcTemplate.update(insert_order_sql, new Object[] { order.getProduct_id(), order.getCredit_card(),
                order.getAddress(), order.getCredit_card_holder() });

        return 1;
    }

    public Object getProductDetail(int id) {
        LOG.info(product_by_id_sql);
        LOG.info("" + id);
        Map<String, Object> product = jdbcTemplate.queryForMap(product_by_id_sql, new Object[] { id });

        List<Map<String, Object>> productDetail = jdbcTemplate.queryForList(product_detail_by_id_sql,
                new Object[] { id });
        Map<String, List> detailMap = new HashMap<String, List>();
        for (Map<String, Object> pr : productDetail) {

            String key = (String) pr.get("key");
            String value = (String) pr.get("value");

            if (detailMap.get(key) == null) {
                List list = new ArrayList();
                list.add(value);
                detailMap.put(key, list);
            } else {
                List list = detailMap.get(key);
                list.add(value);
            }

        }

        product.put("detail", detailMap);

        return product;
    }

}