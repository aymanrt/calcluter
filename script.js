function press(value) {
    document.getElementById('display').value += value;
  }
  
  async function calculate() {
    let expression = document.getElementById('display').value;
    let result;
  
    try {
      const instance = await WebAssembly.instantiateStreaming(fetch('calculator.wasm'));
      result = instance.exports.calculate(expression);
    } catch (error) {
      result = 'Error';
      console.error('Error:', error);
    }
  
    document.getElementById('display').value = result;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }