import { ViewType } from './../enums/view-type';
import { Injectable } from '@angular/core';
import { State } from '../models/state';

@Injectable({
  providedIn: 'root',
})
export class ViewService {

  state: State;
  viewTypeStr: string

  public setViewType = (viewType: ViewType): void => {
    if (!this.state)
      this.state = new State();
    this.state.viewType = viewType;
    if (viewType == ViewType.ABOUT) {
      this.viewTypeStr = 'ABOUT';
    } else if (viewType == ViewType.WORK) {
      this.viewTypeStr = 'WORK';
    } else if (viewType == ViewType.SKILLS) {
      this.viewTypeStr = 'SKILLS';
    } else if (viewType == ViewType.CONTACT) {
      this.viewTypeStr = 'CONTACT';
    }
  }

  public getViewType = (): ViewType => {
    return this.state.viewType;
  }

  public getViewTypeStr = (): string => {
    return this.viewTypeStr;
  }

}
