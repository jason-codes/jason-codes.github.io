// Create data gathering function

function gatherData () {
    d3.json('samples.json').then(function(data) {
        console.log(data);
        var names = data.samples.map(row => row[0].id);
        console.log(names);
        var otuIDs = data.samples.map(row => row[0].otu_ids);
        console.log(otuIDs);
        var otuValues = data.samples.map(row => row[0].sample_values);
        console.log(otuValues);
        var otuLabels = data.samples.map(row => row[0].otu_labels);
        console.log(otuLabels);
    });
};

gatherData();