import React from 'react'
import { Card, Button, Row, Col, Modal }from 'react-bootstrap';
// import { Card, Button, Image } from 'semantic-ui-react'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

export default function News() {
    return (
        <div>
            <h2>What's New in Tennis</h2>
            <div className="cards">
                <Card id="card-border" style={{ width: '18rem' }}>
                    <Card.Img src="https://staticc.sportskeeda.com/editor/2023/05/9bd43-16843814268835-1920.jpg"/>
                        <Card.Body>
                            <Card.Title>sportskeeda</Card.Title>
                            <Card.Footer>1 day ago</Card.Footer>
                            <Card.Text>Iga Swiatek causes hilarious interruption during Italian Open QF against Elena Rybakina after Pole's phone goes off</Card.Text>
                            <Button id='link-btn'><a href="https://www.sportskeeda.com/tennis/news-iga-swiatek-causes-hilarious-interruption-italian-open-qf-elena-rybakina-pole-s-phone-goes" target="_blank">Read Full Article</a></Button>
                        </Card.Body>
                </Card>
                <Card id="card-border" style={{ width: '18rem' }}>
                    <Card.Img src="https://images.wsj.net/im-783969/?width=1278&size=1"/>
                        <Card.Body>
                            <Card.Title>The Wall Street Journal</Card.Title>
                            <Card.Footer>3 hours ago</Card.Footer>
                            <Card.Text>Rafael Nadal Pulls Out of French Open as He Edges Toward a Tennis Goodbye</Card.Text>
                            <Button id='link-btn'><a href="https://www.wsj.com/sports/tennis/rafael-nadal-french-open-roland-garros-d8c4bcf4" target="_blank">Read Full Article</a></Button>
                        </Card.Body>
                </Card>
                <Card id="card-border" style={{ width: '18rem' }}>
                    <Card.Img src="https://pyxis.nymag.com/v1/imgs/e53/8df/a2fecd8321fc01b54add77d3cdb85fcf21-BONY-tennis-courts-final.rhorizontal.w700.jpg"/>
                    <Card.Body>
                            <Card.Title>Curbed</Card.Title>
                            <Card.Footer>2 days ago</Card.Footer>
                            <Card.Text>The Best Tennis Courts in New York</Card.Text>
                            <Button id='link-btn'><a href="https://www.curbed.com/article/best-tennis-courts-nyc.html" target="_blank">Read Full Article</a></Button>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <h2>Checkout Netflix's new tennis documentary, <em>Break Point</em></h2>
                <iframe
                    width="797"
                    height="448"
                    src="https://www.youtube.com/embed/seSCvuejudM"
                    title="Break Point | Official Trailer | Netflix"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
        </div>
    )
}

