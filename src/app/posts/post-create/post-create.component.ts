import { Component } from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Output} from '@angular/core';
import {Post} from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
 
// '@' below is the decorator which are used to define or mark class as component, so that Angular could know that this is component.
// template can have html in it to use for the component.
// templateUrl will have link to the html .
// selector is name used in html to use this component.
// register this component in app.module.ts

// -------------------- why event emitter is used ? ---------------------------
// to pass a paramter from one component to another(like post object here) ,we use emitters 
// output decorator is used to make postCreated access it from outside , it can only be access from direct parent.
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
    , styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredContent = '';
    enteredTitle = '';
    newPost = 'No POST';
    @Output() postCreated = new EventEmitter<Post>();
    // onAddPost(postInput:HTMLTextAreaElement){
    //     // console.dir(postInput) // to view the object value.
    //     // this.newPost = postInput.value;
    //     this.newPost = this.enteredContent;
    // }

    // onAddPost() {
    //     const post:Post = { title: this.enteredTitle, content: this.enteredContent };
    //     this.postCreated.emit(post)
    // }

    //using NgForms
    onAddPost(form:NgForm) {
        if(form.invalid){
            return;
        }
        // send data btw components using events
            // form.value.title title here is a name of html element access through  NgForms
            // const post:Post = { title: form.value.title, content: form.value.content };
            // this.postCreated.emit(post)

        // send data btw components using Services
            this.postsService.onAddPost(form.value.title ,form.value.content);
    }

    constructor(public postsService: PostsService){}

}