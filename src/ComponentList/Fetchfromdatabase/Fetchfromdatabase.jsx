
import fakeData from '../../fakeData'
import { getDatabaseCart} from "../../utilities/databaseManager";


export const Fetchfromdatabase = () => {
    const savedCart=getDatabaseCart()
    const productkey=Object.keys(savedCart)
    const product=productkey.map((key)=> {
     const pd= fakeData.find((element)=>  element.key===key)
     pd.quantity=savedCart[key]
     return pd
    } )

  return product
}
