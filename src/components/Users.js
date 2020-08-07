import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchUsers } from '../services/users';
import useSnackbar from '../hooks/useSnackbar';

function Users() {
  const { handleSnackbar } = useSnackbar();
  const { data, status, error } = useQuery('users', fetchUsers, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (error) {
      handleSnackbar(error.message);
    }
  }, [error, handleSnackbar]);

  return (
    <div>
      <p>Users:</p>
      {status === 'success' && (
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
