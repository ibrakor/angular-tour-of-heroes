import {Component, OnInit} from '@angular/core';
import {Hero} from "./Hero";
import {NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgForOf,
    NgIf,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{
  constructor(private heroService: HeroService) {
  }

  heroes: Hero[] | undefined
  selectedHero: Hero | undefined;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroesResult =>
      this.heroes = heroesResult)
  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
