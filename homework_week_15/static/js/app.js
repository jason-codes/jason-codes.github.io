// Create data gathering function

function gatherData () {
    d3.json('samples.json').then(function(data) {
        console.log(data);
        var names = data.names;
        console.log(names);
        var otuIDs = data.samples.map(row => row);
        console.log(otuIDs);
    });
};

gatherData();