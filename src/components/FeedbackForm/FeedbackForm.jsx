// import{useSelector, useDispatch} from "react-redux";
// import {useState} from 'react';
// import{useHistory} from "react-router-dom";

// function FeedbackForm(){
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const [feelings, setFeelings] = useState("");
//     const [understanding, setUnderstanding] = useState("");
//     const [support, setSupport] = useState("");
//     const [comments, setComments] = useState("");

//      const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(feelings, understanding, support, comments);

//         dispatch({
//             type: "NEW_USER",
//             payload: {
//                 feelings,
//                 understanding,
//                 support,
//                 comments,
//             },
//         });
//         // clear inputs
//         setFeelings("");
//         setUnderstanding("");
//         setSupport("");
//         setComments("");
        
//         history.push('/comments');

//     };


//     const handleFeelingsChange = (event) => {
//         setFeelings(event.target.value);
//     };
//     const handleUnderstandingChange = (event) => {
//         setUnderstanding(event.target.value);
//     };
//     const handleSupportChange = (event) => {
//         setSupport(event.target.value)
//     };
//     const handleCommentsChange = (event) => {
//         setComments(event.target.value);
//     };

//     const isValidInput = feelings && understanding && support;
//     return(
//         <form onSubmit = {handleSubmit}>
//             <div> 
//                 <div>
//                     <lable For ="feelings">How are you feeling today?</lable>
//                     <input
//                     type="number"
//                     value={feelings}
//                     onChange={handleFeelingsChange}
//                     placeholder="4"
                    
//                     />
//                 </div>
//                 <div>
//                 <lable htmlFor ="understanding">
//                     How well are you understanding the content?
//                 </lable>
//                 <input
//                 type="number"
//                 value={understanding}
//                 onChange={handleUnderstandingChange}
//                 placeholder="4"  
//                 />
//                 </div>
//                 <div>
//                 <lable For ="support">
//                     How well are you supported?
//                     </lable>
//                     <input 
//                     type="number"
//                     value={support}
//                     onChange={handleSupportChange}
//                     placeholder="5"
//                     />
//                 </div>
//                 <div>
//                 <lable For ="comments">
//                 Any comments you want to leave?
//                 </lable>
//                     <input
//                     type="text"
//                     value={comments}
//                     onChange={handleCommentsChange}
//                     placeholder="I love this stuff"
//                     />
//                 </div>

//             </div>
//             <input/>
//             <button type="submit">NEXT</button>

//         </form>

//     )

// }

// export default FeedbackForm;