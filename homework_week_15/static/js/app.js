// Create data gathering function

function gatherData () {
    d3.json('samples.json').then(function(data) {
        console.log(data);
        var names = data.samples.map(row => row.id);
        console.log(names);
        var otuIDs = data.samples.map(row => row.otu_ids);
        console.log(otuIDs);
        var otuValues = data.samples.map(row => row.sample_values);
        console.log(otuValues);
        var otuLabels = data.samples.map(row => row.otu_labels);
        console.log(otuLables);
    });
};

gatherData();