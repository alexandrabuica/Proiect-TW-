import Sequelize from 'sequelize';

const db = new Sequelize({
    dialect: 'mssql',
    database: 'ProjectTW',
    username: 'sa',
    host: 'localhost',
    port: '55892',
    password: '1234',
    validateBulkParameters: true,
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

export default db;