const initialState=[
    {
        id:0,
        name:"andarg Worku",
        number:"098453674",
        email:"andargworku8240@gmail.com",
        
        
    },
    {
        id:1,
        name:"habtamu frew",
        number:"098453674",
        email:"ahabtamuku8240@gmail.com",
        
        
    },
    {
        id:2,
        name:"andarg Worku",
        number:"098453674",
        email:"azemedye240@gmail.com",
        
        
    },
    {
        id:3,
        name:"andarg Worrtku",
        number:"09845367467",
        email:"azemedye240rt@gmail.com",

    },

];
const contactReducer=(state=initialState,action)=>{
    switch (action.type) {
       case "ADD_CONTACT":
       state=[...state,action.payload];
       return state;
       case "UPDATE_CONTACT":
        const updateState=state.map((contact)=>
        contact.id===action.payload.id? action.payload:contact
        );
        state=updateState;
        return state;
        case "DELETE_CONTACT":
            const filterContacts=state.filter(
                contact=>contact.id!==action.payload && contact
            );
            state=filterContacts;
            return state
   
    default:
        return state;
}
};
export default contactReducer;