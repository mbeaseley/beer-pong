import { NgModule } from '@angular/core';

// Imports
import { AppRoutingModule } from 'Base/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BubblesModule } from 'Bubbles/bubbles.module';

// Declarations
import { AppComponent } from 'Base/app/app.component';
import { FooterComponent } from 'Shared/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BubblesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
