import { Component, Input } from '@angular/core';
import { Category } from '../../mocks/categories';

@Component({
    selector: 'bs-navbar',
    templateUrl: 'navbar.template.html'
})
export class NavBarComponent {
    @Input('source') categories: Category[];
    @Input() selectCategory: Function;
}