import {Bar} from 'vue-chartjs'
export default{
    extends:Bar,
    data: () => ({
        chartdata: {
          labels: ['North', 'South','East','West', 'Central'],
          datasets: [
            {
              label: 'Region',
              data: [200, 150,250,100, 500],
              backgroundColor:'#AA6',
            //   borderWidth:0.5,
            //   borderColor:"#000"
            }
            /*{
                label: 'R',
                data: [40, 30,10,15],
                backgroundColor:'#7C1'
              }*/
          ]
          
        },
        
        options: {
            title:{
                display:true,
                text:'Users by Region',
                fontColor:'Black',
                fontSize:15

            },
            legend:{
                position:'bottom'
            },
            layout:{
                padding:{
                    left: 5,
                    right: 0,
                    top: 0,
                    bottom: 5
                }
            },
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}