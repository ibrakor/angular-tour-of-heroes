import {Injectable} from '@angular/core';
import {Hero} from "../components/heroes/Hero";
import {HEROES} from "../mockHeroes";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES)
  }
}
