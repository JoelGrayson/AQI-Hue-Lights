const { controlLight, colors }=require('./controlLight');
const { getAqi }=require('./getAqi');

async function main() {
    const aqi=await getAqi();
    console.log(aqi);

/*
AQI Numbers	AQI Category (Descriptor)	    AQI Color   Hexadecimal Color Value	Category Number
0 – 50	    Good	                        Green	    #00e400    	1
51 – 100	Moderate	                    Yellow	    #ffff00 	2
101 – 150	Unhealthy for Sensitive Groups	Orange	    #ff7e00 	3
151 – 200	Unhealthy	                    Red         #ff0000 	4
201 – 300	Very Unhealthy	                Purple	    #8f3f97 	5
301 – 500	Hazardous	                    Maroon	    #7e0023     6
*/
    if (aqi<50 && aqi>=0)
        controlLight({
            on: false,
        });
    if (aqi>=50 && aqi<100)
        controlLight({
            on: true,
            ...colors.yellow
        });
    if (aqi>=100 && aqi<150)
        controlLight({
            on: true,
            ...colors.orange
        });
    if (aqi>=150 && aqi<200)
        controlLight({
            on: true,
            ...colors.red
        });
    if (aqi>=200 && aqi<300)
        controlLight({
            on: true,
            ...colors.purple
        });
    if (aqi>=300 && aqi<500)
        controlLight({
            on: true,
            ...colors.maroon
        });
}

main();
