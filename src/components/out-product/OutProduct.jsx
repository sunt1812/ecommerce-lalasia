import React from 'react'
import { OutProductBox, unsplash_1, unsplash_2 } from '.'
import outProductData from '../../assets/pake-data/outProductData'
import Button from '../Button'

const OutProduct = () => {
  return (
    <section className="out-product section">
        <div className="out-product__container container grid">
            <div className="out-product__left">
                <h5 className="out-product__left-subtitle subheading">Our Product</h5>
                <h2 className="out-product__left-title heading">Crafted by talented and high quality material</h2>
                <p className="out-product__left-desc">Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient. morbi fermentum, vivamus et accumsan dui tincidunt pulvinar</p>
                <Button className="btn-primary btn-block">Learn More</Button>
                <div className="out-product__left-box">
                    <OutProductBox data={outProductData} />
                </div>
                <img src={unsplash_2} alt="" className="out-product__left-img" />
            </div>
            <div className="out-product__right">
                <OutProductBox data={outProductData} />
                <img src={unsplash_1} alt="" className="out-product__right-img" />
            </div>
        </div>
    </section>
  )
}
export default OutProduct