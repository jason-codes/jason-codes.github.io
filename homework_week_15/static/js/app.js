// Create data gathering function

function gatherData() {
    d3.json('samples.json').then(function(data) {
        allData = data;
        console.log(allData);
    });
};

gatherData();


// Alternate data gathering for testing

// allData = 
  


// Create all options for drop down menu

function dropdownMenuOptions() {
    // Create array of all names
    names = allData.names;
    // Create d3 selection of the <select> (dropdown) element
    dropdownMenu = d3.select('#selDataset');
    // Iterate through names array, add <option> element for each name
    names.forEach(name => dropdownMenu.append('option').attr('value', `${name}`).text(`${name}`));
};

dropdownMenuOptions();



// Create default Plotly bar chart using 0 index selection

function defaultBarChart() {
    // Index 0 samples data, limit arrays to 10 maximum
    var index = 0;
    var name = allData.samples[index].id;
    var otuIDNumbers = allData.samples[index].otu_ids.slice(0,10);
    var otuIDStrings = otuIDNumbers.map(otuIDNumber => 'OTU ' + otuIDNumber);
    var otuValues = allData.samples[index].sample_values.slice(0,10);
    var otuLabels = allData.samples[index].otu_labels.slice(0,10);
    // Gather Plotly.newPlot arguments
    var trace = {
        x: otuValues.reverse(),
        y: otuIDStrings.reverse(),
        text: otuLabels.reverse(),
        type: 'bar',
        orientation: 'h'
    };
    var data = [trace];
    var layout = {
        title: `Subject ID #${name}`,
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
          }
    };
    Plotly.newPlot('bar', data, layout);
};

defaultBarChart();



// Update data when a change takes place to the DOM

d3.selectAll('body').on('change', userSelection);

// Callback function when change occurs, gather data related to the user's selected name
function userSelection() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Name (value) of selected option
    var userSelectionName = dropdownMenu.node().value;
    // Index of selected option
    var userSelectionIndex = names.indexOf(userSelectionName);
    // Find corresponding samples data, limit arrays to 10 maximum
    var name = allData.samples[userSelectionIndex].id;
    var otuIDNumbers = allData.samples[userSelectionIndex].otu_ids.slice(0,10);
    var otuIDStrings = otuIDNumbers.map(otuIDNumber => 'OTU ' + otuIDNumber);
    var otuValues = allData.samples[userSelectionIndex].sample_values.slice(0,10);
    var otuLabels = allData.samples[userSelectionIndex].otu_labels.slice(0,10);
    // Print values to console for check
    console.log(`Index: ${userSelectionIndex}`);
    console.log(`Name: ${name}`);
    console.log(`OTU IDs: ${otuIDStrings}`);
    console.log(`OTU Values: ${otuValues}`);
    console.log(`OTU Labels: ${otuLabels}`);
    // Call function to update Plotly bar chart
    updatePlotly(name, otuIDStrings, otuValues, otuLabels);
};

// Function to update Plotly bar chart with data corresponding to the user's selection
function updatePlotly(newName, newOtuIDStrings, newOtuValues, newOtuLabels) {
    Plotly.restyle('bar', 'x', [newOtuValues.reverse()]);
    Plotly.restyle('bar', 'y', [newOtuIDStrings.reverse()]);
    Plotly.restyle('bar', 'text', [newOtuLabels.reverse()]);
    Plotly.restyle('bar', 'name', [newName]);
};