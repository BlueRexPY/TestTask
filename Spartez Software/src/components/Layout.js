import React from "react";
import Paragraph from "./Paragraph";
import Calculation from "../logic/calculation";
import SimpleCalculation from "../logic/simpleCalculation";
/** @namespace React.Component */
export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            devskiller:{
                content: '',
                value: ''
            },
        };
    }

    handleChangeDevskiller(event) {
        this.setState({devskiller:{value:event.target.value}})
    }

    handleSubmitDevskiller(event) {
        event.preventDefault();

        let calculation = new Calculation(this.state.devskiller.value);
        
        let result = calculation.calculate()

        let content = 'Wrong input!';

        if (result !== false) {
            const expression = this.state.devskiller.value.replace(/[^0-9%^*\/()\-+.]/g, '')
            const pattern =(/([-+*/])/)
            const num =(/[0-9.]+|(\*)\s/g)
        
            const out = `${parseFloat(expression.match(num)[0])} ${pattern.exec(expression)[0]} ${parseFloat(expression.match(num)[1])} = ${result}`

            this.setState({devskiller: {content:out,value:this.state.devskiller.value}})
        }else{
            this.setState({devskiller:{content:content,value:this.state.devskiller.value}})
        } 
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="col-md-8 col-md-offset-2 text-center">Devskiller React calculator</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <form className="col-md-6 col-md-offset-3 text-center" onSubmit={(e)=>this.handleSubmitDevskiller(e)}>
                            <input type="text" className="form-control col-md-9" placeholder="expression..." onChange={(e)=>this.handleChangeDevskiller(e)}/>
                            <input className="btn btn-success" type="submit" value="Submit"/>
                        </form>
                    </div>

                    <Paragraph content={this.state.devskiller.content}/>
                </div>
            </div>
        )
    }
}
