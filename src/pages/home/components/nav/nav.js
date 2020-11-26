import React from 'react'
import './nav.styl'
import purchase from '../../../../assets/img/img/home/1.jpg'

export default function Nav() {
    return (
        <div className='NavBox'>
            <ul className='Navlist'>
                <li>
                    <img  src={purchase}/>
                    <p>限时抢购</p>
                </li>
                <li>
                     <img  src={purchase}/>
                     <p>积分商城</p>
                </li>
                <li>
                     <img  src={purchase}/>
                     <p>联系我们</p>
                </li>

                <li>
                     <img  src={purchase}/>
                     <p>商品分类</p>
                </li>
            </ul>
        </div>
    )
}
