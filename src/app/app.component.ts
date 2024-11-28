import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title: string = 'angular-currency-converter';
  public multiplyControl: FormControl<number> = new FormControl();

  public count: WritableSignal<number> = signal(0);
  public countMultiplied: Signal<number> = computed(
    () => this.count() * this.multiplyControl?.value
  );

  public httpInfo: Signal<any>;

  constructor(private httpClient: HttpClient) {
    this.httpInfo = toSignal(
      this.httpClient.get('https://cat-fact.herokuapp.com/facts')
    );
  }

  public increment(): void {
    this.count.set(this.count() + 1);
  }

  public reset(): void {
    this.count.set(0);
    this.multiplyControl.reset();
  }
}
