import React from 'react'

const Profile = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 text-center">
            <h2>Perfil</h2>
            <p className="mb-4"><strong>Email:</strong> usuario@mammamia.com</p>
            <button className="btn btn-primary btn-lg">Cerrar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
