import Permissions from '../components/Permissions';
import PleaseSignIn from '../components/PleaseSignIn';

const permissionsPage = (props) => (
  <div>
    <PleaseSignIn>
      <Permissions />
    </PleaseSignIn>
  </div>
);

export default permissionsPage;
