import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardComponentProps } from './types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() withoutData: boolean = false;
  @Input() card: CardComponentProps = {
    title: 'Card title',
    currency: '1.001',
    updateTime: '00:00:00',
    variation: 0,
  };

  @Output() onRefreshRequest: EventEmitter<void> = new EventEmitter()

  valueColor = 'card-currency-value-danger';

  currencyExceedsBaseValue(currency: string, base: string): boolean {
    const parsedCurrency = parseFloat(currency);
    const parsedBase = parseFloat(base);

    if (parsedCurrency > parsedBase) return true;
    return false;
  }

  numberToMoney(currency: string) {
    if (!currency) return 'R$ 0,00';
    const parsedCurrency = parseFloat(currency);

    // creating our formatted number
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatter.format(parsedCurrency);
  }
  

  ngOnInit() {
    if (this.currencyExceedsBaseValue(this.card.currency, '1')) this.valueColor = 'card-currency-value-success';
    if (this.currencyExceedsBaseValue(this.card.currency, '5') ) this.valueColor = 'card-currency-value-info';
    
    this.card.currency = this.numberToMoney(this.card.currency);
  }
  
  receivedEvent() {
    if(this.onRefreshRequest) this.onRefreshRequest.emit();
  }

}
