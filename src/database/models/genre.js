module.exports = (sequelize, dataTypes) =>{
    let alias = 'Genre';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncremental: true
        },
        name  : dataTypes.STRING,
        ranking : dataTypes.INTEGER,
        active : dataTypes.INTEGER,
    }
    let config = {
        tableName : 'genres',
        timestamps : false
    }

    const Genre = sequelize.define(alias,cols,config);
    Genre.associate = function(models){
    Genre.hasMany(
        models.Movie,
        {
            as : 'movies',
            foreignKey: 'genre_id'     
        }
        )
    }
    return Genre;
}