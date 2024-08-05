import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub, faTwitter,} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;  
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarker = faMapMarker;
}
