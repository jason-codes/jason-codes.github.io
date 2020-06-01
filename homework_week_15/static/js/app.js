// Create data gathering function

function gatherData () {
    d3.json('samples.json').then(function(data) {
        console.log(data);
        console.log("All data has been stored into variable 'allData.'")
        console.log('Update 9:13')
    });
};

gatherData();