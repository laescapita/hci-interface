import { outputAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hci-interface-hw';
  mouseOverCondition = false;
  mouseOutCondition = false;
  buttonClicked = false;
  shiftDown = false;
  shiftUp = false;
  sPressed = false;

  MexicoCheck = false;
  PanamaCheck = false;
  ArgentinaCheck = false;
  message = "";

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 3000
  };

  calculateFares(){
    if(this.value >= 0 && this.value <= 500){
      this.message = "Not Enough!";
    }
    if((this.value >= 501 && this.value <= 1000)&&(this.MexicoCheck || this.PanamaCheck || this.ArgentinaCheck)){
      this.message = "Barely Enough!";
    }
    if((this.value >= 1001 && this.value <= 2000)&&(this.MexicoCheck || this.PanamaCheck || this.ArgentinaCheck)){
      this.message = "Leisure Time!";
    }
    if((this.value >= 1001 && this.value <= 2000)&&((this.MexicoCheck && this.PanamaCheck) || (this.MexicoCheck && this.ArgentinaCheck) || (this.PanamaCheck && this.ArgentinaCheck))){
      this.message = "Good Enough!";
    }
    if((this.value >= 1001 && this.value <= 2000)&&(this.MexicoCheck && this.PanamaCheck && this.ArgentinaCheck)){
      this.message = "Barely Enough!";
    }
    if(this.value >= 2001){
      this.message = "Wow you are rich!"
    }
  }

  checkArgentina(event: any){
    this.ArgentinaCheck = !this.ArgentinaCheck;
    console.log(this.ArgentinaCheck);
  }

  checkMexico(event: any){
    this.MexicoCheck = !this.MexicoCheck;
  }

  checkPanama(event: any){
    this.PanamaCheck = !this.PanamaCheck;
  }


  buttonClickedEvent(){
    this.buttonClicked = true;
  }

  onKeyDown(event: any){
    this.shiftDown = true;
  }

  onKeyUp(event: any){
    this.shiftUp = true;
  }

  onSKeyDown(event: any){
    this.sPressed = true;
  }

  secretConditionsMet(){
    console.log(this.mouseOverConditionMet(this.mouseOverCondition));
    return this.mouseOverConditionMet(this.mouseOverCondition);
  }

  mouseOverConditionMet(mouseOverCondition: any){
     if(mouseOverCondition){
      return this.mouseHoverConditionMet(this.mouseOutCondition);
     }
     else{
      return false;
     }
  }

  mouseHoverConditionMet(mouseOutCondition: any){
    if(mouseOutCondition){
     return this.buttonClickedConditionMet(this.buttonClicked);
    }
    else{
      return false;
     }
  }

  buttonClickedConditionMet(buttonClicked: any){
    if(buttonClicked){
     return this.shiftDownConditionMet(this.shiftDown);
    }
    else{
      return false;
     }
  }

  shiftDownConditionMet(shiftDown: any){
    if(shiftDown){
      return this.shiftUpConditionMet(this.shiftUp);
    }
    else{
      return false;
     }
  }

  shiftUpConditionMet(shiftUp: any){
    if(shiftUp){
      return this.sPressedConditionMet(this.sPressed);
    }
    else{
      return false;
     }
  }

  sPressedConditionMet(sPressed: any){
    if(sPressed){
      return true;
    }
    else{
      return false;
     }
  }
  
}



