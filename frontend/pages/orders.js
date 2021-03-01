import Orders from '../components/Orders';
import PleaseSignIn from '../components/PleaseSignIn';

const ordersPage = (props) => (
  <div>
    <PleaseSignIn>
      <Orders />
    </PleaseSignIn>
  </div>
);

export default ordersPage;
