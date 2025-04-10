import React from "react";
import { Card, Row, Col, Typography, Divider, Image } from "antd";
import { QRCodeSVG } from "qrcode.react";// Vous devrez installer cette dépendance

const { Text, Title } = Typography;

const TicketCard = ({ event }) => {
    // Générer une URL pour le QR code basée sur l'ID de l'événement
    const ticketUrl = `${window.location.origin}/ticket/${event.LG_EVEID}`;

    return (
        <Row gutter={2}>
                {/* Section gauche avec l'image */}
                <Col xs={16}>
                    <div style={{ height: '100px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            alt={event.STR_EVENAME}
                            src={`${process.env.REACT_APP_BASE_IMAGE_URL}${event.STR_EVEPIC}`}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            preview={true}
                        />
                    </div>
                </Col>

                {/* Section droite avec QR code */}
                <Col xs={8} sm={8} >
                    <div style={{ textAlign: 'center' }}>
                        <QRCodeSVG
                            value={ticketUrl}
                            size={90}
                            level="H"
                            includeMargin={true}
                            renderAs="svg"
                        />
                    </div>
                </Col>
            </Row>
    );
};

export default TicketCard;