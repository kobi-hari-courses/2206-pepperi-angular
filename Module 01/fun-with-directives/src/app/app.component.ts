import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'fun-with-directives';

  // whenCyanNeelam(color: string) {
  //   console.log('One of the highlights vanished, its color was: ' + color);
  // }

  stamData = [
    ['abc', 'def'],
    ['xyz', 'bla bla']
  ];

  colors = ['red', 'green', 'blue', 'purple', 'brown', 'black'];
  sizes = ['16px', '24px', '40px', '68px', '120px'];
  fonts = ['Arial', 'Times new roman', 'Consolas', 'Verdana', 'Segoe UI', 'Miriam'];

  selectedColor = this.colors[0];
  selectedSize = this.sizes[0];
  selectedFont = this.fonts[0];

  selectColor(value: string) {
    this.selectedColor = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }

}
