import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const GridWrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const Home = () =>  {
  const [options, setOptions] = useState({});
  
  const loadChart = () => {
    axios.get('weather')
      .then(response => {
        const data = response.data;
        const time = [];
        const feranoid = [];
        time.push("current");
        feranoid.push(data.current.temp_f);
        data.forecast.forEach(data => {
          time.push(data.time.split(" ")[1]);
          feranoid.push(data.temp_f);
        });

        setOptions(() => {
          return {
            title: {
              text: 'Temperature'
            },
            yAxis: {
              title: {
                  text: 'Feranoid'
              }
            },
            xAxis: {
              title: {
                text: 'Time'
              },
              categories: time,
            },
            series: [{
              type: 'line',
              data: feranoid
            }]
          }
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadChart();
    const interval = setInterval(() => {
      loadChart();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <GridWrapper>
      <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
    </GridWrapper>
  )
}