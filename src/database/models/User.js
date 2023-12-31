const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models){
            this.hasMany(models.Task, {foreignKey: 'userId'})
        }
    }

    User.init({
        //Los atributos del modelo se definen aqui
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        //------------ 
    }, {
        //Otras opciones
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true, //Esto agrega dos columnas, createdAt, updatedAt
    });
    return User;
}
