import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoComponent } from './body/info/info.component';
import { GalleryComponent } from './body/gallery/gallery.component';
import { OurPartnersComponent } from './body/our-partners/our-partners.component';
import { AdditionalInfoComponent } from './body/additional-info/additional-info.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './body/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    InfoComponent,
    GalleryComponent,
    OurPartnersComponent,
    AdditionalInfoComponent,
    FooterComponent,
    TestimonialsComponent,
       ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
