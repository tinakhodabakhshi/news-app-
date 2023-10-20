import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectComments } from '../../redux/commentsSlice';
import Comment from '../../components/Comment';

const Container = styled.div`
  width: 80%;
  margin: 5% 10% 5% 10%;
`;

const Title = styled.h1`
  margin-bottom: 2.5%;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 9px;
  box-shadow: rgb(78, 146, 227) 0px 1rem 4rem;

`;

const Desc = styled.p`
  line-height: 1.7em;
  color: rgb(102, 102, 102);
  text-align: justify;
  font-weight: 100;
  font-size: 10pt;
  margin-top: 5%;
`;

const Content = styled.p`
  line-height: 1.7em;
  color: rgb(102, 102, 102);
  text-align: justify;
  font-weight: 100;
  font-size: 10pt;
  margin-top: 5%;
`;

const SeeFullContent = styled.div`
  color: rgb(80, 80, 80);
  margin-top: 2.5%;
  font-size: 8pt;
`;

const PublishedAt = styled.span`
  font-size: 14px !important;
  color: rgb(101, 101, 101);
  font-weight: 500 !important;
`;

const CommentsWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 200px;
`;

const CommentBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: #eee;
  /* padding: 2%; */
  border-radius: 5px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const CommentText = styled.p`
  margin-bottom: 10px;
  
`;

const PersonalInfo = styled.div`
  display: flex;
  width: 100%;
  background: rgb(84, 104, 26);
  color: white;
  justify-content: space-around ;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const FeedBackBox =  styled.div`
  padding: 2%;
  color: rgb(102, 102, 102);
`;

const NewsItem = () => {
  const location = useLocation();
  console.log(location);
  const { state } = useLocation();
  const { item } = state;
  const { comments } = useSelector(selectComments);

  const [fullContent, setFullContent] = useState('');

  useEffect(() => {
    if (item.content !== null || item.content !== undefined) {
    }
  }, [state]);


  console.log(comments.comments);

  return (
    <Container>
      <Title>
        {item.title} <PublishedAt>{item.publishedAt}</PublishedAt>
      </Title>
      <Image src={item.urlToImage} />

      <Desc>
        {item.description}
      </Desc>
      <Content>
        {item.content}
      </Content>

        <p>{comments.comments.name}</p>
      <Comment url={item.url} />



  {
    comments.comments.filter((comment) => comment.url === item.url)
      .map((comment) => (
      <CommentsWrapper>
      <CommentBoxContainer>

        <PersonalInfo>
        <Label></Label>
        <CommentText>{comment.name}</CommentText>

        <Label></Label>
        <CommentText>{comment.date}</CommentText>

        </PersonalInfo>

        <FeedBackBox>
        <Label><b>Feedback:</b></Label>

          <CommentText>{comment.feedBack}</CommentText>
        </FeedBackBox>
    </CommentBoxContainer>
      </CommentsWrapper>
        
      ))
  }

    </Container>
  );
}

export default NewsItem;
