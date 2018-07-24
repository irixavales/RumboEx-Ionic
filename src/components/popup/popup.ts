import { Component } from '@angular/core';
import { mobiscroll } from '@mobiscroll/angular';

mobiscroll.settings = {
    theme: 'ios'
};

@Component({
  selector: 'popup',
  templateUrl: 'popup.html'
})

export class PopupComponent {

    bubbleSettings: any = {
        display: 'bubble',
        anchor: '#show-bubble .mbsc-btn',
        buttons: [{
                text: 'Ok',
                handler: 'set'
            },
            'cancel'
        ]
    };
}

