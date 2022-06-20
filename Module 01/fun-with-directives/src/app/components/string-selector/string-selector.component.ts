import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent implements OnInit {
    @Input()
    options: string[] = [];

    @Input()
    selected: string = '';

    @Input()
    template: TemplateRef<any> | null = null;
    
    @Output()
    userSelection = new EventEmitter<string>();


    userClickedOption(item: string) {
      this.userSelection.emit(item);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
