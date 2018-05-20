import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

const dimension = {height, width} = Dimensions.get('window');

class Home extends Component {

    render () {
        console.log(this.props.currentUser);

        return (
            <View style={styles.container}>
                <View style={styles.topbar}> 
                    <TouchableOpacity> 
                        <Image source={require('../../assets/restaurantIcon.png')} style={{height:25, width:10, resizeMode:'stretch'}}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity> 
                        <Image source={require('../../assets/barIcon.png')} style={{height:25, width:10, resizeMode:'stretch'}}/>
                    </TouchableOpacity>

                    <TouchableOpacity> 
                        <Image source={require('../../assets/nightlifeIcon.png')} style={{height:25, width:12, resizeMode:'stretch'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity> 
                        <Image source={require('../../assets/cinemaIcon.png')} style={{height:23, width:15, resizeMode:'stretch'}}/>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topbar:{ 
        width: (dimension.width/2),
        height: 50, 
        margin:0,
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        transform: [
            {scaleX: 2}
          ],
        position:'absolute',
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 13,
        justifyContent: 'space-between',

    },
    oval: {
        position:'absolute',
        width: 100,
        height: 200,
        borderRadius: 50,
        backgroundColor: 'red',
        //borderWidth:2,
        //borderColor:'black',
        transform: [
          {scaleX: 2}
        ]
    },
    container:{
        flex:1,
        alignItems:'center',
        borderColor: '#eeeeee',
      }
    
  });


  const mapStateToProps = (state) => {
      return {
        currentUser: state.users.currentUser,
        allUsers: state.users.allUsers,
      }
};
  
  const mapDispatchToProps = (dispatch) => {
    return {
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);

