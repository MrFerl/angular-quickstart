import { Component } from '@angular/core';
import {Link} from '../models/link';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(){};
  link : Link[] = [
    {
    text:'THE GAME',
    address: 'https://gradpf2e.au.forge-vtt.com/game',
    img: '/assets/foundry.jpeg'
    },
    {
      text:'HOUSE RULE',
      address: 'https://docs.google.com/document/d/1A_GDEM57x0Ti50uQomGx2WJvX8ZIw6ZT8Co2SHEfd6E/edit?usp=sharing',
      img: '/assets/houserules.png'
    },
    {
      text:'RULE BOOK',
      address: 'https://2e.aonprd.com/Rules.aspx',
      img: '/assets/rulebook.jpg'
    },
    {
      text:'RULES SUMMARY',
      address: 'https://docs.google.com/presentation/d/1H4LuFtrLloHwW_ivxrA9wiggttlx5zbUBvi5XDujBZ4/edit?usp=sharing',
      img: '/assets/summary.png'
    },
    {
      text:'ACTION SHEET',
      address: 'https://drive.google.com/file/d/1TQwzF5OOAKXu-CORYVkfyN5hD8zaUe50/view',
      img: '/assets/actions.png'
    },
    {
      text:'CHEAT SHEETS',
      address: 'www.google.com',
      img: ''
    }
  ];
}
