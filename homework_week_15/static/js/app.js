console.log('Hello');

d3.json('samples.json').then(function(data) {
    console.log(data);
    console.log("All data has been stored into variable 'allData.'")
});

