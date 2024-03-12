import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SidenavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  
  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
  collapsed =false;
  screenWidth = 0;
  navData = navbarData

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }
  closeSidenav(): void{
    this.collapsed= false
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }
}
