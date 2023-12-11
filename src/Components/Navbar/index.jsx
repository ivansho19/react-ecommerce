import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Navbar = () =>{
    const context = useContext(ShoppingCartContext) 
    const activeStyle = "underline underline-offset-4"
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-normal">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/' >
                    Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' 
                    onClick={()=> context.setSearchByCategory(null)}
                    className={({ isActive}) => 
                    isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' onClick={()=> context.setSearchByCategory('clothes')} className={({ isActive}) => 
                      isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronic' onClick={()=> context.setSearchByCategory('electronic')} className={({ isActive}) => 
                      isActive ? activeStyle : undefined
                    }>
                        Electronic
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures' onClick={()=> context.setSearchByCategory('fornitures')} className={({ isActive}) => 
                      isActive ? activeStyle : undefined
                    }>
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' onClick={()=> context.setSearchByCategory('toys')} className={({ isActive}) => 
                      isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others' onClick={()=> context.setSearchByCategory('others')} className={({ isActive}) => 
                      isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    Ivansho19@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders' className={({ isActive}) => 
                      isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({ isActive}) => 
                    isActive ? activeStyle : undefined
                  }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    className={({ isActive}) => 
                    isActive ? activeStyle : undefined
                  }>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center justify-between">
                   <ShoppingCartIcon className="h-6 w-6 text-black"/> 
                   <div>{ context.cartProducts.length }</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar