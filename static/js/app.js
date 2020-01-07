
function init() {
d3.json("/static/data/Final_Table.json").then(function(wine_data) {
    // console.log(wine_data);
    var wine_score=[];
    for (var i=0;i< 30000;i++){
      wine_score.push(wine_data.score[i])};
    var wine_year=[];
    for (var i=0;i< 30000;i++){
      wine_year.push(wine_data.vintage[i])};
    var wine_color=[];
    for (var i=0;i< 30000;i++){
      wine_color.push(wine_data.color[i])};

        var red=[];
        for (var i=0;i< 30000;i++){
      if (wine_data.color[i]==="Red") 
      { red.push(wine_data.score[i])}}
     ;

      var white=[];
        for (var i=0;i< 30000;i++){
      if(wine_data.color[i]==="White"){
       white.push(wine_data.score[i])
      }
     };

      var pink=[];
        for (var i=0;i< 30000;i++){
      if(wine_data.color[i]==="Pink") {
 pink.push(wine_data.score[i])
      }
     };
      
      
        
  //   var subject_id=[];

  // for (var i = 0; i < sampledata.length; i++) {
  //   subject_id.push(sampledata[i].id)};
  //   console.log(subject_id);
  //   function filtersamples(sampledata) {
  //       return sampledata.id === subject_id[0]};

  //   var filteredSample=sampledata.filter(filtersamples);
  //   console.log(filteredSample);
  //   var sortedSample=filteredSample.sort((a,b) => b.sample_values-a.sample_values);
  //   var value = sortedSample[0].sample_values.slice(0,10).reverse();
  //   console.log(value);
  //   var id= "OTU"+ sortedSample[0].otu_ids.slice(0,10).reverse();
  //   var otu_ids= sortedSample[0].otu_ids.slice(0,10).reverse();
  //   console.log(id); 
  //   var label=sortedSample[0].otu_labels.slice(0,10).reverse();
  //   console.log(label);
//plot bar chart
    var trace1 = {
      x: wine_year,
        y: wine_score,
        text:wine_color,
        mode:'markers',
        paper_bgcolor: 'rgb(243, 243, 243)',
        marker:{
            size: 5,
            color:wine_color,

        },
        
        type:'scatter'};
      
  
  
    // Create the data array for the plot
    var data = [trace1];
  
    // Define the plot layout
    var layout = {
      title: "Top 10 Sample Value by OTU ID",
      xaxis: { title: "value" },
      yaxis: { title: "OTU ID" },
    };
  
    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bar", data, layout);
console.log(wine_score[1])
var xData = ['Red','White','Pink'];



var yData = [
       red,white,pink
    ];
var color=["#ea0437","#bababa","#ffc0cb"]
var color2=["#fc3f69","#f9f9f9","#fff3f5"]
    var data2 = [];

for ( var i = 0; i < 30000; i ++ ) {
    var result = {
        type: 'box',
        y: yData[i],
        name: xData[i],
        boxpoints: 'all',
        jitter: 0.4,
        whiskerwidth: 0.2,
        fillcolor: color2[i],
          marker: {
            size: 2
        },
        marker:{
    color: color[i]
  },
        line: {
            width: 2
           }
    };
    data2.push(result);
};
console.log(data2)

layout2 = {
    title: 'Score Distribution by Wine Color',
    yaxis: {
        autorange: true,
        showgrid: true,
        zeroline: true,
        dtick: 5,
        gridcolor: "#e0e0e0",
        gridwidth: 0.5,
        zerolinecolor: 'rgb(255, 255, 255)',
        zerolinewidth: 2
    },
    margin: {
        l: 40,
        r: 30,
        b: 80,
        t: 100
    },
    paper_bgcolor: '#fffff',
    plot_bgcolor: '#fffff',
    showlegend: false
};

Plotly.newPlot("bubble", data2, layout2);

})
};
init();



//     //plot scatter plot
//     var trace2 = {
//         x: otu_ids,
//         y: value,
//         text:label,
//         mode:'markers',
//         marker:{
//             size: value,
//             color:otu_ids,

//         },
//         type:'scatter'};
        


//       // Create the data array for the plot
//       var data2 = [trace2];
    
//       // Define the plot layout
//       var layout2 = {
//         title: "Sample Value vs OTU ID Scatter Plot",
//         xaxis: { title: "OTU ID" },
//         yaxis: { title: "Sample Value" },
//       };
    
//       // Plot the chart to a div tag with id "plot"
//       Plotly.newPlot("bubble", data2, layout2);

//       d3.selectAll("#selDataset").on("change", getData);

//       // Function called by DOM changes
//       function getData() {
//         var dropdownMenu = d3.select("#selDataset");
//         // Assign the value of the dropdown menu option to a variable
//         var dataset = dropdownMenu.property("value");
//         // Initialize an empty array for the country's data
//         for (subject_id in subject_id){
//           dataset===subject_id
//         };
            
      
//         if (dataset === subject_id[0]) {
//             data = us;
//         }
//         else if (dataset == 'uk') {
//             data = uk;
//         }
//         else if (dataset == 'canada') {
//             data = canada;
//         }
//         // Call function to update the chart
//         updatePlotly(data);
//       }
      
//       // Update the restyled plot's values
//       function updatePlotly(newdata) {
//         Plotly.restyle("pie", "values", [newdata]);
//       }
// });

// // On change to the DOM, call getData()

// }

// init();
// // // Call updatePlotly() when a change takes place to the DOM
// // d3.selectAll("#selDataset").on("change", updatePlotly);

// // function updatePlotly() {
// //   // Use D3 to select the dropdown menu
// //   var dropdownMenu = d3.select("#selDataset");
// //   // Assign the value of the dropdown menu option to a variable
// //   var dataset = dropdownMenu.property("value");

// //   // Initialize x and y arrays
// //   var subject_id=[];

// //   for (var i = 0; i < data.features.length; i++) {
// //     var places= data.features[i].geometry;

// //   if (dataset === 'dataset1') {
// //     x = [1, 2, 3, 4, 5];
// //     y = [1, 2, 4, 8, 16];
// //   }

// //   if (dataset === 'dataset2') {
// //     x = [10, 20, 30, 40, 50];
// //     y = [1, 10, 100, 1000, 10000];
// //   }

// //   // Note the extra brackets around 'x' and 'y'
// //   Plotly.restyle("plot", "x", [x]);
// //   Plotly.restyle("plot", "y", [y]);
// // }


// // init();
