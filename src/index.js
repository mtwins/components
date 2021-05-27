import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
  return (
  <div className="ui container comments">

  <ApprovalCard>
      <div>
      <h4>
      Warning!
      </h4>
      </div>
  </ApprovalCard>

    <ApprovalCard>
        <CommentDetail author="Same"
        timeAgo="Today at 4"
        text= "blog post"
        avatar={faker.image.avatar()}
        />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail author="Same2"
      timeAgo="Today at 3"
      text= "blog post"
        avatar={faker.image.avatar()}
    />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author="Same3"
       timeAgo="Today at 46"
        text= "blog post"
        avatar={faker.image.avatar()}/>
    </ApprovalCard>



  </div>


  );
};
ReactDOM.render(<App />, document.querySelector('#root'))
