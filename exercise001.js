
const promise = new Promise((resolve, reject) => {
	// Generate random number between 0 and 9
	const randomInt = Math.floor(Math.random() * 10);

	if (randomInt % 2 === 0) {
		// Success
		setTimeout(() => resolve('done'), 2000);
	} else {
		// Failure
		setTimeout(() => reject('error'), 2000);
	}
});


promise
.then(result => { console.log("Yay! Promise resolved with response:"+result ) })
.catch(result => { console.log("Boo. Promise rejected with response:"+result ) });




async function asyncFunc() {
    try {
        const result = await promise; 
        console.log("Yay! Promise resolved with response:"+result );
    }   
    catch(error) {
        console.log("Boo. Promise rejected with response:"+error);
    }
}

asyncFunc(); 

