var Spotify = require('node-spotify-api');
const credentials = require('./private/api_credentials');
console.log(credentials);

var spotify = new Spotify(credentials);

// // spotify.search({ type: 'track', query: 'Qui dit mieux' }, function(err, data) {
// //   if (err) {
// //     return console.log('Error occurred: ' + err);
// //   }

// // console.log(data.tracks.items[0]);
// // });

async function request() {
  try {
    const album = await spotify.request('https://api.spotify.com/v1/albums/6oX7kNKqj9dwNk8i4btVcF');
    console.log(album.tracks.items.map(a => a.artists));
  } catch(err) {
    console.error('Error');
  }
}
request();