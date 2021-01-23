import Sequelize from 'sequelize';
import db from '../dbConfig.js';

const Reviews = db.define("Reviews", {
    ReviewId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull : false
    },

    RStartpoint: {
        type: Sequelize.STRING,
        allowNull: false
    },

    REndpoint: {
        type: Sequelize.STRING,
        allowNull: false
    },

    TransportType: {
        type: Sequelize.STRING,
        allowNull: false
    },

    DepartureTime: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TravelTime: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Crowdedness: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Observations: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    } 
})

export default Reviews;
