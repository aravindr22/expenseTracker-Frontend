import React from 'react';
import {Pie} from 'react-chartjs-2';

const Piechart = (props) => {
    console.log(props)
    const data = {
        labels: ['Expense', 'Income'],
        datasets: [
          {
            label: '# of Votes',
            data: [props.transaction.expense, props.transaction.income],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <div>
            <Pie data={data}/>
        </div>
    )
}

export default Piechart;
