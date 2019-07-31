// set function parseTime,formatTime to filter
/**
* 时间戳、8位数字转换为yyyy-mm-rr
*/
function dateYMDFilter(value, originalFormat) {
    if (!value) return "- -"
    if((value+'').length == 8) {
        try {
            value = value.toString()
        } catch (error) {
            console.log(error)
            return 'ymd filter err'
        }
        return value.substr(0,4)+ "-" + value.substr(4,2)+"-" + value.substr(6,2)
    }else{
        var date, y, tempMonth, tempD, m, d
        var date = new Date(value)
        y = date.getFullYear()
        tempMonth = date.getMonth() + 1
        m = tempMonth > 9 ? tempMonth : "0" + tempMonth
        tempD = date.getDate() 
        d = tempD >9 ? tempD :  "0" + tempD
        return y + "-" + m + "-" + d
    }
  }
  /**
  * 8位数字转换为yyyy-mm-rr
  * 时间戳转换为yyyy-mm-rr hh:mm
  */
  function dateYMDHMFilter(value, originalFormat) {
    if (!value) return "- -"
    if((value+'').length == 8) return value.substr(0,4)+ "-" + value.substr(4,2)+"-" + value.substr(6,2)+ "00:00"
    var date, y, tempMonth, tempD, m, d, tempHour, hour, tempMin, min
    var date = new Date(value)
    y = date.getFullYear()
    tempMonth = date.getMonth() + 1
    m = tempMonth > 9 ? tempMonth : "0" + tempMonth
    tempD = date.getDate() 
    d = tempD >9 ? tempD :  "0" + tempD
    tempHour = date.getHours()
    hour = tempHour >9 ? tempHour :  "0" + tempHour
    tempMin = date.getMinutes()
    min = tempMin >9 ? tempMin :  "0" + tempMin
    return y + "-" + m + "-" + d+" "+ hour +":"+min
  }
  /**
  * 8位数字转换为yyyy-mm-rr
  * 时间戳转换为yyyy-mm-rr hh:mm:ss
  */
  function dateYMDHMSFilter(value, originalFormat) {
    if (!value) return "- -"
    if((value+'').length == 8) return value.substr(0,4)+ "-" + value.substr(4,2)+"-" + value.substr(6,2)+ "00:00:ss"
    var date, y, tempMonth, tempD, m, d, tempHour, hour, tempMin, min, tempSencond, second
    var date = new Date(value)
    y = date.getFullYear()
    tempMonth = date.getMonth() + 1
    m = tempMonth > 9 ? tempMonth : "0" + tempMonth
    tempD = date.getDate() 
    d = tempD >9 ? tempD :  "0" + tempD
    tempHour = date.getHours()
    hour = tempHour >9 ? tempHour :  "0" + tempHour
    tempMin = date.getMinutes()
    min = tempMin >9 ? tempMin :  "0" + tempMin
    tempSencond = date.getSeconds()
    second = tempSencond >9 ? tempSencond :  "0" + tempSencond
    return y + "-" + m + "-" + d+" "+ hour +":"+min +":"+second
  }
  // 计算n天前的日期
  function formatPreDate(formatDate, days = 1) {
    var timestamp = Date.parse(formatDate)
    let date = new Date(timestamp + 86400000 * days)  //691200000
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    let res = [year, month, day].map(formatNumber).join('-')
    return res
  
  }
  function formatTimeNextDate(time, days = 1) {
    var timestamp = Date.parse(new Date(time))
    let date = new Date(timestamp + 86400000 * days)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    let res = [year, month, day].map(formatNumber).join('-')
    return res
  }
  function formatNumber (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
  
  export { parseTime, formatTime } from "@/utils";
  
  function pluralize(time, label) {
    if (time === 1) {
      return time + label;
    }
    return time + label + "s";
  }
  
  export function timeAgo(time) {
    const between = Date.now() / 1000 - Number(time);
    if (between < 3600) {
      return pluralize(~~(between / 60), " minute");
    } else if (between < 86400) {
      return pluralize(~~(between / 3600), " hour");
    } else {
      return pluralize(~~(between / 86400), " day");
    }
  }
  
  /* 数字 格式化*/
  export function numberFormatter(num, digits) {
    const si = [
      { value: 1e18, symbol: "E" },
      { value: 1e15, symbol: "P" },
      { value: 1e12, symbol: "T" },
      { value: 1e9, symbol: "G" },
      { value: 1e6, symbol: "M" },
      { value: 1e3, symbol: "k" }
    ];
    for (let i = 0; i < si.length; i++) {
      if (num >= si[i].value) {
        return (
          (num / si[i].value + 0.1)
            .toFixed(digits)
            .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].symbol
        );
      }
    }
    return num.toString();
  }
  
  export function toThousandFilter(num) {
    return (+num || 0)
      .toString()
      .replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
  }
  
  export default {
    dateYMDFilter,
    dateYMDHMFilter,
    dateYMDHMSFilter,
    formatPreDate,
    formatTimeNextDate,
  }