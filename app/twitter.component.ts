import { Component, Input } from 'angular2/core'
import {LikeComponent} from './like.component'
@Component({
    selector:'twitter',
    template:`
        <span class="border"></span>
        <div class="media">
            <div class="media-left">
                <a href="#" >
                <img class="media-object" src="{{data.imgUrl}}">
                </a>
            </div>
            <div class="media-body" >
                <h4 class="media-heading">{{data.userId}}<span class="media-idfont">{{data.userHandle}}</span></h4>
                {{data.msgBody}}
                <div>
                    <like [totalLikes]="data.totalLikes" [isLike]="data.isLike"></like>
                </div>
            </div>            
        </div>
        `,
        styles:[ `
        .media-idfont{
                    color:#ccc;
                    font-weight:1.2em;
                }
                .media{
                    margin-border:20px;
                }
                .media{
                    border-radius:10px;
                }
                .border{
                    margin-border:5px;
                }
        `],
        directives:[LikeComponent]
    })

export class TweeterComponent{
        constructor(){
                console.log(this.data);
            }
        @Input() data;
    }