import React,{Component} from 'react';

class AddContact extends Component{
    state={
        name:'',
        email:''
    }

    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===''){
            alert(`all fileds are mandatory`);
            return;
        }
        else{
            this.props.addContactHandler(this.state)
            this.setState({name:'',email:''})
        }
    }
    render(){
        return(
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form onSubmit={this.add}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} class="form-control" placeholder='Name' id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="mail" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} class="form-control" id="exampleInputPassword1" placeholder='Email'></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form> 
            </div>
        )
    }

}

export default AddContact;