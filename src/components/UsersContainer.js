import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UsersContainer({ userData, fetchUsers }) {
  //Calling UseEffect
  useEffect(() => {
    fetchUsers();
  }, []);

  let loading = userData.loading;
  let error = userData.error;
  let users = userData.users;

  return (
    <div>
      {loading && <div>Loader</div>}
      {!loading && <div>{error && <div>Error hai bhai</div>}</div>}
      {!loading && !error && (
        <div>
          <h2>API LIST</h2>
          <div>
            <div className="row">
              {users.map((element, index) => {
                return (
                  <div className="col-md-3">
                    <div
                      style={{
                        textAlign: 'left',
                        border: '1px solid orange',
                        margin: 5,
                        borderRadius: 7,
                        backgroundColor: '#bdbdbd',
                      }}>
                      <ul>
                        <li style={{ paddingTop: 5, paddingBottom: 5, color: 'green', fontWeight: 700 }}>
                          {element.name}
                        </li>
                        <li style={{ paddingTop: 5, paddingBottom: 5 }}>{element.email}</li>
                        <li style={{ paddingTop: 5, paddingBottom: 5 }}>{element.phone}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);