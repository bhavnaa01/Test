import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePost } from '../features/posts/postsSlice';
import ToggleView from './ToggleView';
import Loading from './Loading';
import Feedback from './Feedback';

const Posts = () => {
  const loading = useSelector(state => state.ui.loading);
  const posts = useSelector(state => state.posts.items);
  const view = useSelector(state => state.ui.view);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Array.isArray(posts) ? posts.slice(indexOfFirstPost, indexOfLastPost) : [];

  const handleRemove = (id) => {
    dispatch(removePost(id));
  };

  const totalPages = Math.ceil(posts.length / postsPerPage);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 bg-dark"  >
            <ToggleView />
            <Feedback />
          </div>
          <div class="col-md-10 bg-info ">
            <div className={view}>
              {currentPosts.map(post => (
                <>
                  <div key={post.id} class="card ">
                    <div class="card-body">
                      <h2>{post.title}</h2>
                      <p>{post.body}</p>
                      <button type="button" class="btn btn-danger" onClick={() => handleRemove(post.id)}>Remove</button>
                    </div>
                  </div>

                </>
              ))}
              <nav aria-label="Pagination">

                <ul class="pagination">
                  {/* <li class="page-item" id="prev-page">

<a class="page-link" href="#" aria-label="Previous">

  <span aria-hidden="true">&laquo;</span>

</a>

</li> */}

                  {Array.from({ length: totalPages }, (_, i) => (
                    <>

                      <li class="page-item"><a class="page-link" href={i + 1}>{i + 1}</a></li>

                    </>

                  ))}
                  {/* <li class="page-item" id="next-page">

    <a class="page-link" href="#" aria-label="Next">

      <span aria-hidden="true">&raquo;</span>

    </a>

  </li> */}

                </ul>

              </nav>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default Posts;
