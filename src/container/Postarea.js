import { Avatar } from '@material-ui/core'
import React, { useState , useEffect} from 'react'
import './Postarea.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Feed from '../component/Feed';
import db, { database } from '../firebase';
import firebase  from 'firebase';




function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {  
            return -1;    
        }    
        return 0;    
    }    
}   

function Postarea({user}) {
            const [postText,setPostText] = useState('');
            const [postImage,setPostImage] = useState('');
            const [feed,setFeed]= useState();

    useEffect(() => {   
            db.collection('post').orderBy('timestamp', 'desc').onSnapshot( (snapshot) =>setFeed(snapshot.docs.map( docs => ( {  id :docs.id,data: docs.data()}))) );
             }, [])
             
    const handleChange1 = e => {
            setPostText(e.target.value);
   }
   const handleChange2 = e => {
        setPostImage(e.target.value);
   }

   const handleLike = (id) => {

    // var liked =
   //  db.collection('post').onSnapshot(snapshot =>   snapshot.docs.filter(data => data.id ===id)[0].data().liked  );
    //   database.ref('post').child(id).update({'liked': true});


   //    const touched = feed.filter(data => data.id === id);
     //  var rest = feed.filter(data => data.id !== id);
     //  console.log(touched[0].data.liked);
      //  touched[0].data.liked = !touched[0].data.liked
     //   setFeed([rest]);

     // database.ref('post').on("value",snapshot => console.log(snapshot.child('liked').val()));
  
   }


   const handleCommentText = (id,com) => { 
       
     
    
    
    
  
       const comments = feed.filter(post => post.id !==id );
       const NewComment = feed.filter(post => post.id ===id);
       NewComment[0].commentText = [...NewComment[0].commentText,{"id":NewComment[0].commentText.length + 1, "comment": com ,"name": user.displayName,'profile':user.photoURL}];
       setFeed([...comments,NewComment[0]]);
       console.log(NewComment[0]);
    
   }
 
   const HandleSubmit = e =>{
        e.preventDefault();
        db.collection('post').add({
            'name':`${user.displayName}`,'profile':`${user.photoURL}`, 'feedText':`${postText}` ,'feedImage': `${postImage}`,'likes':0,'comments':0,'liked':false,"commentText" : [] , "timestamp" : firebase.firestore.FieldValue.serverTimestamp()});
        setPostImage('');
        setPostText('');
    }

    
    return (
        <div className="Postarea">
            <div className="editPost">
                <div className="PostHead">
            
                    <Avatar src={user.photoURL} />
                    <form onSubmit={HandleSubmit} >
                        <div className="postInput flex-1">
                            <input placeholder="What is in your mind? Dipanshu Bhola" value={postText} onChange={handleChange1}  ></input>
                        </div>
                        <div className="postInput">

                        <input placeholder='Image URl'value={postImage} onChange={handleChange2} ></input>
                        </div>
                        <button className="hPost" type="submit">Post</button>
                    </form>

                </div>
      
         
            <div className="postOptions">
                        <div className="pOption">
                            <VideocamIcon fontSize='large' style={{color: 'red'}} /> 
                            <h4>

                            Camera
                            </h4>
                        </div>
                        <div className="pOption">
                            <PhotoLibraryIcon fontSize='large' style={{color: 'green'}} />
                            <h4> 
                            Photos/Videos

                            </h4>
                        </div>
                        <div className="pOption">
                            <InsertEmoticonIcon fontSize='large' style={{color:'orange' }} />
                            <h4>Emotion</h4>
                        </div>
                </div>

               
       </div>
    

       {feed? feed.map(post => <Feed key={post.id} id={post.id} postusername={post.data.name} user={user} postuserprofile={post.data.profile} feedText={post.data.feedText} feedImage={post.data.feedImage} likes={post.data.likes} commentNo={post.data.comments} HandleCommentText={handleCommentText} commentText={post.data.commentText} LikeFunction={handleLike} Liked={post.data.liked}></Feed> ) : <></> }
    
           
        </div>
     
    )
}

export default Postarea
