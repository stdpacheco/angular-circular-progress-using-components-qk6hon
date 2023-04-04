import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss']
})
export class CircularProgressComponent implements OnInit {

  /*constructor() { }*/

  cssprop = 'circular-chart nill';
  strokes = '0 ,100';
  strokeDashoffset='';
  percentValue="";
  radius = 54;
  circumference = Math.PI * this.radius;
  circumferencePercent = 0;
  dashoffset: number;
  @Input() value;

  /*ngOnInit(): void {
    
    if (Number(this.value) > 0 && Number(this.value) <= 50) {
      this.cssprop = 'circular-chart green';
      this.strokes =  this.value +' ,'+100;
    }
    else if(Number(this.value) > 50 && Number(this.value) < 80) {
      this.cssprop = 'circular-chart yellow';
      this.strokes =  this.value +' ,'+100;
    }
    else if(Number(this.value) > 80 && Number(this.value) < 100) {
      this.cssprop = 'circular-chart red';
      this.strokes =  this.value +' ,'+100;
    }  
    this.progress(0);
  }
  */


  constructor() {
    this.progress(0);
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value.currentValue !== changes.value.previousValue) {
      this.progress(changes.value.currentValue);
    }
  }

  private progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
    this.circumferencePercent=Math.PI*this.radius*(progress);
    console.log(this.circumferencePercent);
  }
  



}
