import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BoardsComponent } from "./boards/boards.component";
import { TaskListComponent } from "./task-list/task-list.component";

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'board', component: BoardsComponent },
            { path: 'task-list', component: TaskListComponent }
        ]
    }
]