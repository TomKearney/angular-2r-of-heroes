import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Hero } from './entities/hero';
import { HeroService } from './data/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './app/views/hero-detail.component.html',
    styleUrls: ['./app/css/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    public hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) { }

    ngOnInit(){
        let heroId = +this._routeParams.get('id');

        this._heroService
            .getHeroBy(heroId)
            .then(hero => {
                this.hero = hero;
            });
    }

    goBack(){
        window.history.back();
    }
}