const options = [
    { cc: 50, cup: 'Mushroom', weight: 0 },
    { cc: 100, cup: 'Mushroom', weight: 1 },
    { cc: 150, cup: 'Mushroom', weight: 6 },
    { cc: 50, cup: 'Flower', weight: 5 },
    { cc: 100, cup: 'Flower', weight: 4 },
    { cc: 150, cup: 'Flower', weight: 3 },
    { cc: 50, cup: 'Star', weight: 4 },
    { cc: 100, cup: 'Star', weight: 3 },
    { cc: 150, cup: 'Star', weight: 2 },
    { cc: 50, cup: 'Special', weight: 3 },
    { cc: 100, cup: 'Special', weight: 2 },
    { cc: 150, cup: 'Special', weight: 1 },
  ];
  
  function getRandomOption(options) {
    const index = Math.floor(Math.random() * options.length);
    return options[index];
  }
  
  function getWeightedRandomOption(options) {
    const weightedOptions = [];
    options.forEach(option => {
      for (let i = 0; i < option.weight; i++) {
        weightedOptions.push(option);
      }
    });
    return getRandomOption(weightedOptions);
  }
  
  document.getElementById('trueRandom').addEventListener('click', () => {
    const randomOption = getRandomOption(options);
    displayResult(randomOption);
  });
  
  document.getElementById('weightedRandom').addEventListener('click', () => {
    const randomOption = getWeightedRandomOption(options);
    displayResult(randomOption);
  });
  
  function displayResult(option) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `CC: ${option.cc}, Cup: ${option.cup}`;
  }
  