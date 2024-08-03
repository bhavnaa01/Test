import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setView } from '../features/ui/uiSlice';

const ToggleView = () => {
  const dispatch = useDispatch();
  const view = useSelector(state => state.ui.view);

  const toggleView = () => {
    dispatch(setView(view === 'grid' ? 'list' : 'grid'));
  };

  return (
    <>
      <button onClick={toggleView} checked data-toggle="toggle" style={{ marginTop: "5rem" }} data-onstyle="success" className="btn btn-danger btn-lg btn-block" >Toggle View</button>
    </>

  );
};

export default ToggleView;
