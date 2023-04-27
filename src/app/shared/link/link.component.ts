import { Component, Input } from '@angular/core';
import { Link } from 'src/app/models/link';
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  constructor(){}

  @Input() link : Link = {text:'',address:'',img:''};
}
