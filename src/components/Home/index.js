import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import CherryPieHeader from './../cherryPieHeader'
import UserListContainer from '../../containers/UserListContainer'
import CounterContainer from '../../containers/CounterContainer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >

            <Container text>
              <Header
                as="h1"
                content="Imagine a Cherry Pie"
                inverted
                style={{
                  fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em',
                }}
              />
              <Header
                as="h2"
                content="So great that it would make you think twice"
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button color="teal" size="huge">
                Why, You Say?
                <Icon name="right arrow" />
              </Button>
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight
                  your customers and empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes thats right, you thought it was the stuff of dreams,
                  but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded="10"
                  size="large"
                  src="https://react.semantic-ui.com/assets/images/wireframe/white-image.png"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>What a Company</Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>I should not have gone with their competitor.</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src="https://react.semantic-ui.com/assets/images/avatar/large/nan.jpg" />
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have
              learned how to master the art of doing
              nothing by providing massive amounts of whitespace
              and generic content that can seem massive, monolithic
              and worth your attention.
            </p>
            <Button as="a" size="large">Read More</Button>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href="/">Case Studies</a>
            </Divider>

            <Header as="h3" style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier
              boasts as non-sequitur filler content, but its really
              true. It took years of gene splicing and combinatory
              DNA research, but our bananas can really dance.
            </p>
            <Button as="a" size="large">I am Still Quite Interested</Button>
          </Container>
        </Segment>

        <nav className="ui inverted red menu">
          <h3 className="header iterm">CherryPie</h3>
          <a href="/" className="active item">Users</a>
          <a href="/" className="item">Counter</a>
          <a href="/" className="item">Tornado</a>
          <a href="/" className="item">Item 4</a>
          <a href="/" className="item">Item 5</a>
        </nav>

        <div className="ui four column doubling stackable grid">
          <div className="column">
            <h2>Services</h2>
            <p>In labore anim adipisicing aliquip exercitation dolor. Consectetur
            cupidatat et excepteur laboris reprehenderit. Magna proident quis dolore
            esse reprehenderit commodo labore anim. Excepteur anim minim cillum
            </p>
            <p>Do cillum velit id ea aliqua esse. Sit reprehenderit do duis
            aliqua sit quis pariatur amet ipsum magna reprehenderit. Anim minim sit excepteur
            Lorem officia cillum voluptate deserunt id.
            </p>
          </div>
          <div className="column">
            <h2>Prices</h2>
            <p>Veniam ipsum officia aute duis culpa deserunt sit ut. Aliquip
            laborum sunt aliquip commodo mollit do dolor adipisicing. Est occaecat
            </p>
            <p>Ex anim nisi nostrud esse culpa nostrud eu. Nulla qui magna
            mollit velit eiusmod est nostrud labore aliquip esse. Veniam dolor quis
            non non. Enim nostrud voluptate sunt dolor esse eu. Officia do
            </p>
          </div>
          <div className="column">
            <h2>Team</h2>
            <p>Tempor qui do consectetur ex cillum consectetur cillum ea amet
            duis duis sit ex exercitation. Sunt in sint exercitation laboris duis
            nulla cillum anim ut ea qui nostrud. Exercitation occaecat nisi
            </p>
            <p>Sunt mollit exercitation aute sit eiusmod consequat velit.
            Velit consectetur nulla mollit velit incididunt ipsum. Non aliquip
            </p>
          </div>
          <div className="column">
            <h2>About</h2>
            <p>Nisi culpa duis in dolor quis minim do sint irure eu dolor labore.
            Reprehenderit aliquip cupidatat irure labore adipisicing ad. Nulla nulla
            amet enim do laborum esse velit enim tempor. Pariatur minim quis esse
            </p>
            <p>Deserunt aliquip consectetur ex proident quis velit ad
            eu mollit qui sit velit non laborum. Laborum duis veniam
            commodo do laboris aliquip. Laboris nisi ea mollit ad.
            </p>
          </div>
        </div>

        <div className="ui attached stackable menu">
          <div className="ui container">
            <a href="/" className="item">
              <i className="home icon" /> Home
            </a>
            <a href="/" className="item">
              <i className="grid layout icon" /> Browse
            </a>
            <a href="/" className="item">
              <i className="mail icon" /> Messages
            </a>
            <div className="ui simple dropdown item">
              More
              <i className="dropdown icon" />
              <div className="menu">
                <a href="/" className="item"><i className="edit icon" /> Edit Profile</a>
                <a href="/" className="item"><i className="globe icon" /> Choose Language</a>
                <a href="/" className="item"><i className="settings icon" /> Account Settings</a>
              </div>
            </div>
            <div className="right item">
              <div className="ui input"><input type="text" placeholder="Search..." /></div>
            </div>
          </div>
        </div>

        <div className="ui grid">
          <div className="two column large screen only row">
            <div className="column">
              <div className="ui segment">
                Large Screen
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                Large Screen
              </div>
            </div>
          </div>
          <div className="two column large screen only row">
            <div className="column">
              <div className="ui segment">
                Widescreen
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                Widescreen
              </div>
            </div>
          </div>
          <div className="two column mobile only row">
            <div className="column">
              <div className="ui segment">
                Mobile
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                Mobile
              </div>
            </div>
          </div>
          <div className="three column row">
            <div className="computer only column">
              <div className="ui segment">
                Computer
              </div>
            </div>
            <div className="tablet mobile only column">
              <div className="ui segment">
                Tablet and Mobile
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                All Sizes
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                All Sizes
              </div>
            </div>
          </div>
          <div className="four column computer only row">
            <div className="column">
              <div className="ui segment">
                Computer
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                Computer
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                Computer
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                Computer
              </div>
            </div>
          </div>
          <div className="three column tablet only row">
            <div className="column">
              <div className="ui segment">
                Tablet
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                Tablet
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                Tablet
              </div>
            </div>
          </div>
        </div>

        <div className="ui grid">
          <div className="four wide column">Incididunt consectetur labore commodo sit sunt ex.
          Qui incididunt nulla nulla id. Excepteur elit consequat incididunt laboris. Ea non
          </div>
          <div className="four wide column">Dolor magna id quis pariatur cupidatat ex
          sit culpa in anim deserunt. Laboris magna officia laboris exercitation esse tempor
          velit proident commodo. Lorem ullamco elit sunt adipisicing ut
          </div>
          <div className="four wide column">Consectetur Lorem esse proident enim qui est incididunt
          do mollit labore occaecat eiusmod ut. Minim incididunt eiusmod elit reprehenderit
          tempor eu et ullamco irure Lorem officia tempor consectetur.
          </div>
          <div className="four wide column">Eu voluptate aliqua veniam cupidatat minim
          elit quis enim dolor ea eu minim sint ea. Voluptate anim tempor dolor
          cupidatat pariatur proident pariatur officia do.
          </div>
        </div>

        <h1>Hello React!</h1>
        <UserListContainer />
        <CherryPieHeader />
        <CounterContainer />
      </div>
    )
  }
}
