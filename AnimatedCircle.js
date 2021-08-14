let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.95,
    fill: {gradient: ['#1C2859', '#B25BC8']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.65
  });
  $(".react .bar").circleProgress({
    value: 0.85
  });