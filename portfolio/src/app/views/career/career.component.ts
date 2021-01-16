import { ViewType } from '../../enums/view-type';
import { ViewService } from '../../services/view-service';
import { Component, OnInit } from '@angular/core';
import {WORK_EXPERIENCE} from '../../utils/constants';


@Component({
  selector: 'app-career',
  templateUrl: './career.component.html'
})
export class CareerComponent implements OnInit {

  type:ViewType = ViewType.CAREER;
  workExperience = WORK_EXPERIENCE

  constructor(public viewService: ViewService) {

  }

  ngOnInit(): void {

  }
}
