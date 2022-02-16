import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { OfferComponent } from './offer/offer.component';
import { SkillComponent } from './skill/skill.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PartnerComponent } from './partner/partner.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    NavbarComponent,
    OfferComponent,
    SkillComponent,
    AdvertiseComponent,
    ContactComponent,
    RegisterComponent,
    FeedbackComponent,
    PartnerComponent,
    FooterComponent,
  ],
})
export class HomePageModule {}
