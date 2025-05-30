import { Component } from "@angular/core";
import { dbzService } from "../services/dbz.service";
import { Character } from "../interfaces/character.interface";

@Component({
    selector:'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    standalone: false
})

export class dbzComponent {
    constructor(
        private dbzService:dbzService
    ){}

    get characters(): Character[]{
        return [...this.dbzService.characters];
    }

    onDeleteCharacter(id:string):void{
        this.dbzService.deleteCharacterById(id);
    }

    OnNewCharacter(character:Character){
        this.dbzService.addCharacter(character);
    }
}