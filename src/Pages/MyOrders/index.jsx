import { useContext} from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout"
import { Link } from "react-router-dom";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
    <Layout>
      <h2 className="font-medium text-xl mb-4">My Orders</h2>
      <div className='flex flex-col w-80'>
      {
      context.order.map((order, index)=>(
        <Link key={index} to={`/my-orders/${index}`}>
        <OrdersCard
        totalPrice={order.totalPrice} 
        totalProducts={order.totalProducts} 
        /></Link>
      ))
      }
      </div>
    </Layout>
    </>
  )
}

export default MyOrders
