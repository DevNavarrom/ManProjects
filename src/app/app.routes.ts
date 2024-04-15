import { Routes } from '@angular/router';
import { ListComponent as ListProjects } from './features/projects/list/list.component';
import { ListComponent as ListTasks } from './features/tasks/list/list.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {
        path: 'projects',
        component: ListProjects
    },
    {
        path: 'tasks',
        component: ListTasks
    }
];
