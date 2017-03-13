
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
const pratik = require('../../../img/contacts/user1.jpeg');
const sanket = require('../../../img/contacts/user2.jpg');
const megha = require('../../../img/contacts/user3.jpeg');
const atul = require('../../../img/contacts/user4.jpg');
const saurabh = require('../../../img/contacts/user5.jpg');
const varun = require('../../../img/contacts/user6.jpg');


const data = [
  {
    img: pratik,
    text: 'FBN - M Zukerberg',
    note: 'Available: 20 units',
    time: 'Price Per Unit: R 20',
  },
  {
    img: sanket,
    text: 'AMZN - Jeff Bezos',
    note: 'Available: 120 units',
    time: 'Price Per Unit: R 20',
  },
  {
    img: megha,
    text: 'NSA - Mae Jemison',
    note: 'Available: 20 units',
    time: 'Price Per Unit: R 15',
  },
  {
    img: atul,
    text: 'KBL -  M Johnson',
    note: 'Available: 20 units',
    time: 'Price Per Unit: R 15',
  },
  {
    img: saurabh,
    text: 'TSL - Elon Musk',
    note: 'Available: 20 units',
    time: 'Price Per Unit: R 15',
  },
  {
    img: varun,
    text: 'BLK - K Bryant',
    note: 'Available: 3  units',
    time: 'Price Per Unit: R 10'
  },
];

const {
  popRoute,
} = actions;

class BlankPage extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    const { props: { name, index, list } } = this;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>{(name) ? this.props.name : 'Stocks'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <List
            dataArray={data} renderRow={item =>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={item.img} />
                </Left>
                <Body>
                  <Text>{item.text}</Text>
                  <Text numberOfLines={1} note>{item.note}</Text>
                </Body>
                <Right>
                  <Text note>{item.time}</Text>
                </Right>
              </ListItem>
        }
          />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(BlankPage);
