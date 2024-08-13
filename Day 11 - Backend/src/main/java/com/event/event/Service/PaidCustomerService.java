package com.event.event.Service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.event.Model.PaidCustomer;
import com.event.event.Repository.PaidCustomerRepo;

@Service
public class PaidCustomerService {
     @Autowired
     PaidCustomerRepo PaidCustomerRepo;

     public PaidCustomer paidcustomer(PaidCustomer U)
     {
        return PaidCustomerRepo.save(U);
     }
     
      public List<PaidCustomer> getall()
      {
         return PaidCustomerRepo.findAll();
      }

      public Optional<PaidCustomer> getbyid(int id)
      {
         return PaidCustomerRepo.findById(id);
      }

      public PaidCustomer updatepaidcustomer(PaidCustomer paid)
      {
         return PaidCustomerRepo.save(paid);
      }
       public void deletepaidcustomer(int id)
      {
         PaidCustomerRepo.deleteById(id);
      }
}
