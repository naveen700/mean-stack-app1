import {Component, Input} from '@angular/core';
import {Post} from '../post.model';
    
// why we use input decorator, to enable change post variable value from outside of  this component.Input parameter can only be set from direct parent.
@Component({
    selector : 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls : ['./post-list.component.css']
})
export class PostListComponent{
    // posts = [
    //     {title: 'First Post', content: 'This is a first post content'},
    //     {title: 'Second Post', content: 'This is a second post content'},
    //     {title: 'Third Post', content: 'This is a third post content'},
    // ];

     @Input() posts:Post [] = [];
}