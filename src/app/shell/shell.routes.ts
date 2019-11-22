import { Routes } from '@angular/router';
import { ShellComponent } from './shell.component';

export const shellChildRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'helpline',
    loadChildren: () =>
      import('../feature/helpline/helpline.module').then(m => m.HelplineModule)
  },
  {
    path: 'trending',
    loadChildren: () =>
      import('../feature/trending/trending.module').then(m => m.TrendingModule)
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('../feature/feed/feed.module').then(m => m.FeedModule)
  }
];

export const shellRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: shellChildRoutes
  }
];

export default shellRoutes;
