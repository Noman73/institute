import React from 'react'
import Select from 'react-select'


class Select2 extends React.Component{

    componentWillMount(){
        console.log(this.props.category)
    }
    render(){
        if(this.props.category.length==0){
            return <div/>
        }
        return (
            <Select options={this.props.category} />
        )
    }
}

export default Select2;