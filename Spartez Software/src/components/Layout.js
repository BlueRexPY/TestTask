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
            simple:{
                content: '',
                value: ''
            }
        };
    }

    handleChangeDevskiller(event) {
        this.setState({devskiller:{value:event.target.value}})
    }
    handleChangeSimple(event) {
        this.setState({simple:{value:event.target.value}})
    }

    handleSubmitDevskiller(event) {
        event.preventDefault();

        let calculation = new Calculation(this.state.devskiller.value);
        
        let result = calculation.calculate()

        let content = 'Wrong input!';

        if (result !== false) {
            this.setState({devskiller:{content:result,value:this.state.devskiller.value}})
        }else{
            this.setState({devskiller:{content:content,value:this.state.devskiller.value}})
        } 
    }

    handleSubmitSimple(event) {
        event.preventDefault();

        let calculation = new SimpleCalculation(this.state.simple.value);
        
        let result = calculation.calculate()

        let content = 'Wrong input!';

        if (result !== false) {
            this.setState({simple:{content:result,value:this.state.simple.value}})
        }else{
            this.setState({simple:{content:content,value:this.state.simple.value}})
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
                <div className="row">
                    <h1 className="col-md-8 col-md-offset-2 text-center">SIMPLE React calculator</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <form className="col-md-6 col-md-offset-3 text-center" onSubmit={(e)=>this.handleSubmitSimple(e)}>
                            <input type="text" className="form-control col-md-9" placeholder="expression..." onChange={(e)=>this.handleChangeSimple(e)}/>
                            <input className="btn btn-success" type="submit" value="Submit"/>
                        </form>
                    </div>

                    <Paragraph content={this.state.simple.content}/>
                </div>
            </div>
        )
    }
}
