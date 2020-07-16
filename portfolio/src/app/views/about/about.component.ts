
import { Component, OnInit } from '@angular/core';
import { ViewType } from '../../enums/view-type';
import { ViewService } from 'src/app/services/view-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  type: ViewType = ViewType.ABOUT;

  constructor(public viewService: ViewService) {

  }

  ngOnInit(): void {
    console.log("About Component Initialized")
  }

  onLinkClick = () => {
    this.viewService.setViewType(ViewType.WORK);
  }

}
