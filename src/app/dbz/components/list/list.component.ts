import { Component, Input, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent {
  @Input()
  public characterList:Character[]=[{
    name:'Trunks',
    power:5000,
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qarIDJMM4SE52NjuPKu-R_PN6ezc6v4XDg&s"
  }]
}
