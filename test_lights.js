const { controlLight, colors }=require('./controlLight');

const sleep=s=>new Promise((res, rej)=>setTimeout(res, s*1000));

(async ()=>{
	console.log('AQI 0–50');
        controlLight({
            on: false,
        });
	await sleep(3);

	console.log('AQI 50–100')
	controlLight({
	    on: true,
	    ...colors.yellow
	});
	await sleep(3);

	console.log('AQI 100–150');
	controlLight({
	    on: true,
	    ...colors.orange
	});
	await sleep(3);

	console.log('AQI 150–200');
	controlLight({
	    on: true,
	    ...colors.red
	});
	await sleep(3);

	console.log('AQI 200–300');
	controlLight({
	    on: true,
	    ...colors.purple
	});
	await sleep(3);

	console.log('AQI 300–500');
	controlLight({
	    on: true,
	    ...colors.maroon
	});
	await sleep(3);
})();


