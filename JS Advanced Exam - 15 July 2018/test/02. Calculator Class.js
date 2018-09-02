let expect = require("chai").expect;
let Calculator = require("../02. Calculator Class");

describe('The class functionality', function () {

    it('should have a property expenses', function () {
        let calc = new Calculator();
        expect(calc.expenses).to.eql([]);
    });

    describe('addData function', function () {
        it('should return the right array values at te right order', function () {
            let calc = new Calculator();
            calc.add('hello');
            calc.add(1);
            expect(calc.expenses).to.eql(['hello', 1]);
        })
    });

    describe('divideNums function', function () {
        it('if there are numbers in the array', function () {
            let calc = new Calculator();
            calc.add('pesho');
            calc.add(10);
            calc.add(5);
            expect(calc.divideNums()).to.be.equal(2);
            expect(calc.expenses).to.be.eql([2]);
        });

        it('if there are not numbers in the array', function () {
            let calc = new Calculator();
            calc.add("5");
            expect(() => {
                calc.divideNums()
            }).to.throw("There are no numbers in the array!");
        });

        it('if there is any floating point number in the array', function () {
            let calc = new Calculator();
            calc.add(10);
            calc.add(2.5);
            expect(calc.divideNums()).to.be.equal(4);
            expect(calc.expenses).to.be.eql([4])
        });

        it('if there is any negative number in the array', function () {
            let calc = new Calculator();
            calc.add('pesho');
            calc.add(-10);
            calc.add(2);
            expect(calc.divideNums()).to.be.equal(-5);
            expect(calc.expenses).to.be.eql([-5])
        });

    });

    describe('toString function', function () {
        it('if the array is empty', function () {
            let calc = new Calculator();
            expect(calc.toString()).to.be.equal('empty array')
        });

        it('if the array is not empty', function () {
            let calc = new Calculator();
            calc.add('pesho');
            calc.add('gosho');
            calc.add(3);
            expect(calc.toString()).to.be.equal('pesho -> gosho -> 3');
        })
    });

    describe('orderBy function', function () {
        it('if there are only numbers', function () {
            let calc = new Calculator();
            calc.add(2);
            calc.add(-2);
            calc.add(0);
            calc.add(1);
            calc.add(3);
            calc.add(-5);
            expect(calc.orderBy()).to.be.equal('-5, -2, 0, 1, 2, 3')
        });

        it('if they are mixed', function () {
            let calc = new Calculator();
            calc.add('b');
            calc.add('a');
            calc.add('c');
            calc.add(1);
            calc.add(2);
            expect(calc.orderBy()).to.be.equal('1, 2, a, b, c')
        });

        it('if it is empty', function () {
            let calc = new Calculator();
            expect(calc.orderBy()).to.be.equal('empty')
        });
    });

});

let output = new Calculator();
output.add(10);
output.add("Pesho");
output.add("5");
console.log(output.toString());
output.add(10);
console.log(output.divideNums());
output.add(1);
console.log(output.orderBy());
console.log(output.toString());
