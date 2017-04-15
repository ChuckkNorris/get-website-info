var request = require('request');
var cheerio = require('cheerio');

function parse(url) {
    request(url, function (error, response, body) {
        var
            $ = cheerio.load(body);

        $('title').each(function () {
            console.info($(this).text());
        });
    })
}

parse('https://medium.com/@levifuller/building-an-angular-application-with-asp-net-core-in-visual-studio-2017-visualized-f4b163830eaa');

function oldGet() {
    http.get("https://medium.com/@levifuller/building-an-angular-application-with-asp-net-core-in-visual-studio-2017-visualized-f4b163830eaa", (data) => {
        var reg = new RegExp(/<title>(.*?)<\/title>/);
        var matches = reg.exec(data)
        //var matches = data.match(/<title>(.*?)<\/title>/);
        console.log(data);
    })
}

// "http://textance.herokuapp.com/title/www.bbc.co.uk"