import { Injectable } from '@angular/core';
import {Hero} from '';
import {HEROES} from '';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  
  
  getHeroes():Hero[]{
	  return HEROES;
  }
  
}
