'use strict';

const expect = require('chai').expect;

const fss = require('../index');

describe('#indexOf', function() {
  it('should find two substrings', function() {
    var result = fss.indexOf('coocoocoo', 'oocoo').toString();
    expect(result).to.equal('1,4');
  });
  it('should find one substring', function() {
    var result = fss.indexOfSkip('coocoocoo', 'oocoo').toString();
    expect(result).to.equal('1');
  });
  it('should find three substrings', function() {
    var result = fss.indexOf('coocoocoocoo', 'oocoo').toString();
    expect(result).to.equal('1,4,7');
  });
  it('should find two substrings', function() {
    var result = fss.indexOfSkip('coocoocoocoo', 'oocoo').toString();
    expect(result).to.equal('1,7');
  });
});

describe('#lastIndexOf', function() {
  it('should find two substrings', function() {
    var result = fss.lastIndexOf('coocoocoo', 'oocoo').toString();
    expect(result).to.equal('4,1');
  });
  it('should find three substrings', function() {
    var result = fss.lastIndexOf('coocoocoocoo', 'oocoo').toString();
    expect(result).to.equal('7,4,1');
  });
  it('should find three substrings', function() {
    var result = fss.lastIndexOf('coocoocoocoo', 'oocoo', 1).toString();
    expect(result).to.equal('7,4,1');
  });
  it('should find two substrings', function() {
    var result = fss.lastIndexOf('coocoocoocoo', 'oocoo', 2).toString();
    expect(result).to.equal('7,4');
  });
});
