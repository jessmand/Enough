function getDate(d) {
    var dt = new Date(d.date);
    dt.setHours(24);
    dt.setMinutes(0);
    dt.setSeconds(0);
    dt.setMilliseconds(0);
    return dt;
}

var drawChart = function (data, containerId, weekGoal) {
    


    // get max and min dates - this assumes data is sorted
    var minDate = getDate(data[0]),
        maxDate = getDate(data[data.length - 1]);
    
    var dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    
    var oneDay=1000*60*60*24
    
    var numDays = (maxDate.getTime()-minDate.getTime())/oneDay;
    
    maxDate.setDate(maxDate.getDate() + (7-numDays%7));

    var maxCigarettes = d3.max(data, function (d) {
        return d.cigarettes;
    });
    var minCigarettes = d3.min(data, function (d) {
        return d.cigarettes;
    })

    totalSaved = function () {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data[0].cigarettes - data[i].cigarettes;
        }
        return total;
    }
    
    
    
    
    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function (d) {
        return "Cigarettes: " + d.cigarettes;
    })
    
    

    var savedTip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-15, 0])
        .html("Cigarettes saved: " + totalSaved());
    
    var startingTip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-15, 0])
        .html("Starting cigarettes: " + data[0].cigarettes);
    
    var weeklyGoalTip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-15, -0])
        .html("This week's goal: " + weekGoal);

    
    
    
    
    
    
    
    // define dimensions of graph
    var margin = {
        top: 20,
        right: 40,
        bottom: 140,
        left: 100
    },
        width = $('#'+containerId).width() - 100 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;
    
    var marginPane = {top: 350, right: 40, bottom: 20, left: 100},
        heightPane = 450 - marginPane.top - marginPane.bottom,
        widthPane = $('#'+containerId).width() - 100 - margin.left - margin.right;


    var x = d3.time.scale().domain([minDate, maxDate]).range([0, width]);
    var minTick = Math.max(minCigarettes - 3, 0);
    var y = d3.scale.linear().domain([minTick, maxCigarettes + 1]).range([height, 0]);
    
    
    var xPane = d3.time.scale().domain([minDate, maxDate]).range([0, widthPane]);
    var yPane = d3.scale.linear().domain([0, maxCigarettes + 1]).range([heightPane, 0]);

    var line = d3.svg.line()
        .x(function (d, i) {
            return x(getDate(d));
        })
        .y(function (d) {
            return y(d.cigarettes);
        });

    var linePane = d3.svg.line()
        .x(function (d, i) {
            return xPane(getDate(d)); //x(i);
        })
        .y(function (d) {
            return yPane(d.cigarettes);
        });
    
    
    
    
    
    
    
    
    // create a line function that can convert data[] into x and y points
    var startingLine = d3.svg.line()
    // assign the X function to plot our line as we wish
    .x(function (d) {
        // return the X coordinate where we want to plot this datapoint
        return x(d); //x(i);
    })
        .y(y(data[0].cigarettes));
    
    
    // create a line function that can convert data[] into x and y points
    var weeklyGoalLine = d3.svg.line()
    // assign the X function to plot our line as we wish
    .x(function (d) {
        // return the X coordinate where we want to plot this datapoint
        return x(d); //x(i);
    })
        .y(y(weekGoal));

    function xx(e) {
        return x(getDate(e));
    };

    function yy(e) {
        return y(e.cigarettes);
    };
    
    
    
    
    
    
    
    
    // Add an SVG element with the desired dimensions and margin.
    var svg = d3.select('#'+containerId).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
    
    
    
    
    
    
    svg.call(tip);
    svg.call(savedTip);
    svg.call(startingTip);
    svg.call(weeklyGoalTip);

    
    
    
    
    
    

    var savedArea = d3.svg.area()
        .x(function (d, i) {
        return x(getDate(d));
    })
        .y0(function (d) {
        return y(d.cigarettes);
    })
        .y1(y(maxCigarettes));

    

    // Add the line by appending an svg:path element with the data line we created above
    // do this AFTER the axes above so that the line is above the tick-lines
    var maxDatePlusOne = maxDate;
    maxDatePlusOne.setDate(maxDate.getDate() + 1);


    
    
    
    
    
    var xAxisPane = d3.svg.axis().scale(xPane).orient("bottom").ticks(d3.time[dayNames[minDate.getDay()]], 1).tickFormat(d3.time.format('%m/%d')).tickSize(-heightPane).tickSubdivide(true);;
    var xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(d3.time.days, 1).tickFormat(d3.time.format('%m/%d')).tickSize(-height).tickSubdivide(true);
    var yAxisLeft = d3.svg.axis().scale(y).ticks(maxCigarettes - minCigarettes + 4).orient("left"); //.tickFormat(formalLabel);
    
    var beginWeek = new Date();
    beginWeek.setDate(maxDate.getDate() -7);
    
    var maxBrushDate = new Date();
    maxBrushDate.setDate(maxDate.getDate() -2);
    
    var beginWeek = new Date();
    beginWeek.setDate(maxBrushDate.getDate() -7);
    
    var brush = d3.svg.brush()
        .x(xPane)
        .on("brush", brushed)
        .extent([beginWeek, maxBrushDate]);
    
    
    
    svg.append("defs").append("clipPath")
        .attr("id", "clip")
      .append("rect")
        .attr("width", width+5)
        .attr("height", height);
    
    var focus = svg.append("g")
        .attr("class", "focus")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var context = svg.append("g")
        .attr("class", "context")
        .attr("transform", "translate(" + marginPane.left + "," + marginPane.top + ")");
    
    
    // Add the x-axis.
    focus.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(5," + height + ")")
        .call(xAxis);
    
    var chartBody = focus.append("g")
    .attr("clip-path", "url(#clip)");
    
    // create yAxis
    
    

    // create left yAxis
    
    // Add the y-axis to the left
    focus.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(-25,0)")
        .call(yAxisLeft);
    
    chartBody.append("path")
        .attr("class", "saved-area")
        .attr("d", savedArea(data))
        .on('mouseover', function() { savedTip.show(d3.mouse(this)[0]+$("#"+containerId).offset().left+margin.left-25)})
        .on('mouseout', savedTip.hide)
        .attr("transform", "translate(5,0)");
    
    chartBody.append("path").attr("d", line(data)).attr("class", "progress-line").attr("transform", "translate(5,0)");
    
    var circle = chartBody
        .selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("fill", "#FF6600")
        .attr("r", 5)
        .attr("cx", xx)
        .attr("cy", yy)
        .on('mouseover', function (e) {
        d3.select(this).transition().duration(200).attr('r', 10);
        tip.show(e)
    })
        .on('mouseout', function (e) {
        d3.select(this).transition().duration(200).attr('r', 5);
        tip.hide(e)
    }).attr("transform", "translate(5,0)");
    
    chartBody.append("path")
        .attr("d", startingLine(d3.time.days(minDate,maxDate,1)))
        .attr("class", "starting-line")
        .on('mouseover', function() {startingTip.show(d3.mouse(this)[0]+$("#"+containerId).offset().left+margin.left-25)})
        .on('mouseout', startingTip.hide)
        .attr("transform", "translate(5,0)");
    
    chartBody.append("path")
        .attr("d", weeklyGoalLine(d3.time.days(minDate,maxDate,1)))
        .attr("class", "weekly-goal-line")
        .on('mouseover', function() { weeklyGoalTip.show(d3.mouse(this)[0]+$("#"+containerId).offset().left+margin.left-25)})
        .on('mouseout', weeklyGoalTip.hide)
        .attr("transform", "translate(5,0)");
    
    
    
    
    

    focus.append("svg:text")
        .attr("x", -200)
        .attr("y", -70)
        .attr("dy", ".1em")
        .attr("transform", "rotate(-90)")
        .text("Cigarettes");
    
    context.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(5," + heightPane + ")")
      .call(xAxisPane);
    
    context.append("path").attr("d", linePane(data)).attr("class", "progress-line").attr("transform", "translate(5,0)");

  

  context.append("g")
      .attr("class", "x brush")
      .call(brush)
    .attr("transform", "translate(5,0)")
    .selectAll("rect")
      .attr("y", -6)
      .attr("height", heightPane + 7);
    
    
    
    function brushed() {
      
        var extent0 = brush.extent(),
              extent1 = extent0.map(d3.time.day.round);
        if (extent1[0] >= extent1[1]) {
            extent1[0] = d3.time.day.floor(extent0[0]);
            extent1[1] = d3.time.day.ceil(extent0[1]);
          }

        d3.select(this).call(brush.extent(extent1));
        
        x.domain(brush.empty() ? xPane.domain() : brush.extent());
        focus.select(".x.axis").call(xAxis);
      chartBody.select(".progress-line").attr("d", line(data));
        chartBody.select(".starting-line").attr("d", startingLine(d3.time.days(minDate,maxDate,1)));
        chartBody.select(".weekly-goal-line").attr("d", weeklyGoalLine(d3.time.days(minDate,maxDate,1)));
        chartBody.select(".saved-area").attr("d", savedArea(data));
        chartBody.selectAll("circle").data(data).attr("cx", xx).attr("cy", yy);
      
    }
    
    x.domain(brush.empty() ? xPane.domain() : brush.extent());
        focus.select(".x.axis").call(xAxis);
      chartBody.select(".progress-line").attr("d", line(data));
        chartBody.select(".starting-line").attr("d", startingLine(d3.time.days(minDate,maxDate,1)));
        chartBody.select(".weekly-goal-line").attr("d", weeklyGoalLine(d3.time.days(minDate,maxDate,1)));
        chartBody.select(".saved-area").attr("d", savedArea(data));
        chartBody.selectAll("circle").data(data).attr("cx", xx).attr("cy", yy);

    return totalSaved();
}