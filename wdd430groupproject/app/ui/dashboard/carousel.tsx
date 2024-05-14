import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { items } from '@/public/images.json';

export default function ImageCarousel() { 
    const { responsive } = items;
        return ( 
            
             <div className=""> 
			    <Carousel className="border-solid border-darkBrown border-2 rounded-md "> 
                    {responsive.map((item) => (
                        <div key={item.id} className="">
                            <div className="">
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                        </div>
                    ))}
                
			</Carousel> 
			</div> 

	
		); 
	} 

