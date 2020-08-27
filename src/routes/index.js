import {Router} from 'express';

const router = Router();

router.get('/book', (req, res) =>  {
    res.send('welcome to my Api')
});

router.get('/', (req, res) =>  {
    res.send('welcome to share-book')
});
export default router;