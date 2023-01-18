import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBaseTableComponent } from './components/data-base-table/data-base-table.component';

const routes: Routes = [
  {
    path: '',
    component: DataBaseTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
