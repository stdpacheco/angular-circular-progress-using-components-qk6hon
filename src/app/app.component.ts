import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public text_al:boolean = false;

  public toggleMenu:boolean = false;
  public toggleMenu2:boolean = false;
  public toggleMenu3:boolean = false;
  public toggleMenu4:boolean = false;
  
    title = 'orange';
    isMiddleDivVisible: boolean = false;
    public innerWidth: any;

    toggle(){ this.toggleMenu = !this.toggleMenu; }
    toggle2(){ this.toggleMenu2 = !this.toggleMenu2; }
    toggle3(){ this.toggleMenu3 = !this.toggleMenu3; }
    toggle4(){ this.toggleMenu4 = !this.toggleMenu4; }

    arrName: number[];
    yourValue: number=30;
    msg:string;

    constructor(private httpService: HttpClient){
        this.httpService.get('./assets/data.json').subscribe(
          data=>{
            this.arrName = data as number[];
          },
          (err:HttpErrorResponse) => {
            this.msg = "File not Found";
          }
        );
    }
    
    @HostListener('window:resize', ['$event'])
    onResize(event) {
    const innerWidth = event.target.innerWidth;
    //  console.log(innerWidth);
    if(innerWidth <= 770){
    // console.log("hello");
      this.isMiddleDivVisible=true;
      this.text_al=true;
    }else{
    this.isMiddleDivVisible=false;
    this.text_al=false;
    }
  }
  
  ngOnInit(): void {
        
  }
  
}
