import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessageService } from '../message.service';


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

    /// adding items to arguments is called 'dependency injection'
    // constructor(private formBuilder: FormBuilder) {
    //     this.messageForm = this.formBuilder.group({
    //         name: ['', Validators.required],
    //         message: ['', Validators.required]
    //     })
    // }

    constructor(private messageService: MessageService) {}

    send() {
        console.log("message sent!!")
       
        this.messageService.sendMessagePost("1234");
        this.messageService.sendMessageGet("4321");
       
    }

    onSubmit() {
        this.submitted = true;
        alert("clicked!")
        //console.log("message sent");

        if(this.messageForm.invalid){
            return;
        }

        this.success = true;
       // this.messageForm;
        console.log("message sent");
        
    }

    ngOnInit(): void {
        
    }


}
