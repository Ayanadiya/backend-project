const Sequelize=require('sequelize');

const sequelize= new Sequelize('node_complete', 'root', 'Ayana@17', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports=sequelize;