import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { MessageService } from '../message.service';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    
})
export class ContactComponent implements OnInit {

    // message = MessageService;

    // messageForm: FormGroup;
    // submitted = false;
    // success = false;

    contactForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        message: new FormControl(''),
    });

    userEmail = new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]);
    
       
    constructor(
        private http: HttpClient
      ) {};

      onSubmit() {
        const body = new HttpParams()
        .set('form-name', 'contact')
        .append('name', this.contactForm.value.name)
        .append('email', this.contactForm.value.email)
        .append('message', this.contactForm.value.message)
        this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
          res => {},
          err => {
            if (err instanceof ErrorEvent) {
              //client side error
              alert("Something went wrong when sending your message.");
              console.log(err.error.message);
            } else {
              //backend error. If status is 200, then the message successfully sent
              if (err.status === 200) {
                alert("Your message has been sent!");
              } else {
                alert("Something went wrong when sending your message.");
                console.log('Error status:');
                console.log(err.status);
                console.log('Error body:');
                console.log(err.error);
              };
            };
          }
        );
      };

    ngOnInit(): void {
    }

}
