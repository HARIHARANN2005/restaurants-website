import React, { useEffect } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext'
const MyOrders = () => {

    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{Headers:{token}});
        setData(response.data.data);
        console.log(response.data.data)
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }

    },[token])
  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return(
                    <div key={index} className='my-orders-order'>
                    <img src={assets.parcel_icon} alt="" />
                    <p>{order.items.map((item,index)=>{
                        if(index === order.items.length-1){
                            return item.name+ "X" + item.quantity
                        }
                        else{
                            return item.name + "x" +item.quatity+","
                        }
                    })}</p>
                    <p>${order.amount}.00</p>
                    <p>Items:{order.items.length}</p>
                    <p><span>&#x25cf;</span> {order.status}</p>
                    <button onClick={fetchOrders}>Track order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrders