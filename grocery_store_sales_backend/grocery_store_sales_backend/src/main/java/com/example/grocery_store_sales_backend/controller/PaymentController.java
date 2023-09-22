package com.example.grocery_store_sales_backend.controller;

import com.example.grocery_store_sales_backend.config.PaymentConfig;
import com.example.grocery_store_sales_backend.model.*;
import com.example.grocery_store_sales_backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


import javax.websocket.server.PathParam;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/payment")
public class PaymentController {
    @Autowired
    private IProductService productService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IStatusOrderService statusOrderService;
    @Autowired
    private ICartService cartService;
    @Autowired
    private IOrderService orderService;
    @Autowired
    IOrderDetailService orderDetailService;

    @PostMapping("")
    public ResponseEntity<?> create(@PathParam("total") Long total)
            throws UnsupportedEncodingException {

        String orderType = "170000";
//        long amount = Integer.parseInt(req.getParameter("amount"))*100;
//        String bankCode = req.getParameter("bankCode");


        String amount = String.valueOf(total * 100);
//        String amount = "10000000";
        String vnp_TxnRef = PaymentConfig.getRandomNumber(8);
//        String vnp_IpAddr = Config.getIpAddress(req);
        String vnp_TmnCode = PaymentConfig.vnp_TmnCode;
        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", PaymentConfig.vnp_Version);
        vnp_Params.put("vnp_Command", PaymentConfig.vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(amount));
        vnp_Params.put("vnp_CurrCode", "VND");
        vnp_Params.put("vnp_BankCode", "NCB");
        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
        vnp_Params.put("vnp_OrderType", orderType);
        vnp_Params.put("vnp_Locale", "vn");
//        String locate = req.getParameter("language");
//        if (locate != null && !locate.isEmpty()) {
//            vnp_Params.put("vnp_Locale", locate);
//        } else {
//            vnp_Params.put("vnp_Locale", "vn");
//        }
        vnp_Params.put("vnp_ReturnUrl", PaymentConfig.vnp_Returnurl);
        vnp_Params.put("vnp_IpAddr", "0:0:0:0:0:0:0:1");

        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        cld.add(Calendar.MINUTE, 15);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                //Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                //Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = PaymentConfig.hmacSHA512(PaymentConfig.vnp_HashSecret, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = PaymentConfig.vnp_PayUrl + "?" + queryUrl;
        return new ResponseEntity<>(paymentUrl, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @PostMapping("/paid")
    public ResponseEntity<?> addPaymentOrder(@PathParam("total") String total, @PathParam("accumulate") String accumulate) {

        try {
            double accumulated = Math.round(Double.parseDouble(total) / 100000000);
            System.out.println("tich luy" + accumulated);
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String email = authentication.getName();
            Users user = userService.getUserByEmail(email).get();
            user.setAccumulatedPoints(user.getAccumulatedPoints() + accumulated - Double.parseDouble(accumulate));
            List<CartDetail> cartDetails = cartService.getCarts(user.getId());
            StatusOrder statusOrder = statusOrderService.findByIdStatusOrder(1).get();
            Date date = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            String formattedDate = dateFormat.format(date);


            Order order = new Order(formattedDate, "", false,Long.parseLong(total)/100, statusOrder, user);
            Order orderSave = orderService.saveOrder(order);
            int size = cartDetails.size();
            for (int i = 0; i < size; i++) {
                Product product = cartDetails.get(i).getProduct();
                if (cartDetails.get(i).getNumberCart() > product.getQualityProduct()) {
                    continue;
                } else {
                    productService.updateNumberOfProductSold(cartDetails.get(i).getNumberCart(), product.getId());
                }
                OrderDetail orderDetail = new OrderDetail(cartDetails.get(i).getNumberCart(), false, orderSave, product);
                orderDetailService.saveOrderDetail(orderDetail);
            }
            if (!cartService.deleteCardsUser(user.getId())) {

                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            ;
        } catch (Exception e) {
            System.out.println("loi");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @PostMapping("/paid-immediately")
    public ResponseEntity<?> addPaymentImmediately(@PathParam("id") String id, @PathParam("total") String total) {

        try {
            Product product = productService.getProduct(Long.parseLong(id)).get();
            if (!productService.getProduct(Long.parseLong(id)).isPresent()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);

            }
            Integer numberProduct = Math.toIntExact(Integer.parseInt(total) / (product.getPriceProduct()*100));
            double accumulated = Math.round(Double.parseDouble(total) / 100000000);
            System.out.println("tich luy" + accumulated);
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String email = authentication.getName();
            Users user = userService.getUserByEmail(email).get();
            user.setAccumulatedPoints(user.getAccumulatedPoints() + accumulated);
            StatusOrder statusOrder = statusOrderService.findByIdStatusOrder(1).get();
            Date date = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            String formattedDate = dateFormat.format(date);


            Order order = new Order(formattedDate, "", false,Long.parseLong(total)/100, statusOrder, user);
            Order orderSave = orderService.saveOrder(order);
            productService.updateNumberOfProductSold(numberProduct, product.getId());

            OrderDetail orderDetail = new OrderDetail(numberProduct, false, orderSave, product);
            orderDetailService.saveOrderDetail(orderDetail);


        } catch (Exception e) {
            System.out.println("loi");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
