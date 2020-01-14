import { Post } from './post.model';

// service is a easy way or alternate to send data between components , rather than creating event at every time to pass data and using event binding , we have services to do that better.
export class PostsService {
    private posts: Post[] = [];

    getPosts() {
        // javascript and ts both uses reference for objects , array is also an object here.
        // we dont want to return posts private variable because it will send a refrence , and all the changes will be made in original variable, so we use spread operator.
        return [...this.posts];
    }
    onAddPost(title: string, content: string) {
        const post: Post = { title: title, content: content };
        this.posts.push(post);
        
    }


}