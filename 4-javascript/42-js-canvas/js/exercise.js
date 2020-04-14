let ourSales=[
    {month:1,sale:50000},
    {month:2,sale:20000},
    {month:3,sale:5000},
    {month:4,sale:100000},
    {month:5,sale:120000},
    {month:6,sale:1000},
    {month:7,sale:25000},
    {month:8,sale:12000},
    {month:9,sale:75000},
    {month:10,sale:3000},
    {month:11,sale:60000},
    {month:12,sale:0}
]
window.onload =function () {
    //actual x size is 1 *50
    //actual size 1 to 1000
    let chartCanvas = document.querySelector('#chartCanvas')
    let context =  chartCanvas.getContext('2d')
    context.strokeStyle = 'black'
    let startY =120
    let startX = 50
    context.moveTo(0,startY-(ourSales[0].sale/1000))
    context.fillText(1,0,startY-(ourSales[0].sale/1000)+10)
    for (let i = 1; i < ourSales.length; i++) {
        let pointY = startY -(ourSales[i].sale/1000)
        let pointX =i * startX
        context.lineTo(pointX,pointY)
        context.fillText(i+1,pointX,pointY +10)
        
    }
    context.stroke()
    //context.moveTo(0,120)
    //context.fillText("jan",0,120)
    //context.fillText("feb",50,120)


}