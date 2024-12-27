'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class GroupRole extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // GroupRole.hasMany(models.Group, { foreignKey: 'groupId' });
            // GroupRole.hasMany(models.Role, { foreignKey: 'roleId' });
        }
    }
    GroupRole.init({
        groupId: DataTypes.INTEGER,
        roleId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Group_Role',
    });
    return GroupRole;
};