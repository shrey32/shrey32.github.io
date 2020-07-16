import { ViewType } from './../../enums/view-type';
import { ViewService } from '../../services/view-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(public viewService: ViewService) {
    viewService.setViewType(ViewType.ABOUT);
  }

  ngOnInit(): void {

  }

  onHeaderMenuClick = (viewType: string) => {
    if (viewType == 'ABOUT')
      this.viewService.setViewType(ViewType.ABOUT);
    else if (viewType == 'WORK')
      this.viewService.setViewType(ViewType.WORK);
    else if (viewType == 'SKILLS')
      this.viewService.setViewType(ViewType.SKILLS);
    else if (viewType == 'CONTACT')
      this.viewService.setViewType(ViewType.CONTACT);
  }

}
