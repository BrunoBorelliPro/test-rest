const knex = require('../database')

module.exports = {
    async index(req, res){
        const results = await knex('message')
        return res.json(results)
    },
    async create(req, res, next){
        const { title, conteudo } = req.body
        try {
            await knex('message').insert(
                {
                    title,
                    conteudo
                }
            )
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next){
        const {id} = req.params
        const { title, conteudo } = req.body
        try {
            await knex('message')
            .update(
                {
                    title,
                    conteudo
                }
            )
            .where({id})
            return res.send()
        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next){
        const {id} = req.params
        try {
            await knex('message')
            .delete()
            .where({id})
            
            return res.send()
        } catch (error) {
            next(error)
        }
    }
}