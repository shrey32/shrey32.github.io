import { ViewType } from './../../enums/view-type';
import { ViewService } from '../../services/view-service';
import { Component, OnInit } from '@angular/core';
import { views } from '../../utils/constants';
import { VIEW_ABOUT } from '../../utils/constants';
import { VIEW_WORK } from '../../utils/constants';
import { VIEW_SKILLS } from '../../utils/constants';
import { VIEW_CONTACT } from '../../utils/constants';
import { SOCIAL_MEDIA } from '../../utils/constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  headerViews: any = views;
  socialMedia: any = SOCIAL_MEDIA;

  constructor(public viewService: ViewService) {
    viewService.setViewType(ViewType.ABOUT);
  }

  ngOnInit(): void {

  }

  onHeaderMenuClick = (viewType: string) => {
    if (viewType == VIEW_ABOUT)
      this.viewService.setViewType(ViewType.ABOUT);
    else if (viewType == VIEW_WORK)
      this.viewService.setViewType(ViewType.WORK);
    else if (viewType == VIEW_SKILLS)
      this.viewService.setViewType(ViewType.SKILLS);
    else if (viewType == VIEW_CONTACT)
      this.viewService.setViewType(ViewType.CONTACT);
  }

}
