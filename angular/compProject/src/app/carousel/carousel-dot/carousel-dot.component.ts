import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-dot',
  templateUrl: './carousel-dot.component.html',
  styleUrls: ['./carousel-dot.component.less']
})
export class CarouselDotComponent implements OnInit {
@Input() index;
@Input() selectIndex;
  constructor() { }

  ngOnInit(): void {
  }

}
