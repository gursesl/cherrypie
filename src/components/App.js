/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import CherryPieHeader from './cherryPieHeader';
import UserList from '../containers/UserListContainer';
import CounterContainer from '../containers/CounterContainer'

export default class App extends Component {
  componentDidMount() {
    // console.log('Component did mount!');
  }

  render() {
    return (
      <div>
        <nav class="ui inverted red menu">
            <h3 class="header iterm">CherryPie</h3>
            <a class="active item">Users</a>
            <a class="item">Counter</a>
            <a class="item">Tornado</a>
            <a class="item">Item 4</a>
            <a class="item">Item 5</a>
        </nav>

        <div class="ui four column doubling stackable grid">
          <div class="column">
            <h2>Services</h2>
            <p>In labore anim adipisicing aliquip exercitation dolor. Consectetur cupidatat et excepteur laboris reprehenderit. Magna proident quis dolore esse reprehenderit commodo labore anim. Excepteur anim minim cillum consequat pariatur officia ea fugiat fugiat exercitation elit occaecat. Minim id excepteur ipsum aute eiusmod laborum cillum.</p>
            <p>Do cillum velit id ea aliqua esse. Sit reprehenderit do duis aliqua sit quis pariatur amet ipsum magna reprehenderit. Anim minim sit excepteur Lorem officia cillum voluptate deserunt id.</p>
          </div>
          <div class="column">
            <h2>Prices</h2>
            <p>Veniam ipsum officia aute duis culpa deserunt sit ut. Aliquip laborum sunt aliquip commodo mollit do dolor adipisicing. Est occaecat esse dolor veniam esse ipsum in esse mollit consequat culpa. Exercitation consequat culpa nulla culpa fugiat pariatur pariatur. Mollit adipisicing in nisi Lorem ullamco esse sunt exercitation officia exercitation veniam nisi pariatur.</p>
            <p>Ex anim nisi nostrud esse culpa nostrud eu. Nulla qui magna mollit velit eiusmod est nostrud labore aliquip esse. Veniam dolor quis non non. Enim nostrud voluptate sunt dolor esse eu. Officia do commodo anim cupidatat aliqua proident. Mollit mollit est consequat officia non. Elit adipisicing enim mollit in magna.</p>
          </div>
          <div class="column">
            <h2>Team</h2>
            <p>Tempor qui do consectetur ex cillum consectetur cillum ea amet duis duis sit ex exercitation. Sunt in sint exercitation laboris duis nulla cillum anim ut ea qui nostrud. Exercitation occaecat nisi non cupidatat anim magna proident culpa. Enim proident culpa duis tempor dolor mollit. Veniam occaecat occaecat exercitation commodo laboris velit. Laborum laboris aliqua occaecat et consectetur ea. Magna cupidatat cupidatat cillum laborum aliquip magna.</p>
            <p>Sunt mollit exercitation aute sit eiusmod consequat velit. Velit consectetur nulla mollit velit incididunt ipsum. Non aliquip eu consectetur aliquip laborum exercitation ex nisi est ex ea occaecat ipsum. Amet nostrud exercitation ipsum occaecat. Qui commodo aliqua commodo aliquip dolore occaecat tempor quis adipisicing ut.</p>
          </div>
          <div class="column">
            <h2>About</h2>
            <p>Nisi culpa duis in dolor quis minim do sint irure eu dolor labore. Reprehenderit aliquip cupidatat irure labore adipisicing ad. Nulla nulla amet enim do laborum esse velit enim tempor. Pariatur minim quis esse eu incididunt dolore laboris consequat. Commodo id proident laboris nostrud reprehenderit id magna enim proident eiusmod. Aliqua sit occaecat incididunt eu adipisicing cillum esse.</p>
            <p>Deserunt aliquip consectetur ex proident quis velit ad eu mollit qui sit velit non laborum. Laborum duis veniam commodo do laboris aliquip. Laboris nisi ea mollit ad.</p>
          </div>
        </div>

        <br/><br/><br/><br/><br/><br/>

        <div class="ui attached stackable menu">
          <div class="ui container">
              <a class="item">
                <i class="home icon"></i> Home
              </a>
              <a class="item">
                <i class="grid layout icon"></i> Browse
              </a>
              <a class="item">
                <i class="mail icon"></i> Messages
              </a>
              <div class="ui simple dropdown item">
                More
                <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item"><i class="edit icon"></i> Edit Profile</a>
                  <a class="item"><i class="globe icon"></i> Choose Language</a>
                  <a class="item"><i class="settings icon"></i> Account Settings</a>
                </div>
              </div>
              <div class="right item">
                <div class="ui input"><input type="text" placeholder="Search..."/></div>
              </div>
            </div>
          </div>

          <br/><br/><br/><br/><br/><br/>



        <div class="ui grid">
          <div class="two column large screen only row">
            <div class="column">
              <div class="ui segment">
                Large Screen
              </div>
            </div>
            <div class="column">
              <div class="ui segment">
                Large Screen
              </div>
            </div>
          </div>
          <div class="two column large screen only row">
            <div class="column">
              <div class="ui segment">
                Widescreen
              </div>
            </div>
            <div class="column">
              <div class="ui segment">
                Widescreen
              </div>
            </div>
          </div>
          <div class="two column mobile only row">
            <div class="column">
              <div class="ui segment">
                Mobile
              </div>
            </div>
            <div class="column">
              <div class="ui segment">
                Mobile
              </div>
            </div>
          </div>
          <div class="three column row">
            <div class="computer only column">
              <div class="ui segment">
                Computer
              </div>
            </div>
            <div class="tablet mobile only column">
              <div class="ui segment">
                Tablet and Mobile
              </div>
            </div>
            <div class="column">
              <div class="ui segment">
                All Sizes
              </div>
            </div>
            <div class="column">
              <div class="ui segment">
                All Sizes
              </div>
            </div>
          </div>
          <div class="four column computer only row">
            <div class="column">
              <div class="ui segment">
                Computer
              </div>
            </div>
            <div class="column">
              <div class="ui segment">
                Computer
              </div>
            </div>
            <div class="column">
              <div class="ui segment">
                Computer
              </div>
            </div>
            <div class="column">
              <div class="ui segment">
                Computer
              </div>
            </div>
          </div>
          <div class="three column tablet only row">
            <div class="column">
              <div class="ui segment">
                Tablet
              </div>
            </div>
            <div class="column">
              <div class="ui segment">
                Tablet
              </div>
            </div>
            <div class="column">
              <div class="ui segment">
                Tablet
              </div>
            </div>
          </div>
        </div>

        <div class="ui grid">
          <div calss="four wide column">Incididunt consectetur labore commodo sit sunt ex. Qui incididunt nulla nulla id. Excepteur elit consequat incididunt laboris. Ea non voluptate adipisicing culpa ullamco deserunt do. Dolore laboris id culpa pariatur dolore sit nulla consequat in aliquip cillum incididunt. Dolor cupidatat in sint excepteur consequat ex nostrud consequat nostrud laboris id irure ut.</div>
          <div calss="four wide column">Dolor magna id quis pariatur cupidatat ex sit culpa in anim deserunt. Laboris magna officia laboris exercitation esse tempor velit proident commodo. Lorem ullamco elit sunt adipisicing ut anim sunt eu dolor deserunt veniam ea. Tempor ea eiusmod ad culpa eu commodo nulla consectetur. Enim Lorem dolore magna et exercitation do minim non veniam nostrud incididunt sit. Minim quis eu nostrud reprehenderit sint deserunt velit nulla exercitation exercitation eiusmod laborum anim.</div>
          <div calss="four wide column">Consectetur Lorem esse proident enim qui est incididunt do mollit labore occaecat eiusmod ut. Minim incididunt eiusmod elit reprehenderit tempor eu et ullamco irure Lorem officia tempor consectetur. Ipsum fugiat amet do aute minim duis.</div>
          <div calss="four wide column">Eu voluptate aliqua veniam cupidatat minim elit quis enim dolor ea eu minim sint ea. Voluptate anim tempor dolor cupidatat pariatur proident pariatur officia do. Ex enim Lorem est irure aliqua incididunt adipisicing esse ullamco minim aliqua aliqua cillum. Ex labore Lorem consectetur mollit deserunt nulla anim excepteur non amet dolore pariatur irure ullamco. Aliquip tempor ut pariatur ea quis nostrud consequat officia anim dolore do.</div>
        </div>

        <h1>Hello React!</h1>
        <UserList />
        <CherryPieHeader />
        <CounterContainer />
      </div>
    );
  }
}
