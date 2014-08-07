var timeFunc = function(array){
          
  var hour = new Date().getHours();
  hour < 1 ? hour = 12 : hour;
  hour > 12 ? hour = hour - 12 : hour;
  array[0] = hour;
  var minute = new Date().getMinutes();
  minute < 10 ? minute = "0" + minute : minute; 
  array[1] = minute;
  var second = new Date().getSeconds();
  second < 10 ? second = "0" + second : second; 
  array[2] = second
          //var time = hour + ":" + minute + ":" + second;
  return array;
        };
          
// var timeArray = timeFunc([]);
// var clock = d3.select("#parent").selectAll("div")
//   .data(timeArray)
//   .enter()
//   .append("div")
//   .attr("class", "time");

// clock.text(function(d){return d;});
// clock.style("width", function(d){
//   return d + "%";
// });




setInterval(function(){
  d3.selectAll(".time")
    .data([]).exit().remove();
  var updateTime = timeFunc([]);
  d3.select("#parent").selectAll("div")
  .data(updateTime)
  .enter()
  .append("div")
  .attr("class", "time")
  .attr("id", function(d,i){
    if(i === 0){
      return "hour";
    }
    if(i === 1){
      return "minute";
    }
    if(i === 2){
      return "second";
    }
  })
  .text(function(d){return d;})
  .style("width", function(d){
  return d + "%";});

  var sec = d3.select("div #second");
  var min = d3.select("div #minute");
  // var tick = sec.data()[0];
  // var tick = new Date().getSeconds();
  // tick < 10 ? tick = "0" + tick : tick;
  sec.style("background", "black");
  // sec.text(function(d){return tick;});
  if (sec.data()[0] === 59){
    min.style("background", "black");
    setTimeout(function(){
    min.style("background", "red");}, 250);
    min.transition()
    .duration(500)
    .style("width", function(d){ 
       return d + "px";
    }).transition()
      .duration(500)
      .style("width", function(d){ 
       return d + "%";
    });  
  }
  sec.transition()
    .duration(1000)
    .style("width", function(d){ 
       return d + "px";
    });
  // sec.transition()
  //   .duration(1000)
  //   .style("height", "30px");  
  setTimeout(function(){
    sec.style("background", "red");}, 50);

} , 1000);



