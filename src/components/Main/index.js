import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Badge from 'material-ui/Badge';
import SertificationControls from './MainTabs/SertificationControls'

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
                    display: "flex",
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
                <div style={styles.header}>
                    Федеральное бюджетное учреждение «Государственный региональный центр стандартизации, метрологии и испытаний в г. Москве»
                </div>
                <p>
                    Сокращенное наименование: ФБУ «РОСТЕСТ-МОСКВА»
                </p>

                {/* Status line */}
                <div style={styles.statusLine.container}>
                    <div style={styles.statusLine.child}>Статус: <span style={styles.green}>Действующая</span></div>
                    <div style={styles.statusLine.child}>Индекс риска: <span style={styles.yellow}>4,7</span></div>
                    <div style={styles.statusLine.child}>Индекс добросовестности: <span style={styles.green}> 8</span></div>
                    <div style={styles.statusLine.child}>Банкротство: <span style={styles.green}> Устойчивое финансовое состояние</span></div>
                </div>

                {/* Addres line */}
                <div style={styles.addressLine.container}>
                    <div style={styles.addressLine.child}><span style={styles.addressLine.header}>Юридический адрес:</span> 117418, ГОРОД МОСКВА, ПРОСПЕКТ НАХИМОВСКИЙ, 31</div>
                    <div style={styles.addressLine.child}><span style={styles.addressLine.header}>Регион:</span> г. Москва</div>
                    <div style={styles.addressLine.child}><span style={styles.addressLine.header}>Телефон:</span> +7 (495) 129-19-11, (495) 544-00-00</div>
                    <div style={styles.addressLine.child}><span style={styles.addressLine.header}>Сайт:</span> www.rostest.ru</div>
                    <div style={styles.addressLine.child}><span style={styles.addressLine.header}>Руководитель:</span> Бас Виктор Николаевич (ИНН 772435488542)</div>
                </div>

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
