import React from 'react'

function Aleart(props) {
    const capitalizedType = (word)=>{
        const type=word.toLowerCase();
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  return (
    <div style={{height: "50px",marginTop: "78px"}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalizedType(props.alert.type)}!</strong> {props.alert.msg}
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
    </div>
  )
}

export default Aleart
