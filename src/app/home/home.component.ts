import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    h1Style: boolean = true;

    changeh1Style(){
        this.h1Style = false;
    }

    users: Object;

    constructor(private data: DataService) { }

    ngOnInit(): void {

        this.data.getUsers().subscribe(data => {
            this.users = data;
            console.log(this.users);
        })

    }

    firstClick(){
        console.log('clicked');

        if(this.h1Style == false){
            this.h1Style = true;
        }
        else{
            this.h1Style = false;
        }
        this.data.secondClick();
    }

}
