import { ViewType } from './../enums/view-type';
import { Injectable } from '@angular/core';
import { State } from '../models/state';
import { VIEW_ABOUT } from '../utils/constants';
import { VIEW_WORK } from '../utils/constants';
import { VIEW_SKILLS } from '../utils/constants';
import { VIEW_CONTACT } from '../utils/constants';

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
      this.viewTypeStr = VIEW_ABOUT;
    } else if (viewType == ViewType.WORK) {
      this.viewTypeStr = VIEW_WORK;
    } else if (viewType == ViewType.SKILLS) {
      this.viewTypeStr = VIEW_SKILLS;
    } else if (viewType == ViewType.CONTACT) {
      this.viewTypeStr = VIEW_CONTACT;
    }
  }

  public getViewType = (): ViewType => {
    return this.state.viewType;
  }

  public getViewTypeStr = (): string => {
    return this.viewTypeStr;
  }

}
