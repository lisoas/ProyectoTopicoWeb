const mysql = require("mysql");

const options = {
    database: "appconsultas",
    user: "root",
    password: "root",
    insecureAuth: true
  };

function insertData(){
    const sql= "INSERT INTO productos (id,nombre,precio) \
    values ('738292','Shampoo Pantene Pro V control caída 700 ml','105.00');";
     sql= "INSERT INTO supermercado(id,nombre) values ('820493','Walmart')";
     sql = "INSERT INTO consumidor (id,nombre) values ('912749','Ernesto Castro')";

    connection.query(sql,(err,result) => {
        if(err){
            console.error(err);
            process.exit(1);
        }
            console.log(result);
            process.exit(0);
    });
}

const selectData = () => {
    const id = 2;
    const columns = ["nombre", "precio"];
    const table = "productos"
    const sql = "SELECT ?? FROM ?? WHERE id = ?";
    const values = [columns, table, id];
    const queryOptions = { sql, values };
  
    connection.query(queryOptions, (err, result) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(result);
      process.exit(0);
    });
  }
  
  const connection = mysql.createConnection(options);
  
  connection.connect((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    // insertData();
    selectData();
  });







