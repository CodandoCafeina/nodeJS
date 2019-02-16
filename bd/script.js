const mysql = require('mysql');

const con = mysql.createConnection({
	host: "localhost",
	user: "bruno",
	password: "@#1Bruno#@"
});

con.connect((err, rows)=>{
	if(err){console.log('erro na conexão com o banco de dados');}
	else{
		console.log('conexão com o banco de dados foi estabelecida');
	}
});