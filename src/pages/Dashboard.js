import products from '../data'
import Card from 'react-bootstrap/Card';

const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>Hello, {user?.name}</h4>
      <h5>Recently visited products</h5>
      <div className='rv-products'>
        {products.map((product) => {
          return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          )
        })}
      </div>
    </section>
  )
}
export default Dashboard
