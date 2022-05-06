import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT } from '../utils/queries';
import ReactionList from '../components/ReactionList';
import { Link } from 'react-router-dom';

const SingleThought = props => {
  const { id: thoughtId } = useParams();
  //console.log(thoughtId);
  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId }
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <Link 
            to={`/profile/${thought.username}`}
            style={{ fontWeight: 700 }}
            className="text-light"
          >
            {thought.username}
          </Link>{' '}
          thought on {thought.createdAt}
        </p>
        <div className="card-body">
          <Link to={`/thought/${thought._id}`}>
            <p>{thought.thoughtText}</p>
            <p className="mb-0">
              Reactions: {thought.reactionCount} || Click to{' '}
              {thought.reactionCount ? 'see' : 'start'} the discussion!
            </p>
          </Link>
         
        </div>
      </div>

      {thought.reactionCount > 0 && <ReactionList reactions={thought.reactions} />}
    </div>
  );
};

export default SingleThought;
