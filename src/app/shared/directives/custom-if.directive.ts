import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective {
  @Input() set customIf(condicion: boolean) {
    if (condicion) {
      this.viewContainerL.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerL.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainerL: ViewContainerRef
  ) {}
}
