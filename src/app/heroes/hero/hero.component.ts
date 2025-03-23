import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Iron-Man';
  public age: number = 45;
  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }
  changeHero():void{
    this.name = 'Spider-Man';
  }
  changeAge():void{
    this.age = 25;
  }
  resetForm():void{
    this.name = 'Iron-Man';
    this.age = 45;
  }
}
