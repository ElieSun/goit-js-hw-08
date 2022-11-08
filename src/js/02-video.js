import {save, load,} from "./localStorage.js"

    import Player from '@vimeo/player';
    var throttle = require('lodash.throttle');
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    player.setCurrentTime(load("videoplayer-current-time")).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });
    const onTimeUpdate = function(data){
        save("videoplayer-current-time", data.seconds)
    }
    player.on('timeupdate', throttle(onTimeUpdate, 1000));