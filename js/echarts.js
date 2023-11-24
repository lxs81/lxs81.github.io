// 基于准备好的dom，初始化echarts实例
var eco_graph1 = echarts.init(document.getElementById('eco_graph1'));
var option = {
  title: [{
    text: "普通高校本科在校学生数",
    left: 'center',
    top: '15px'
  }],
  tooltip: [{
    axisPointer: {
      type: "cross"
    },
    valueFormatter: function (value) {
      return value + '万人';
    }
  }],
  xAxis: [{
    name: '年',
    data: [ "2018", "2019", "2020", "2021","2022"]
  }],
  yAxis: [{
    type: "value",
    name: '万人',
    max: 42,
    min: 30
  }],
  series: [{
    type: "bar",
    color: '#73c0de',
    data: [34.28, 37.11, 39.4, 40.48, 40.77]
  }]
}
eco_graph1.setOption(option)

var eco_graph2 = echarts.init(document.getElementById('eco_graph2'));
var option = {
  title: [{
    text: "普通高校专任教师数",
    left: 'center',
    top: '15px'
  }],
  tooltip: [{
    axisPointer: {
      type: "cross"
    },
    valueFormatter: function (value) {
      return value + '万人';
    }
  }],
  xAxis: [{
    name: '年',
    data: [ "2018", "2019", "2020", "2021","2022"]
  }],
  yAxis: [{
    type: "value",
    name: '万人',
    max: 5,
    min: 3
  }],
  series: [
    {
      name: '普通高校专任教师数',
      type: "line",
      data: [3.62, 3.78, 3.94, 4.07, 4.34]
    }]
}
eco_graph2.setOption(option)

var eco_graph3 = echarts.init(document.getElementById('eco_graph3'));
option = {
  title: {
    text: '教育经费',
    left: 'center',
    top: '15px'
  },
  tooltip: {
    trigger: 'item',
    valueFormatter: function (value) {
      return value + '%';
    }
  },
  legend: {
    bottom: 'bottom',
    right: 'right',
  },
  series: [
    {
      name: '教育经费',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 27, name: '2021年' },
        { value: 26, name: '2020年' },
        { value: 24, name: '2019年' },
        { value: 23, name: '2018年' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
eco_graph3.setOption(option)



var tec_graph1 = echarts.init(document.getElementById('tec_graph1'));
option = {
  title: {
    text: '贵州生产总值',
    left: 'center',
    top: '15px'
  },
  tooltip: {
    trigger: 'item',
    valueFormatter: function (value) {
      return value + '亿元';
    }
  },
  legend: {
    orient: 'vertical',
    itemWidth: 8, // 宽
    itemHeight: 8,// 高
    textStyle: {
      fontSize: 7,
    },
    bottom: 'bottom',
    right: 'center',
    data: ['2022年','2021年', '2020年', '2019年', '2018年']
  },
  series: [
    {
      name: '贵州生产总值',
      type: 'funnel',
      left: '10%',
      top: 60,
      bottom: 60,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 20164.6, name: '2022年' },
        { value: 19458.6, name: '2021年' },
        { value: 17860.4, name: '2020年' },
        { value: 16769.3, name: '2019年' },
        { value: 15353.2, name: '2018年' }
      ]
    }
  ]
}
tec_graph1.setOption(option)

var tec_graph2 = echarts.init(document.getElementById('tec_graph2'));
option = {
  title: {
    text: '贵州农村居民人均可支配收入',
    left: 'center',
    top: '15px'
  },
  tooltip: {
    trigger: 'item',
    valueFormatter: function (value) {
      return value + '元';
    }
  },
  legend: {
    bottom: 'bottom',
    right: 'right',
  },
  series: [
    {
      name: '贵州农村居民人均可支配收入',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 9716, name: '2018年' },
        { value: 10756, name: '2019年' },
        { value: 11642, name: '2020年' },
        { value: 12856, name: '2021年' },
        { value: 13707, name: '2022年' }
      ]
    }
  ]
};
tec_graph2.setOption(option)

var tec_graph3 = echarts.init(document.getElementById('tec_graph3'));
option = {
  title: {
    text: '农村居民人均消费支出',
    left: 'center',
    top: '15px'
  },
  tooltip: {
    trigger: 'item',
    valueFormatter: function (value) {
      return value + '元';
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    name: '元',
    min: 8000,
    max: 14000,
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    name: '年',
    data: ['2018', '2019', '2020', '2021', '2022']
  },
  series: [
    {
      name: '农村居民人均消费支出',
      type: 'bar',
      data: [9170, 10222, 10818, 12557, 13172]
    }
  ]
};
tec_graph3.setOption(option)


var edu_graph1 = echarts.init(document.getElementById('edu_graph1'));
option = {
  title: {
    text: '社会组织单位数',
    left: 'center',
    top: '15px'
  },
  tooltip: {
    trigger: 'item',
    valueFormatter: function (value) {
      return value + '百个';
    }
  },
  toolbox: {
    show: true,
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      name: '年',
      data: ['2018', '2019', '2020', '2021', '2022']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '百个',
      min: 13,
      max: 15.5,
    }
  ],
  series: [
    {
      name: '社会组织单位数',
      type: 'bar',
      data: [13.413, 13.753, 14.063, 14.742, 15.11],
      markPoint: {
        data: [
          { type: 'max', name: '最多' },
          { type: 'min', name: '最少' }
        ]
      },
      markLine: {
        lineStyle: {
          color: 'red'
        },
        data: [{ type: 'average', name: '平均' }]
      }
    }
  ]
}
edu_graph1.setOption(option)

var edu_graph2 = echarts.init(document.getElementById('edu_graph2'));
option = {
  title: [
    {
      text: '孤儿数',
      left: 'center',
      top: '15px'
    }
  ],
  polar: {
    radius: [30, '70%']
  },
  angleAxis: {
    max: 12350,
    startAngle: 75
  },
  radiusAxis: {
    type: 'category',
    data: ['2018年', '2019年', '2020年', '2021年', '2022年']
  },
  tooltip: {
    trigger: 'item',
    valueFormatter: function (value) {
      return value + '人';
    }
  },
  series: {
    type: 'bar',
    data: [12311, 10957, 10139, 9387, {
      value: 8760,
      itemStyle: {
        color: '#91cc75'
      }
    },],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}'
    }
  }
}
edu_graph2.setOption(option)

var edu_graph3 = echarts.init(document.getElementById('edu_graph3'));
option = {
  title: [
    {
      text: '农村居民最低生活保障人数',
      left: 'center',
      top: '15px'
    }
  ],
  tooltip: {
    trigger: 'item',
    valueFormatter: function (value) {
      return value + '万人';
    }
  },
  xAxis: [
    {
      type: 'category',
      name: '年',
      data: ['2018', '2019', '2020', '2021', '2022'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '万人',
      min: 160,
      max: 230,
      // interval: 50
    }
  ],
  series: [
    {
      color: '#91cc75',
      name: '农村居民最低生活保障人数',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + '万人';
        }
      },
      data: [226.8, 207.3, 210.9, 188.4, 170.2]
    }
  ]
};
edu_graph3.setOption(option)




