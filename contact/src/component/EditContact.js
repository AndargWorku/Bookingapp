import React from 'react'
import {toast} from "react-toastify"
import {useEffect,useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {Link,useParams,useNavigate} from "react-router-dom"

const EditContact = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[number,setNumber]=useState("");
const {id}=useParams();
const contacts=useSelector(state=>state);
const dispatch=useDispatch();
const navigate=useNavigate();
const currentContact=contacts.find(contact=>contact.id===parseInt(id));

useEffect(()=>{
    if(currentContact){
        setName(currentContact.name);
        setEmail(currentContact.email);
        setNumber(currentContact.number);

    }
   
},[currentContact]);
const handleSubmit=(e)=>{
    e.preventDefault();
    const checkEmail=contacts.find(
        (contact)=>contact.id!==parseInt(id)&& contact.email===email
    );
    const checkNumber=contacts.find(
        (contact)=>contact.id!==parseInt(id)&&contact.number===parseInt(number)
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
        id:parseInt(id),
        email,
        name,
        number,
    }
    dispatch({type:"UPDATE_CONTACT", payload:data})
    toast.success("applicant update successfully");
    navigate("/");
   };

  return (
    <div className="container">
        {
            currentContact ? (
           <>
      <div className="row">
        <h1 className="display-3 my-5 text-center">
          Edit Contact{id}
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
                <input type="submit"  value="upgrade applicant" className="btn btn -block btn-dark"/>
                <Link to= "/" className="btn btn-danger ml-3">cancel</Link>
            </div>


          </form>
        </div>
      </div>
      </>
           ) : (
            <h1 className="display-3 my-5 text-center">
          applicant Contact{id} will not exist
        </h1>
           )
        }
      
    </div>

  );
};

export default EditContact
