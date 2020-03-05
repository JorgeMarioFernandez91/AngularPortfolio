import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { MessageService } from '../message.service';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

// import { MatFormFieldModule } from '@angular/material/form-field'; 
// import { MatButtonModule } from '@angular/material/form-field'; 
// import { MatInputModule } from '@angular/material/form-field'; 

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    
})
export class ContactComponent implements OnInit {

    message = MessageService;

    messageForm: FormGroup;
    submitted = false;
    success = false;

    contactForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        art: new FormControl(''),
        message: new FormControl(''),
    });

    /// adding items to arguments is called 'dependency injection'
    // constructor(private formBuilder: FormBuilder) {
    //     this.messageForm = this.formBuilder.group({
    //         name: ['', Validators.required],
    //         message: ['', Validators.required]
    //     })
    // }

    //constructor(private messageService: MessageService) {}
    constructor(
        private http: HttpClient
      ) {};

      onSubmit() {
        const body = new HttpParams()
        .set('form-name', 'contact')
        .append('name', this.contactForm.value.name)
        .append('email', this.contactForm.value.email)
        .append('art', this.contactForm.value.art)
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

    // send() {
    //     console.log("message sent!!")
       
    //     this.messageService.sendMessagePost("1234");
    //     this.messageService.sendMessageGet("4321");
       
    // }

    // onSubmit() {
    //     this.submitted = true;
    //     alert("clicked!")
    //     //console.log("message sent");

    //     if(this.messageForm.invalid){
    //         return;
    //     }

    //     this.success = true;
    //    // this.messageForm;
    //     console.log("message sent");
        
    // }

    ngOnInit(): void {
        
    }


}
