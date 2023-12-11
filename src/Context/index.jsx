import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)


    // checkout side menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenu] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false)

    // product Detail - show product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
      })
    // ShoppingCart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // ShoppingCart - Order
    const [order, setOrder] = useState([]);

    //Get products 
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    // get products by title 
    const [searchByTitle, setSearchByTitle] = useState(null);
    
    // filter by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(()=>{
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(resp => resp.json())
        .then(data => setItems(data))
    }, [])

    const filteredItemsByTittles = (items, searchByTitle)=>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    const filteredItemsByCategory = (items, searchByCategory)=>{
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory ) =>{
        if(searchType === 'BY_TITLE'){
            return filteredItemsByCategory(items, searchByTitle)
        }
        if(searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory)
        }

        if(searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if(!searchType){
            return items
        }
    }

    useEffect(()=>{
        if(searchByTitle && searchByCategory) {
            setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        }
       if(searchByTitle && !searchByCategory) {
        setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
       }
       if(!searchByTitle && searchByCategory) {
        setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
       }
       if(!searchByTitle && !searchByCategory) {
        setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
       }
      }, [items, searchByTitle, searchByCategory]);

    return (
        <ShoppingCartContext.Provider value={{ 
            count, 
            setCount, 
            openProductDetail, 
            closeProductDetail, 
            isProductDetailOpen, 
            productToShow, 
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}