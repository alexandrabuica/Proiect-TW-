import express from 'express';
import {getReview, getReviewById, createReview, updateReview, deleteReview} from '../logic/ReviewsLogic.js';

const router = express.Router();


// router.route('/').post(async (req, res) => {
//     res.json(await createReview(req.body));
// })

router.route('/').post(async (req, res) => {
    try {
        let review = await createReview(req.body);

        if (review.hasErrors)
            res.status(400).json(review);
        else
            res.status(200).json(review);
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})


// router.route('/reviews').get( async (req, res) => {
//     res.json(await getReview());
// })

router.route('/').get(async (req, res) => {
    try {
        res.status(200).json(await getReview());
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/').get(async (req, res) => {
    try {
        res.status(200).json(await getReviewBus());
    } catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})



// router.route('/:id').get( async (req, res) => {
//     res.json(await getReviewById(req.params.id));
// })

router.route('/:id').get(async (req, res) => {
    try {
        res.status(200).json(await getReviewById(req.params.id));
    }
    catch (e) {
        res.status(500).json({ hasErrors: true, message: e.message })
    }
})

router.route('/:id').put( async (req, res) => {
    res.json(await updateReview(req.params.id, req.body));
})

router.route('/:id').delete( async (req, res) => {
    res.json(await deleteReview(req.params.id));
})

export default router;