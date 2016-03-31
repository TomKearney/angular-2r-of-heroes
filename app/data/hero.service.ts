import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from '../entities/hero';

@Injectable()

export class HeroService{

    getHeroes(){
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(){
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES),2000));
    }

    getHeroBy(heroId: number) {
        return Promise
            .resolve(HEROES)
            .then(heroes =>
                heroes.filter(hero => hero.id === heroId)[0]
            );
    }
}