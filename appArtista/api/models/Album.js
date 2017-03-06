/**
 * Album.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idArtista:{
      model:'Artista',

    },
    nombre:{
      type:'string',
      required:true
    },
    fechaLanzamiento:{
      type:'date',
      required:true
    },
    UrlPortada:{
      type:'string',

    }
  }
};

