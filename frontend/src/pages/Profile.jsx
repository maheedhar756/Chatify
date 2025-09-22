import { useAuthStore } from "../store/useAuthStore"

const Profile = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore()

  const handleImage = async (e) => {

  }
  return (
    <div className="h-screen pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">

      </div>
    </div>
  )
}

export default Profile