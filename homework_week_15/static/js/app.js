// Create data gathering function

function gatherData() {
    d3.json('samples.json').then(function(data) {
        allData = data;
        console.log(allData);
    });
};

gatherData();

var names = allData.names;
console.log(names);

// function gatherData () {
//     d3.json('samples.json').then(function(data) {
//         console.log(data);
//         var index = 0;
//         var name = data.samples[index].id;
//         console.log(name);
//         var otuIDs = data.samples[index].otu_ids;
//         console.log(otuIDs);
//         var otuValues = data.samples[index].sample_values;
//         console.log(otuValues);
//         var otuLabels = data.samples[index].otu_labels;
//         console.log(otuLabels);



//         // var names = data.samples[index].map(row => row[0].id);
//         // console.log(names);
//         // var otuIDs = data.samples.map(row => row[0].otu_ids);
//         // console.log(otuIDs);
//         // var otuValues = data.samples.map(row => row[0].sample_values);
//         // console.log(otuValues);
//         // var otuLabels = data.samples.map(row => row[0].otu_labels);
//         // console.log(otuLabels);
//     });
// };

// gatherData();


// var data = 


// // Populate dropdown menu

// var names = data.names;
// console.log(names);




// var nameIndex = names.indexOf('941');
// console.log(nameIndex);


// console.log(data);
// var index = 0;
// var name = data.samples[index].id;
// console.log(name);
// var otuIDs = data.samples[index].otu_ids;
// console.log(otuIDs);
// var otuValues = data.samples[index].sample_values;
// console.log(otuValues);
// var otuLabels = data.samples[index].otu_labels;
// console.log(otuLabels);