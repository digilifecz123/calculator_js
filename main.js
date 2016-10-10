'use strict';
var sum = 0;
var numArray = []
var opArr = []

// potreboval bych vysvetlit to jak by to vypadalo,kdybych ty operatory mel rozdelit do ruznych modulu
var operations = {
  '+': function(x, y) {
    return x + y;
  },
  '/': function(x, y) {
    return x / y;
  },
  '*': function(x, y) {
    return x * y;
  },
  '-': function(x, y) {
    return x - y;
  }
};

var calcPlugin = {
  init: function() {
    this.cacheDom()
    this.addEventListeners()
    this.render()
  },

  cacheDom: function() {
    // Buttons
    this.btnAdd = document.getElementById('btnAdd')
    this.btnCalculate = document.getElementById('btnCalculate')
    this.btnReset = document.getElementById('btnReset')
      // HTML elements
    this.input = document.querySelector('input')
    this.operators = document.getElementById('operators')
    this.instructions = document.getElementById('instructions')
    this.result = document.getElementById('result');
  },

  render: function() {
    // first load
    if (numArray.length === 0) {
      operators.insertAdjacentHTML('beforeEnd', `
            <option value='+'>add</option>
            <option value='*'>multiple</option>
            <option value='/'>divide</option>
            <option value='-'>substract</option>
            <option value='='>apply</option>`)
    }
    // in counting
    else {
      instructions.insertAdjacentHTML('beforeEnd',
        `<li>${calcPlugin.currentOpTxt} ${calcPlugin.currentValue}</li>`)
      this.input.value = ''
    }
  },

  reset: function() {
    numArray = []
    opArr = []
    sum = 0

    result.innerHTML = 'N/A'
    while (instructions.hasChildNodes())
      instructions.removeChild(instructions.lastChild);
    this.btnCalculate.disabled = false;
  },

  addEventListeners: function() {
    this.btnAdd.addEventListener('click', this.clickBtnAdd.bind(this))
    this.btnCalculate.addEventListener('click', this.clickBtnCalculate.bind(this))
    this.btnReset.addEventListener('click', this.clickBtnReset.bind(this))
  },

  clickBtnAdd: function(e) {
    e.preventDefault()
    this.addStep()
    this.render()
  },

  clickBtnReset: function(e) {
    e.preventDefault()
    calcPlugin.reset()
  },

  clickBtnCalculate: function(e) {
    e.preventDefault()
    if (opArr[opArr.length - 1] === '=') {
      this.calc()

      result.innerHTML = ''
      result.insertAdjacentHTML('beforeEnd', sum)
      this.btnCalculate.disabled = true;
    }
  },

  calc: function() {
    for (var i = 0; i < numArray.length; i++) {
      if (sum === 0 && i === 0) {
        sum = numArray[0]
      } else {
        sum = this.calculate(sum, numArray[i], opArr[i - 1])
      }
    }
    return sum
  },

  calculate: function(x, y, operator) {
    return operations[operator](x, y)
  },

  addStep: function() {
    this.currentOpTxt = this.operators.options[this.operators.selectedIndex].text
    this.currentOp = this.operators.options[this.operators.selectedIndex].value
    this.currentValue = Number(this.input.value)

    numArray.push(this.currentValue)
    opArr.push(this.currentOp)
  }
}
calcPlugin.init()