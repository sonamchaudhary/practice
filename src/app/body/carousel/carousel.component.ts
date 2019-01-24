import { Component, OnInit } from '@angular/core';
import{ ImgPath} from '../../image_paths/image_paths';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
 
})
export class CarouselComponent implements OnInit {
  showNavigationArrows = true;
  carousel_images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  carousel_img_1= ImgPath.carousel.carousel1;
  carousel_img_2= ImgPath.carousel.carousel2;
  carousel_img_3= ImgPath.carousel.carousel3;

  constructor() { }

  ngOnInit() {
  }

}
