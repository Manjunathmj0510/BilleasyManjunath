import React from 'react'
import axios from 'axios'
import './collage.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const CollageImage = () =>{
    const [imagesData,setImagesData] = React.useState([])
    React.useEffect(()=>{
        axios.get('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0').then(res=>{
            if(res?.status == 200){
                setImagesData(res?.data)
            }else {
                setImagesData([])
            }
        }).catch((error) =>{
            console.log(error)
        })
    },[])
    
    return (
        <>
        <div className='container'>
            <div class="row">
            <div class="column col-lg-3 col-md-12 mb-4 mb-lg-0">
            <Zoom>
                <img
                src={imagesData[2]?.urls.full}
                class="w-100 shadow-1-strong mb-4"
                alt={imagesData[2]?.alt_description}
                />
            </Zoom>
            <Zoom>
                 <img
                src={imagesData[15]?.urls.full}
                class="w-100 shadow-1-strong mb-4"
                alt={imagesData[15]?.alt_description}
                />
            </Zoom>
            <Zoom>
                <img
                src={imagesData[4]?.urls.full}
                class="w-100 shadow-1-strong mb-4"
                alt={imagesData[4]?.alt_description}
                />
            </Zoom>
            </div>

            <div class=" column col-lg-3 mb-4 mb-lg-0">
            <Zoom>
                <img
                src={imagesData[13]?.urls.full}
                class="w-100 shadow-1-strong mb-4"
                alt={imagesData[13]?.alt_description}
                />
            </Zoom>
            <Zoom>
                 <img
                src={imagesData[12]?.urls.full}
                class="w-100 shadow-1-strong mb-4"
                alt={imagesData[12]?.alt_description}
                />
            </Zoom>
            <Zoom>
                <img
                 src={imagesData[1]?.urls.full}
                class="w-100 shadow-1-strong mb-4"
                alt={imagesData[1]?.alt_description}
                />
            </Zoom>
            </div>
            <div class="column col-lg-3 mb-4 mb-lg-0">
            <Zoom>
            <img
                 src={imagesData[5]?.urls.full}
                class="w-100 shadow-1-strong mb-4"
                alt={imagesData[5]?.alt_description}
                />
            </Zoom>
            <Zoom>
                  <img
                 src={imagesData[1]?.urls.full}
                class="w-100 shadow-1-strong mb-4"
                alt={imagesData[1]?.alt_description}
                />
            </Zoom>
            </div>
            <div class="column col-lg-3 mb-4 mb-lg-0">
            <Zoom>
                <img
                 src={imagesData[14]?.urls.full}
                class="w-100 shadow-1-strong mb-4"
                alt={imagesData[14]?.alt_description}
                />
            </Zoom>
            </div>
            </div>
            </div>
        </>
    )
}
export default CollageImage;