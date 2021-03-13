import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeboardComponent } from './homeboard/homeboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {MatChipsModule} from '@angular/material/chips';
import { TopNavComponent } from './top-nav/top-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [HomeboardComponent, TopNavComponent, CartDialogComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatChipsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDialogModule
    
  ],
  exports: [HomeboardComponent, TopNavComponent, CartDialogComponent]
})
export class DashboardModule { }
