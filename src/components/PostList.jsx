import React, { useMemo } from 'react';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostList = ({ posts, title, remove }) => {
    const nodeRefs = useMemo(() => posts.map(() => React.createRef()), [posts]);

    if (!posts.length) {
        return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>;
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        nodeRef={nodeRefs[index]}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem
                            ref={nodeRefs[index]}
                            remove={remove}
                            number={index + 1}
                            post={post}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
