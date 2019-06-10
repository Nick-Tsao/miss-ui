/* eslint-disable */
export default function formatValueByGapStep(step, value, gap = ' ', direction = 'right', range, isAdd = 1, oldValue = '') {
  if (value.length === 0) {
    return {value, range}
  }

  const arr = value && value.split('')
  let _range = range
  let showValue = ''

  if (direction === 'right') {
    for (let j = arr.length - 1, k = 0; j >= 0; j--, k++) {
      const m = arr[j]
      showValue = k > 0 && k % step === 0 ? m + gap + showValue : m + '' + showValue
    }
    if (isAdd === 1) {
      // 在添加的情况下，如果添加前字符串的长度减去新的字符串的长度为2，说明多了一个间隔符，需要调整range
      if (oldValue.length - showValue.length === -2) {
        _range = range + 1
      }
    } else {
      // 在删除情况下，如果删除前字符串的长度减去新的字符串的长度为2，说明少了一个间隔符，需要调整range
      if (oldValue.length - showValue.length === 2) {
        _range = range - 1
      }
      // 删除到最开始，range 保持 0
      if (_range <= 0) {
        _range = 0
      }
    }
  } else {
    arr.some((n, i) => {
      showValue = i > 0 && i % step === 0 ? showValue + gap + n : showValue + '' + n
    })
    const adapt = range % (step + 1) === 0 ? 1 * isAdd : 0
    _range = typeof range !== 'undefined' ? (range === 0 ? 0 : range + adapt) : showValue.length
  }

  return {value: showValue, range: _range}
}