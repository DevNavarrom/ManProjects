import { Component, OnInit, inject } from '@angular/core';
import { CardAddComponent } from '../../../shared/components/card-add/card-add.component';
import { ItemListComponent } from '../components/item-list/item-list.component';
import { ProjectService } from '../../../core/services/project.service';
import { Observable, of } from 'rxjs';
import { IProject } from '../../../core/models/project';
import { ActionsProject } from '../../../utils/constants';
import { FormProjectsComponent } from '../components/form-projects/form-projects.component';
import { DialogService } from '../../../core/services/dialog.service';

@Component({
  selector: 'app-list-projects',
  standalone: true,
  imports: [CardAddComponent, ItemListComponent, FormProjectsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  private readonly projectService = inject(ProjectService);
  private readonly dialogService = inject(DialogService);

  dataProjects: IProject[] = [];
  observableProjects$: Observable<IProject[]> = of([]);

  action: ActionsProject = ActionsProject.finish;
  

  ngOnInit(): void {
    this.projectService.getProjects$().subscribe((result) => this.dataProjects = result);

    this.dialogService.closeRequest$.subscribe(() => this.action = ActionsProject.finish);

    /* this.observableProjects$.subscribe((data) => {
      this.dataProjects = data;
    }); */
  }

  setAction(act: ActionsProject): void {
    console.log(act);
    
    this.action = act;
  }

}
