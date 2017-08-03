import React, { Component } from 'react';
import {Card, /*CardActions,*/ CardHeader, CardText} from 'material-ui/Card';

class SertificationControls extends Component {

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

        return (
            <div>
                <Card>
                    <CardHeader
                        title="Орган по сертификации продукции и услуг Федерального бюджетного учреждения «Государственный региональный центр стандартизации, метрологии и испытаний в г. Москве»
    "
                        subtitle="Подзаголовок"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>

                        {/* Status line */}
                        <div style={styles.statusLine.container}>
                            <div style={styles.statusLine.child}>Номер АА: <span>RA.RU.11РТ01</span></div>
                            <div style={styles.statusLine.child}>Статус: <span style={styles.green}>Действующее</span></div>
                            <div style={styles.statusLine.child}>Количество приостановок: <span> 0</span></div>
                            <div style={styles.statusLine.child}>Сумма штрафов: <span> 0</span></div>
                        </div>

                        {/* Addres line */}
                        <div style={styles.addressLine.container}>
                            <div style={styles.addressLine.child}><span style={styles.addressLine.header}>Адрес места осуществления деятельности:</span> 117418, ГОРОД МОСКВА, ПРОСПЕКТ НАХИМОВСКИЙ, 31</div>
                            <div style={styles.addressLine.child}><span style={styles.addressLine.header}>Регион:</span> г. Москва</div>
                            <div style={styles.addressLine.child}><span style={styles.addressLine.header}>Телефон:</span> +7 (495) 123-45-67</div>
                            <div style={styles.addressLine.child}><span style={styles.addressLine.header}>Сайт:</span> www.rostest.ru</div>
                            <div style={styles.addressLine.child}><span style={styles.addressLine.header}>Руководитель:</span> Люминарская Светлана Андреевна</div>
                        </div>

                    </CardText>
                </Card>
                <Card>
                    <CardHeader
                        title="Второй орган"
                        subtitle="Подзаголовок"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>

                        {/* Status line */}
                        <div style={styles.statusLine.container}>
                            <div style={styles.statusLine.child}>Номер АА: <span>RA.RU.11РТ01</span></div>
                            <div style={styles.statusLine.child}>Статус: <span style={styles.green}>Действующее</span></div>
                            <div style={styles.statusLine.child}>Количество приостановок: <span> 0</span></div>
                            <div style={styles.statusLine.child}>Сумма штрафов: <span> 0</span></div>
                        </div>

                    </CardText>
                </Card>
            </div>
        );
    }
}

export default SertificationControls;
