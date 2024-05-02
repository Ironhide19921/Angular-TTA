import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDividerModule, MatIcon],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  public cultureCounter: number = 1;
  public eachTurnCultureCounter: number = 1;
  public scienceCounter: number = 1;
  public eachTurnScienceCounter: number = 1;
  public inputColor: string = 'red';

  changeColor() {
    switch (this.inputColor) {
      case 'red':
        this.inputColor = 'blue';
        break;
      case 'blue':
        this.inputColor = 'green';
        break;
      case 'green':
        this.inputColor = 'yellow';
        break;
      case 'yellow':
        this.inputColor = 'red';
        break;
    }
  }

  addCulture() {
    this.cultureCounter += 1;
  }
  addScience() {
    this.scienceCounter += 1;
  }

  minusCulture() {
    this.cultureCounter -= 1;
  }
  minusScience() {
    this.scienceCounter -= 1;
  }

  addEachTurnCulture() {
    this.eachTurnCultureCounter += 1;
  }

  addEachTurnScience() {
    this.eachTurnScienceCounter += 1;
  }

  minusEachTurnCulture() {
    this.eachTurnCultureCounter -= 1;
  }

  minusEachTurnScience() {
    this.eachTurnScienceCounter -= 1;
  }

  resolveCulture() {
    this.cultureCounter += this.eachTurnCultureCounter;
  }

  resolveScience() {
    this.scienceCounter += this.eachTurnScienceCounter;
  }
}
