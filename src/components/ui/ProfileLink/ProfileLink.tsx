import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootStore } from '../../../store'

const ProfileLink = () => {
  const currentUser = useSelector((state: RootStore) => state.user.user)
  return (
    <Link
      to="/profile"
      className="flex items-center gap-4 text-sm text-base-100"
    >
      <p>{`${currentUser?.firstName} ${currentUser?.lastName}`}</p>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="30" rx="5" fill="white" />
        <path
          d="M15 15C13.4875 15 12.1927 14.4615 11.1156 13.3844C10.0385 12.3073 9.5 11.0125 9.5 9.5C9.5 7.9875 10.0385 6.69271 11.1156 5.61563C12.1927 4.53854 13.4875 4 15 4C16.5125 4 17.8073 4.53854 18.8844 5.61563C19.9615 6.69271 20.5 7.9875 20.5 9.5C20.5 11.0125 19.9615 12.3073 18.8844 13.3844C17.8073 14.4615 16.5125 15 15 15ZM4 26V22.15C4 21.3708 4.20075 20.6549 4.60225 20.0022C5.00375 19.3496 5.53633 18.8509 6.2 18.5063C7.62083 17.7958 9.06458 17.2632 10.5312 16.9085C11.9979 16.5538 13.4875 16.3759 15 16.375C16.5125 16.3741 18.0021 16.5519 19.4687 16.9085C20.9354 17.2651 22.3792 17.7977 23.8 18.5063C24.4646 18.85 24.9976 19.3487 25.3991 20.0022C25.8006 20.6558 26.0009 21.3718 26 22.15V26H4Z"
          fill="#0A25FA"
        />
      </svg>
    </Link>
  )
}

export default ProfileLink
