const { Model, DataTypes } = require('sequelize');

class Lists extends Model {
    static init(sequelize) {
        super.init({

        },
            {
                sequelize
            })
    }
    static associate(models) {

    }
}

module.exports = Lists;