export default class Calculation {
    constructor(expression) {
        this.expression = expression?expression.replace(/[^0-9%^*\/()\-+.]/g, ''):''
        this.a = 0
        this.b = 0
    }

    addition() {
        return this.a + this.b;
    }

    subtraction() {
        return this.a - this.b;
    }

    production() {
        return this.a * this.b;
    }

    division() {
        return this.a / this.b;
    }

    calculate() {  
        let pattern =(/([-+*/])/)
        let num =(/[0-9.]+|(\..*)\s/g)
        
        if (this.expression.match(pattern)) {
            this.a = parseFloat(this.expression.match(num)[0])
            this.b = parseFloat(this.expression.match(num)[1])

            let sign = pattern.exec(this.expression)[0];

            let result = false;

            switch (sign) {
                case '+':
                    result = this.addition();
                    break;
                case '-':
                    result = this.subtraction();
                    break;
                case '*':
                    result = this.production();
                    break;
                case '/':
                    result = this.division();
                    break;
            }

            return result;
        }
        else {
            return false;
        }
    }
}
