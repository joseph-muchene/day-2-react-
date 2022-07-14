import React from 'react'
import Logo from '../meta.jpg'
function Contact() {
    return (
        <>
            <div className="container">

                <div className=" row bg-dark text-white p-4  " >
                    <div className="col-sm">
                        <div className="row" >
                            <div className="col-sm mt-5">
                                <i class="fa-brands fa-facebook-f fa-4x"></i>
                            </div>

                        </div>

                    </div>

                    <div className="col-sm p-4" >
                        <img src={Logo} alt="metaverse" className='img-fluid ' />
                    </div>
                    <h3 className="text-center">Powered By meta</h3>
                </div>
            </div>
        </>
    )
}

export default Contact