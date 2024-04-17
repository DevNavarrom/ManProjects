import { Component, EventEmitter, Output } from '@angular/core';
import { ActionsProject } from '../../../utils/constants';

@Component({
  selector: 'app-card-add',
  standalone: true,
  imports: [],
  templateUrl: './card-add.component.html',
  styleUrl: './card-add.component.scss'
})
export class CardAddComponent {

  @Output() eventClick: EventEmitter<ActionsProject> = new EventEmitter<ActionsProject>();

  handleClick(): void {
    this.eventClick.emit(ActionsProject.create);
  }
}
