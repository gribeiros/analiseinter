const User = require('../database/models/User')
const bcrypt = require('bcrypt')

module.exports = {
    async store(req, res) {
        try {

            const { name, email, password, cpf } = req.body;

            const user = await User.findOne({ where: { cpf: cpf } })

            if (user) {
                return res.status(404).json({ error: 'This user already exist' })
            }

            password_hash = await bcrypt.hash(password, 8);

            const userCreate = await User.create({ name, email, password_hash, cpf })

            return res.json(userCreate)
        } catch (error) {
            console.error(error)
            res.status(500).json({ Error: error.toString() })
        }
    },

    async login(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({ where: { email: email } })

        if (user && await bcrypt.compare(password, user.password_hash)) {
            return res.status(200).json({ login: true })
        }
        else {
            return res.status(401).json({ error: 'E-mail ou senha errados' })
        }

    }



}