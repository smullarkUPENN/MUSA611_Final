//Sample of chart found at...https://tobiasahlin.com/blog/introduction-to-chartjs/
//Current selection is set to zero but alternate value of current selection is set by user using drop-down menu that triggers click function at bottom of script
var currentSelection = 0;

//Array of chart titles used within chart function and value selected by user in drop-down menu click function
var chartTitle = [{title: "2018 Total Homelessness (Select alternate data from Drop-Down menu on left)"},
                  {title: "2018 Chronic Homelessness (Select alternate data from Drop-Down menu on left)"},
                  {title: "2018 Unsheltered Homelessness (Select alternate data from Drop-Down menu on left)"},
                  {title: "2017 Total Homelessness (Select alternate data from Drop-Down menu on left)"},
                  {title: "2017 Chronic Homelessness (Select alternate data from Drop-Down menu on left)"},
                  {title: "2017 Unsheltered Homelessness (Select alternate data from Drop-Down menu on left)"},
                  {title: "2016 Total Homelessness (Select alternate data from Drop-Down menu on left)"},
                  {title: "2016 Chronic Homelessness (Select alternate data from Drop-Down menu on left)"},
                  {title: "2016 Unsheltered Homelessness (Select alternate data from Drop-Down menu on left)"}];
//Array of chart data used within chart function and value selected by user in drop-down menu click function
var chartData =  [{data: [437,354,840,577,103,156,2229,144,860,169,479,596,335,398,311,434,47,206,113,459,56]},
                  {data: [422,302,604,540,119,151,2048,128,822,130,478,546,299,378,224,449,17,244,99,475,57]},
                  {data: [476,296,928,683,133,140,1782,112,829,133,465,457,344,410,430,432,40,218,80,513,40]},
                  {data: [105,11,81,100,13,25,250,8,226,12,46,87,40,65,52,95,5,6,7,43,11]},
                  {data: [105,3,113,56,13,15,182,3,176,17,71,71,49,73,24,58,1,3,10,43,7]},
                  {data: [53,10,140,39,8,19,99,9,139,12,20,46,74,34,73,27,1,1,8,19,5]},
                  {data: [131,23,56,84,8,35,396,18,243,21,63,130,72,35,102,112,5,7,28,41,13]},
                  {data: [109,5,44,78,6,39,428,4,184,17,84,125,44,27,43,89,4,5,12,55,13]},
                  {data: [116,11,15,150,9,73,443,7,226,2,44,84,45,34,54,36,6,9,10,62,6]}];

//chart function
var pieChart = new Chart(document.getElementById("pie-chart"), {
                type: 'pie',
                data: {
                  labels: ["Atlantic","Bergen","Burlington","Camden","Cape May","Cumberland","Essex","Gloucester","Hudson","Hunterdon",
                           "Mercer","Middlesex","Monmouth","Morris","Ocean","Passaic","Salem","Somerset","Sussex","Union","Warren"],
                  datasets: [{
                    backgroundColor: ["#004c6d","#255e7e","#3d708f","#5383a1","#6996b3","#7faac6","#94bed9","#abd2ec","#c1e7ff","#4a6f89",
                                      "#648197","#7d93a6","#96a6b5","#afbac4","#c8ced3","#e2e2e2","#00a1c1","#00b8d3","#00cfe3","#00e7f2","#00ffff"],
                    data: chartData[currentSelection].data
                  }]
                },
                options: {
                  title: {
                    display: true,
                    text: chartTitle[currentSelection].title
                  },
                  responsive: false
                }
            });
//Click function of drop-down menu
$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  currentSelection = $(this).data('value');
  console.log(currentSelection);
  pieChart.destroy();
  pieChart = new Chart(document.getElementById("pie-chart"), {
                  type: 'pie',
                  data: {
                    labels: ["Atlantic","Bergen","Burlington","Camden","Cape May","Cumberland","Essex","Gloucester","Hudson","Hunterdon",
                             "Mercer","Middlesex","Monmouth","Morris","Ocean","Passaic","Salem","Somerset","Sussex","Union","Warren"],
                    datasets: [{
                      backgroundColor: ["#004c6d","#255e7e","#3d708f","#5383a1","#6996b3","#7faac6","#94bed9","#abd2ec","#c1e7ff","#4a6f89",
                                        "#648197","#7d93a6","#96a6b5","#afbac4","#c8ced3","#e2e2e2","#00a1c1","#00b8d3","#00cfe3","#00e7f2","#00ffff"],
                      data: chartData[currentSelection].data
                    }]
                  },
                  options: {
                    title: {
                      display: true,
                      text: chartTitle[currentSelection].title
                    },
                    responsive: false
                  }
              });
});
