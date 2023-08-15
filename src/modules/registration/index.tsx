import { RegistrationForm } from "./RegistrationForm";
import { RegistrationDivider } from "./RegistrationDivider";
import { PrimaryButton } from "../../common/components";
import { LogoHeading } from "../../common/components/LogoHeading";

export const Registration = () => {
  return (
    <>
      <LogoHeading marginBottom={3.75}>
        We are the largest society of car enthusiasts.
        Here you are sure to find like-minded people! To create an account,
        choose to register via social network or e-mail.
      </LogoHeading>
      <RegistrationForm />
      <RegistrationDivider />
      <PrimaryButton innerText="Sign Up" variant="second" disableRipple fullWidth />
    </>
  )
}
