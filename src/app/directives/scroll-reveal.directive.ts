import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appScrollReveal]',
    standalone: true
})
export class ScrollRevealDirective implements OnInit {
    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'reveal-item');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.renderer.addClass(this.el.nativeElement, 'reveal-active');
                        observer.unobserve(this.el.nativeElement); // Trigger once
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: '0px'
            }
        );

        observer.observe(this.el.nativeElement);
    }
}
