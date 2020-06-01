// Read data from samples.json file


d3.json('../../samples.json').then(function(data) {
    var all_data = data;
    console.log(all_data);
});

gatherData();