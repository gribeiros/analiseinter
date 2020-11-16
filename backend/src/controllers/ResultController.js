const Results = require('../database/models/Results')
const User = require('../database/models/User')

const Mm1 = require('../database/models/Mm1')
const Mmmoneb = require('../database/models/Mmmoneb')
const Mm1k = require('../database/models/Mm1k')
const Mminfinito = require('../database/models/Mminfinito')
const Mminfinitok = require('../database/models/Mminfinitok')
const Mmm = require('../database/models/Mmm')
const Mmmb = require('../database/models/Mmmb')

const mm1 = require('../util/lists/mm1')
const mm1b = require('../util/lists/mm1b')
const mm1k = require('../util/lists/mm1k')
const mminfinitok = require('../util/lists/mminfinitok')
const mminfinitos = require('../util/lists/mminfinitos')
const mmm = require('../util/lists/MMm')
const mmmb = require('../util/lists/mmmb')


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
        })
        return res.status(200).json(results)
    },

    async saveMmm1(req, res) {
        const { requisits, capacity, users, name, user_id } = req.body

        let { usage, zero_user, n_user, more_users, more_than_one_users, resposta, waiting, media_user1, req_fila } = mm1(requisits, capacity, users)

        const list = await Mm1.create({ usage, zero_user, n_user, more_users, more_than_one_users, resposta, waiting, media_user1, req_fila })
        await Results.create({ name, mm1_id: list.id, user_id })

        return res.status(200).json({ status: 'save' })
    },

    async saveMm1b(req, res) {
        const { m, B, lamb, u, n, name, user_id } = req.body

        let { lamb_n_m, pb, lamb1, p_zero, p_n, u1, en, en_w, es, ew } = mm1b(m, B, lamb, u, n)

        const list = await Mmmoneb.create({ lamb_n_m, pb, lamb1, p_zero, p_n, u1, en, en_w, es, ew })
        await Results.create({ name, mm1b_id: list.id, user_id })

        return res.status(200).json({ status: 'save' })
    },

    async saveMm1k(req, res) {

        const { m, lambda, u, K, n, name, user_id } = req.body

        let { p_zero, ro, lambdan, pn, enw, en, uti, lambdal, ew, es } = mm1k(m, lambda, u, K, n)

        const list = await Mm1k.create({ p_zero, ro, lambdan, pn, enw, en, uti, lambdal, ew, es })
        await Results.create({ name, mm1k_id: list.id, user_id })

        return res.status(200).json({ status: 'save' })
    },

    async saveMinfinitok(req, res) {

        const { lambda, u, K, n, name, user_id } = req.body
        try {
            let { lambdan, un, ro, eN } = mminfinitok(lambda, u, K, n)

            console.log({ lambdan, un, ro, eN })


            const list = await Mminfinitok.create({ lambdan, un, ro, eN })
            await Results.create({ name, mminfinitok_id: list.id, user_id })

            return res.status(200).json({ status: 'save' })
        } catch (error) {
            console.error(error)
        }


    },

    async saveMminifinitos(req, res) {

        const { y, u, n, porc, name, user_id } = req.body

        let { ro, pn, es } = mminfinitos(y, u, n, porc)

        const list = await Mminfinito.create({ ro, pn, es })

        await Results.create({ name, mminfinito_id: list.id, user_id })

        return res.status(200).json({ status: 'save' })
    },

    async saveMmm(req, res) {

        const { m, y, u, name, user_id } = req.body

        try {

            let { ro, p2, p1, c, e, p_fila, en, es, enn, ew } = mmm(m, y, u)

            const list = await Mmm.create({ ro, p2, p1, c, e, p_fila, en, es, enn, ew })
            await Results.create({ name, mmm_id: list.id, user_id })

            return res.status(200).json({ status: 'save' })
        } catch (error) {
            console.error(error)
            return res.status(500).json(error)
        }

    },

    async saveMmmb(req, res) {

        const { m, B, lambda, u, n, name, user_id } = req.body

        let { ro, p0, pb, pn, loss, en, enw, es, ew } = mmmb(m, B, lambda, u, n)

        const list = await Mmmb.create({ ro, p0, pb, pn, loss, en, enw, es, ew })
        await Results.create({ name, mmmb_id: list.id, user_id })

        return res.status(200).json({ status: 'save' })
    },

}