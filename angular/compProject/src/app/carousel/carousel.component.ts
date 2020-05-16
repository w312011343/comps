import { Component, OnInit, Output,EventEmitter, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit,OnDestroy {
  @Input() carousel;
  @Output() parentEvent = new EventEmitter();
  public interval;
  constructor() { }

  ngOnInit(): void {
    this.intervalFn();
  }
  dotClick(e){
    let index = e.target.dataset.index;
    if (!index) {
      return;
    }
    this.intervalFn(index);
  }
  ngOnDestroy(){
    clearInterval(this.interval);
  }
  intervalFn(index?){
    clearInterval(this.interval);
    if (index) {
      this.parentEvent.emit(parseInt(index));
    }
    this.interval = setInterval(() => {
        index = this.carousel.selectIndex;
        index++;
        if (index >= this.carousel.data.length) {
          index = 0;
        }
      this.parentEvent.emit(parseInt(index));
    },this.carousel.time);
  }
}
