// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { YaFormsComponent } from './ya-forms.component';


// Services

// YA Routes
const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
];

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [YaFormsComponent]
})
export class YaFormsModule { }
