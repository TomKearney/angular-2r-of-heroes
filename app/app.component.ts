import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Component } from 'angular2/core';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './data/hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import {ROUTER_PRIMARY_COMPONENT} from "angular2/router";

@Component({
    selector: 'my-app',
    templateUrl: './app/views/app.component.html',
    styleUrls: ['./app/css/app.component.css'],
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
    },
    {
        path: '/hero/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
    ])

export class AppComponent {
    title = 'Tour of Heroes';
}