const request = require('request');
const cheerio = require('cheerio');
const _ = require('lodash');
//Choose html page to scrape **features page has the content I want
request('https://banno.com/features/', (error, response, html) =>
{
    if(!error && response.statusCode == 200)
    {
    
    
        const $ = cheerio.load(html);
        //Find the list of products available
        const products = $('div.flex-block div.flex-item h3');
        console.log("Total number of products: " + products.length);
        //Learned how to do .replace with a video from Traversy Media to give credit there
        console.log("List of Products available: " + products.text().replace(/\s\s+/g, ''));
        //find the most common character in the html file and how often it is used

        const mostFrequent = Array.from($(html)).map(mostFrequent =>
            {
                _.chunk(mostFrequent.innerText, 1);
            });
            var charTemp = mostFrequent.toString();
            var findMostFrequent = (string) => {
                var max = 0;
                var maxChar = '';
                string.split('').forEach((char) => {
                    if(string.split(char).length > max) {
                        max = string.split(char).length;
                        maxChar = char;
                    }
                });
                console.log("Number of times max character is used: " + max);
                return maxChar;
            }
            console.log("Most used character: " + findMostFrequent(charTemp));
        //find the number of .png files in the html file
        const numImages = Array.from($('body img')).map(numImages => numImages.src);
        console.log("Images total: " + numImages.length);
        console.log("Images found: " , numImages); 

    }
    
});
