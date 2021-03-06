import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[highlight]'
})

export class HightLightDirective {
    constructor(private elRef: ElementRef) {}
    public highlight(activeClass: string) {
        this.elRef.nativeElement.classList.add(activeClass);
    }

    @HostListener('click') private onClick(): void {
        if (this.elRef.nativeElement.classList.contains('active')) {
            this.elRef.nativeElement.classList.remove('active');
        } else {
            this.highlight('active');
        }  
    }
}