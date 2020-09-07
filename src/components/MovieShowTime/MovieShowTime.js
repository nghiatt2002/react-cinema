import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

import { getMovieShowTimeAxios } from '../../Redux/Actions/MovieShowTimeAction';

export default function MovieShowTime(props) {
    // giống như mapStateToProps lấy dữ liệu từ reducer
    let movieShowTimeInfo = useSelector(state => state.MovieShowTimeReducer.movieShowTimeInfo);

    // thay thế this.props.dispatch
    let dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect thay thế cho didMount');
        // dispatch 1 action
        dispatch(getMovieShowTimeAxios());
    }, []);


    let renderMovieShowTime = () => {
        console.log(movieShowTimeInfo);
        return movieShowTimeInfo.map((item, index) => {
            console.log("===================");
            console.log(item);
            return (
                <Tab tabFor={item.maHeThongRap} key={index} >
                    <img src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png" alt={item.logo} />
                </Tab>
            )
        })
    }

    return (
        <div className="container">
            <Tabs defaultTab="BHDStar" vertical>
                <div className="row">
                    <div className="col-2">
                        <TabList className="">
                            {renderMovieShowTime()}
                        </TabList>
                    </div>
                    <div className="col-10">

                    </div>
                </div>
            </Tabs>
            
        </div>
    )
}

