import { Component, Input } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input()
  showUserTable :User[]= []  
}
