import { Component, OnInit, Inject, Optional } from '@angular/core';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Response } from 'express';

@Component({
  selector: 'pm-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  public pageTitle: string = "Resource Not Found:";
  public notFoundUrl = window.location.href;

  constructor(
    @Optional() @Inject(RESPONSE) private response: Response
  ) {
  }

  ngOnInit() {
  }

}
