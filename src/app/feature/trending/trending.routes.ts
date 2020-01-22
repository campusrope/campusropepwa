import { Routes } from '@angular/router';

export const trendingRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/user-trending/user-trending.module').then(
        m => m.UserTrendingModule
      )
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin-trending/admin-trending.module').then(
        m => m.AdminTrendingModule
      )
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./pages/trending-add/trending-add.module').then(
        m => m.TrendingAddModule
      )
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./pages/trending-edit/trending-edit.module').then(
        m => m.TrendingEditModule
      )
  },
  {
    path: 'topics',
    loadChildren: () =>
      import('./pages/topics/topics.module').then(
        m => m.TopicsModule
      )
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./pages/clients/clients.module').then(
        m => m.ClientsModule
      )
  }
];

export default trendingRoutes;
