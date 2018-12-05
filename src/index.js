import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timeAgo="Today at 4:45PM"
					avatarImage={faker.image.avatar()}
					blogPost="Hello!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="Today at 2:00PM"
					avatarImage={faker.image.avatar()}
					blogPost="Ferinha??"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Jane"
					timeAgo="Yesterday at 5:00PM"
					avatarImage={faker.image.avatar()}
					blogPost="Nice"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
