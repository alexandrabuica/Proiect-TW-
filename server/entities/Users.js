import Sequelize from 'sequelize';
import db from '../dbConfig.js';

const Users = db.define("Users", {
    UserId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull : false
    },

    Username: {
        type: Sequelize.STRING,
        allowNull: false
    },

    UserPassword: {
        type: Sequelize.STRING,
        allowNull: false
    },

    UserEmail: {
        type: Sequelize.STRING,
        allowNull: false
    },

    UserAddress: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

export default Users;

