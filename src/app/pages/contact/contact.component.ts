import { Component } from '@angular/core';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactItemComponent, MatSidenavModule, ContactDetailComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
