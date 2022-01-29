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
        //('table.wikitable')
        // const vtuber = $("#mw-content-text > div.mw-parser-output > div > div:nth-child(1) > div > div:nth-child(TABLE#) > table:nth-child(ROW) > tbody > tr:nth-child(2) > td > p > span:nth-child(COL) > a")).attr('title');

        const vtuber = $("#mw-content-text > div.mw-parser-output > div > div:nth-child(1) > div > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(2) > td > p > span:nth-child(1) > a").attr('title');

        const table = $('table.wikitable');
        table.find('tbody tr:nth-child(2) td').each((i, element) => {
            const $element = $(element);

            $element.find('p span').each((j, element2) => {
                const $element2 = $(element2);
                const vtubers = {};
                vtubers.name = $element2.find('a').attr('href');
                console.log(vtubers);
            });

            console.log('\n')

            // const vtubers = {};
            // vtubers.name = $element.find('p a').attr('href');
            // console.log(vtubers);
            // console.log($element.text());
        });

        if(typeof(vtuber) == 'string'){
            msg.channel.send(vtuber_title);
        }
    }
}