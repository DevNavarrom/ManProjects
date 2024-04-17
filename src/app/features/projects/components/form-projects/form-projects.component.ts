import { Component, inject } from '@angular/core';
import { DialogService } from '../../../../core/services/dialog.service';

@Component({
  selector: 'app-form-projects',
  standalone: true,
  imports: [],
  templateUrl: './form-projects.component.html',
  styleUrl: './form-projects.component.scss'
})
export class FormProjectsComponent {

  private readonly dialogService = inject(DialogService);

  handleClose(): void {
    this.dialogService.isClose(true);
  }
}
