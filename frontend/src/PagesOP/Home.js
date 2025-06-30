import Slider from '../ComponentOP/Slider'
import slide1 from '../assets/images/instruments/getty-images-iMeLzTX9xA0-unsplash.jpg';
import slide2 from '../assets/images/instruments/agricultural-equipment-suppliers-in-usa.webp';
import slide3 from '../assets/images/instruments/tractor1.jpg';
import pod1 from '../assets/images/collections/personalized-pod-1.jpg';
import pod2 from '../assets/images/collections/personalized-pod-2.jpg';
import pod3 from '../assets/images/collections/personalized-pod-3.jpg';
import pod4 from '../assets/images/collections/personalized-pod-4.jpg';
import SmallCards from '../ComponentOP/SmallCards';
import Product from '../ComponentOP/Product';
import useFetch from '../ApiOP/useFetch';
import React, { useEffect, useRef, useState } from 'react'



export const Home = () => {
    const [startInit, setStartInit] = useState(true);
    const [startRender, setStartRender] = useState(false);
    const discountdata = useRef([]);
    const { responseData, isLoadingApi, apiKey, fetchError, serverRequest } = useFetch();

    function fnViewMenuRequest() {
        let _getBody = {
            empty: 0,
        }
        let serverRequestParam = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(_getBody),
            apiUrl: "/api/v1/find-discount",
            apikey: "VIEWDISCOUNT"
        };
        serverRequest(serverRequestParam);
        setStartInit(false);
    }
    function fnCreateDiscount() {
        console.log(responseData);
        discountdata.current = responseData.value.map(item => ({
            id: item._id,
            title: item.name,
            originalPrice: Math.floor(item.price),
            salePrice: Math.floor(item.price - (item.price * (item.discount / 100))),
            image: require(`../assets/images/instruments/${item.image[0].imgName}`),
            hoverImage: require(`../assets/images/instruments/${item.image[1].imgName}`),
            discount: item.discount,
        }))
        console.log(discountdata.current)
        setStartRender(true);
        setStartInit(false);
    }

    useEffect(() => {
        if (startInit === true) {
            fnViewMenuRequest();
        } else {
            console.log(isLoadingApi);
            if (isLoadingApi) {
                switch (apiKey) {
                    case "VIEWDISCOUNT":
                        fnCreateDiscount();
                        break;
                }
            }
        }

    }, [startInit, isLoadingApi]);
    const slides = [
        {
            id: 1,
            image: slide1,
            title: 'Efficient Agricultural Equipment',
            description: 'Durable and precise machinery for improved soil preparation and higher crop yields.',
            reviews: '300K Five-Star Reviews',
        },
        {
            id: 2,
            image: slide3,
            title: 'Advanced Farming Machinery',
            description: 'High-performance equipment for efficient soil cultivation and increased productivity.',
            reviews: '300K Five-Star Reviews',
        },
        {
            id: 3,
            image: slide2,
            title: 'Heading: Precision Disc Harrow',
            description: 'High-performance disc harrow for effective soil preparation and improved crop yield.',
            reviews: '300K Five-Star Reviews',
        },
    ];

    const products = [
        {
            id: 1,
            title: "Christmas Ornament",
            originalPrice: "$248.00",
            salePrice: "$199.00",
            image: "../assets/images/products/personalized-pod-1.jpg",
            hoverImage: "images/products/personalized-pod-2.jpg",
            discount: "-20%",
        },
        {
            id: 1,
            title: "Christmas Ornament",
            originalPrice: "$248.00",
            salePrice: "$199.00",
            image: "../assets/images/products/personalized-pod-1.jpg",
            hoverImage: "images/products/personalized-pod-2.jpg",
            discount: "-20%",
        },
        {
            id: 1,
            title: "Christmas Ornament",
            originalPrice: "$248.00",
            salePrice: "$199.00",
            image: "../assets/images/products/personalized-pod-1.jpg",
            hoverImage: "images/products/personalized-pod-2.jpg",
            discount: "-20%",
        },
        {
            id: 1,
            title: "Christmas Ornament",
            originalPrice: "$248.00",
            salePrice: "$199.00",
            image: "../assets/images/products/personalized-pod-1.jpg",
            hoverImage: "images/products/personalized-pod-2.jpg",
            discount: "-20%",
        },
        {
            id: 1,
            title: "Christmas Ornament",
            originalPrice: "$248.00",
            salePrice: "$199.00",
            image: "../assets/images/products/personalized-pod-1.jpg",
            hoverImage: "images/products/personalized-pod-2.jpg",
            discount: "-20%",
        },
        {
            id: 1,
            title: "Christmas Ornament",
            originalPrice: "$248.00",
            salePrice: "$199.00",
            image: "../assets/images/products/personalized-pod-1.jpg",
            hoverImage: "images/products/personalized-pod-2.jpg",
            discount: "-20%",
        },
        {
            id: 1,
            title: "Christmas Ornament",
            originalPrice: "$248.00",
            salePrice: "$199.00",
            image: "../assets/images/products/personalized-pod-1.jpg",
            hoverImage: "images/products/personalized-pod-2.jpg",
            discount: "-20%",
        },
        {
            id: 1,
            title: "Christmas Ornament",
            originalPrice: "$248.00",
            salePrice: "$199.00",
            image: "../assets/images/products/personalized-pod-1.jpg",
            hoverImage: "images/products/personalized-pod-2.jpg",
            discount: "-20%",
        },
        // Add more products as needed
    ];

    return (
        <>
            {startRender &&
                <>
                    <Slider
                        slides={slides}
                    />
                    <Product
                        products={discountdata.current}
                    />
                </>
            }
        </>
    )
}
