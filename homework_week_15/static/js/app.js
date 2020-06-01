console.log('Hello');

d3.json('../../samples.json').then(function(data) {
    var allData = data;
    console.log(allData);
    console.log("All data has been stored into variable 'allData.'")
});

