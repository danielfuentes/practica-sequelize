module.exports = (sequelize, dataTypes) =>{
    let alias = 'Movie';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncremental: true
        },
        title  : dataTypes.STRING,
        rating : dataTypes.INTEGER,
        awards : dataTypes.INTEGER,
        length : dataTypes.INTEGER,
        release_date: dataTypes.DATE
    }
    let config = {
        tableName : 'movies',
        timestamps : false
    }

    const Movie = sequelize.define(alias,cols,config);
    Movie.associate = function(models){
        Movie.belongsTo(
            models.Genre,
            {
                as : 'genres',
                foreignKey: 'genre_id'     
            }
        )
    }
   
    return Movie;
}