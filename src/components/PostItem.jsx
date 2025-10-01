import React from 'react';
import MyButton from './UI/button/MyButton';
import {useNavigate} from "react-router-dom";

const PostItem = React.forwardRef(({ post, number, remove, props }, ref) => {
    const router = useNavigate();
    return (
        <div ref={ref} className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router(`/post/${post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => remove(post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
});

export default PostItem;
