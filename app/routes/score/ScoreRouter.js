import express from 'express';
import ScoreModel from '../../models/score';
import { verifyToken } from '../../middlewares/verifyToken';

const scoreRouter = express.Router();

scoreRouter.post('/', verifyToken);
scoreRouter.post('/', async (req, res) => {
  try {
    const { score, userId } = req.body;
    const newScore = await ScoreModel.createOne(score, userId);
    res.status(200).send(newScore);
  } catch (err) {
    res.send(err);
  }
});

export default scoreRouter;
