/**
 * JavaScript 库
 */
const weapon = {}

/**
 * @description 获取URL参数
 * @param {String} name
 * @returns {String} value
 */
function getUrlParam (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg) // 匹配目标参数
  if (r != null) {
    return unescape(r[2]) // 返回参数值
  }
}

function getQueryVariable (variable) {
  const args = {}
  const query = location.search.substring(1)
  const pairs = query.split('&')
  for (let i = 0; i < pairs.length; i++) {
    const pos = pairs[i].indexOf('=')
    if (pos === -1) {
      continue
    }
    const name = pairs[i].substring(0, pos)
    console.log(name)
    const value = pairs[i].substring(pos + 1)
    args[name] = value
  }
  return args[variable]
}
/**
 * @description 16进制颜色转rgba
 * @param {String} color
 * @param {Number} opacity
 * @returns {String}
 */
function color2Rgba (color, opacity) {
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  // 如果参数不是有效的16进制颜色
  if (typeof color !== 'string' && reg.test(color)) {
    return color
  } else {
    let sColor = color.toLowerCase()
    if (sColor.length === 4) {
      let sColorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    // 处理六位的颜色值
    var sColorChange = []
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
    }
    let opacityNew = parseFloat(opacity)
    if (isNaN(opacityNew) || opacityNew < 0 || opacityNew > 1) {
      opacityNew = 1
    }
    return 'rgba(' + sColorChange.join(',') + ',' + opacityNew + ')'
  }
}

function formatNumber (num, precision, separator, init = 0) {
  var parts
  // 判断是否为数字
  if (!isNaN(parseFloat(num)) && isFinite(num)) {
    // 把类似 .5, 5. 之类的数据转化成0.5, 5, 为数据精度处理做准, 至于为什么
    // 不在判断中直接写 if (!isNaN(num = parseFloat(num)) && isFinite(num))
    // 是因为parseFloat有一个奇怪的精度问题, 比如 parseFloat(12312312.1234567119)
    // 的值变成了 12312312.123456713
    num = Number(num)
    // 处理小数点位数
    num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num).toString()
    // 分离数字的小数部分和整数部分
    parts = num.split('.')
    // 整数部分加[separator]分隔, 借用一个著名的正则表达式
    parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','))

    return parts.join('.')
  }
  // return NaN
  // 如果不是数字，就输出默认值
  return init
}
function initNum (val, str = 0) {
  if (val === undefined || val === '' || isNaN(val) || isNaN(parseFloat(val))) {
    return str
  } else {
    return parseFloat(val)
  }
}
// dealNull 处理为空或者不能转化为数字的数据, 如果非数字，默认转化为0， 如果可以转化为数字，默认保留一位小数
function dealNull (val, flag = 0, lastVal = val) {
  if (val === undefined || val === '' || isNaN(val) || isNaN(parseFloat(val))) {
    return flag
  } else {
    return lastVal
  }
}
/**
 * @description 判断客户端是否iphone
 */
const isIPhone = () => {
  return window.navigator.appVersion.match(/iphone/gi)
}

/**
 * @description 判断客户端是否android
 */
const isAndroid = () => {
  return window.navigator.appVersion.match(/android/gi)
}

/**
 *  @description 保留小数几位
 *  @param arguments 1、value 2 保留几位小数 3 乘以10的阶乘
 */
function formatPrecent () {
  let num = 0
  let args1 = arguments[0]
  let args2 = arguments[1]
  let args3 = arguments[2] || 0
  if (args1) {
    num = args1
    if (args3 !== undefined) {
      num = num * fac(parseInt(args3))
    }
    if (args2 !== undefined) {
      num = num.toFixed(args2)
    }
  } else {
    num = num.toFixed(args2)
  }
  return num
}
/**
 * @description n 10的阶乘
 * @param {Integer} n
 */
function fac (n) {
  return n > 0 ? 10 * fac(n - 1) : 1
}
/**
 * @description 几位分隔添加逗号
 * @param {Integer} num  index
 */
function formatNumberToStr () {
  let str = '0'
  let args1 = arguments[0]
  let args2 = arguments[1] || 3
  if (args1) {
    let parts = args1.toString().split('.')
    let re = new RegExp('\\B(?=(\\d{' + args2 + '})+(?!\\d))', 'g')
    parts[0] = parts[0].replace(re, ',')
    str = parts.join('.')
  }
  return str
}

function getPreMonth () {
  const dateStr = new Date()
  let year = dateStr.getFullYear()
  let month = dateStr.getMonth() // 获取当前日期的月份
  let year2 = year + ''
  if (month === 0) {
    year2 = (parseInt(year) - 1) + ''
    month = '12'
  }
  if (month < 10) {
    month = '0' + month
  }
  let rq = year2 + '' + month
  return rq
}
function getCurMonth () {
  const dateStr = new Date()
  let year = dateStr.getFullYear()
  let month = dateStr.getMonth() // 获取当前日期的月份 0开始
  month = month + 1
  let year2 = year + ''
  month = month < 10 ? '0' + month : month
  let rq = year2 + '' + month
  return rq
}
// 初始判断，大于25号就取上个月，小月25号就取上上个月
function getPreDoubleMonth (initDate = 25) {
  const dateStr = new Date()
  let year = dateStr.getFullYear()
  let month
  if (dateStr.getDate() >= initDate) {
    month = dateStr.getMonth() // 获取上个月份
  } else {
    month = parseInt(dateStr.getMonth()) - 1 // 获取当前日期的前月份
  }
  let year2 = year + ''
  if (month === 0 || month === -1) {
    year2 = (parseInt(year) - 1) + ''
    if (month === 0) {
      month = '12'
    } else {
      month = '11'
    }
  }
  if (month < 10) {
    month = '0' + month
  }
  let rq = year2 + '' + month
  return rq
}

/**
 * @description 获取日期字符串
 * @param {string} str
 */
function getDateStr (str, index) {
  var myDate = new Date()
  if (index === 1) {
    myDate = new Date(new Date() - 24 * 60 * 60 * 1000)
  }
  if (index === 2) {
    myDate.setMonth(myDate.getMonth() - 1)
  }
  if (str === 'year') {
    return myDate.getFullYear()
  } else if (str === 'month') {
    let month = myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1
    return myDate.getFullYear() + month.toString()
  } else if (str === 'monthFull') {
    return myDate.getMonth() + 1
  } else {
    let month = myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1
    let day = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
    return myDate.getFullYear().toString() + month.toString() + day
  }
}
/**
 * @description 通过时间201808获取月份
 * @param {String} str
 */
function getMon (str) {
  let dateInt = parseInt(str.substring(4, 6))
  return dateInt
}

function getYear (str) {
  let dateInt = parseInt(str.substring(0, 4))
  return dateInt
}
// 判断是pc端还是移动端
function isPC () {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return false
  } else {
    return true
  }
}

// 'yyyy-MM-dd HH:mm:ss'格式的字符串转日期
function stringToDate (str) {
  var tempStrs = str.split(' ')
  var dateStrs = tempStrs[0].split('-')
  var year = parseInt(dateStrs[0], 10)
  var month = parseInt(dateStrs[1], 10) - 1
  var day = parseInt(dateStrs[2], 10)
  var timeStrs = tempStrs[1].split(':')
  var hour = parseInt(timeStrs[0], 10)
  var minute = parseInt(timeStrs[1], 10)
  var second = parseInt(timeStrs[2], 10)
  var date = new Date(year, month, day, hour, minute, second)
  return date
}
// 排序方法
function compareSort (prop, tag = true) {
  return function (obj1, obj2) {
    var val1 = obj1[prop]
    var val2 = obj2[prop]
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1)
      val2 = Number(val2)
    }
    if (tag) {
      if (val1 < val2) {
        return -1
      } else if (val1 > val2) {
        return 1
      } else {
        return 0
      }
    } else {
      if (val1 > val2) {
        return -1
      } else if (val1 < val2) {
        return 1
      } else {
        return 0
      }
    }
  }
}
// 比较年月字符串的大小, newDate大返回true
function compareDate (newDate, oldDate) {
  const y = parseInt(newDate.substring(0, 4))
  const m = parseInt(newDate.substring(4, 6))
  const yInit = parseInt(oldDate.substring(0, 4))
  const mInit = parseInt(oldDate.substring(4, 6))
  if ((y > yInit) || (y === yInit && m > mInit)) {
    return true
  } else {
    return false
  }
}
// 处理为0的数据
function dealZero (val, str, flag = '-') {
  if (initNum(val) === 0) {
    return flag
  } else {
    return str
  }
}
// 处理为空的数据,返回千分位数据
function formatNumberNaN (val, precision, separator, flag = '-') {
  if (val === undefined || val === '' || isNaN(val) || isNaN(parseFloat(val))) {
    return flag
  } else {
    return formatNumber(val, precision, separator)
  }
}
// 处理为空的数据给0,返回不是千分位数据
function initNumNaN (val, precision) {
  return initNum(val).toFixed(precision)
}

function reFixed (value, len) {
  let tempNum = 0
  let s
  let s1 = value + ''
  let start = s1.indexOf('.')
  // 截取小数点后,0之后的数字，判断是否大于5，如果大于5这入为1
  if (s1.substr(start + len + 1, 1) >= 5) {
    tempNum = 1
  }
  // 计算10的len次方,把原数字扩大它要保留的小数位数的倍数
  let temp = Math.pow(10, len)
  // 求最接近this * temp的最小数字
  // floor() 方法执行的是向下取整计算，它返回的是小于或等于函数参数，并且与之最接近的整数
  s = Math.floor(value * temp) + tempNum
  return (s / temp).toFixed(len)
}
// 处理小数乘以正数精确度丢失的问题，如0.5075* 100
function accMul (arg1, arg2, fix) {
  if (!parseInt(fix) === fix) {
    return
  }
  let m = 0
  let s1 = arg1.toString()
  let s2 = arg2.toString()
  try { m += s1.split('.')[1].length } catch (e) { }
  try { m += s2.split('.')[1].length } catch (e) { }
  if (m > fix) {
    return (Math.round(Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m - fix)) / Math.pow(10, fix))
  } else if (m <= fix) {
    return (Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)).toFixed(fix)
  } else {
    return (arg1 * arg2).toFixed(fix)
  }
}
// 多字段排序
/**
 *
 * @param item1
 * @param item2
 * @param obj
 * @returns {*}
 * @constructor
  list.sort(function (a, b) {
        return sortByProps(a, b, { "name": "ascending", "age": "descending" });
    })
 */
function sortByProps (item1, item2, obj) {
  var props = []
  if (obj) {
    props.push(obj)
  }
  var cps = [] // 存储排序属性比较结果。
  // 如果未指定排序属性(即obj不存在)，则按照全属性升序排序。
  // 记录下两个排序项按照各个排序属性进行比较得到的结果
  var asc = true
  if (props.length < 1) {
    for (var p in item1) {
      if (item1[p] > item2[p]) {
        cps.push(1)
        break // 大于时跳出循环。
      } else if (item1[p] === item2[p]) {
        cps.push(0)
      } else {
        cps.push(-1)
        break // 小于时跳出循环。
      }
    }
  } else {
    for (var i = 0; i < props.length; i++) {
      var prop = props[i]
      for (var o in prop) {
        asc = prop[o] === 'ascending'
        if (item1[o] > item2[o]) {
          cps.push(asc ? 1 : -1)
          break // 大于时跳出循环。
        } else if (item1[o] === item2[o]) {
          cps.push(0)
        } else {
          cps.push(asc ? -1 : 1)
          break // 小于时跳出循环。
        }
      }
    }
  }

  // 根据各排序属性比较结果综合判断得出两个比较项的最终大小关系
  for (var j = 0; j < cps.length; j++) {
    if (cps[j] === 1 || cps[j] === -1) {
      return cps[j]
    }
  }
  return false
}
// 根据某个属性，去重对象数组
function removeRepeatData (arr, prop) {
  let result = []
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i][prop]]) {
      result.push(arr[i])
      obj[arr[i][prop]] = true
    }
  }
  return result
}
// 小数转化百分比
function switchPercent (val, precision = 1, flag = '') {
  let str = (initNum(val) * 100).toFixed(precision) + flag
  return str
}
// 判断是否是数字
function isNumber (val) {
  if (parseFloat(val).toString() === 'NaN') {
    return false
  } else {
    return true
  }
}
weapon.getUrlParam = getUrlParam
weapon.formatNumber = formatNumber
weapon.color2Rgba = color2Rgba
weapon.isIPhone = isIPhone
weapon.isAndroid = isAndroid
weapon.formatPrecent = formatPrecent
weapon.fac = fac
weapon.formatNumberToStr = formatNumberToStr
weapon.getQueryVariable = getQueryVariable
weapon.getPreMonth = getPreMonth
weapon.getCurMonth = getCurMonth
weapon.getPreDoubleMonth = getPreDoubleMonth
weapon.getDateStr = getDateStr
weapon.getMon = getMon
weapon.isPC = isPC
weapon.stringToDate = stringToDate
weapon.compareSort = compareSort
weapon.compareDate = compareDate
weapon.dealZero = dealZero
weapon.reFixed = reFixed
weapon.accMul = accMul
weapon.sortByProps = sortByProps
weapon.formatNumberNaN = formatNumberNaN
weapon.initNumNaN = initNumNaN
weapon.removeRepeatData = removeRepeatData
weapon.switchPercent = switchPercent
weapon.isNumber = isNumber
weapon.dealNull = dealNull

export {
  getUrlParam,
  formatNumber,
  color2Rgba,
  isIPhone,
  isAndroid,
  initNum,
  formatPrecent,
  fac,
  formatNumberToStr,
  getQueryVariable,
  getPreMonth,
  getCurMonth,
  getPreDoubleMonth,
  getDateStr,
  getMon,
  getYear,
  isPC,
  stringToDate,
  compareSort,
  compareDate,
  dealZero,
  reFixed,
  accMul,
  sortByProps,
  formatNumberNaN,
  initNumNaN,
  removeRepeatData,
  switchPercent,
  isNumber,
  dealNull
}

export default weapon
