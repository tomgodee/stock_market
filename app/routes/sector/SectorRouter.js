import express from 'express';
import SectorModel from '../../models/sector';

const sectorRouter = express.Router();

sectorRouter.get('/', async (req, res) => {
  try {
    const sectors = await SectorModel.getAll();
    res.status(200).send(sectors);
  } catch (err) {
    res.send(err);
  }
});

sectorRouter.get('/:sectorId/company', async (req, res) => {
  try {
    console.log('req.params', req.params);
    const sectors = await SectorModel.getOneWithCompany(req.params.sectorId);
    res.status(200).send(sectors);
  } catch (err) {
    res.send(err);
  }
});

export default sectorRouter;
