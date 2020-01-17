import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post.model';
import { PostsService } from '../posts.service';
    
// why we use input decorator, to enable change post variable value from outside of  this component.Input parameter can only be set from direct parent.
@Component({
    selector : 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls : ['./post-list.component.css']
})
// OnInit is a interface of angular life cycle by implementing its method ngOnInit , angular will call this ngoninit method when instance of this PostListComponen is created.
export class PostListComponent implements OnInit{
    // posts = [
    //     {title: 'First Post', content: 'This is a first post content'},
    //     {title: 'Second Post', content: 'This is a second post content'},
    //     {title: 'Third Post', content: 'This is a third post content'},
    // ];

     @Input() posts:Post [] = [];
    //  postsService:PostsService ;
    // we are using dependency injection , angular creates the object internally , things we want to inject we can define at constructor and 
    //  angular will make the instance of the object which are defined in constructor and passed them to constructor while creating the object of
    // this component.
    // if we define postservice variable as public then postService variable will be available in whole class, its not just local variable to constructor.
    //  constructor(postService : PostsService){
    //     this.postService = postService;
    //  }

    constructor(public postsService : PostsService){}

    ngOnInit(){
        // ngOnInit is used for basic intialization.
        this.posts = this.postsService.getPosts();
    }
    
}