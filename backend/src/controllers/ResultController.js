const sequelize = require("sequelize")

const Results = require('../database/models/Results')
const Mm1 = require('../database/models/Mm1')
const Mmmoneb = require('../database/models/Mmmoneb')
const Mm1k = require('../database/models/Mm1k')
const Mminfinito = require('../database/models/Mminfinito')
const Mminfinitok = require('../database/models/Mminfinitok')
const Mmm = require('../database/models/Mmm')
const Mmmb = require('../database/models/Mmmb')



module.exports = {
    async index(req, res) {
        const { id } = req.params
        const results = await Results.findAll({
            where: { user_id: id },
            include: [
                {
                    model: Mmmoneb,
                    as: 'mmm1b',
                    required: false,

                },
                {
                    model: Mm1,
                    as: 'mm1',
                    required: false,

                },
                {
                    model: Mm1k,
                    as: 'mm1k',
                    required: false,

                },
                {
                    model: Mminfinito,
                    as: 'mminfinito',
                    required: false,

                },
                {
                    model: Mminfinitok,
                    as: 'mminfinitok',
                    required: false,

                },
                {
                    model: Mmm,
                    as: 'mmm',
                    required: false,

                },
                {
                    model: Mmmb,
                    as: 'mmmb',
                    required: false,

                },

            ],
            attributes: { exclude: ['mm1_id', 'mm1b_id', 'mm1k_id', 'mminfinito_id', 'mminfinitok_id', 'mmm_id', 'mmmb_id', 'mm1', 'mmmoneb'] }
        })
        return res.status(200).json(results)
    },
    async findByList(req, res) {
        const { id } = req.params
        const { name } = req.body

        const results = await Results.findAll({
            where: { user_id: id, name: name },
            include: [
                {
                    model: Mmmoneb,
                    as: 'mmm1b',
                    required: false,

                },
                {
                    model: Mm1,
                    as: 'mm1',
                    required: false,

                },
                {
                    model: Mm1k,
                    as: 'mm1k',
                    required: false,

                },
                {
                    model: Mminfinito,
                    as: 'mminfinito',
                    required: false,

                },
                {
                    model: Mminfinitok,
                    as: 'mminfinitok',
                    required: false,

                },
                {
                    model: Mmm,
                    as: 'mmm',
                    required: false,

                },
                {
                    model: Mmmb,
                    as: 'mmmb',
                    required: false,

                },

            ],
            attributes: { exclude: ['mm1_id', 'mm1b_id', 'mm1k_id', 'mminfinito_id', 'mminfinitok_id', 'mmm_id', 'mmmb_id', 'mm1', 'mmmoneb'] }
        })
        return res.status(200).json(results)
    },

    async saveMmm1(req, res) {
        const { requisits, capacity, users } = req.body



        return res.status(200).json()
    },

    async saveMm1b(req, res) {

        return res.status(200).json()
    },

    async saveMm1k(req, res) {

        return res.status(200).json()
    },

    async saveMinfinitok(req, res) {

        return res.status(200).json()
    },

    async saveMminifinitos(req, res) {

        return res.status(200).json()
    },

    async saveMmm(req, res) {

        return res.status(200).json()
    },

    async saveMmmb(req, res) {

        return res.status(200).json()
    },

}