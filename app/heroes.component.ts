import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {Hero} from './entities/hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './data/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/views/heroes.component.html',
    styleUrls: ['./app/css/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {s
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private _router: Router,
        private _heroService: HeroService) { }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    onView(hero: Hero){
        let link = ['HeroDetail', {id: hero.id}];
        this._router.navigate(link);
    }
}
