import SiteRoot from '../pages/site/SiteRoot'
import Home from '../pages/site/Home/Home'
import Basket from "../pages/site/Basket/Basket"
import Detail from '../pages/site/Detail/Detail'
import AdminRoot from '../pages/admin/AdminRoot'
import Products from '../pages/admin/Products/Products'
import Add from "../pages/admin/Add/Add"
const ROUTES=[{
    path:"/",
    element:<SiteRoot/>,
    childen:[{
        path:"",
        element:<Home/>
    },{
        path:"/basket",
        element:<Basket/>
    },{
        path:"/detail/:id",
        element:<Detail/>
    }
]
}, {
    path:"/admin",
    element:<AdminRoot/>,
    childen:[{
        path:"",
        element:<Products/>
    },{
        path:"add",
        element:<Add/>
    }
]
},
{
    path:"*",
    element:<Error/>
}

]
export default ROUTES