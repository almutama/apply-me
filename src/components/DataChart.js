import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Bar, Line, Pie, Doughnut, Radar, Polar, Scatter } from 'react-chartjs-2';

const data = {
  labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
  datasets: [{
    label: 'Population',
    data: [
      617594,
      381045,
      253060,
      512594,
      420594,
      189045,
    ],
    // backgroundColor:'green',
    backgroundColor: [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 99, 132, 0.6)',
    ],
  },
  ],
};

class DataChart extends Component {
  render() {
    return (
      <div>
        <Bar
          data={data}
          options={{
            title: {
              display: true,
              text: 'Largest Cities In Massachusetts',
              fontSize: 25,
            },
            legend: {
              display: false,
              position: 'top',
              labels: {
                fontColor: '#000',
              },
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0,
              },
            },
            tooltips: {
              enabled: true,
            },
          }
        }
        />
        <Line
          data={data}
          options={{
            title: {
              display: true,
              text: 'Largest Cities In Massachusetts',
              fontSize: 25,
            },
            legend: {
              display: false,
              position: 'top',
              labels: {
                fontColor: '#000',
              },
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0,
              },
            },
            tooltips: {
              enabled: true,
            },
          }
        }
        />
        <Pie
          data={data}
          options={{
            title: {
              display: true,
              text: 'Largest Cities In Massachusetts',
              fontSize: 25,
            },
            legend: {
              display: false,
              position: 'top',
              labels: {
                fontColor: '#000',
              },
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0,
              },
            },
            tooltips: {
              enabled: true,
            },
          }
        }
        />
        <Doughnut
          data={data}
          options={{
            title: {
              display: true,
              text: 'Largest Cities In Massachusetts',
              fontSize: 25,
            },
            legend: {
              display: false,
              position: 'top',
              labels: {
                fontColor: '#000',
              },
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0,
              },
            },
            tooltips: {
              enabled: true,
            },
          }
        }
        />
        <Radar
          data={data}
          options={{
            title: {
              display: true,
              text: 'Largest Cities In Massachusetts',
              fontSize: 25,
            },
            legend: {
              display: false,
              position: 'top',
              labels: {
                fontColor: '#000',
              },
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0,
              },
            },
            tooltips: {
              enabled: true,
            },
          }
        }
        />
        <Polar
          data={data}
          options={{
            title: {
              display: true,
              text: 'Largest Cities In Massachusetts',
              fontSize: 25,
            },
            legend: {
              display: false,
              position: 'top',
              labels: {
                fontColor: '#000',
              },
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0,
              },
            },
            tooltips: {
              enabled: true,
            },
          }
        }
        />
      </div>
    );
  }
}

export default DataChart;
