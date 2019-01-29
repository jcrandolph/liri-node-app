require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");

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
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        })
}

else if (process.argv[2] === "spotify-this") {
    var spotify = new Spotify(keys.spotify)
    var songName = process.argv[3];
    if (songName = undefined) {
        songName = "the sign";
    }
    spotify.search({ type: "track", query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log("Artist(s): " + data.tracks.artists);
        console.log("Song name: " + data.tracks.track);
        console.log("Preview link: " + data.tracks.preview_url);
        console.log("Album: " + data.tracks.album)
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    })
}


else if (process.argv[2] === "concert-this") {
    var artist = process.argv[3];
    var bandsUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming";
    console.log(bandsUrl);

    axios.get(bandsUrl).then(
        function (response) {

            console.log("Venue: " + response.data[0].venue.name);
            console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region);
            console.log("Date: " + response.data[0].datetime);
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        })
}

else if (process.argv[2] === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }
}