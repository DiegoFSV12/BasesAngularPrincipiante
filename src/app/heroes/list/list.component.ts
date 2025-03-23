import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spider-Man','Iron-Man','Mr.Orrai','Capitan Perú','Mototaximus-Prime'];
  public deletedHero?:string;
  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }
}
