import { Component, HostListener, Input } from '@angular/core';
import { About } from '../about';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  @Input() about:About;

  constructor(){}

}
