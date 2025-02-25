import React from 'react'
import ProfileDetails from '../components/ProfileDetails'
import { ProfileReview } from '../components/ProfileReview'
import ProfileFooter from '../components/ProfileFooter'

const GuideProfilePage = () => {
  return (
    <section>
        <ProfileDetails />
        <ProfileReview />
        <ProfileFooter />
    </section>
  )
}

export default GuideProfilePage