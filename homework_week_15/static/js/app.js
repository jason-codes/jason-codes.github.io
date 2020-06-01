// Create data gathering function

function gatherData () {
    d3.json('samples.json').then(function(data) {
        var index = 0
        var names = data.samples.map(row => row.id[index]);
        console.log(names);
        var otuIDs = data.samples.map(row => row.otu_ids[index]);
        console.log(otuIDs);
        var otuValues = data.samples.map(row => row.sample_values[index]);
        console.log(otuValues);
        var otuLabels = data.samples.map(row => row.otu_labels[index]);
        console.log(otuLabels);
    });
};

gatherData();