import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setComments, selectComments } from '../redux/commentsSlice';
import { selectUser } from '../redux/userSlice'

const Box = styled.div`
  background: #eee;
  margin-top: 30px;
  border-radius: 5px;
  padding: 2%;
`;

const Title = styled.h4`
`;

const PersonalInfo = styled.div`
  display: flex;
  justify-content: center;
`;

const Name = styled.input`
  margin: 4px;
`;

const Email = styled.input`
  margin: 4px;
`;

const FeedBack = styled.textarea`

`;

const Button = styled.button`
  font-size: 1.125rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  padding: calc(0.5rem - 2px) calc(0.75rem - 2px);
  border: 2px solid transparent;
  min-height: 2.75rem !important;
  text-align: center;
  line-height: 1.375 !important;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  background: transparent;
  color: #141414;
  cursor: pointer;
  border-radius: 5px;
  background: rgb(84, 104, 26);
  margin: 4px;

  &:hover {
    opacity: .8;
    color: white;
  }
`;

const Comment = ({ url }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedBack, setFeedBack] = useState('');
  const state = useSelector(selectComments);
  const userState = useSelector(selectUser);
  const dispatch = useDispatch();

  const submit = () => {
    const newComment = {
      name: userState.user.name, email: '', feedBack, date: new Date().toJSON().slice(0, 10), url
    };
    let commentsList = []
    commentsList = [...state.comments.comments, newComment];
    dispatch(setComments(commentsList));

    console.log(state);
  }

  return (
    <>
      {
        userState.user.isLoggedIn
        ? (
          <Box>
          <Title>Leave a Comment</Title>
          <br />
          <PersonalInfo>
          <FeedBack 
            value={feedBack}
            onChange={(e) => setFeedBack(e.target.value)}
          />
          </PersonalInfo>
    
          <PersonalInfo>
          <Button onClick={submit}>Submit</Button>
          </PersonalInfo>
        </Box>  
        )
        : (
          <></>
        )
      }
    </>
  );
}

export default Comment;