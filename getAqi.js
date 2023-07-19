require('dotenv').config();

function getAqi() {
    return new Promise((resolve, reject)=>{
        fetch(`https://airnowapi.org/aq/observation/zipCode/current?zipCode=10038&format=application/json&api_key=${process.env.AIR_NOW_API_KEY}`)
            .then(res=>res.json())
            .then(res=>{
                resolve(
                    res.find(i=>i.ParameterName==='PM2.5').AQI
                );
            })
    });
}

module.exports={ getAqi };
