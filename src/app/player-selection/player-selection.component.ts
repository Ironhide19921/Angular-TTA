import { Component, EventEmitter, Output } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player-selection',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './player-selection.component.html',
  styleUrl: './player-selection.component.css',
})
export class PlayerSelectionComponent {
  @Output() onSelectedPlayers: EventEmitter<string> = new EventEmitter();
  selectedValue: string = '';

  playerChange() {
    this.onSelectedPlayers.emit(this.selectedValue);
  }
}
