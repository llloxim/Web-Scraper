const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async function (links){
    const base_url = 'https://hololive.wiki';
    const imgs = []
    for (vtubers of links){
        
        const page = base_url + vtubers.link;
        const {data} = await axios.get(page);
        const $ = cheerio.load(data);
        const article = $('article[title="Costumes "]');
        
        article.find('ul li').each((i, element) => {
            const $element = $(element);
            imgs.push(base_url + $element.find('div div div a').attr('href'));
        });
        
    }
    return imgs
    
    /*
    url = "https://hololive.wiki/wiki/Tokino_Sora";
    const {data} = await axios.get(url);
    const $ = cheerio.load(data);
    const article = $('article[title="Costumes "]');
    const imgs = []
    article.find('ul li').each((i, element) => {
        const $element = $(element);
        imgs.push($element.find('div div div a').attr('href'));
        
    });
    console.log(imgs);
    */
}