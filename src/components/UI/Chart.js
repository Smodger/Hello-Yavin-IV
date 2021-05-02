import React from 'react'
import { Bar } from 'react-chartjs-2';


const Chart = (props) => {

    const names = props.array.map((item) => {
        return item.name
    });

    const speed = props.array.map((item) => {
        let sanitize = item.max_atmosphering_speed.replace(/[^0-9]/g, "");
        return isNaN(+sanitize) ? 0 : +sanitize
    });

    const credits = props.array.map((item) => {
        let sanitize = item.cost_in_credits.replace(/[^0-9]/g, "");
        return isNaN(+sanitize) ? 0 : +sanitize
    });

    const size = props.array.map((item) => {
        let sanitize = item.length.replace(/[^0-9]/g, "");
        return isNaN(+sanitize) ? 0 : +sanitize
    });

    const data = {
        labels : names,
        datasets : [
            {
                label: "Speed",
                data: speed,
                backgroundColor: "yellow"
            }, {
                label: "Size",
                data: size,
                backgroundColor: "blue"
            }
        ]
    }

    const yAxisSetter = props.resource === "vehicles" ? 1500 : 4000

    const options = {
        scales: {
            y : { max : yAxisSetter },
        },
    };

      const costData = {
          labels : names,
            datasets : [{
                label: "Cost",
                data: credits,
                backgroundColor: "green"
            }]
        }

        const yAxisCostSetter = props.resource === "vehicles" ? 150000 : 5000000

        const costOptions = {
            scales: {
                y : { max :  yAxisCostSetter },
            },
        };

    return (
        <div>
            <Bar data={data} options={options} />
            <Bar data={costData} options={costOptions} />
        </div>
    )
}
export default Chart;