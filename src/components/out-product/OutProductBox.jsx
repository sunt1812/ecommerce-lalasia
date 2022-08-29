import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { animate } from "framer-motion";

const OutProductBox = ({data}) => {
  return (
    <div className="out-product__box">
        {data.map((item,index) => (
            <div className="out-product__item" key={index}>
                <div className="out-product__item-number">
                  <Counter from={0} to={item.number}/>
                  <span className="out-product__item-plus">{item.plus}</span>
                </div>
                <div className="out-product__item-name">{item.name}</div>
            </div>
        ))}
    </div>
  )
}

OutProductBox.propTypes = {
    data:PropTypes.array,
    number:PropTypes.number,
    name:PropTypes.string,
}


const Counter = ({ from, to}) =>{
    const ref = useRef();
  
    useEffect(() => {
      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          ref.current.textContent = value.toFixed(0);
        }
      });
      return () => controls.stop();
    }, [from, to]);
  
    return <div className="out-product__item-counter" ref={ref}></div>;
  }
  Counter.propTypes = {
    from:PropTypes.number,
    to:PropTypes.number,
}
export default OutProductBox