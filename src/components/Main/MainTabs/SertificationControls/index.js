import React, { Component } from 'react';
import {Card, /*CardActions,*/ CardHeader, CardText} from 'material-ui/Card';
import './sertControls.css'
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux'
import {toggleDialog} from '../../../../AC/toggleDialog'
import Dialog from 'material-ui/Dialog';
import {text} from './big_text'

import {XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart} from 'recharts'

class SertificationControls extends Component {

    handleOpen = (ev) => {
        if (ev) ev.preventDefault();
        this.props.toggleDialog({isDialogOpen: true});
    };

    handleClose = (ev) => {
        if (ev) ev.preventDefault();
        this.props.toggleDialog({isDialogOpen: false});
    }

    render() {

        const styles = {
            green: {
                color: "#64DD17"
            },
            statusLine: {
                container: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
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


        const actions = [
            <FlatButton
                label="Закрыть"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];

        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        ];

        return (
            <div>
                <Card>
                    <CardHeader
                        title={<div className={"cardHeader"}>Орган по сертификации продукции и услуг Федерального бюджетного учреждения «Государственный региональный центр стандартизации, метрологии и испытаний в г. Москве»</div>}
                        subtitle="Подзаголовок"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                        {/* Status line */}
                        <div className={"sertificationStatusLine_container"}>
                            <div className={"sertificationStatusLine_child"}>Номер АА: <span>RA.RU.11РТ01</span></div>
                            <div className={"sertificationStatusLine_child"}>Статус: <span className={"green"}>Действующее</span></div>
                            <div className={"sertificationStatusLine_child"}>Количество приостановок: <span> 0</span></div>
                            <div className={"sertificationStatusLine_child"}>Сумма штрафов: <span> 0</span></div>
                        </div>

                        {/* Addres line */}
                        <div className={"sertificationAddressLine_container"}>
                            <div className={"sertificationAddressLine_child"}>
                                <span className={"sertificationAddressLine_header"}>Адрес места осуществления деятельности:</span> 117418, ГОРОД МОСКВА, ПРОСПЕКТ НАХИМОВСКИЙ, 31
                            </div>
                            <div className={"sertificationAddressLine_child"}>
                                <span className={"sertificationAddressLine_header"}>Регион:</span> г. Москва
                            </div>
                            <div className={"sertificationAddressLine_child"}>
                                <span className={"sertificationAddressLine_header"}>Телефон:</span> +7 (495) 123-45-67
                            </div>
                            <div className={"sertificationAddressLine_child"}>
                                <span className={"sertificationAddressLine_header"}>Сайт:</span> www.rostest.ru
                            </div>
                            <div className={"sertificationAddressLine_child"}>
                                <span className={"sertificationAddressLine_header"}>Руководитель:</span> Люминарская Светлана Андреевна
                            </div>
                        </div>

                        <h3>Облсть аккредитации</h3>
                        <p>
                            Оценка (подтверждение) соответствия требованиям технических регламентов Таможенного союза, нормативной и правовой документации, действующей на территории Российской Федерации, положениям стандартов или условиям договоров: средств индивидуальной зашиты; автомобильного и авиационного бензина, дизельного и судового топлива, топлива для реактивных двигателей и мазута; смазочных материалов, масел и специальных жидкостей; пищевых продуктов и продовольственного сырья; парфюмерно-косметической продукции... <a className={"link"} onClick={this.handleOpen}>Подробнее</a>
                            {/*<FlatButton label="Подробнее" onTouchTap={this.handleOpen} primary={true} />*/}


                            <Dialog
                                title="Область аккредитации"
                                actions={actions}
                                modal={false}
                                open={this.props.isDialogOpen}
                                onRequestClose={this.handleClose}
                                autoScrollBodyContent={true}
                            >
                                {text}
                            </Dialog>
                        </p>

                        <AreaChart width={730} height={250} data={data}
                                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>

                    </CardText>
                </Card>
                <Card>
                    <CardHeader
                        title={<div className={"cardHeader"}>Второй орган</div>}
                        subtitle="Подзаголовок"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>


                        {/* Status line */}
                        <div className={"sertificationStatusLine_container"}>
                            <div className={"sertificationStatusLine_child"}>Номер АА: <span>RA.RU.11РТ01</span></div>
                            <div className={"sertificationStatusLine_child"}>Статус: <span className={"green"}>Действующее</span></div>
                            <div className={"sertificationStatusLine_child"}>Количество приостановок: <span> 0</span></div>
                            <div className={"sertificationStatusLine_child"}>Сумма штрафов: <span> 0</span></div>
                        </div>

                    </CardText>
                </Card>
            </div>
        );
    }
}


export default connect((state)=>{
    const {isDialogOpen} = state;
    return {isDialogOpen}
}, {
    toggleDialog
})(SertificationControls)
