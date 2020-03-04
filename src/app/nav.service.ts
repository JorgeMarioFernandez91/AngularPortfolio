import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

    homeActivated: boolean = false;
    activeAbout: boolean = false;
    activeContact: boolean = false;

    constructor() { }

    activeHome(){
       
        if(this.homeActivated == false){
            this.homeActivated = true;
        }
        else{
            this.homeActivated = false;
        }

        return console.log(this.homeActivated);
    }
}
