import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout"
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last'){
    index = context.order?.length - 1 
  }

  return (
    <>
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-5">
        <Link to='/my-orders' className="absolute left-0">
          <ChevronLeftIcon className="h-5 w-5 text-black cursor-pointer"/>
        </Link>
        <h1>My Order</h1>
      </div>

      <div className='flex flex-col w-80'>
            {
                context.order.length > 0 ? context.order?.[index]?.products?.map(
                    product => 
                      <OrderCard 
                      key={ product.id }
                      title={ product.title }
                      imageUrl={ product.images }
                      price={ product.price }
                      id={ product.id }
                      />  
                    ) : ''
            }
            </div>
    </Layout>
      
    </>
  )
}

export default MyOrder
