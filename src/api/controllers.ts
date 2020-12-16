import { Router } from 'express';
import { PostsService } from '../services/postsService';
import validationMidleware from '../middlewares/validationMiddleware';
export const apiControllers: Router = Router();

apiControllers.get('/post/:post_id', validationMidleware, (req, res) => {
  const posts: PostsService = new PostsService();

  posts.getPost(parseInt(req.params.post_id)).then(post => {
    res.status(200).send(post);
  }).catch((e) => {
    console.log('Error: ', e);
    res.status(500).send('Server error');
  })
})
