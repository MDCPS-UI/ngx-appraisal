import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerService } from './shared/services/spinner/spinner.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
