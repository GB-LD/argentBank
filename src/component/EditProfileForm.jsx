import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import updateUserProfileThunk from '../redux/features/profile/updateUserProfileThunks'

const EditProfileForm = ({ onClose }) => {
  const dispatch = useDispatch()
  const { userToken } = useSelector((state) => state.auth)
  const { userProfile } = useSelector((state) => state.profile)

  const [firstName, setFirstName] = useState(userProfile?.firstName || '')
  const [lastName, setLastName] = useState(userProfile?.lastName || '')
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  function handleFormSubmit(e) {
    e.preventDefault()
    if (!firstName || !lastName) {
        setError('Both fields are required.')
        return
    }

    try {
      dispatch(updateUserProfileThunk({token: userToken, firstName, lastName}))
      setSuccessMessage('Your profile is updated.')
      onClose()
    } catch (error) {
      setError("Failed to update profile. Please try again.")
    }
  }

  return (
    <>
      <h2>Edit profile</h2>
      { successMessage && <p>{successMessage}</p> }
      { error && <p>{error}</p> }
      <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="firstName">First Name :</label>
            <input
              type="text"
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name :</label>
            <input
              type="text"
              id='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button type='submit'>Save</button>
          <button onClick={onClose}>Cancel</button>
      </form>
    </>
  )
}

export default EditProfileForm