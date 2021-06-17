import React from 'react'
import { Grid, Divider, Button, Card } from 'semantic-ui-react'

export default function Home() {
    const mystyle = {
        fontSize: "25px"
    };

    const titleStyle = {
        fontFamily: "Arial",
        fontSize: "45px"
    }
    const titleStyle2 = {
        fontFamily : "Arial",
        fontSize : "35px",
        marginRight: "13em",
        marginTop : "5em"
    }


    const postings = [
        {
            avatar: 'https://pbs.twimg.com/profile_images/1311584003489697792/y9N4DNfp.png',
            date: 'Joined in 2013',
            header: 'Siemens',
            description: 'Primary Contact',
        },
        {
            avatar: '/images/avatar/large/matthew.png',
            date: 'Joined in 2013',
            header: 'Aselsan',
            description: 'Primary Contact',
        },
        {
            avatar: '/images/avatar/large/molly.png',
            date: 'Joined in 2013',
            header: 'Sütaş',
            description: 'Primary Contact',
        },
    ]

    const customCardGroup = {
        marginTop: "-9em",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "5em",
    }

    const marginForCards = {
        marginLeft: "5em"
    }

    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <img style={{ marginRight: '3em', marginBottom: '10em' }} src={process.env.PUBLIC_URL + '/image/151.-CV-Application.svg'} alt="Photo" width="500" height="500"></img>
                    </Grid.Column>
                    <Grid.Column style={{ marginTop: '4em' }} width={10}>
                        <Divider />
                        <h1 style={titleStyle}>
                            Hayellerine 1 Adım Daha Yaklaş
                        </h1>
                        <p style={mystyle}>
                            Business.net ile kolayca iş ilanı bulabilir,kolayca sisteme cv ekleyebilir ve hayellerine 1 adım daha yaklaşabilirsin. Tercih senin. Business.neti kullanan her zaman kazançlıdır.
                        </p>

                            <h2 style = {titleStyle2}>
                        Öne Çıkan İş İlanları
                    </h2>
                    </Grid.Column>
                </Grid.Row>
                
                <Card.Group doubling stackable style={customCardGroup}>
                    <Card>
                        <img src="https://pbs.twimg.com/profile_images/1311584003489697792/y9N4DNfp.png" />
                        <Card.Content>

                            <Card.Header>HEADER</Card.Header>
                            <Card.Meta>DATE</Card.Meta>
                            <Card.Description>DESCRIPTION</Card.Description>
                        </Card.Content>

                        <Card.Content extra>
                            <Button primary>Göz at</Button>
                        </Card.Content>
                    </Card>
                    <span style={marginForCards}/>
                    <Card>

                        <img src="https://pbs.twimg.com/profile_images/1311584003489697792/y9N4DNfp.png" />
                        <Card.Content>

                            <Card.Header>HEADER</Card.Header>
                            <Card.Meta>DATE</Card.Meta>
                            <Card.Description>DESCRIPTION</Card.Description>
                        </Card.Content>

                        <Card.Content extra>
                            <Button primary>
                                Göz at
                            </Button>
                        </Card.Content>
                    </Card>
                    <span style={marginForCards}/>

                    <Card>

                        <img src="https://pbs.twimg.com/profile_images/1311584003489697792/y9N4DNfp.png" />
                        <Card.Content>

                            <Card.Header>HEADER</Card.Header>
                            <Card.Meta>DATE</Card.Meta>
                            <Card.Description>DESCRIPTION</Card.Description>
                        </Card.Content>

                        <Card.Content extra>
                            <Button primary>
                                Göz at
                            </Button>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Grid>
        </div>
    )
}
