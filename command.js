const axios = require('axios');
const cheerio = require('cheerio');
const imageGrabber = require("./image");
const imageGrabberSingle = require("./singleImage");

module.exports = async function (msg){
    let tokens = msg.content.split(" ");
    let command = tokens.shift();

    // gif command prefix !
    if(command.charAt(0) == '!'){
        //msg.channel.send('🐵');
        const page_url = 'https://hololive.wiki/wiki/';
        const {data} = await axios.get(page_url);
        const $ = cheerio.load(data);
        //('table.wikitable')
        // const vtuber = $("#mw-content-text > div.mw-parser-output > div > div:nth-child(1) > div > div:nth-child(TABLE#) > table:nth-child(ROW) > tbody > tr:nth-child(2) > td > p > span:nth-child(COL) > a")).attr('title');

        const vtuber = $("#mw-content-text > div.mw-parser-output > div > div:nth-child(1) > div > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(2) > td > p > span:nth-child(1) > a").attr('title');

        vtubers = [];
        const table = $('table.wikitable');
        table.find('tbody tr:nth-child(2) td').each((i, element) => {
            const $element = $(element);

            $element.find('p span').each((j, element2) => {
                const $element2 = $(element2);
                const vtuber = {};
                vtuber.link = $element2.find('a').attr('href');
                vtubers.push(vtuber)
                //console.log(vtubers);
            });
        });
        vtube_holder = await imageGrabber(vtubers)
        console.log(vtube_holder)
        //const pics = await imageGrabber(links);
        /*
        const pics = await imageGrabberSingle(vtubers[parseInt(Math.random() * vtubers.length)]);
        msg.channel.send(pics)

        if(typeof(vtuber) == 'string'){
            msg.channel.send(vtuber_title);
        }*/
    }
}