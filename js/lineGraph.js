//Sample of chart found at...https://tobiasahlin.com/blog/introduction-to-chartjs/
//Current population is set to zero but alternate value of current population is set by user using drop-down menu that triggers click function at bottom of script
var currentPopulation = 0;

//Array of chart data used within chart function and value selected by user in drop-down menu click function
lineData = [{total: [8941,8532,9303],chronic: [836,1093,1288],unsheltered: [1623,836,1093]},
            {total: [476,422,437],chronic: [53,105,105],unsheltered: [131,53,105]},
            {total: [296,302,354],chronic: [10,3,11],unsheltered: [23,10,3]},
            {total: [928,604,840],chronic: [140,113,81],unsheltered: [56,140,113]},
            {total: [683,540,577],chronic: [39,56,100],unsheltered: [84,39,56]},
            {total: [133,119,103],chronic: [8,13,13],unsheltered: [8,8,13]},
            {total: [140,151,156],chronic: [19,15,25],unsheltered: [35,19,15]},
            {total: [1782,2048,2229],chronic: [99,182,250],unsheltered: [396,99,182]},
            {total: [112,128,144],chronic: [9,3,8],unsheltered: [18,9,3]},
            {total: [829,822,860],chronic: [139,176,226],unsheltered: [243,139,176]},
            {total: [133,130,169],chronic: [12,17,12],unsheltered: [21,12,17]},
            {total: [465,478,479],chronic: [20,71,46],unsheltered: [63,20,71]},
            {total: [457,546,596],chronic: [46,71,87],unsheltered: [130,46,71]},
            {total: [344,299,335],chronic: [74,49,40],unsheltered: [72,74,49]},
            {total: [410,378,398],chronic: [34,73,65],unsheltered: [35,34,73]},
            {total: [430,224,311],chronic: [73,24,52],unsheltered: [102,73,24]},
            {total: [432,449,434],chronic: [27,58,95],unsheltered: [112,27,58]}];
//Chart formula
var years = [2016,2017,2018];
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
  data: lineData[currentPopulation].total,
  label: "Total Homelessness",
  borderColor: "#084594",
  fill: false
},
{
  data: lineData[currentPopulation].chronic,
  label: "Chronic Homelessness",
  borderColor: "#4292c6",
  fill: false
},
{
  data: lineData[currentPopulation].unsheltered,
  label: "Unsheltered Homelessness",
  borderColor: "#9ecae1",
  fill: false
}
    ]
  }
});
//Click function of drop-down menu
$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  currentPopulation = $(this).data('value');
  console.log(currentPopulation);
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
    data: lineData[currentPopulation].total,
    label: "Total Homelessness",
    borderColor: "#084594",
    fill: false
  },
  {
    data: lineData[currentPopulation].chronic,
    label: "Chronic Homelessness",
    borderColor: "#4292c6",
    fill: false
  },
  {
    data: lineData[currentPopulation].unsheltered,
    label: "Unsheltered Homelessness",
    borderColor: "#9ecae1",
    fill: false
  }
      ]
    }
  });
});
