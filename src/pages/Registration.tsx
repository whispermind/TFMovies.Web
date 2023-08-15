import { Grid } from '@mui/material';
import { Registration } from "../modules/registration"
import { FormWrapper } from '../common/components/FormWrapper';

export const RegistrationPage = () => {
  return (
    <>
      <Grid container maxWidth="xl" justifyContent="center" margin="0 auto">
        <Grid item xl={8}>
          <FormWrapper>
            <Registration />
          </FormWrapper>
        </Grid>
      </Grid>
    </>
  )
}