import React, {useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {toast} from "react-toastify"
import{useNavigate} from "react-router-dom";
const AddContact = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[number,setNumber]=useState("");
   const contacts=useSelector((state)=>state);
   const dispatch=useDispatch();
   const navigate = useNavigate();
   console.log(contacts);

   const handleSubmit=(e)=>{
    e.preventDefault();
    const checkEmail=contacts.find(
        (contact)=>contact.email===email&&contact
    );
    const checkNumber=contacts.find(
        (contact)=>contact.number===parseInt(number)
    );
    if(!email||!name||!number){
        return toast.warning("fill all fields");
    }
    if(checkEmail){
        return toast.error('this email is already exist');
    }
    if(checkNumber){
        return toast.error('this number is already exist');
    }
    const data={
        id:contacts[contacts.length-1].id+1,
        email,
        name,
        number,
    }
    dispatch({type:"ADD_CONTACT", payload:data})
    toast.success("applicant add successfully");
    navigate("/");
   };
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 my-5 text-center">
          Add Contact
        </h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" placeholder="name" className="form-control"
                 value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="email" placeholder="email" className="form-control"
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="number" placeholder="phoneNumber" className="form-control"
                value={number} onChange={(e)=>setNumber(e.target.value)}/>
            </div>
            <div className="form-group">
                <input type="submit"  value="add applicant" className="btn btn -block btn-dark"/>
            </div>


          </form>
        </div>
      </div>
      
    </div>

  )
}

export default AddContact
