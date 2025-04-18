'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Group_Role extends Model {
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
    Group_Role.init({
        groupId: DataTypes.INTEGER,
        roleId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Group_Role',
    });
    return Group_Role;
};