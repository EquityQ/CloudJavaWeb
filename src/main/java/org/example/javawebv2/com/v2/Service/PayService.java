package org.example.javawebv2.com.v2.Service;

import org.example.javawebv2.com.v2.Class.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PayService {
    private final JdbcTemplate jdbcTemplate;
    @Autowired
    public PayService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public List<Orders> getLogs(String username){
        String sql = "select * from orders where username=? order by time desc";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Orders orders = new Orders();
            orders.setId(rs.getLong("id"));
            orders.setOrderId(rs.getString("order_id"));
            orders.setOther(rs.getString("other"));
            orders.setTime(rs.getTimestamp("time"));
            orders.setUsername(rs.getString("username"));
            orders.setValue(rs.getDouble("value"));
            return orders;
        },username);
    }
    public void addLog(String username,double value,String other){
//        生成一个odid 最多32位
        String odid = java.util.UUID.randomUUID().toString().replace("-","").substring(0,32);
        String sql = "insert into orders(order_id,other,username,value) values(?,?,?,?)";
        jdbcTemplate.update(sql,odid,other,username,value);
    }
    public synchronized boolean addvalue(String username, double value) {
        String sql = "update userinfo set value=value+? where username=?";
        return jdbcTemplate.update(sql, value, username) == 1;
    }

    public double getvalue(String username){
        String sql = "select value from userinfo where username=?";
        return jdbcTemplate.queryForObject(sql,Double.class,username);
    }

    public synchronized boolean exchange(String username,double value,String towho){
        if(value <= 0){
            return false;
        }
        if(getvalue(username) < value){
            return false;
        }
        if(addvalue(towho,value)){
            addvalue(username,-value);
            addLog(username,-value,"向（"+towho+"）转账");
            addLog(towho,value,"收到转账（"+username+"）");
            return true;
        }else{
            return false;
        }
    }
}
