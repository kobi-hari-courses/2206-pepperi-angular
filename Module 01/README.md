# Module 01 - Directives and Templates
### Directives
* We saw how to create element directives
* We saw how to modify the host element using the `ElementRef` and understood why it is not recommended
* We saw how to use the `Renderer2` object instead, and understoof that it is a better way, but not the best
* We saw how to use `@HostBinding` and `@HostListener` to create binding between the host properties and events, and the directive
* We saw that directives can have `@Input` and `@Output` just like components do
* We saw that we can create an input with the same name as the directive to simplify the syntax of the input

### Containers and Templates
* We saw how to use `<ng-container>` in order to create a container element that will not appear in the final DOM
* We saw that we can still place directives on the container
* We saw how to define a reusable piece of `html` using `<ng-template>`
* We saw how to define local varibles that can be bound to inside the template using the `let-*` attributes
* We saw how to use the template inside an `<ng-container>` using the `*ngTemplateOutlet` directive
* We saw how to supply the data to be bound to using the `context` and `$implicit` keywords, although we did not quite understand the syntax fully (to be concluded)
* Finally, we saw how comnponents may receive templates as input, and use them in their own templates. This allows us to create much more customizable components.
