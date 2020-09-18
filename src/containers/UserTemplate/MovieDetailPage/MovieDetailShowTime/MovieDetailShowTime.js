import React, { Component } from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import style from './MovieDetailShowTime.module.scss';

export default class MovieDetailShowTime extends Component {
    render() {
        return (
            <div className="container">
                <div className={style.movieDetailShowTimeStyle}>
                    <div className="movieDetailShowTimeContent">
                        <Tabs forceRenderTabPanel defaultTab="cgv-list-rap" vertical className="vertical-tabs" onChange={(tabId) => { console.log(tabId) }}>
                            <div className="row">
                                <div className="col-md-4 columnFirst">
                                    <TabList className="cinemasGroup">
                                        <Tab className="cinemasGroupItem" tabId="cgv" tabFor="cgv-list-rap">
                                            <div className="cinemasGroupItemFlex">
                                                <img className="cinemaImg" src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png" alt="" />
                                                <span className="cinemaName">CGV Cinema</span>
                                            </div>
                                        </Tab>
                                        <Tab className="cinemasGroupItem" tabId="bhd" tabFor="bhd-list-rap">
                                            <div className="cinemasGroupItemFlex">
                                                <img className="cinemaImg" src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png" alt="" />
                                                <span className="cinemaName">BHD Cinema</span>
                                            </div>
                                        </Tab>
                                        <Tab className="cinemasGroupItem" tabId="galaxy" tabFor="galaxy-list-rap">
                                            <div className="cinemasGroupItemFlex">
                                                <img className="cinemaImg" src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png" alt="" />
                                                <span className="cinemaName">Galay Cinema</span>
                                            </div>
                                        </Tab>
                                    </TabList>
                                </div>
                                <div className="col-md-8">
                                    <TabPanel tabId="cgv-list-rap">
                                        <Tabs>
                                            <TabList className="listCinemasGroup">
                                                <Tab className="cinemasGroupItem" tabId="cgv" tabFor="thu2">
                                                    Thứ 2
                                                </Tab>
                                                <Tab className="cinemasGroupItem" tabId="bhd" tabFor="thu3">
                                                    Thứ 3
                                                </Tab>
                                                <Tab className="cinemasGroupItem" tabId="galaxy" tabFor="thu4">
                                                    Thứ 4
                                                </Tab>
                                            </TabList>
                                            <TabPanel tabId="thu2">
                                                <ul>
                                                    <li>A</li>
                                                    <li>B</li>
                                                    <li>C</li>
                                                </ul>
                                            </TabPanel>
                                            <TabPanel tabId="thu3">
                                                <ul>
                                                    <li>D</li>
                                                    <li>E</li>
                                                    <li>F</li>
                                                </ul>
                                            </TabPanel>
                                            <TabPanel tabId="thu4">
                                                <ul>
                                                    <li>G</li>
                                                    <li>H</li>
                                                    <li>I</li>
                                                </ul>
                                            </TabPanel>
                                        </Tabs>
                                    </TabPanel>
                                    <TabPanel tabId="bhd-list-rap">B</TabPanel>
                                    <TabPanel tabId="galaxy-list-rap">C</TabPanel>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
