import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule }   from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';


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
import { ContactUsComponent } from './body/contact-us/contact-us.component';
import { from } from 'rxjs';
import {environment} from '../environments/environment';

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
    ContactUsComponent,
           ],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
