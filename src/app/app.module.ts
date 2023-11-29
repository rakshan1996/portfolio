import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './landing/background/background.component';
import { HeadingComponent } from './landing/heading/heading.component';
import { AboutmeComponent } from './landing/aboutme/aboutme.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RightContentComponent } from './landing/right-content/right-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialMediaComponent } from './landing/social-media/social-media.component';


@NgModule({
  declarations: [
    AppComponent,BackgroundComponent,HeadingComponent,AboutmeComponent,RightContentComponent,SocialMediaComponent
  ],
  exports:[BackgroundComponent],
  imports: [ BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
