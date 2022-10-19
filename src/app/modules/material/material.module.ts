import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TableExampleComponent } from './components/table-example/table-example.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardExampleComponent } from './components/dashboard-example/dashboard-example.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { TreeExampleComponent } from './components/tree-example/tree-example.component';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropExampleComponent } from './components/drag-drop-example/drag-drop-example.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AddressFormComponent,
    NavComponent,
    TableExampleComponent,
    DashboardExampleComponent,
    TreeExampleComponent,
    DragDropExampleComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule
  ], 
  exports: [
    MatDatepickerModule, 
    MatFormFieldModule, 
    MatNativeDateModule, 
    MatButtonModule, 
    AddressFormComponent, 
    NavComponent, 
    TableExampleComponent, 
    DashboardExampleComponent, 
    TreeExampleComponent, 
    DragDropExampleComponent
  ]
})
export class MaterialModule { }
