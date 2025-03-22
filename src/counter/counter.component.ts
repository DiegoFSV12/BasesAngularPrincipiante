import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h1>Counter</h1>
    <h3>{{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="reset()">RESET</button>
    `,
    standalone: false
})

export class CounterComponent {
    counter = 0;
    increaseBy(value: number): void {
        this.counter += value;
    }
    decreaseBy(value: number): void {
        this.counter -= value;
    }
    reset(): void {
        this.counter = 0;
    }
}