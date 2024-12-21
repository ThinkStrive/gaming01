import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const ProfitPlanChart = ({calculatedData,calculatedProgress}) => {

  const [state, setState] = useState({
    series: [
      {
        name: "Your Goal",
        data: [],
      },
      {
        name: "Your Progress",
        data: [],
      },
    ],
    options: {
      chart: {
        height: 380,
        type: "area",
        background:"#532c90"
      },
      theme: {
        mode:"dark"
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors:["#2ccf26","#F5A623"]
      },
      xaxis: {
        categories: [],
        title: {
          text: "Sessions",
          style:{
            color:"#FFFFFF"
          }
        },
      },
      yaxis: {
        title: {
          text: "Bankroll",
          style:{
            color:"#FFFFFF"
          }
        },
      },
      labels:{
        style:{
            colors: "#FFFFFF"
        }
      },
      tooltip: {
        theme:"dark",
        x: {
          formatter: (value) => `Session ${value}`,
        },
        marker: {
          show: true,
          fillColors: ["#2ccf26", "#F5A623"],
        },
      },
      legend:{
        markers:{
        fillColors: ["#2ccf26","#F5A623"],
        },
        labels:{
            colors:"#FFFFFF"
        }
      }
    },
  });

  useEffect(() => {
   
    const goalData = calculatedData.map((item) => parseFloat(item.newBalance));
    const progressData = calculatedProgress.map((item) => parseFloat(item.finalBalance));
    const sessionLabels = calculatedProgress.map((item) => `Session ${item.session}`);
    
    setState((prevState) => ({
      ...prevState,
      series: [
        {
          name: "Your Goal",
          data: goalData,
        },
        {
          name: "Your Progress",
          data: progressData,
        },
      ],
      options: {
        ...prevState.options,
        xaxis: {
          ...prevState.options.xaxis,
          categories: sessionLabels,
        },
      },
    }));
  }, [calculatedData,calculatedProgress]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={380}
        />
      </div>
    </div>
  );
};

export default ProfitPlanChart;
