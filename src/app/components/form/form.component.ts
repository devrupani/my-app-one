import { Component } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  // id:number | null = null;
  // name:string | null = null ;

  id!:number;
  name!:string ;

  users : User[]= []

  addData(){
    this.users.push({
      id:this.id,
      name :this.name
    });
    console.log(this.users); 

    // this.id = null
    // this.name = null


    this.name = ''
  }

}
