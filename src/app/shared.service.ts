import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

constructor() { }
  public searchBarText:string = '';
}
