import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://www.w3schools.com/howto/img_avatar2.png';
  constructor() { }

  ngOnInit(): void {
  }

  imgError(): void {
    this.img = this.imageDefault;
  }

  imgLoaded(): void {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
