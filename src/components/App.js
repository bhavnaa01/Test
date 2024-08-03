import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import { setLoading } from '../features/ui/uiSlice';
import Posts from './Posts';
import Loading from './Loading';
const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.ui.loading);

    useEffect(() => {
        dispatch(setLoading(true));
        setTimeout(() => {
            dispatch(fetchPosts()).then(() => {
                dispatch(setLoading(false));
            });
        }, 5000);
    }, [dispatch]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <Posts />
        </div>
    );
};

export default App;
