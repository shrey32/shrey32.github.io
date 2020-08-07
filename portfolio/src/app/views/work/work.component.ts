import { ViewType } from './../../enums/view-type';
import { ViewService } from './../../services/view-service';
import { Component, OnInit } from '@angular/core';
import {WORK_EXPERIENCE} from '../../utils/constants';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit {

  type:ViewType = ViewType.WORK
  workExperience = WORK_EXPERIENCE

  constructor(public viewService: ViewService) {

  }

  ngOnInit(): void {

  }
}
