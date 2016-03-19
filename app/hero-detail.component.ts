import {Component} from 'angular2/core';
import {Hero} from './entities/hero'

@Component({
    selector: 'my-hero-detail',
    inputs: ['hero'],
    template: `
        <div *ngIf="hero" class="selectedHero">
          <h2>{{hero.name}} details!</h2>
          <div><label>id: </label>{{hero.id}}</div>
          <div>
            <label>name: </label>
            <div><input [(ngModel)]="hero.name" placeholder="name"></div>
          </div>
      </div>`
})

export class HeroDetailComponent{
    public hero: Hero;
}