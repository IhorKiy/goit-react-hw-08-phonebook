import { Helmet } from 'react-helmet';
import SignUp  from 'components/SingUp/SignUp';


export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <SignUp />
    </div>
  );
}