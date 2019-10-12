var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": ["Robert Palmer"],
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));


function updateRecords(id, prop, value) {
    var propertyName = Object.keys(collection[id]);

    for(let i=0; i<propertyName.length; i++){
        if(propertyName[i] == prop && value !== ''){
            collection[id][prop].push(value);
            break;
        }else if(propertyName[i] !== prop && value !== ''){
            collection[id][prop] = value;
        }else if(value ==''){
            delete collection[id][prop];
        }
    }
    return collection;
}