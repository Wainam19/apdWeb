import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent implements OnInit {
  slideIndex: number = 1;

  constructor() {}

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  showSlides(n) {
    var i;
    var slides = document.querySelectorAll<HTMLElement>('.partner-container');
    var icon = document.querySelectorAll<HTMLElement>('.partner-icon');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length && icon.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(
        ' active-container',
        ''
      );
    }
    for (i = 0; i < icon.length; i++) {
      icon[i].className = icon[i].className.replace(' active-icon', '');
    }
    slides[this.slideIndex - 1].className += ' active-container';
    icon[this.slideIndex - 1].className += ' active-icon';
  }
}
