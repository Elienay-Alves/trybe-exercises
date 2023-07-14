const userModel = require('./userModel');

function getUserMiddleware (req, res, next) {
  const { username } = req.body;

  try {
    const user = await userModel.getUser(username);

    if (!user) {
      return res.status(404).json({ message: 'User não encontrado' });
    }

    return res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ message: `Algo deu errado : ${err}` }); 
  }
}