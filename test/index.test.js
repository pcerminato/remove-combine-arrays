const { expect } = require('chai');
const removeAndCombine = require('../index');

describe('Removes duplicates and combine two arrays', () => {

  it('should return an empty array', () => {

    const result = removeAndCombine([], []);

    expect(result).to.have.length(0);
    expect(result).to.eql([]);
  });

  it('should combine the arrays skipping repeated values in array2', () => {

    const array1 = ['a','b','c','d'];
    const array2 = ['a','c','e','f'];
    
    const expectation = ['a','b','c','d','e','f'];

    const result = removeAndCombine(array1, array2);

    expect(result).to.eql(expectation);

  });
  
  it('should remove repeated values even when repeated several times', () => {

    const array1 = ['a','b','c','d'];
    const array2 = ['a','a','a','a','a','a','c','c','e','f'];
    
    const expectation = ['a','b','c','d','e','f'];

    const result = removeAndCombine(array1, array2);

    expect(result).to.eql(expectation);

  });

  // 
  it('should not remove values from array1', () => {

    const array1 = ['a','a','a','a','a','a','c','c','e','f'];
    const array2 = ['a','b','c','d'];
    
    const expectation = ['a','a','a','a','a','a','c','c','e','f','b','d'];

    const result = removeAndCombine(array1, array2);

    expect(result).to.eql(expectation);

  });

  it('should keep the order of concatenation, array2 after array1', () => {

    const array1 = ['a','b','c','d'];
    const array2 = ['a','c','e','f'];
    
    const expectation = ['a','b','c','d','e','f'];

    const result = removeAndCombine(array1, array2);

    expect(result).to.have.ordered.members(expectation);

  });

  it('should include every value when there are no repeatitions', () => {

    const array1 = ['a','b','c','d'];
    const array2 = ['e','f','g','h'];
    
    const expectation = ['a','b','c','d','e','f','g','h'];

    const result = removeAndCombine(array1, array2);

    expect(result).to.have.ordered.members(expectation);

  });

  it('should return array1 when all values are repeated', () => {

    const array1 = ['a','b','c','d'];

    const result = removeAndCombine(array1, array1);

    expect(result).to.eql(array1);

  });

  it('should return array2 when array1 is empty', () => {

    const array1 = ['a','b','c','d'];

    const result = removeAndCombine([], array1);

    expect(result).to.eql(array1);

  });

});
