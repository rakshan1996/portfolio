import { Component } from '@angular/core';
import {faLinkedinIn,faGithub,faMedium,faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css'
})
export class SocialMediaComponent {
  linkdein=faLinkedinIn;
  github=faGithub;
  email=faEnvelope;
  medium=faMedium;
  instagram=faInstagram;

  githubUrl="https://github.com/rakshan1996";
  linkdeinUrl="https://www.linkedin.com/in/rakshan-thapar";
  emailAddress="mailto: rakshanthapar32@gmail.com";
  mediumUrl="https://medium.com/@rakshanthapar32";
  instagramUrl="https://www.instagram.com/rakshanthapar/";
}
