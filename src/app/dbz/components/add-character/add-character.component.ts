import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  standalone: false
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter;

  public character:Character = {
    name:'',
    power:0,
    src:''
  }
  addCharacter():void{
    console.log(this.character);
    if(this.character.name.length === 0 || this.character.src.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character={name:'',power:0,src:''};
  }
}
