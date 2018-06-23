// Modules
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdcpsHttpModule } from './shared/modules/mdcps-http/mdcps-http.module';

// Services
import { SpinnerService } from './shared/services/spinner/spinner.service';

// Components
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MdcpsHttpModule.forRoot()
  ],
  providers: [
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
