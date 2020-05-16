import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.less']
})
export class CarouselSlideComponent implements OnInit, OnDestroy {
  @Input() carousel;
  @Output() parentEvent = new EventEmitter();
  public interval;
  public allWidth;
  public translateVal;
  public arr;
  public trasitionFlag = true;
  public durationTime;
  public isNeedFlag = true;
  constructor() { }

  ngOnInit(): void {
    this.arr = new Array(this.carousel.data.length);
    this.carousel.data.unshift(this.carousel.data[this.carousel.data.length - 1]);
    this.carousel.data.push(this.carousel.data[1]);
    this.allWidth = this.carousel.data.length * 100 + '%';
    this.durationTime = this.carousel.duration;
    this.leftValFn();
    this.intervalFn();
  }
  dotClick(e) {
    let index = e.target.dataset.index;
    if (!index) {
      return;
    }
    this.intervalFn(index);
  }
  leftValFn(index?) {
    index = index??this.carousel.selectIndex;
    let itemVal = (100 / this.carousel.data.length) * (index + 1) + '%';
    this.translateVal = 'translate3d(-' + itemVal + ', 0px, 0px)';
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  boundaryFn(index) {
    let timeout = setTimeout(() => {
      this.durationTime = '0ms';
      this.leftValFn(index);
      clearTimeout(timeout);
      let innerTime = setTimeout(() => {
        clearTimeout(innerTime);
        this.durationTime = this.carousel.duration;
      },20);
    }, parseInt(this.carousel.duration));
  }
  nextFn() {
    let index = this.carousel.selectIndex;
    index++;
    if (index >= this.arr.length) {
      index = 0;
      this.leftValFn(this.arr.length);
      this.boundaryFn(index);
    } else {
      this.leftValFn(index);
    }
    this.parentEvent.emit(parseInt(index));
  }
  prevFn() {
    let index = this.carousel.selectIndex;
    index--;
    if (index < 0) {
      index = this.arr.length-1;
      this.leftValFn(-1);
      this.boundaryFn(index);
    } else {
      this.leftValFn(index);
    }
    this.parentEvent.emit(parseInt(index));
  }
  intervalFn(index?) {
    clearInterval(this.interval);
    if (!this.carousel.autoplay) {
      return;
    }
    if (index) {
      this.parentEvent.emit(parseInt(index));
      this.leftValFn();
      return;
    }
    this.interval = setInterval(() => {
      this.nextFn();
    }, this.carousel.time);
  }
  arrowFn(e) {
    let type = e.target.dataset.type;
    if (!type) {
      return;
    }
    if (!this.isNeedFlag) {
      return;
    }
    this.isNeedFlag = false;
    clearInterval(this.interval);
    if (type === 'right') {
      this.nextFn();
    }else{
      this.prevFn();
    }
    let times = setTimeout(() => {
      this.isNeedFlag = true;
      clearTimeout(times);
    }, parseInt(this.carousel.duration)+20);
  }
  mouseenterFn(){
    clearInterval(this.interval);
  }
  mouseleaveFn(){
    this.intervalFn();
  }
}
