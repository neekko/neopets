// ==UserScript==
// @name       Neopets - Snowager Alerts
// @version    1.0
// @match      *://www.neopets.com/*
// @description Displays a reminder when the Snowager is sleeping.
// @author Neekko
// @homepageURL https://github.com/neekko/neopets/
// @downloadURL https://github.com/neekko/neopets/blob/main/userscripts/snowager-reminder.js
// @updateURL https://github.com/neekko/neopets/blob/main/userscripts/snowager-reminder.js
// ==/UserScript==

const date = new Date();

if (date.getUTCHours() == 13|| //6-7am
    date.getUTCHours() == 21|| //2-3pm
    date.getUTCHours() == 5) { //10-11pm

    jQuery('<style>@font-face{font-family: "Cafeteria"; src:url(https://images.neopets.com/js/fonts/cafeteria-black.ttf) format("truetype"); src:url(https://images.neopets.com/js/fonts/cafeteria-black.otf) format("opentype");}#snowager-alert{position: fixed;right: 15px;bottom: 35px;z-index: 100;display: block;width: 150px;height: 150px;background: url(https://images.neopets.com/new_shopkeepers/t_1107.gif) 50% 100% no-repeat;background-size: contain;color: #fff;font-family: "Cafeteria", Arial Bold, sans-serif;font-size: 30px;font-weight: normal;letter-spacing: 2px;text-decoration: none;text-shadow: 1px 1px 0 navy, -1px 1px 0 navy, 1px -1px 0 navy, -1px -1px 0 navy, 0px 1px 0 navy, 0px -1px 0 navy, -1px 0px 0 navy, 1px 0px 0 navy, 2px 2px 0 navy, -2px 2px 0 navy, 2px -2px 0 navy, -2px -2px 0 navy, 0px 2px 0 navy, 0px -2px 0 navy, -2px 0px 0 navy, 2px 0px 0 navy, 1px 2px 0 navy, -1px 2px 0 navy, 1px -2px 0 navy, -1px -2px 0 navy, 2px 1px 0 navy, -2px 1px 0 navy, 2px -1px 0 navy, -2px -1px 0 navy;}#snowager-alert span{position: relative;display: block;top: -15px;left: -25px;transform: rotate(-15deg);}#snowager-alert:hover{font-size: 32px;}</style><a id="snowager-alert" href="https://www.neopets.com/winter/snowager.phtml" target="_blank"><span>I\'m asleep!</span></a>').appendTo('body');

}