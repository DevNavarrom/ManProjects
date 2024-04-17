import { Component } from '@angular/core';
import { FormProjectsComponent } from '../form-projects/form-projects.component';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [FormProjectsComponent],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})
export class AddProjectComponent {

}
