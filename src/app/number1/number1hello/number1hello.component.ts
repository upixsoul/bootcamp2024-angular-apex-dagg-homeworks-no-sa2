import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-number1hello',
  templateUrl: './number1hello.component.html',
  styleUrl: './number1hello.component.scss'
})
export class Number1helloComponent {
  myId: string="";
  constructor(private actRoute: ActivatedRoute) {
    this.myId = this.actRoute.snapshot.params['id'];
  }
}
