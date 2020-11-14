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
        function clean(obj) {
            for (var propName in obj) {
                if (obj[propName] === null || obj[propName] === undefined) {
                    delete obj[propName];
                }
            }
        }
        const results = await Results.findAll({
            where: id,
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
            attributes: { exclude: ['mm1_id', 'mm1b_id', 'mm1k_id', 'mminfinito_id', 'mminfinitok_id', 'mmm_id', 'mmmb_id', 'user_id', 'mm1', 'mmmoneb', 'id'] }
        })
        return res.status(200).json(results)
    }
}