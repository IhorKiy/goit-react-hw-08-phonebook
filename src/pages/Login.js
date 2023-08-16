import { Helmet } from 'react-helmet';
import SignIn from 'components/SignIn/SignIn';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <SignIn />
    </div>
  );
}