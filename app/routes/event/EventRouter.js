import express from 'express';
import EventModel from '../../models/event';

const eventRouter = express.Router();

eventRouter.get('/', async (req, res) => {
  try {
    const events = await EventModel.getAll();
    res.status(200).send(events);
  } catch (err) {
    res.send(err);
  }
});

eventRouter.get('/company', async (req, res) => {
  try {
    const events = await EventModel.getAllCompanyEvent();
    res.status(200).send(events);
  } catch (err) {
    // in the previous code: error occured.
    res.status(406).send(err);
  }
});

export default eventRouter;
