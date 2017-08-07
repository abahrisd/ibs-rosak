import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Badge from 'material-ui/Badge';
import SertificationControls from './MainTabs/SertificationControls'
import './main.css'
import Divider from 'material-ui/Divider';

class Main extends Component {


    render() {

        const styles = {
            mainContainer: {
                padding: "20px",
                color: '#2B2B2B'
            },
            green: {
                color: "#64DD17"
            },
            yellow: {
                color: "#FBC02D"
            },
            header:{
                margin: "20px 0px 0 0",
                fontSize: "large",
                fontWeight: "bold",
            },
            statusLine: {
                container: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    margin: "40px 0 0 0",
                    padding: "10px",
                    border: "1px solid #2B2B2B",
                    borderRadius: "13px",
                    alignContent: "flex-start"
                },
                child: {
                    margin: "auto"
                }
            },
            addressLine: {
                container: {
                    //display: "flex",
                    fontSize: "15px",
                    textAlign: "left",
                    flexFlow: "row wrap",
                    margin: "20px 0",
                    justifyContent: "space-around"
                },
                child: {
                    margin: "5px auto"
                },
                header: {
                    fontWeight: "bold"
                }
            }
        }

        return (
            <div style={styles.mainContainer}>
                {/* header */}
                <div style={{display: "flex"}}>
                    <div style={{width: "50%", padding: "0 10px 0 0", textAlign: "right"}}>

                        <div style={styles.header}>
                            Федеральное бюджетное учреждение «Государственный региональный центр стандартизации, метрологии и испытаний в г. Москве»
                        </div>
                        <p>
                            ФБУ «РОСТЕСТ-МОСКВА»
                        </p>
                    </div>
                    <div style={{width: "50%"}}>
                        {/* Addres line */}
                        <div className={"addressLine_container"}>
                            <div className={"addressLine_child"}><span className={"addressLine_header"}>Юридический адрес:</span> 117418, ГОРОД МОСКВА, ПРОСПЕКТ НАХИМОВСКИЙ, 31</div>
                            <div className={"addressLine_child"}><span className={"addressLine_header"}>Регион:</span> г. Москва</div>
                            <div className={"addressLine_child"}><span className={"addressLine_header"}>Телефон:</span> +7 (495) 129-19-11, (495) 544-00-00</div>
                            <div className={"addressLine_child"}><span className={"addressLine_header"}>Сайт:</span> www.rostest.ru</div>
                            <div className={"addressLine_child"}><span className={"addressLine_header"}>Руководитель:</span> Бас Виктор Николаевич (ИНН 772435488542)</div>
                        </div>
                    </div>
                </div>

                <Divider/>
                {/* Status line */}
                <div className={"statusLine_container"}>
                    <div className={"statusLine_child"}>Статус: <span className={"green"}>Действующая</span></div>
                    <div className={"statusLine_child"}>Индекс риска: <span className={"yellow"}>4,7</span></div>
                    <div className={"statusLine_child"}>Индекс добросовестности: <span className={"green"}> 8</span></div>
                    <div className={"statusLine_child"}>Банкротство: <span className={"green"}> Устойчивое финансовое состояние</span></div>
                    <div className={"statusLine_child"}>Статус: <span className={"green"}>Действующая</span></div>
                    <div className={"statusLine_child"}>Индекс риска: <span className={"yellow"}>4,7</span></div>
                    <div className={"statusLine_child"}>Индекс добросовестности: <span className={"green"}> 8</span></div>
                    <div className={"statusLine_child"}>Банкротство: <span className={"green"}> Устойчивое финансовое состояние</span></div>
                </div>
                {/* Status line 2*/}
                {/*<div className={"statusLine_container"}>
                    <div className={"statusLineV_child"}>
                        <span>Статус:</span>
                        <span className={"green"}>Действующая</span>
                    </div>
                    <div className={"statusLineV_child"}>
                        <span>Индекс риска:</span>
                        <span className={"yellow"}>4,7</span>
                    </div>
                    <div className={"statusLineV_child"}>
                        <span>Индекс добросовестности:</span>
                        <span className={"green"}> 8</span>
                    </div>
                    <div className={"statusLineV_child"}>
                        <span>Банкротство:</span>
                        <span className={"green"}> Устойчивое финансовое состояние</span>
                    </div>
                    <div className={"statusLineV_child"}>
                        <span>Статус:</span>
                        <span className={"green"}>Действующая</span>
                    </div>
                    <div className={"statusLineV_child"}>
                        <span>Индекс риска:</span>
                        <span className={"yellow"}>4,7</span>
                    </div>
                    <div className={"statusLineV_child"}>
                        <span>Индекс добросовестности:</span>
                        <span className={"green"}> 8</span>
                    </div>
                    <div className={"statusLineV_child"}>
                        <span>Банкротство:</span>
                        <span className={"green"}> Устойчивое финансовое состояние</span>
                    </div>
                </div>*/}
                <Divider/>

                {/* Tabs */}
                <Tabs>
                    <Tab label={<div>
                        <Badge
                          badgeContent={2}
                          secondary={true}
                          badgeStyle={{top: "10px", width: "20px", height: "20px"}}
                        >
                        Органы по сертификации
                        </Badge>
                    </div>} >
                        <div>
                            <SertificationControls/>
                        </div>
                    </Tab>
                    <Tab label={<div>
                        <Badge
                          badgeContent={5}
                          secondary={true}
                          badgeStyle={{top: "10px", width: "20px", height: "20px"}}
                        >
                        Испытательные лаборатории
                        </Badge>
                    </div>}>
                        <div>
                            <h2>Испытательные лаборатории
                            </h2>
                        </div>
                    </Tab>
                    <Tab label={<div>
                        <Badge
                          badgeContent={0}
                          secondary={true}
                          badgeStyle={{top: "10px", width: "20px", height: "20px", backgroundColor:"#424242"}}
                        >
                        АЛ в сфере ОЕИ
                        </Badge>
                    </div>}>
                        <div>
                            <h2>АЛ в сфере ОЕИ</h2>
                        </div>
                    </Tab>
                    <Tab label={<div>
                        <Badge
                          badgeContent={0}
                          secondary={true}
                          badgeStyle={{top: "10px", width: "20px", height: "20px", backgroundColor:"#424242"}}
                        >
                        Провайдеры МСИ
                        </Badge>
                    </div>}>
                        <div>
                            <h2>Провайдеры МСИ
                            </h2>
                        </div>
                    </Tab>
                    <Tab label={<div>
                        <Badge
                          badgeContent={0}
                          secondary={true}
                          badgeStyle={{top: "10px", width: "20px", height: "20px", backgroundColor:"#424242"}}
                        >
                        Органы инспекции
                        </Badge>
                    </div>}>
                        <div>
                            <h2>Органы инспекции</h2>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default Main;
