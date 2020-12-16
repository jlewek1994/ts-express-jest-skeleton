import Post from '../interfaces/post';

// mock api data
const POSTS: Array<Post> = [
  {
    userId: 0,
    id: 1,
    title: 'title 1',
    body: 'somestringsomestring'
  },
  {
    userId: 0,
    id: 2,
    title: 'title 2',
    body: 'somestringsomestring'
  },
  {
    userId: 1,
    id: 3,
    title: 'title 3',
    body: 'somestringsomestring'
  },
  {
    userId: 1,
    id: 4,
    title: 'title 4',
    body: 'somestringsomestring'
  }
];

export class PostsService {
  private apiUrl: string;

  constructor () {
    this.apiUrl = process.env.API_URL;
  }

  public postsRequest (): Promise<any> {
    // mock api request
    return new Promise(resolve => {
      resolve(POSTS);
    });
  }

  public async getPost (id: number): Promise<Post> {
    const posts: Post[] = await this.postsRequest()
    return posts.find((post: Post) => {
      return post.id === id;
    })
  }
}
