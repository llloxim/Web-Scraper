const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async function (msg){
    let tokens = msg.content.split(" ");
    let command = tokens.shift();

    // gif command prefix !
    if(command.charAt(0) == '!'){
        //msg.channel.send('🐵');
        /*
        const page_url = 'https://gamepress.gg/arknights/operator/skadi-corrupting-heart';
        const {data} = await axios.get(page_url);
        const $ = cheerio.load(data);
        const image = $('.operator-image.current-tab').find('a').attr('href');
        msg.channel.send(image);*/
        const page_url = 'https://hololive.wiki/wiki/';
        const {data} = await axios.get(page_url);
        const $ = cheerio.load(data);
        const vtuber_href = $('')

    }
}