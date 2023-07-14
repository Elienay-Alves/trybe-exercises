const { Router } = require('express');
const read = require('../helpers/read');
const write = require('../helpers/write');

const router = Router();
// router.use(Router.json());

router.get('/:id', async (req, res) => {
  try {
    const simpsons = await read();
    const simpson = simpsons.find(({id}) => id === req.params.id);

    if (!simpson) return res.status(404).json({ message: 'simpson not found'})
    res.status(200).json(simpson);
    console.log('aaaaaa');
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const { id, name } = req.body;
    const simpsons = await read();

    if (simpsons.some((character) => character.id === Number(id))) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await write();
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
})

router.get('/', async (_req, res) => {
  try {
    const simpsons = await read();
    return res.status(200).json(simpsons)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router;