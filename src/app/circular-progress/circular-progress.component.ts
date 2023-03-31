import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss']
})
export class CircularProgressComponent implements OnInit {

  constructor() { }

  cssprop = 'circular-chart nill';
  strokes = '0 ,100';
  
  @Input() value;

  ngOnInit(): void {
    
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
  }

  circlePath(cx, cy, r, percentil){
  
    var coordx = cx + r * Math.cos( 2 * Math.PI * percentil / 100 - Math.PI / 2 );
    var coordy = cy + r * Math.sin( 2 * Math.PI * percentil / 100 - Math.PI / 2 );
    var modif = percentil >= 50 ? "0 1,1" : " 1 0,1";
    var variables = "M" + cx + "," + cy + " L" + cx +"," + (cx - r) + " A" + r + "," + r + " " + modif + " " + coordx + ", " + coordy + " Z";
    
    var pathEl = document.getElementById("porcentaje");
    pathEl.setAttribute("d", variables);
    pathEl.setAttribute("fill", "red");
    
    document.getElementById("porcentaje-texto").innerHTML = percentil + "%";
  }

}
