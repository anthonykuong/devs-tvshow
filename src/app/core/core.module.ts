import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {MaterialModule} from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
  ],
  declarations: [HeaderComponent, FooterComponent, ContainerComponent, LayoutComponent, NavItemComponent, SidenavComponent, ToolbarComponent],
  exports: [HeaderComponent, FooterComponent, ContainerComponent, LayoutComponent, NavItemComponent, SidenavComponent, ToolbarComponent]
})
export class CoreModule { }
