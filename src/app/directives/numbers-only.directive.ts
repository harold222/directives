import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumbersOnlyDirective {
  
  constructor(private readonly elRef: ElementRef) { }

  @HostListener('input', ['$event'])
  onChangeInput(event: Event): void {

    const numbersOnly = /[^0-9]*/g;

    const currentValue : string= this.elRef.nativeElement.value;
    this.elRef.nativeElement.value = currentValue.replace(numbersOnly, "")

    if (currentValue !== this.elRef.nativeElement.value) {
      event.stopPropagation();
    }

  }
}
