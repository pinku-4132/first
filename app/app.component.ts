import {Component} from 'angular2/core';
import {TweeterComponent} from './twitter.component';
import {TweeterService} from './tweeter.service';

@Component({
    selector:'my-app',
    template:`
    <div *ngFor="#tweet of tweets">
    <twitter [data]="tweet"></twitter>
    </div>
    `,
    directives:[TweeterComponent],
    providers:[TweeterService]
})
export class AppComponent { 
tweets:any[];
constructor(tweetterService:TweeterService){
            this.tweets=tweetterService.getTweetDetails();
        }
}
