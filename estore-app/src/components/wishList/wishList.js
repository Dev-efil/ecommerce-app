import { useEffect, useState } from 'react';
import router from '../../api/base.js';
router.defaults.withCredentials = true;

const _wishListURL = 'wishlist';
const _refreshURL = 'auth/refresh';
let initialRender = true;
function WishList() {
    const refreshToken = async () => {
        await router.get(_refreshURL).catch(err => console.error(err));
    }
    const [wishList, setWishList] = useState('');
    const sendReq = async () => {
        const getWishList = await router.get(_wishListURL).catch(err => console.log('error from', err));
        console.log('data', getWishList);
        const data = await getWishList?.data;
        return data;
        // console.log("getWishList",getWishList);
        // if (!getWishList) {
        //     console.log('not available');
        // }
        // setWishList(getWishList.data.name);
    }
    // useEffect(() => {
    //     if (firstRender) {
    //         firstRender = false;w
    //         sendReq().then((data) => setWishList(data?.name));
    //     }
    //     let interval = setInterval(() => {
    //         refreshToken()
    //     return () => clearInterval(interval);
    //     }, 1000 * 1080);
    // }, [refreshToken]);
    useEffect(() => {
        if(initialRender) {
            initialRender = false;
            sendReq().then((data) => setWishList(data?.name));
        }
        
        let interval = setInterval(() => {
            console.log("fire");
            refreshToken()
            sendReq().then((data) => setWishList(data?.name));
        }, 1000 * 28);
        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <div className="container">
                <p>Name : {wishList}</p>
            </div>
        </section>
    )
}

export default WishList;