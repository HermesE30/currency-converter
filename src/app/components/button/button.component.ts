import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label = 'Label';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter ;

  handleClick() {
   if(this.buttonClick) this.buttonClick.emit();
  }
}
