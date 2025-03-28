import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  standalone: false
})
export class AddCharacterComponent {
  public character:Character = {
    name:'',
    power:0,
    src:''
  }
  addCharacter():void{
    console.log(this.character);
  }
}
