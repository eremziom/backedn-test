const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return and error, if fullName arg is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error, if fullName arg is not a string', () => {
    expect(formatFullname(1)).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error, if fullName arg is shorter or longer than two words', () => {
    expect(formatFullname('lorem ipsum dolor')).to.equal('Error');
    expect(formatFullname('dolor')).to.equal('Error');
  });

  it('should return "fullName" without changes if proper args', () => {
    expect(formatFullname('Lorem Ipsum')).to.equal('Lorem Ipsum');
  });

  it('should return "fullName" with first upper cases if args have none, or random placed upper cases', () => {
    expect(formatFullname('lorem ipsum')).to.equal('Lorem Ipsum');
    expect(formatFullname('loRem ipsuM')).to.equal('Lorem Ipsum');
  });
});