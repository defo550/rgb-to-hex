const expect = require('chai').expect;
const h = require('./')

describe('rgb-to-hex', function () {
  it('should convert 3 argument syntax.', function () {
    expect(h(246, 141, 100)).to.equal('f68d64');
    expect(h(58, 81, 113)).to.equal('3a5171');
  });

  it('should convert string argument syntax.', function () {
    expect(h('246, 141, 100')).to.equal('f68d64');
    expect(h('58, 81, 113')).to.equal('3a5171');
    expect(h('rgb(246, 141, 100)')).to.equal('f68d64');
    expect(h('rgb(58 81 113)')).to.equal('3a5171');
    expect(h('246 141 100')).to.equal('f68d64');
    expect(h('(58 81 113)')).to.equal('3a5171');
    expect(h('rgb(246%, 141%, 100%)')).to.equal('f68d64');
    expect(h('rgb(246, 141, 100, 0.5)')).to.equal('f68d64');
  });

  it('should throw TypeError with invalid arguments.', function () {
    const fn = () => h('#000');
    expect(fn).to.throw(TypeError);
  });
});

