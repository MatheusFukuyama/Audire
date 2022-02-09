const Sequelize = require('sequelize');
var   sequelize = require('./MySQLConnect');


sequelize.init();

/*
sequelize.pool
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
*/

const Region = sequelize.pool.define('region', {
  name:     Sequelize.STRING,
  initials: Sequelize.DATE
},
{
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true,

  // define the table's name
  tableName: 'region'
}

);


sequelize.pool.sync().then(function (){
  Region.findAll({
    // Add order conditions here....
    order: [
      ['name', 'ASC']
    ]
  }).then(function(region) {
    console.log(JSON.parse(JSON.stringify(region)))
  })
});

Region.findAll({
  // Add order conditions here....
  order: [
    ['name', 'ASC']
  ]
}).then(region => {
  console.log(JSON.parse(JSON.stringify(region)))
});
