var mysql = require("mysql")

var con = mysql.createConnection({
  host: "localhost",
  user: "oxane",
  password: "oxane@04",
  database:"mysqldb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Students(name,age,gender,class) values('mimi','16','male','year2A')"
  // con.query('create databse mysqldb')
  
  // con.query('CREATE Table Students(name varchar(50)  , age int ,gender char(6) , class varchar(50))',function(error,result){
  //   if(error) throw error;
  //   console.log("table created");
  // })
  con.query(sql,function(err,result){
    if(err) throw err
    console.log('data insertes');
  })
})

