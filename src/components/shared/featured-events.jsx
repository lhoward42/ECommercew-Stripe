import React, { useContext, useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import { isInCart, hasValueAttributes, hasValueAttributes2 } from '../../helpers';
import { CartContext } from '../../context/cart-context';
import { Link } from 'react-router-dom';
import './featured-products.styles.scss';
import { useMediaQuery } from "react-responsive";
import { 
    OutlinedInput, 
    InputLabel, 
    MenuItem, 
    FormControl, 
    Box, 
    Select, 
    Card, 
    CardActions, 
    CardContent, 
    Button, 
    Typography,
    CardMedia,
    
  }  from '@mui/material/'
  import { DeviceSize } from '../../utils/DeviceSize';
  // import { useMediaQuery } from "react-responsive";
import { format } from 'date-fns';
import { EventsContext } from '../../context/events-context';

const FeaturedEvents = (props) => {
    const { title, description, date, id, endTime, startTime, location, hasProduct, imageUrl} = props
    const event = { title, description, date, id, endTime, startTime, location, hasProduct, imageUrl};
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const token = localStorage.getItem("token");
    
    // const toStandardTime = (militaryTime) => {
    //     const [hours, minutes, seconds ] = militaryTime.split(':');
    //     return `${(hours > 12) ? hours - 12 ? hours === 0 : hours + 1 : hours }:${minutes} ${(hours >= 12) ? 'AM' : 'PM'}`

    // }


    // console.log(startTime.split(':'));

    

    return(
        <Card sx={{ backgroundColor: '#FFD8C4', color: '#3B1E57', margin: '.5rem', minWidth: isMobile ? "100%" : " 50%", minHeight: isMobile ? '45rem' : '40rem' }}>
            { token ? 
                <div className="container"> 
                {/* import update component in here and the navigation method for react-router 6 */}
                    <Link className='btn-increase' to={`/admin-home/update-event/${id}`}>Edit</Link>
                    </div> 
                    : 
                    <></>
                    }
            <CardContent className='featured-image' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem',}}>
            <Link to={`/events/${title}/${id}`}>
            <CardMedia 
                sx={{objectFit: 'cover', maxWidth: '40rem', maxHeight: '35rem'}}
                component='img'
                image={imageUrl} 
                alt='event'
                /> 
                </Link>
                {title}
            </CardContent>
        </Card>
    )
}

export default FeaturedEvents; 