const express = require('express');

//controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express();


/*
 Métodos HTTP:
 Get: Buscar uma informação do back-end
 POST: Criar uma informação no back-end
 PUT: Auterar uma informação no back-end
 DELETE: Deletar uma Informação no back-end
*/

/*
 Tipos de paramêtros:

 Query: Parâmetros nomeados enviados na rota após a "?" (filtros, paginação)
 Routes Params: Parêmetros utilizados para identificar recursos 
 Resquest Body: Corpo da requisição, utilizado para criar ou alterar recursos

*/
/**
 * SQL: MySql, SQLite, PostgreSql, Oracle, Miscrosoft SQL server
 * NoSql: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
// Ongs 
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


// Casos ou incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//profile / perfil de uma ong
routes.get('/profile', ProfileController.index);

//Sessions
 routes.post('/sessions', SessionController.create);



module.exports = routes;