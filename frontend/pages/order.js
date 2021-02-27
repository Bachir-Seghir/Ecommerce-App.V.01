import Order from '../components/Order';
import PleaseSignIn from '../components/PleaseSignIn';

const orderPage = (props) => (
  <div>
    <PleaseSignIn>
      <Order id={props.query.id} />
    </PleaseSignIn>
  </div>
);

export default orderPage;
