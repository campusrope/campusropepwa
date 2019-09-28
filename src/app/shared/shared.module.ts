import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { StateSelectionComponent } from './state-selection-dropdown/state-selection.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    TopBarComponent,
    DrawerComponent,
    YoutubePlayerComponent,
    UserSearchComponent,
    StateSelectionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TopBarComponent,
    DrawerComponent,
    StateSelectionComponent
  ]
})
export class SharedModule {}
