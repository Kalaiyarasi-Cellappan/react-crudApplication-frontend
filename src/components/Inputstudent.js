import React from 'react'
import axios from 'axios'
import team from '../logo.png'
class Inputstudent extends React.Component
{
    constructor(props){
        super()
    this.state = {
        firstname : '',
        lastname: '',
        place:''
    }
}
    handleChange = (e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = ()=>{
        if(this.state.firstname!='' && this.state.lastname!='',this.state.place!='')
        {
            axios.post('https://node-crudapplication-backend.herokuapp.com/product/students',this.state)
            .then(res=>{
                console.log('successfully posted');
                this.setState({firstname:'',lastname:'',place:''});
            });
            this.props.history.push('/list');
           
        }
    }
    render()
    {
        return(
            <div class="row text-center">
                <div class="col-md-4">
                    <form onSubmit={()=>this.handleSubmit()}>
                        <input required onChange={(e)=>this.handleChange(e)} name='firstname' value={this.state.firstname} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="First Name" class="form-control"/>
                        <input required onChange={(e)=>this.handleChange(e)} name='lastname' value={this.state.lastname} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="Last Name" class="form-control"/>
                        <input required onChange={(e)=>this.handleChange(e)} name='place' value={this.state.place} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="Place" class="form-control"/>
                        <button style={{borderRadius:'10px',fontSize:'19px',fontFamily:'Cursive,sans-serif,Gugi',outline:'none',color:'white',backgroundColor:'#000066',marginLeft:'50px',marginTop:'20px',width:'435px'}} class="btn">CREATE</button>
                    </form>
                </div>
                <div class="col-md-8">
                    <img src={team}/>
                </div>
            </div>
        );
    }
}
export default Inputstudent;