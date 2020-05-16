import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'compProject';
  public carousel = {
    time: 3000,
    arrow: true,
    selectIndex: 0,
    autoplay:true,
    duration:'1000ms',
    data: [
      {
        src: '../assets/banner1.jpg',
        title: '我是文本1',
        subTitle: '哈哈',
        btnText: '按钮dd',
        btnLink: 'https://www.baidu.com'
      },
      {
        src: '../assets/banner2.jpg',
        title: '我是文本1',
        subTitle: '哈哈',
        btnText: '按钮1',
        btnLink: 'https://www.baidu.com'
      },
      {
        src: '../assets/banner3.jpg',
        title: '我是文本1',
        subTitle: '哈哈',
        btnText: '按钮1',
        btnLink: 'https://www.baidu.com'
      },
      {
        src: '../assets/banner4.jpg',
        title: '我是文本1',
        subTitle: '哈哈',
        btnText: '按钮1',
        btnLink: 'https://www.baidu.com'
      },
      {
        src: '../assets/banner5.jpg',
        title: '我是文本1',
        subTitle: '哈哈',
        btnText: '按钮1',
        btnLink: 'https://www.baidu.com'
      }
    ]
  };
  changeIndex(index){
    this.carousel.selectIndex = index;
  }
}
