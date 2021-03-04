import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  TopNavComponent
} from './top-nav/top-nav.component';
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [TopNavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    HttpClientModule
  ],
  exports: [TopNavComponent]
})
export class NavModule {}
