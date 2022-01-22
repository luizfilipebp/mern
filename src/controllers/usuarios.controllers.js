const Usuario = require ('../models/usuario.model')

module.exports = {
  async index(req, res) {
      const user = await Usuario.find();
    res.json(user);
  },
  async create(req, res) {
    const {username} = req.body;
    console.log(username);

    let data = {};
    let user = await Usuario.findOne({username})
    if(!user){
      data = {username};
      user = await Usuario.create(data);
      return res.status(200).json(user);
    }else{
      return res.status(500).json(user);
    }
  },
  async details(req, res) {
        const{_id} = req.params;
        const user = await Usuario.findOne({_id});
        console.log(_id);
        res.json(user);
  },
  async delete(req, res){
      const {_id} = req.params;

      const user = await Usuario.findOneAndDelete({_id});
      return res.json(user);
  }
};

