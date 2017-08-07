import React, { Component } from 'react';
import {Card, /*CardActions,*/ CardHeader, CardText} from 'material-ui/Card';
import './sertControls.css'
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux'
import {toggleDialog} from '../../../../AC/toggleDialog'
import {сhangeSertControlDDMenu} from '../../../../AC/сhangeSertControlDDMenu'
import {sertControlChangeData} from '../../../../AC/sertControlChangeData'
import Dialog from 'material-ui/Dialog';
import {text} from './big_text'
import {PieChart, Pie, Sector, Cell, XAxis, Legend, YAxis, CartesianGrid, Tooltip, Area, AreaChart} from 'recharts'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import areIntlLocalesSupported from 'intl-locales-supported';
import persianUtils from 'material-ui-persian-date-picker-utils';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import ReactTooltip from 'react-tooltip'


class SertificationControls extends Component {

    handleOpen = (ev) => {
        if (ev) ev.preventDefault();
        this.props.toggleDialog({isDialogOpen: true});
    };

    handleClose = (ev) => {
        if (ev) ev.preventDefault();
        this.props.toggleDialog({isDialogOpen: false});
    }

    handleChange = (event, index, value) => {
        if (event) event.preventDefault();
        this.props.сhangeSertControlDDMenu({value});
    }

    handleDataChange = (event, value) => {
        if (event) event.preventDefault();
        this.props.sertControlChangeData({value});
    }

    render() {

        let DateTimeFormat;

        /**
         * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
         */
        if (areIntlLocalesSupported(['ru', 'ru-RU'])) {
            DateTimeFormat = global.Intl.DateTimeFormat;
        } else {
            const IntlPolyfill = require('intl');
            DateTimeFormat = IntlPolyfill.DateTimeFormat;
            require('intl/locale-data/jsonp/ru');
            require('intl/locale-data/jsonp/ru-RU');
        }

        const actions = [
            <FlatButton
                label="Закрыть"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];

        //Line chart
        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        ];

        //pie chart
        const pieData = [{name: 'Руководящий', value: 28}, {name: 'Технический', value: 15},
            {name: 'Вспомогательный', value: 57}];
        const COLORS = ['#0088FE', '#00C49F', /*'#FFBB28',*/ '#FF8042'];
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x  = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy  + radius * Math.sin(-midAngle * RADIAN);

            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        };

        const tableData = [
            {
                orgName: "Испытательная лаборатория 1",
                certificate: "РОСС RU.0001.XXX",
                address: "г. Москва",
                growth: "+200%",
                equipment: [
                    {
                        eqName: "Оборудование 1",
                        date: "1.03.2017",
                    },
                    {
                        eqName: "Оборудование 2",
                        date: "1.02.2017",
                    },
                    {
                        eqName: "Оборудование 3",
                        date: "1.01.2017",
                    },
                    {
                        eqName: "Оборудование 4",
                        date: "1.12.2016",
                    },
                    {
                        eqName: "Оборудование 5",
                        date: "1.11.2016",
                    },
                ]
            },
            {
                orgName: "Испытательная лаборатория 2",
                certificate: "РОСС RU.0001.XXX",
                address: "г. Москва",
                growth: "+190%",
                equipment: [
                    {
                        eqName: "Оборудование 6",
                        date: "1.03.2017",
                    },
                    {
                        eqName: "Оборудование 7",
                        date: "1.02.2017",
                    },
                    {
                        eqName: "Оборудование 8",
                        date: "1.01.2017",
                    },
                    {
                        eqName: "Оборудование 9",
                        date: "1.12.2016",
                    },
                    {
                        eqName: "Оборудование 10",
                        date: "1.11.2016",
                    },
                ]
            },
            {
                orgName: "Испытательная лаборатория 3",
                certificate: "РОСС RU.0001.XXX",
                address: "г. Москва",
                growth: "+180%",
                equipment: [
                    {
                        eqName: "Оборудование 11",
                        date: "1.03.2017",
                    },
                    {
                        eqName: "Оборудование 12",
                        date: "1.02.2017",
                    },
                    {
                        eqName: "Оборудование 13",
                        date: "1.01.2017",
                    },
                    {
                        eqName: "Оборудование 14",
                        date: "1.12.2016",
                    },
                    {
                        eqName: "Оборудование 15",
                        date: "1.11.2016",
                    },
                ]
            },
            {
                orgName: "Испытательная лаборатория 4",
                certificate: "РОСС RU.0001.XXX",
                address: "г. Москва",
                growth: "+170%",
                equipment: [
                    {
                        eqName: "Оборудование 16",
                        date: "1.03.2017",
                    },
                    {
                        eqName: "Оборудование 17",
                        date: "1.02.2017",
                    },
                    {
                        eqName: "Оборудование 18",
                        date: "1.01.2017",
                    },
                    {
                        eqName: "Оборудование 19",
                        date: "1.12.2016",
                    },
                    {
                        eqName: "Оборудование 20",
                        date: "1.11.2016",
                    },
                ]
            },
            {
                orgName: "Испытательная лаборатория 5",
                certificate: "РОСС RU.0001.XXX",
                address: "г. Москва",
                growth: "+160%",
                equipment: [
                    {
                        eqName: "Оборудование 21",
                        date: "1.03.2017",
                    },
                    {
                        eqName: "Оборудование 22",
                        date: "1.02.2017",
                    },
                    {
                        eqName: "Оборудование 23",
                        date: "1.01.2017",
                    },
                    {
                        eqName: "Оборудование 24",
                        date: "1.12.2016",
                    },
                    {
                        eqName: "Оборудование 25",
                        date: "1.11.2016",
                    },
                ]
            },
        ]

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
                            <div className={"sertificationStatusLine_child"}>ПК: <span>5лет - до 12.2017</span></div>
                        </div>
                        <Divider/>

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
                        <Divider/>

                        <h3>Область аккредитации</h3>
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
                        <Divider/>

                        <div style={{display: "flex", margin: "10px 0"}}>
                            <div style={{width: "50%"/*, padding: "0 10px 0 0", textAlign: "right"*/}}>
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
                            </div>
                            <div style={{width: "50%"/*, padding: "0 10px 0 0", textAlign: "right"*/}}>
                                <PieChart width={700} height={250} onMouseEnter={this.onPieEnter}>
                                    <Pie
                                        data={pieData}
                                        dataKey="value"
                                        cx={300}
                                        cy={100}
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={80}
                                        fill="#8884d8"
                                    >
                                        {
                                            data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                                        }
                                    </Pie>
                                    <Legend verticalAlign="bottom" height={36}/>
                                </PieChart>
                            </div>
                        </div>
                        <Divider/>

                        {/* Comboboxes */}
                        <div style={{display: "flex"}}>
                            <div>
                                <DropDownMenu
                                    value={this.props.sertContDDMenuValue.value}
                                    onChange={this.handleChange}
                                    style={{width: "400px", height: "40px"}}
                                    autoWidth={false}
                                >
                                    <MenuItem value={1} primaryText="ТОП-5 лабораторий по активности" />
                                    <MenuItem value={2} primaryText="ТОП-4 лабораторий по активности" />
                                    <MenuItem value={3} primaryText="ТОП-3 лабораторий по активности" />
                                    <MenuItem value={4} primaryText="ТОП-2 лабораторий по активности" />
                                    <MenuItem value={5} primaryText="ТОП-1 лабораторий по активности" />
                                </DropDownMenu>
                            </div>
                            <div>
                                <DatePicker
                                    DateTimeFormat={DateTimeFormat}
                                    style={{height: "40px"}}
                                    value={this.props.sertControlDataValue.value}
                                    locale="ru"
                                    okLabel="OK"
                                    onChange={this.handleDataChange}
                                    cancelLabel="Закрыть"
                                    hintText="Выберите дату" />
                            </div>
                        </div>

                        <Table>
                            <TableHeader
                                displaySelectAll={false}
                                adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn>Наименование организации</TableHeaderColumn>
                                    <TableHeaderColumn>Аттестат</TableHeaderColumn>
                                    <TableHeaderColumn>Адрес</TableHeaderColumn>
                                    <TableHeaderColumn>Прирост</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody
                                displayRowCheckbox={false}>
                                {tableData.map((el, index)=><TableRow data-tip data-for={"sertControlTable" + index} key={index}>
                                    <TableRowColumn>{el.orgName}</TableRowColumn>
                                    <TableRowColumn>{el.certificate}</TableRowColumn>
                                    <TableRowColumn>{el.address}</TableRowColumn>
                                    <TableRowColumn>{el.growth}</TableRowColumn>
                                </TableRow>
                                )}
                            </TableBody>
                        </Table>

                        {tableData.map((el, index)=>
                            <ReactTooltip id={"sertControlTable" + index}>
                                <div>
                                    Оборудование
                                    <ul style={{listStyleType: "none", margin: 0, padding: 0}}>
                                        {el.equipment.map((el, index) => <li>
                                            {el.date} {el.eqName}
                                        </li>)}
                                    </ul>
                                </div>
                            </ReactTooltip>
                        )}
                        <Divider/>

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
    const {isDialogOpen, sertContDDMenuValue, sertControlDataValue} = state;
    return {isDialogOpen, sertContDDMenuValue, sertControlDataValue}
}, {
    toggleDialog,
    сhangeSertControlDDMenu,
    sertControlChangeData,
})(SertificationControls)
