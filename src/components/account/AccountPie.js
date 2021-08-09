import React from 'react';
import {Pie} from 'react-chartjs-2';

const AccountPie = (props) => {

    const labelData = [], amountData = [], backgroundColorData = [], borderColorData = [];
    const backgroundColorPreData = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ];
    const borderColorPreData = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ];

    props.data.map((item, index) => {
        labelData.push(item.categoryName);
        amountData.push(item.amount);
        backgroundColorData.push(backgroundColorPreData[index]);
        borderColorData.push(borderColorPreData[index])
    });

    

    const data = {
        labels: labelData,
        datasets: [
          {
            label: '# of Votes',
            data: amountData,
            backgroundColor: backgroundColorData,
            borderColor: borderColorData,
            borderWidth: 1
          },
        ],
      };

    return (
        <div>
            <Pie data={data}/>
        </div>
    )
}

export default AccountPie;
