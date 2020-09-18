import { Avatar } from '@material-ui/core'
import React , {useState }from 'react'
import './Feed.css'



import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import MoodIcon from '@material-ui/icons/Mood';



function Feed({id,postusername,postuserprofile,user,feedText,feedImage,likes, commentNo,LikeFunction,Liked,commentText,HandleCommentText }) {
     const [com , setCom] = useState('');
     const handlePrevent = e =>{
        // HandleCommentText(id,com);
         setCom('');
         e.preventDefault();
     }
     const changeComment = e =>{
           setCom(e.target.value);
     }

    const [show,setShow] = useState(false);

    const handleCommentClickfunction = (id) => {
        setShow(!show);
    }

 
    return ( 
        <div className='Feed' key={id}>
            <div className='feedProfile'>

                <Avatar src={postuserprofile}/>
                <h4>{postusername }</h4>
            </div>
            <h5>{feedText}</h5>
            {feedImage? <img  src={feedImage} alt={feedText}/> : <></> }
            
            <div className='feedDetails'>
                <span>{likes} likes</span>
                <span className='comments'>{commentNo} comments</span>
            </div>
            <div className="feedOptions">
                <div className='fOption'  onClick={ ()=> LikeFunction(id)}>
                    {Liked? <ThumbUpAltIcon style={{color:'blue'}} /> : <ThumbUpAltOutlinedIcon /> }
                    
                    <h3>Like</h3>
                </div>
                <div className='fOption' onClick={() => handleCommentClickfunction(id)}>
                    <ChatBubbleOutlineIcon  />
                    <h3>Comment</h3>
                </div>
                <div className='fOption'>
                    <ScreenShareIcon />
                    <h3>Share</h3>
                    
                </div>
                <div className='fOption'>
                    <Avatar src={postuserprofile} />
                </div>
            </div>
 
 
          {show && commentText ? commentText.map( comment =>
               
             <div key={comment.id} className="commentSection">
                <div className="commentProfile">
                    <Avatar src={comment.profile} />
                    <h4>{comment.name}</h4>
                </div>
                <p>{comment.comment}</p>
            </div>)
            :
            <></>
            }
        
        {show? 
             <div className="addComment">
                    <Avatar src={user.photoURL} />
                    <form className='commentForm' onSubmit={ handlePrevent}>
                        <input placeholder="Write a Comment..."  onChange={changeComment} value={com} />
                        <MoodIcon style={{color:'orange'}} />
                        <button className="hidden" type='submit' onSubmit={ handlePrevent} ></button>
                    </form>
                </div>

                :
                <></>
       }
 </div>    
    
    )
}

export default Feed
