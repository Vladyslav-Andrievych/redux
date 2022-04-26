import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions.js';
import User from './User.jsx';
import Pagination from './Pagination.jsx';
import { usersListSelector, currentPageSelector } from './users.selectors.js';

const UsersList = ({ users, goPrev, goNext, currentPage }) => {
  const startIndex = currentPage * 3;
  const usersPerPage = users.slice(startIndex, startIndex + 3);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage + 1}
        totalItems={users.length}
      />

      <ul className="users">
        {usersPerPage.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => ({
  users: usersListSelector(state),
  currentPage: currentPageSelector(state),
});

const mapDispatch = {
  goPrev: usersActions.goPrev,
  goNext: usersActions.goNext,
};

export default connect(mapState, mapDispatch)(UsersList);
