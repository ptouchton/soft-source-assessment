import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { Subject, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soft-source-assessment'

  primes = this.genPrimes();

  primesOutput: number = 0;
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onStartPrimeRun(): void {
    this.primesOutput = this.numPrimorial(2);
  }

  onPrimeEndRun(): void {

  }

  primorials = [1];


  //output primes on the 1 second interval ( and run for 60 seconds)
  numPrimorial(n: number): number {
    let counter = 0;
    const i = setInterval(() => {
      while (i) {
        this.primorials.push(this.primes?.next().value * this.primorials[this.primorials.length - 1]);
        counter++;
        if (counter === 60) {
          clearInterval(i);
        }
      }

    }, 1000);

    console.log(this.primorials[this.primorials.length - 1]);
    return this.primorials[this.primorials.length - 1];
  }

  *genPrimes(): Generator<number> {
    yield 2
    let n = 2;

    while (true) {
      if (this.isPrime(n)) yield n;
      n += 2;
    }
  }

  isPrime(n: number): boolean {
    for (let i = 2; i <= Math.trunc(Math.sqrt(n)); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
}

