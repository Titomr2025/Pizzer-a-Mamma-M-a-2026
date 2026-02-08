import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { email, logout } = useContext(UserContext);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 text-center">
            <h2>Perfil</h2>
            <p className="mb-4"><strong>Email:</strong> {email || 'No autenticado'}</p>
            <button className="btn btn-primary btn-lg" onClick={logout}>Cerrar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
