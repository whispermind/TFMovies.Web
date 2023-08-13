import { RegistrationForm } from '../modules/registration/RegistrationForm'
import { RegistrationDivider } from '../modules/registration'
import { PrimaryButton } from '../common/components'

export const RegistrationPage = () => {
  return (
    <>
      <RegistrationForm />
      <RegistrationDivider />
      <PrimaryButton  innerText="Sign Up" variant="second" disableRipple sx={{width: "100%"}}/>
    </>
  )
}