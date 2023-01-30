//import Auth from "./pages/Auth"
//import CollapseApp from "./pages/test/Collapse"
import { BASKET, COLLAPSE, CONTACT,  ORDERS,  SHOP_ROUTE } from "./utils/consts"
//import ListDocument from "./pages/ListDocument"
import Crm from "./pages/Crm"
import Sales from "./pages/sales/Sales"
import CollapseApp from "./pages/sales/Collapse"
import Basket from "./pages/sales/Basket"
import ContactUser from "./pages/sales/ContactUser"
import Orders from "./pages/sales/Orders"
//import LoaderTest from "./Loader/LoadTest"





 
export const AuthRoute = [
    
    {
        path: BASKET,
        Component: Basket
    },
    {
        path: CONTACT,
        Component: ContactUser
    },
       /*
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },*/
   
   //---
   /*
    {
        path: LIST_DOCUMENT + '/:id',
        Component: DocumentPage
    },
    {
        path: DOC_FORMS,
        Component: AppDoc
    },
    {
        path: LIST_DOCUMENT,
        Component: ListDocument
    },
    {
        path: KONTRAGENT_LIST,
        Component: KontragentList
    },
    {
        path: KONTRAGENT_LIST + '/:id',
        Component: KontragentPage
    },
    {
        path: PRODUCT_LIST,
        Component: ProductList
    },

    {
        path: PRODUCT_LIST + '/:id',
        Component: ProductPage
    },
    // --
    */
]

export const PublicRoute = [

    {
        path: SHOP_ROUTE,
        Component: Crm
    },

    {
        path: ORDERS,
        Component: Orders
    }, 

    {
        path: COLLAPSE,
        Component: CollapseApp
    },
    {
        path: SHOP_ROUTE  + '/:id',
        Component: Sales
    },

    //
   /*   {
        path: 'loadtest',
        Component: LoaderTest
    },   */ 
    /* {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },*/
   // ---------
   /* {
        path: SALES,
        Component: Sales
    },*/


 /*   {
        path: AUTH,
        Component: AuthModal
    },*/
]

//AuthModal