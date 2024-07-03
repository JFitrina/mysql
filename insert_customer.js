var mysql = require('mysql');
var con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});
var sql = "insert into Costomors(name, address) values('Jason','Highway 37'),('Jack','Highway 40'),('Jessy','Highway 35'),('Mimi','Highway 36'),('Laila','Highway 32')";

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("Customer Created");
    });
});


