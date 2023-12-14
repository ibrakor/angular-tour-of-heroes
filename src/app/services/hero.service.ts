import { Injectable } from '@angular/core';
import {Hero} from "../components/heroes/Hero";
import {HEROES} from "../mockHeroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    return HEROES
  }
}
