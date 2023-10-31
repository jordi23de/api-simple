const app = require('./app.js')
const sequelize = require('./database/database.js')

/*const main=()=>{
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
}*/


//Para probar conexion
async function main() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        app.listen(app.get("port"));
        console.log(`Server on port ${app.get("port")}`);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

main();