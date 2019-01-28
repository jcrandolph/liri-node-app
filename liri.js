require("dotenv").config();
var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);
var axios = require("axios");

if (process.argv[2] === "movie-this") {
    var movieName = process.argv[3];
    var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&language=&actors=&country=&tomatoRating=&tomatoes=true&apikey=trilogy";
    console.log(movieUrl);

    if (movieName = undefined) {
        movieName = "mr. nobody"
    }

    axios.get(movieUrl).then(
        function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    );
}

//else if (process.argv[2] === "spotify-this") {
  //  var songName = process.argv[3];
   // var spotifyUrl = "https://api.spotify.com/v1/search?query=" + songName + "\u0026offset=0\u0026limit=20\u0026type=track", "items": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q" }, "genres": [], "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q", "id": "08td7MxkoHQkXnWAYD8d6Q", "images": [{ "height": 640, "url": "https://i.scdn.co/image/f2798ddab0c7b76dc2d270b65c4f67ddef7f6718", "width": 640 }, { "height": 300, "url": "https://i.scdn.co/image/b414091165ea0f4172089c2fc67bb35aa37cfc55", "width": 300 }, { "height": 64, "url": "https://i.scdn.co/image/8522fc78be4bf4e83fea8e67bb742e7d3dfe21b4", "width": 64 }], "name": "Tania Bowra", "popularity": 0, "type": "artist", "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q" }], "limit": 20, "next": null, "offset": 0, "previous": null, "total": 1

   // if (songName = undefined) {
    //    songName = "the sign"
   // }
//    axios.get(spotifyUrl).then(
//        function (response) {
//            console.log("Artist(s): " + response.data.Artists);
//            console.log("Song Name: " + response.data.Track);
//            console.log("Preview Link: " + response.data.imdbRating);
//            console.log("Album: " + response.data.Album);
//        }
//    );
//}


else if (process.argv[2] === "concert-this") {
    var artist = process.argv[3];
    var bandsUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming";
    console.log(bandsUrl);

    axios.get(bandsUrl).then(
        function (response) {
            console.log("Venue: " + response.data[0].venue.name);
            console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region);
            console.log("Date: " + response.data[0].datetime);
        }
    )
}

