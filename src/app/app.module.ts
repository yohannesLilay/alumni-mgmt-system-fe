import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Main Component */
import { AppComponent } from './app.component';

/** Main Routing */
import { AppRoutingModule } from './app-routing.module';

/** Custom Modules */
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MainModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
