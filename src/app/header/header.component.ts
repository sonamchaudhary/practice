import { Component, OnInit } from '@angular/core';
// import{ ImgPath} from '../image_paths/image_paths';

import{ Customer} from './customer_info';
import { NgForm } from '@angular/forms';
// import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 customerinfo = new Customer();


  constructor() {}

    // 
   onSubmit( queryForm: NgForm):void {
     console.log(queryForm.value);
    queryForm.reset();

   }

  ngOnInit() {
  }

}
