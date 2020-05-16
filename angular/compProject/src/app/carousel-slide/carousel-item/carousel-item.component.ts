import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.less']
})
export class CarouselItemComponent implements OnInit {
  @Input() data;
  @Input()selectIndex;
  @Input() index;
  constructor() { }

  ngOnInit(): void {
  }
  btnLink(e,item){
    e.stopPropagation();
    e.preventDefault();
    window.open(item.btnLink);
  }
}
