import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    CanvasJS.addColorSet('blueColorSet',
    [
        '#b4d1fb',
        '#0a58c8',
        '#3f89f5',
        '#0952b9',
        '#66a1f7',
        '#05387d',
        '#66a1f7',
        '#07459b'
    ]);

class Chart extends Component {
  	constructor() {
		super();
		this.addSymbols = this.addSymbols.bind(this);
	}

  eachCalumn = () => {
    console.log(this.props.data)
    return Object.entries(this.props.data).map(([key,value]) => 
      {return { label: key, y: value}}
    );
  };

  	
	addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
		
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
 
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;	
	}

  render() {
    const options = {
            height: '320',
            colorSet :'blueColorSet',
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title: {
				text: "دریافتی خالص شش ماه اخیر",
                fontSize:20,
			},
			axisY: {
				title: "دریافتی(تومان)",
                minimum:0,
                labelFormatter: this.addSymbols
			},
			axisX: {
				title: "ماه",
				
			},
      data: [
        {
          type: "column",
          dataPoints: this.eachCalumn()
        }
      ]
    };

    return (
      <div className="chart">
        <CanvasJSChart
          options={options}
          // onRef = {ref => this.chart = ref}
        />
      </div>
    );
  }
}

export default Chart;
