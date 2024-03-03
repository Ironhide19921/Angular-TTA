import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TTA';
  public cultureCounter: number = 1;
  public eachTurnCultureCounter: number = 1;
  public scienceCounter: number = 1;
  public eachTurnScienceCounter: number = 1;

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

  resolveCulture(val: number) {
    this.cultureCounter += val;
  }

  resolveScience(val: number) {
    this.scienceCounter += val;
  }
}
