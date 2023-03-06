import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
// component
import { CardComponentProps } from './components/card/types';
// services
import { ThemeService } from "./theme/theme.service";
import { CurrencyService } from './services/currency.service';
import { LocalService } from './services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  initialData = [
    { title: 'Dólar Canadense', currency: '', updateTime: '', variation: '' },
    { title: 'Peso Argentino', currency: '', updateTime: '', variation: '' },
    { title: 'Libra Esterlina', currency: '', updateTime: '', variation: '' },
  ];
  
  currencies: string[] = ['CAD-BRL', 'ARS-BRL', 'GBP-BRL'];
  adaptedData: CardComponentProps[] = this.initialData;

  loading = false;
  requestError = false;

  constructor(
    private themeService: ThemeService,
    private currencyService: CurrencyService,
    private store: LocalService,
  ) { }

  ngOnInit(): void {
    this.refreshCurrency(false);
    const time = interval(3 * 60 * 1000); // 3 minutos em milissegundos
    time.subscribe(() => this.refreshCurrency(true));
  }

  refreshCurrency(clearStore: boolean) {
    // load start
    this.loading = true;
    // clear store
    if (clearStore) this.store.clearData();
    // create request
    this.currencyService.lastOccurrence(this.currencies).then((curr: CardComponentProps[]) => {
      this.adaptedData = curr;
    }).catch(() => {
      this.requestError = true;
    }).finally(() => {
      // end load
      this.loading = false;
    })
  }

  toggleTheme(): void {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }

  reset() {
    this.requestError = false;
    this.loading = false;
  }

  handleRefresh() {
    this.reset();
    this.refreshCurrency(true);
  }
}