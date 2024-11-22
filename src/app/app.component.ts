import { Component, computed, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-currency-converter';
  multiplyControl = new FormControl();

  count = signal(0);
  countMultiplied = computed(() => this.count() * this.multiplyControl?.value);

  increment() {
    this.count.set(this.count() + 1);
  }

  reset() {
    this.count.set(0);
    this.multiplyControl.reset();
  }
}
