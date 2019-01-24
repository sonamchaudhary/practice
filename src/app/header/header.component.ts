import { Component, OnInit } from '@angular/core';
import{ ImgPath} from '../image_paths/image_paths';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  brand_logo= ImgPath.header.brand_logo;
  constructor() { }

  ngOnInit() {
  }

}
