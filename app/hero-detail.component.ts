import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Hero} from './entities/hero';
import { HeroService } from './data/hero.service';

@Component({
    selector: 'my-hero-detail',
    inputs: ['hero'],
    templateUrl: './app/views/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{
    public hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) { }

    ngOnInit(){
        let heroId = +this._routeParams.get('id');
        this.hero = this._heroService.getHeroBy(heroId);
    }

    goBack(){
        window.history.back();
    }
}