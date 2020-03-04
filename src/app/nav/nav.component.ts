import { Component, OnInit } from '@angular/core';
import { NavService } from "../nav.service";

function hello() {
    console.log("hello!");
}

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    appTitle: string = 'Jorge Mario Fernandez';

    homeActivated: boolean = true;
    aboutActivated: boolean = false;
    contactActivated: boolean = false;


    constructor(private nav: NavService) { }

    ngOnInit(): void {
        hello();
    }

    activeHome(){
        if(this.homeActivated == false){
            this.homeActivated = true;
            this.aboutActivated = false;
            this.contactActivated = false;
        }
        else if (this.aboutActivated == true || this.contactActivated == true){
            this.homeActivated = false;
        }
    }

    activeAbout(){
        if(this.aboutActivated == false){
            this.homeActivated = false;
            this.aboutActivated = true;
            this.contactActivated = false;
        }
        else{
            this.aboutActivated = false;
        }
    }

    activeContact(){
        if(this.contactActivated == false){
            this.homeActivated = false;
            this.aboutActivated = false;
            this.contactActivated = true;
        }
        else{
            this.contactActivated = false;
        }
    }

}
