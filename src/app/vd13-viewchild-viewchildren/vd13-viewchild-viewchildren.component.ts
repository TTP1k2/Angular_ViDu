import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-vd13-viewchild-viewchildren',
  templateUrl: './vd13-viewchild-viewchildren.component.html',
  styleUrl: './vd13-viewchild-viewchildren.component.css'
})
export class Vd13ViewchildViewchildrenComponent {
  // Sử dụng ViewChild để truy cập vào phần tử input file
  @ViewChild('uploadfile') uploadfile!: ElementRef;

  // Sử dụng ViewChildren để truy cập vào tất cả các thẻ <span> có id là lineTpl
  @ViewChildren('lineTpl') lineTpl!: QueryList<ElementRef>;

  // Hàm để chọn file (bằng cách click vào input file)
  selectFile() {
    this.uploadfile?.nativeElement.click();
  }

  // Hàm để làm tất cả các dòng <span> có màu đỏ
  makeAllRed() {
    this.lineTpl.forEach(e => e.nativeElement.style.color = 'red');
  }

  // Hàm để làm dòng đầu tiên có màu xanh dương
  makeFirstBlue() {
    this.lineTpl.first.nativeElement.style.color = 'blue';
  }
}
