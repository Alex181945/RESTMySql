'use strict'

class Conexion{

	constructor(){
		this.mysql = require('mysql');
		this.conf  = require('./db-config');
		this.dbOptions = {
			host : this.conf.mysql.host,
			port : this.conf.mysql.port,
			user : this.conf.mysql.user,
			password : this.conf.mysql.pass,
			database : this.conf.mysql.db
		};
		this.myConn = this.mysql.createConnection(this.dbOptions);
	}

	conectar(){
		this.myConn.connect((err) => {
			return (err) ? console.log(`Error al conectarse a MySQL: ${err.stack}`) : console.log(`Conexion exitosa con id: ${this.myConn.threadId}`);
		});
		return this.myConn;
	}

	desconectar(){
		this.myConn.end((err) => {
			return (err) ? console.log(`Error al desconectarse a MySQL: ${err.stack}`) : console.log(`Desconexion exitosa con id: ${this.myConn.threadId}`);
		});
	}

}

module.exports = Conexion;