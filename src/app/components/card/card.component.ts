import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardComponentProps } from './types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() isLoading = false;
  @Input() withoutData = false;
  @Input() card: CardComponentProps = {
    title: 'Card title',
    currency: '0',
    updateTime: '00:00:00',
    variation: '0',
  };

  @Output() refreshRequest: EventEmitter<void> = new EventEmitter();

  addColorClass = 'card-currency-value-danger';

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
    if (this.currencyExceedsBaseValue(this.card.currency, '1')) this.addColorClass = 'card-currency-value-success';
    if (this.currencyExceedsBaseValue(this.card.currency, '5')) this.addColorClass = 'card-currency-value-info';

    this.card.currency = this.numberToMoney(this.card.currency);
  }

  receivedEvent() {
    if (this.refreshRequest) this.refreshRequest.emit();
  }

}
