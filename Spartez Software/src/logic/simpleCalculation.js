export default class SimpleCalculation {
    constructor(expression) {
        this.expression = expression?expression.replace(/[^0-9%^*\/()\-+.]/g, ''):''
    }

    calculate() {
        
        if (this.expression.length>0){
            return eval(this.expression);
        }
        else {
            return false;
        }
    }
}