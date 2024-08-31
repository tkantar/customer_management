package com.example.customer.service;

import com.example.customer.model.Customer;
import com.example.customer.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.*;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> findAll(){ return customerRepository.findAll(); }

    public Optional<Customer> findById(String id){ return customerRepository.findById(id); }

    @Transactional
    public Customer save(Customer customer){ return customerRepository.save(customer); }

    @Transactional
    public void deleteById(String id){ customerRepository.deleteById(id); }
}
