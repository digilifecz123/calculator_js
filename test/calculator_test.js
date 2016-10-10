var assert = chai.assert;
var expect = chai.expect;

describe('Test calculation', function() {

  it('Case: 2 + 3 * 3 = 15', function() {
    sum = 0;
    numArray = [2, 3, 3]
    opArr = ['+', '*', '=']
    expect(calcPlugin.calc()).to.equal(15)
    calcPlugin.reset()
  });

  it('Case: 9 * 5 = 45', function() {
    sum = 0;
    numArray = [9, 5]
    opArr = ['*', '=']
    expect(calcPlugin.calc()).to.equal(45)
    calcPlugin.reset()
  });

  it('Case: 1 = 1', function() {
    sum = 0;
    numArray = [1]
    opArr = ['=']
    expect(calcPlugin.calc()).to.equal(1)
    calcPlugin.reset()
  });

  it('Case: emty inputs = 0', function() {
    sum = 0;
    numArray = []
    opArr = []
    expect(calcPlugin.calc()).to.equal(0)
    calcPlugin.reset()
  });

  it('Case: 0 * 0 + 5 - 2 + 0 - 3 = 0', function() {
    sum = 0;
    numArray = [0, 0, 5, 2, 0, 3]
    opArr = ['*', '+', '-', '+', '-', '=']
    expect(calcPlugin.calc()).to.equal(0)
    calcPlugin.reset()
  });

  it('Case: 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 = 3628800  ', function() {
    sum = 0;
    numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    opArr = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '=']
    expect(calcPlugin.calc()).to.equal(3628800)
    calcPlugin.reset()
  });

  it('Case: -5/3 = - 5/3', function() {
    sum = 0;
    numArray = [-5, 3]
    opArr = ['/', '=']
    expect(calcPlugin.calc()).to.equal(-5 / 3)
    calcPlugin.reset()
  });
});