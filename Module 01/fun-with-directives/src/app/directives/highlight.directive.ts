import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  private _color: string | undefined = undefined;
  private wasEntered = false;

  @Input('highlight')
  get color() { return this._color; }
  set color(value: string | undefined) {
    console.log('highlight setter ', value, typeof (value));
    this._color = value;
    this.reka = (value) ? value : 'yellow';
  }

  @Output()
  neelam = new EventEmitter<string>();

  @HostBinding('style.background-color')
  reka: string = 'yellow';

  @HostListener('mouseenter')
  ksheMerachfim() {
    if (!this.wasEntered) {
      this.wasEntered = true;
      setTimeout(() => {
        this.neelam.emit(this.reka);
        this.reka = '';
      }, 2000);
    }

  }


  constructor(
    private elem: ElementRef,
    private renderer: Renderer2
  ) {
    // elem.nativeElement.style.backgroundColor='yellow';
    // this.renderer.setStyle(elem.nativeElement, 'background-color', 'lime');

  }

}
