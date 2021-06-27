import React, { useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Login () {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [posts,setPosts]=useState([]);
    let history=useHistory();

    ///fetching json data
    useEffect(()=>{
        axios.get("./Data/Store.json")
        .then(response=>{
        console.log(response.data)
        setPosts(response.data)
        } )
        .catch(err=>{console.log(err)})
    },[]) 
    
    const HandleSubmit= async event =>{
       
        console.log(posts.map(post=>post.name));
        let usernames=posts.filter(post=>{if(post.username===username){ return post.username}}).map(post=>post.username)
        let passwords= posts.filter(post=>{if(post.password===password){ return post.password}}).map(post=>post.password)
        
        if(usernames == username && passwords == password){
            alert("login successful")
            history.push("./welcome");
        }else{
            alert("login failed")
        }
        event.preventDefault();
    }
    
    const handleUsername=event =>{
       
        if(event.target.value.length<3){
            setUserErr(true);
        }else{
            setUserErr(false);
            setUsername(event.target.value); 
        }
         
    }

    const handlePassword=event =>{

        if(event.target.value.length<3){

            setUserErr(true);
        }else{
            setUserErr(false);
            setPassword(event.target.value);
        } 
    }

    return(
        
        <form onSubmit={HandleSubmit}>
            <h3>Sign in</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="text=" className="form control" placeholder="Enter username" onChange={handleUsername} />
                {userErr?<span>Invalid!</span>:""}
            </div>
            
            <div className="form-group">
                <label>Password</label>
                <input type="passsword" className="form control" placeholder="Enter password" onChange={handlePassword}/>
                {userErr?<span>Invalid!</span>:""}
            </div>

            <button type="submit" classsName="btn btn-primary btn-block">Submit</button><br/> 
        </form>      
      
    )
    
}
export default Login;