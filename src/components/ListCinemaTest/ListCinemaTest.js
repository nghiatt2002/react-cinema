import React, { Component } from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

export default class ListCinemaTest extends Component {
    render() {
        return (
            <Tabs forceRenderTabPanel defaultTab="cgv-list-rap" vertical className="vertical-tabs" onChange={(tabId) => { console.log(tabId) }}>
                {/* column 1 */}
                <TabList className="listCinemasGroup">
                    <Tab tabId="cgv" tabFor="cgv-list-rap">CGV</Tab>
                    <Tab tabId="bhd" tabFor="bhd-list-rap">BHD</Tab>
                    <Tab tabId="galaxy" tabFor="galaxy-list-rap">GALAXY</Tab>
                </TabList>

                {/* CGV */}
                <TabPanel tabId="cgv-list-rap">
                    <Tabs vertical>
                        {/* column 2 */}
                        <TabList defaultTab="cgv1">
                            <Tab tabId="cgv1" tabFor="cgv1-lich-chieu">CGV 1</Tab>
                            <Tab tabId="cgv2" tabFor="cgv2-lich-chieu">CGV 2</Tab>
                            <Tab tabId="cgv3" tabFor="cgv3-lich-chieu">CGV 3</Tab>
                        </TabList>

                        {/* column 3 - start */}
                        <TabPanel tabId="cgv1-lich-chieu">
                            <ul>
                                <li>CGV1 - Phim 1</li>
                            </ul>
                        </TabPanel>
                        <TabPanel tabId="cgv2-lich-chieu">
                            <ul>
                                <li>CGV2 - Phim 1</li>
                                <li>CGV2 - Phim 2</li>
                            </ul>
                        </TabPanel>
                        <TabPanel tabId="cgv3-lich-chieu">
                            <ul>
                                <li>CGV3 - Phim 1</li>
                                <li>CGV3 - Phim 2</li>
                                <li>CGV3 - Phim 3</li>
                            </ul>
                        </TabPanel>
                        {/* column 3 - end */}
                    </Tabs>
                </TabPanel>

                {/* BHD */}
                <TabPanel tabId="bhd-list-rap">
                    <Tabs vertical>
                        {/* column 2 */}
                        <TabList defaultTab="bhd1">
                            <Tab tabId="bhd1" tabFor="bhd1-lich-chieu">BHD 1</Tab>
                            <Tab tabId="bhd2" tabFor="bhd2-lich-chieu">BHD 2</Tab>
                            <Tab tabId="bhd3" tabFor="bhd3-lich-chieu">BHD 3</Tab>
                        </TabList>

                        {/* column 3 - start */}
                        <TabPanel tabId="bhd1-lich-chieu">
                            <ul>
                                <li>BHD1 - Phim 1</li>
                            </ul>
                        </TabPanel>
                        <TabPanel tabId="bhd2-lich-chieu">
                            <ul>
                                <li>BHD2 - Phim 1</li>
                                <li>BHD2 - Phim 2</li>
                            </ul>
                        </TabPanel>
                        <TabPanel tabId="bhd3-lich-chieu">
                            <ul>
                                <li>BHD3 - Phim 1</li>
                                <li>BHD3 - Phim 2</li>
                                <li>BHD3 - Phim 3</li>
                            </ul>
                        </TabPanel>
                        {/* column 3 - end */}
                    </Tabs>
                </TabPanel>


                {/* GALAXY */}
                <TabPanel tabId="galaxy-list-rap">
                    <Tabs vertical>
                        {/* column 2 */}
                        <TabList defaultTab="bhd1">
                            <Tab tabId="galaxy1" tabFor="galaxy1-lich-chieu">GALAXY 1</Tab>
                            <Tab tabId="galaxy2" tabFor="galaxy2-lich-chieu">GALAXY 2</Tab>
                            <Tab tabId="galaxy3" tabFor="galaxy3-lich-chieu">GALAXY 3</Tab>
                        </TabList>

                        {/* column 3 - start */}
                        <TabPanel tabId="galaxy1-lich-chieu">
                            <ul>
                                <li>GALAXY1 - Phim 1</li>
                            </ul>
                        </TabPanel>
                        <TabPanel tabId="galaxy2-lich-chieu">
                            <ul>
                                <li>GALAXY2 - Phim 1</li>
                                <li>GALAXY2 - Phim 2</li>
                            </ul>
                        </TabPanel>
                        <TabPanel tabId="galaxy3-lich-chieu">
                            <ul>
                                <li>GALAXY3 - Phim 1</li>
                                <li>GALAXY3 - Phim 2</li>
                                <li>GALAXY3 - Phim 3</li>
                            </ul>
                        </TabPanel>
                        {/* column 3 - end */}
                    </Tabs>
                </TabPanel>

            </Tabs>
        )
    }
}
