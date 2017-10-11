/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import CherryPieHeader from './cherryPieHeader'
import UserListContainer from '../containers/UserListContainer'
import CounterContainer from '../containers/CounterContainer'


const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as={Link} to="/" active>Home</Menu.Item>
      <Menu.Item as={Link} to="/counter">Counter</Menu.Item>
      <Menu.Item as={Link} to="/users">Users</Menu.Item>
      <Menu.Item as="a">Careers</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item className="item">
          <Button as="a">Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
    this.state = { visible: false };
  }

  componentDidMount() {
    // console.log('Component did mount!');
  }

  hideFixedMenu() {
    this.setState({ visible: false })
  }

  showFixedMenu() {
    this.setState({ visible: true })
  }

  render() {
    const { visible } = this.state

    return (

      <div>
        { visible ? <FixedMenu /> : null }

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
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item as={Link} to="/" active>Home</Menu.Item>
                <Menu.Item as={Link} to="/counter">Counter</Menu.Item>
                <Menu.Item as={Link} to="/users">Users</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>Log in</Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                content='Imagine-a-Company'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Do whatever you want when you want to.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible. Let us delight
                  your customers and empower your needs... through pure data analytics.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded='10'
                  size='large'
                  src='https://react.semantic-ui.com/assets/images/wireframe/white-image.png'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/large/nan.jpg' />
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have learned how to master the art of doing
              nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
              and worth your attention.
            </p>
            <Button as='a' size='large'>Read More</Button>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Case Studies</a>
            </Divider>

            <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really
              true.
              It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
            </p>
            <Button as='a' size='large'>I'm Still Quite Interested</Button>
          </Container>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>

        <nav className="ui inverted red menu">
            <h3 className="header iterm">CherryPie</h3>
            <a className="active item">Users</a>
            <a className="item">Counter</a>
            <a className="item">Tornado</a>
            <a className="item">Item 4</a>
            <a className="item">Item 5</a>
        </nav>

        <div className="ui four column doubling stackable grid">
          <div className="column">
            <h2>Services</h2>
            <p>In labore anim adipisicing aliquip exercitation dolor. Consectetur cupidatat et excepteur laboris reprehenderit. Magna proident quis dolore esse reprehenderit commodo labore anim. Excepteur anim minim cillum consequat pariatur officia ea fugiat fugiat exercitation elit occaecat. Minim id excepteur ipsum aute eiusmod laborum cillum.</p>
            <p>Do cillum velit id ea aliqua esse. Sit reprehenderit do duis aliqua sit quis pariatur amet ipsum magna reprehenderit. Anim minim sit excepteur Lorem officia cillum voluptate deserunt id.</p>
          </div>
          <div className="column">
            <h2>Prices</h2>
            <p>Veniam ipsum officia aute duis culpa deserunt sit ut. Aliquip laborum sunt aliquip commodo mollit do dolor adipisicing. Est occaecat esse dolor veniam esse ipsum in esse mollit consequat culpa. Exercitation consequat culpa nulla culpa fugiat pariatur pariatur. Mollit adipisicing in nisi Lorem ullamco esse sunt exercitation officia exercitation veniam nisi pariatur.</p>
            <p>Ex anim nisi nostrud esse culpa nostrud eu. Nulla qui magna mollit velit eiusmod est nostrud labore aliquip esse. Veniam dolor quis non non. Enim nostrud voluptate sunt dolor esse eu. Officia do commodo anim cupidatat aliqua proident. Mollit mollit est consequat officia non. Elit adipisicing enim mollit in magna.</p>
          </div>
          <div className="column">
            <h2>Team</h2>
            <p>Tempor qui do consectetur ex cillum consectetur cillum ea amet duis duis sit ex exercitation. Sunt in sint exercitation laboris duis nulla cillum anim ut ea qui nostrud. Exercitation occaecat nisi non cupidatat anim magna proident culpa. Enim proident culpa duis tempor dolor mollit. Veniam occaecat occaecat exercitation commodo laboris velit. Laborum laboris aliqua occaecat et consectetur ea. Magna cupidatat cupidatat cillum laborum aliquip magna.</p>
            <p>Sunt mollit exercitation aute sit eiusmod consequat velit. Velit consectetur nulla mollit velit incididunt ipsum. Non aliquip eu consectetur aliquip laborum exercitation ex nisi est ex ea occaecat ipsum. Amet nostrud exercitation ipsum occaecat. Qui commodo aliqua commodo aliquip dolore occaecat tempor quis adipisicing ut.</p>
          </div>
          <div className="column">
            <h2>About</h2>
            <p>Nisi culpa duis in dolor quis minim do sint irure eu dolor labore. Reprehenderit aliquip cupidatat irure labore adipisicing ad. Nulla nulla amet enim do laborum esse velit enim tempor. Pariatur minim quis esse eu incididunt dolore laboris consequat. Commodo id proident laboris nostrud reprehenderit id magna enim proident eiusmod. Aliqua sit occaecat incididunt eu adipisicing cillum esse.</p>
            <p>Deserunt aliquip consectetur ex proident quis velit ad eu mollit qui sit velit non laborum. Laborum duis veniam commodo do laboris aliquip. Laboris nisi ea mollit ad.</p>
          </div>
        </div>

        <br/><br/><br/><br/><br/><br/>

        <div className="ui attached stackable menu">
          <div className="ui container">
            <a className="item">
              <i className="home icon"></i> Home
            </a>
            <a className="item">
              <i className="grid layout icon"></i> Browse
            </a>
            <a className="item">
              <i className="mail icon"></i> Messages
            </a>
            <div className="ui simple dropdown item">
              More
              <i className="dropdown icon"></i>
              <div className="menu">
                <a className="item"><i className="edit icon"></i> Edit Profile</a>
                <a className="item"><i className="globe icon"></i> Choose Language</a>
                <a className="item"><i className="settings icon"></i> Account Settings</a>
              </div>
            </div>
            <div className="right item">
              <div className="ui input"><input type="text" placeholder="Search..."/></div>
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
          <div className="four wide column">Incididunt consectetur labore commodo sit sunt ex. Qui incididunt nulla nulla id. Excepteur elit consequat incididunt laboris. Ea non voluptate adipisicing culpa ullamco deserunt do. Dolore laboris id culpa pariatur dolore sit nulla consequat in aliquip cillum incididunt. Dolor cupidatat in sint excepteur consequat ex nostrud consequat nostrud laboris id irure ut.</div>
          <div className="four wide column">Dolor magna id quis pariatur cupidatat ex sit culpa in anim deserunt. Laboris magna officia laboris exercitation esse tempor velit proident commodo. Lorem ullamco elit sunt adipisicing ut anim sunt eu dolor deserunt veniam ea. Tempor ea eiusmod ad culpa eu commodo nulla consectetur. Enim Lorem dolore magna et exercitation do minim non veniam nostrud incididunt sit. Minim quis eu nostrud reprehenderit sint deserunt velit nulla exercitation exercitation eiusmod laborum anim.</div>
          <div className="four wide column">Consectetur Lorem esse proident enim qui est incididunt do mollit labore occaecat eiusmod ut. Minim incididunt eiusmod elit reprehenderit tempor eu et ullamco irure Lorem officia tempor consectetur. Ipsum fugiat amet do aute minim duis.</div>
          <div className="four wide column">Eu voluptate aliqua veniam cupidatat minim elit quis enim dolor ea eu minim sint ea. Voluptate anim tempor dolor cupidatat pariatur proident pariatur officia do. Ex enim Lorem est irure aliqua incididunt adipisicing esse ullamco minim aliqua aliqua cillum. Ex labore Lorem consectetur mollit deserunt nulla anim excepteur non amet dolore pariatur irure ullamco. Aliquip tempor ut pariatur ea quis nostrud consequat officia anim dolore do.</div>
        </div>

        <h1>Hello React!</h1>
        <UserListContainer />
        <CherryPieHeader />
        <CounterContainer />
      </div>
    );
  }
}
