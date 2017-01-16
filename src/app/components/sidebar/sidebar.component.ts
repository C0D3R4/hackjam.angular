import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'bs-sidebar',
    templateUrl: 'sidebar.template.html',
})
export class SidebarComponent {
    navClosed: Boolean = true;

    @Output()
    searchTermChanged: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    sidebarIsOpening: EventEmitter<Boolean> = new EventEmitter<Boolean>();

    search(term){
        this.searchTermChanged.emit(term);
    }

    toggleSideBar() {
        this.navClosed = !this.navClosed;
        this.sidebarIsOpening.emit(this.navClosed)
    }
}