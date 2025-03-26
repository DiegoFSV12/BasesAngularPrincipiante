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
        power:50000
    },{
        name:'Vegeta',
        power:40000
    }];
}