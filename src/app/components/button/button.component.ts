import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Label';
  @Output() onClick: EventEmitter<void> = new EventEmitter ;

  handleClick() {
   if(this.onClick) this.onClick.emit();
  }
}
