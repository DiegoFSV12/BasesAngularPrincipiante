import { Injectable } from "@angular/core";
import {v4 as uuid} from 'uuid';
import { Character } from "../interfaces/character.interface";

@Injectable({
    //Con esto podemos usar la misma instacia del servicio en todo momento
    providedIn: 'root'
})
export class dbzService{

    public characters:Character[] = [{
        id:uuid(),
        name:'Goku',
        power:50000,
        src:"https://preview.redd.it/anyone-else-want-skibidi-goku-in-the-game-v0-915gumkk0pad1.jpg?width=224&format=pjpg&auto=webp&s=9eac03d3439013133779af8aa6a94a0ba332079a"
    },{
        id:uuid(),
        name:'Vegeta',
        power:40000,
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSfdmRr9o5XvjHeDpuknHYzZvEqdfi6SI_Kg&s"
    },{
        id:uuid(),
        name:'Trunks',
        power:5000,
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qarIDJMM4SE52NjuPKu-R_PN6ezc6v4XDg&s"
    }];

    addCharacter(character:Character):void{
        const newCharacter : Character = {
            id:uuid(),
            ...character
        };
        this.characters.push(newCharacter);
    }

    deleteCharacterById(id:string):void{
        this.characters = this.characters.filter(character => character.id !== id);
    }
}