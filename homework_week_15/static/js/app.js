// Read data from samples.json file

function gatherData() {
    d3.json('../../samples.json').then(function(data) {
        var all_data = data
        console.log(all_data);
    })
};

gatherData();