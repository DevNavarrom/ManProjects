import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProject } from '../../../../core/models/project';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {

  @Input() project!: IProject;
  @Output() eventEdit: EventEmitter<IProject> = new EventEmitter<IProject>();

  handleEdit(): void {
    this.eventEdit.emit(this.project);
  }
}
