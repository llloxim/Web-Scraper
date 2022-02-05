const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async function (vtuber){
    const base_url = 'https://hololive.wiki';
    const page = base_url + vtuber.link;
    const {data} = await axios.get(page);
    const $ = cheerio.load(data);
    const article = $('article[title="Costumes "]'); 
    const imgs = article.find('ul li');
    const place = parseInt(Math.random() * imgs.length);
    const $imgs = $(imgs[place]);
    return (base_url + $imgs.find('div div div a').attr('href'));
}