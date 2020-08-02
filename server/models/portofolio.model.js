const db = require('../db.js');
const Joi = require('@hapi/joi');

class Portofolio {
  
  static async getALLProjects (result) {
    return db.query('SELECT * from projet');
  }

  static async getPerso (result) {
    return db.query('SELECT * from perso');
  }


  static async create (project) {
    return db.query('insert into projet set ?', project)
      .then(res => { project.id = res.insertId; return project });
  }

  static async createBioJob (project) {
    return db.query('insert into perso set ?', project)
      .then(res => { project.id = res.insertId; return project });
  }

  static async findById (id) {
    return db.query('select * from projet where id = ?', [id])
      .then(rows => rows[0] ? rows[0] : null);
  }



  static async getSome (limit, offset) {
    const total = await db.query('select count(id) as count from projet').then(rows => rows[0].count);
    let sql = 'select * from projet'
    if (limit !== undefined && offset !== undefined) {
      sql = `${sql} limit ${limit} offset ${offset}`
    }

    return db.query(sql).then(rows => ({
      results: rows,
      total
    }));
  }

  static async updateById (id, projet) {
    return db.query('UPDATE projet SET ? WHERE id = ?', [projet, id]).then(() => this.findById(id));
  }

  static async updateBioJob ({ bio, jobTitle},id) {
    return db.query('UPDATE perso SET ? WHERE id = ?', [{ bio, jobTitle}, id]).then(() => this.findById(id));
  }

  static async deleteById (id) {
    return db.query('DELETE FROM projet WHERE id = ?', [id]);
  }
}

module.exports = Portofolio;
