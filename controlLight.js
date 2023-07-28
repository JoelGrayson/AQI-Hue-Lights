require('dotenv').config();
const LIGHT_ID='2';

const controlLight=obj=>
    fetch(`http://${process.env.BRIDGE_IP}/api/${process.env.USERNAME}/lights/${LIGHT_ID}/state`, {
        method: 'PUT',
        body: JSON.stringify(obj)
    });

module.exports={
    controlLight,
    colors: {
        // From https://docs.airnowapi.org/aq101
        yellow: {
            bri: 50, //0-254
            sat: 254, //0-254
            hue: 12_000 //00_000-70_000
        },
        orange: {
            bri: 80,
            sat: 254,
            hue: 8_000
        },
        red: {
            bri: 100,
            sat: 254,
            hue: 0
        },
        purple: {
            bri: 120,
            sat: 250,
            hue: 50_000
        },
        maroon: {
            bri: 250,
            sat: 254,
            hue: 70_000
        }
    }
};
