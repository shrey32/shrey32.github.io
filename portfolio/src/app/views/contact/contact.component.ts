import { ViewService } from './../../services/view-service';

import { Component, OnInit } from '@angular/core';
import { ViewType } from '../../enums/view-type';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  type: ViewType = ViewType.CONTACT;

  constructor(public viewService:ViewService){

  }

  ngOnInit(): void {
    console.log("Contact Component Initialized")
  }

}
