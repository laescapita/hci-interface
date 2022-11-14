import { Component } from '@angular/core';

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



