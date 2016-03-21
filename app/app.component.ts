import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Component } from 'angular2/core';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './data/hero.service';
import { HeroesComponent } from './heroes.component';
import {ROUTER_PRIMARY_COMPONENT} from "angular2/router";

@Component({
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    }])

export class AppComponent {
    title = 'Tour of Heroes';
}