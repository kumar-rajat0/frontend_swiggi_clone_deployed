import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header(){
    const cartItems = useSelector((store)=>store.cart.items)
    return (
        <>
            <nav className=" bg-gray-800 text-white flex justify-between border border-amber-500 h-15 p-1">
                <img className="ml-3 h-12 rounded-2xl " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAolBMVEX/UgD/////SwD/TgD/8e3/QQz/RgD/eVv/3NH/QgD/jXv/PQD/5d//yLv/TSD/ycX/XED/sqD/LAD/+ff/08r/NgD/SBr/7Of/t6j/jHb/wLL/p5H/Uh//2NH/zsL/cFL/h23/UCv/fmL/rZn/0c7/jXH/d2D/WzX/nor/Xkn/g3H/rJ7/SxD/moH/o5P/ZEX/aD//l4v/npr/pqb/fGn/cEhVLKWOAAAEVElEQVR4nO2b23aqMBBAS0KjKWCViyKiKK21p9La6///2oFSq2IgATPQh+zXPnSvyTCZTOLVlUKhUCgUCoVCoVAo/g4YEYSSwWq1GiBECOraJzUyvCSKZ3eBdX/vWqPZ+mFjeAR3aUQHvRfXdLRjdDNYDwnpSskbPC70U6Mcx/Qju4tlxMa/gCW0p/+UtB4tcr3VK5Qy3MhrNbcwnfKUMoJhi8EioSWglDKJaVvBorEp5pTiJ+0kPFlWJXgRa9WCFTZmNZRSzBA+sehzPSdNm2+gY+U91nVKS9YY1orG9Z2yvIL8Bkk0aSKl+R6cE6b9Rk6aNqVgUvSloZNm7qDSisQiewubBVBpx2Te2EnTYphQoTXvH+u+X/q3+QYiVDh0OU7Om22XW91AFHYy5Qaqh9BN6V/7CCBUdHGZlBbJzyr8ynPiSd3KXz+6vVRqIj/VE34x50hpS9nrhyN+Z8eTsmTvgESgjeJJObKlPIGjAldK9vdnC/QsPCntTW6vgLHAYYErtZUrhSK+E1/KlytFnmRISd7+6JsEqYUh1enKeL9cKgglV3Tj40IpPegZsneZS6Qcfe5/DQFmoaI5hV8D64cgGG0/3t+ePkPb9iB6KYEOL5dKG/kDNIPATWXRg6BUm+BQZPzjX49PSBKURQxhoGDZQke+ufvNYrHI08qfPa+fPqMd9qR/ehket0MvxdEn/eDlFSC3aIMR0Al6kEi3EtqRq7ES2VJ4Iz58LYvVTnqoSPAHpVDtWWeRvuwNWbRSVSG5xfuWIrz5Bg+IYZDIIasKU35JSEP11WwIu2cEMuNPLvr+gHZrtLxEai7/28vAYdOBdcYUqK0x+NOgUgDmQDl41zzVR5KPVwdI+ZiVgw4wW9xLCQyp2ATSO4QDjVu9B8CLSBQ3C5VrwzmlBVTwmv0UZwl6Y4v4g2tWoMaQTmmtumsgtYS77cuh9cuCCZpRGdjY1k32zxYOzsbOd/sMyk4Wt2DF/BhE6TUD+5EdQrCbWhHwkBkr6fcMFSCCksGBtNdlSwEcrMogJFrPfOv2l+ALs6VG0OXgFxS7xfy5M65YUjpMw8mAdYYfsaXu2gsUo4VhSwF15kzG5y8U2FLTFh/lod7ZYI8pZbVSN/cYZ2dAlpT+0GrdxGHxDMGSmrWW5TlnD4QYUhPQt1wMcFIYwvhesXgC95ssSO9Uygy9woZsdfDS2hgVrAplQgd/tMgAj6tHsy8tZ3kO7VU5uS12LCdWFQMrp6vW7rxYHXjsZPEySOmDuD7EgFMMXHZgdnpd/fAiBW3YC7jt0KnsbhngbqEWrJGxHncaqGzicb6A3S5eBp0WW2O301895RTv3PQuv7w9eHC6gN2VzWPoyTOmPsi9en2OB2lgQ/y64KMHe4BP9GuCd/sTlw8+tBOH/LxaMFddmxyTnwOd1z9QDQ6gXdYbd9MBl0N2pr4FvIBpBtpEUC+SLuAPKikUCoVCoVAoFAo5/Af9DUnyiI6EEgAAAABJRU5ErkJggg==" />
                <ul className="flex items-center ">
                      <div className="flex ml-3 ">
                        <span className="pt-1.5 "><IoSearch /></span>
                        <Link><li className="ml-1 mr-3 pt-1 ">HOME</li></Link> 
                    </div>
                    <div className="flex ml-3">
                        <span className="pt-1.5 "><BiSolidOffer/></span>
                       <Link to="/offers"> <li className="ml-1 mr-3 pt-1 ">OFFER</li></Link>
                    </div>
                      <div className="flex ml-3">
                        <span className="pt-1.5 "><FaHandsHelping /></span>
                       <Link to="/help"> <li className="ml-1 mr-3 pt-1">HELP</li></Link>
                    </div>
                      <div className="flex ml-3">
                        <span className="pt-1.5 "><FaSignInAlt/></span>
                        <Link to="signin"><li className="ml-1 mr-3 pt-1">SIGN-IN</li></Link>
                    </div>
                      <div className="flex ml-3">
                        <span className="pt-1.5 "><FaShoppingCart/></span>
                        <Link to="/cart"><li className="ml-1 mr-3 pt-1">CART-{cartItems.length}</li></Link>
                    </div>
                </ul>
            
            </nav>
        </>
    )
}
export default Header