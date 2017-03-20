
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
    name: 'FBN - M Zukerberg',
    note: '10 shares ',
    price: ' R 20',
		delta: 'up',
		percentage: '35%',
  },
  {
    img: sanket,
    name: 'AMZN - Jeff Bezos',
    note: '10 shares',
    price: ' R 20',
		delta: 'down',
		percentage: '15%'
  },
  {
    img: megha,
    name: 'NSA - Mae Jemison',
    note: '13 shares',
    price: ' R 15',
		delta: 'down',
		percentage: '35%'
  },
  {
    img: atul,
    name: 'KBL -  M Johnson',
    note: '14 shares',
    price: ' R 15',
		delta: 'up',
		percentage: '13%'
  },
  {
    img: saurabh,
    name: 'TSL - Elon Musk',
    note: '20 shares',
    price: ' R 15',
		delta: 'up',
		percentage: '10%'
  },
  {
    img: varun,
    name: 'BLK - K Bryant',
    note: '12 shares',
    price: ' R 10',
		delta: 'down',
		percentage: '55%'
  },
];

const {
  popRoute,
} = actions;

class MyStocks extends Component {

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
                  <Text>{item.name}</Text>
                  <Text numberOfLines={1} note>{item.note} | {item.delta}  {item.percentage}</Text>
									
                </Body>
                <Right>
                  <Text note>{item.price}</Text>
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


export default connect(mapStateToProps, bindAction)(MyStocks);
