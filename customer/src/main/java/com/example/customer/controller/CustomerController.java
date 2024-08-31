package com.example.customer.controller;

import com.example.customer.model.Customer;
import com.example.customer.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public List<Customer> getAllCustomer(){ return customerService.findAll(); }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable String id){
        Optional<Customer> customer = customerService.findById(id);
        return customer.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
        System.out.println("Received request to create customer: " + customer);
        Customer newCustomer = customerService.save(customer);
        return ResponseEntity.status(201).body(newCustomer);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable String id){
        customerService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable String id, @RequestBody Customer customerDetails){
        Optional<Customer> customerOptional = customerService.findById(id);
        if(!customerOptional.isPresent()){
            return ResponseEntity.notFound().build();
        }
        Customer customer = customerOptional.get();
        customer.setEmail(customerDetails.getEmail());
        customer.setBirthDate(customerDetails.getBirthDate());
        customer.setCity(customerDetails.getCity());
        customer.setGender(customerDetails.getGender());
        customer.setIban(customerDetails.getIban());
        customer.setBirthPlace(customerDetails.getBirthPlace());
        customer.setFirstName(customerDetails.getFirstName());
        customer.setLastName(customerDetails.getLastName());
        customer.setNationality(customerDetails.getNationality());
        customer.setPassword(customerDetails.getPassword());
        customer.setPhoneNumber(customerDetails.getPhoneNumber());
        customer.setStreet(customerDetails.getStreet());
        customer.setZip(customerDetails.getZip());
        Customer updatedCustomer = customerService.save(customer);
        return ResponseEntity.ok(updatedCustomer);
    }
}
