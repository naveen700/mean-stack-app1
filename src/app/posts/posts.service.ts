// service is a easy way or alternate to send data between components , rather than creating event at every time to pass data and using event binding , we have services to do that better.
import { Post } from './post.model';
import { Injectable } from '@angular/core';
//  services can be accessible for angular env , when registered in app.module.ts in providers or we can use decorator @Injectable (either way is good )
// here we can define we want this service in root level , so that only one instance is used of this service in all the component , not multiple.
@Injectable({ providedIn: 'root' })

export class PostsService {
    private posts: Post[] = [];
    getPosts() {
        // javascript and ts both uses reference for objects , array is also an object here.
        // we dont want to return posts private variable because it will send a refrence , and all the changes will be made in original variable, so we use spread operator.
        return this.posts;
    }
    onAddPost(title: string, content: string) {
        const post: Post = { title: title, content: content };
        this.posts.push(post);
    }
}