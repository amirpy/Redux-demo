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
    <div style={{
      border: '1px solid black',
      margin: 5,
      backgroundColor: '	#4682B4',
    }}>
      {loading && <div>Loader</div>}
      {!loading && <div>{error && <div>Error hai bhai</div>}</div>}
      {!loading && !error && (
        <div>
          <h2 style={{
                        textAlign: 'center',
                        border: '1px solid orange',
                        margin: 5,
                        borderRadius: 17,
                        color:'white',
                        filter:' drop-shadow(7px -7px 5px rgba(0,0,0,0.5))',
                        borderTop: '20px solid yellow',
                        borderLeft: '20px solid',
                        borderRight: '20px solid',
                   
                      }}>API LIST</h2>
          <div>
            <div className="row">
              {users.map((element, index) => {
                return (
                  <div className="col-md-4 " >
                    <div
                      style={{
                        textAlign: 'left',
                        border: '1px solid orange',
                        margin: 5,
                        borderRadius: 7,
                        backgroundColor: 'skyblue',
                        boxSizing: 'border-box',
                      }}>
                      <ul>
                        <li style={{ paddingTop: 5, paddingBottom: 5, color: 'snow', fontWeight: 700,  }}>
                          {element.name}
                        </li>
                        <li style={{ paddingTop: 5, paddingBottom: 5, color: 'white' }}>{element.email}</li>
                        <li style={{ paddingTop: 5, paddingBottom: 5, color: 'white' }}>{element.phone}</li>
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