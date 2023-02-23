import * as youtubeSearch from "youtube-search";

var opts: youtubeSearch.YouTubeSearchOptions = {
  maxResults: 10,
  key: "AIzaSyCA28hKNrB0MWwHRpqJbw5-ssxVo3TC5JY"
};

youtubeSearch.default("believer imagine dragons", opts, (err, results) => {
  if(err) return console.log(err);

  console.dir(results);
});