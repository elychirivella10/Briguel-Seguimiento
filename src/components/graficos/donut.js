import React, {useEffect, useState} from 'react';
import { Fragment } from 'react';
import Chart from 'react-apexcharts';

const Donut = ({data, height}) => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    dataSeries(data)
  }, [data])
  

  const dataSeries = (data)=>{
    let array = []
    for (let index = 0; index < data.length; index++) {
      array.push(data[index].total)
    }
    setSeries(array)
  }

  const options = {
    colors: ['#0056B8', '#9FB812', '#5C6B05', '#B82012', '#0B386B'],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      show: true,
      showForSingleSeries: false
    },
    series: [22, 55, 32, 54],
    labels: ['Por iniciar', 'En proceso', 'Culminado', 'Detenido'],
    chart: {
      type: 'radialBar'
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
      }
    }]
  };

  return (
    <Fragment>
    {series.length>0?
      <div id="chart">
        <Chart options={options} series={series?series:options.series} type="radialBar" height={height} />
      </div>
    :null}
  </Fragment>
  );
}

export default Donut;