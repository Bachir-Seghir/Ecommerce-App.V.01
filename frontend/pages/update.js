import UpdateItem from '../components/UpdateItem';

const sell = ({ query }) => (
  <div>
    <UpdateItem id={query.id} />
  </div>
);

export default sell;
