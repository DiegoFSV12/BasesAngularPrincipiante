import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Component({
    selector:'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    standalone: false
})

export class dbzComponent {
    public characters:Character[] = [{
        name:'Goku',
        power:50000,
        src:"https://preview.redd.it/anyone-else-want-skibidi-goku-in-the-game-v0-915gumkk0pad1.jpg?width=224&format=pjpg&auto=webp&s=9eac03d3439013133779af8aa6a94a0ba332079a"
    },{
        name:'Vegeta',
        power:40000,
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSfdmRr9o5XvjHeDpuknHYzZvEqdfi6SI_Kg&s"
    },{
        name:'Trunks',
        power:5000,
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qarIDJMM4SE52NjuPKu-R_PN6ezc6v4XDg&s"
    }];
}