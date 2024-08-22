const calculateAverage = (numbers) => {
    return numbers.reduce(
      (accumulator, value) => accumulator + value,
      0
    ) / numbers.length
  
  };