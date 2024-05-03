import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CounterComponent } from './counter/counter.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgClass, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    CounterComponent,
    PlayerSelectionComponent,
    MatGridListModule,
    MatIconModule,
    NgClass,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TTA';
  public cultureCounter: number = 1;
  public eachTurnCultureCounter: number = 1;
  public scienceCounter: number = 1;
  public eachTurnScienceCounter: number = 1;
  selectedPlayers: string = "1";
  public color1:string = "red";
  public color2:string = "blue";
  public color3:string = "green";
  public color4:string = "yellow";

  receivePlayers($event: string) {
    this.selectedPlayers = $event;
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

  resolveCulture(val: number) {
    this.cultureCounter += val;
  }

  resolveScience(val: number) {
    this.scienceCounter += val;
  }
}
