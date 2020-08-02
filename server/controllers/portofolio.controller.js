const Portofolio = require('../models/portofolio.model.js');


class PortofolioController {

  static async findAll(req, res) {
    try {
      const projet = await Portofolio.getALLProjects();
      const bioJob = await Portofolio.getPerso()
      res.status(200).send({ projet, bioJob });
    }
    catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while creating the Freelance.'
      });
    }
  }

  

  static async create(req, res) {


    try {
      const { name, description, urlReference, projectLink, client} = req.body
      const project = await Portofolio.create({ name, description, urlReference, projectLink, client})

      res.status(201).send({project})
    }  
    catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred .'
      });
    }
  }
  
  static async createPhoto(req, res) {
    const urlReference = req.file ? req.file.path : null;
    if (!req.file) {
      res.status(400).send({ errorMessage: 'Image content can not be empty!' });
    }
    res.status(200).send({ urlReference });
  }
    


  static async update(req, res) { 
    const id = 1;
    try {
      const { bio, jobTitle } = req.body
      const bioJob = await Portofolio.updateBioJob({ bio, jobTitle},id )
      
    }  
    catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred .'
      });
    }
  }
    // static async create (req, res) {
    //   const {title, content} = req.body;
    //   const main_picture_url = req.file ? req.file.path : null
    //   const createdpost = await Post.create({title, content, main_picture_url})
    //   res.status(201).send(createdpost)
    // }

    // static async findAll (req, res) {
    //   const page = tryParseInt(req.query.page, 1);
    //   const per_page = tryParseInt(req.query.per_page, 30);
    //   const {results, total} = await Portofolio.getSome(per_page, (page - 1) * per_page)
    //   const rangeEnd = page * per_page;
    //   const rangeBegin = rangeEnd - per_page + 1;
    //   res.header('content-range', `${rangeBegin}-${rangeEnd}/${total}`)
    //   res.send(results)
    // }

    static async delete (req, res) {
      const {id} = req.params
      try {
        const existingProject = await Portofolio.findById(id)
        
        if (!existingProject.id) {
          return res.sendStatus(404)
        }
        await Portofolio.deleteById(id)
        res.sendStatus(204)
      } catch(err) {
        res.status(700).send({
          errorMessage: err.message || 'Some error occurred .'
        });
      }
      
    }
  }

module.exports = PortofolioController;
