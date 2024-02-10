import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/Home.scss'
import house from '../images/house.png';
import banner from '../images/ds.jpg'
import '../assets/Home.scss'

function Home() {
    return (
        <div className='homepage'>
            <div>
                <div className="">
                    <div className='banner-section'>
                        <img src={banner} />
                    </div>
                    <div className='u-section-2'>
                        <div class="u-layout">
                            <div class="u-layout-row">
                                <div class="u-align-center u-container-style u-layout-cell u-left-cell u-palette-4-base u-size-20 u-layout-cell-1">
                                    <div class="u-container-layout u-valign-middle u-container-layout-1">
                                        <h3 class="u-custom-font u-font-roboto-slab u-text u-text-body-alt-color u-text-1">Buying a House</h3>
                                        <p class="u-text u-text-body-alt-color u-text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    </div>
                                </div>
                                <div class="u-container-style u-layout-cell u-palette-1-base u-size-20 u-layout-cell-2">
                                    <div class="u-container-layout u-valign-middle u-container-layout-2">
                                        <h3 class="u-align-center u-custom-font u-font-roboto-slab u-text u-text-body-alt-color u-text-3">Rent or buy</h3>
                                        <p class="u-align-center u-text u-text-body-alt-color u-text-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    </div>
                                </div>
                                <div class="u-align-center u-container-style u-layout-cell u-palette-2-light-1 u-right-cell u-size-20 u-layout-cell-3">
                                    <div class="u-container-layout u-valign-middle u-container-layout-3">
                                        <h3 class="u-custom-font u-font-roboto-slab u-text u-text-body-alt-color u-text-5">Related guides</h3>
                                        <p class="u-text u-text-body-alt-color u-text-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='finding-property'>
                        <div className='container'>
                        <h1 class="section-title">Find Your Dream House <br/>Search By Area</h1>
                        </div>
                        
                    </div>
                    <Link to='/viewproperty'>
                        {<img src={house} alt="" width="40%" height="40%" />}
                    </Link>
                    <h1 className='col-md-6 offset-md-3'>{new Date().toLocaleTimeString()}</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
