import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image,  ImageBackground, ScrollView } from 'react-native';

class Profile extends Component {
    constructor(props){
        super(props)
    }

    render () {
        console.log("------", this.props)
        const user = this.props.navigation.state.params.user;
        return(

            <View style={styles.container}> 
                <ImageBackground style={styles.header} source= {require ('../../assets/profilebg.png')} resizeMode='stretch'> 

                    <View style={styles.nameView}> 
                        <Text style= { styles.nameText }> {user.firstname + " " + user.lastname}</Text>
                        <Text style= { styles.locationText }> {user.email}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.followDetails}> 
                    <View style={styles.followDetailsContent}>
                        <Text style={styles.value}>800</Text>
                        <Text style={styles.description}>Friends</Text>
                    </View>
                    <View style={styles.followDetailsContent}>
                        <Text style={styles.value}>150</Text>
                        <Text style={styles.description}>Pictures</Text>
                    </View>
                    <View style={styles.followDetailsContent}>
                        <Text style={styles.value}>20</Text>
                        <Text style={styles.description}>Videos</Text>
                    </View>
                </View>

                <View style={styles.tabHeader}> 
                    <Text style={styles.topTabItemAlt}>Notifications</Text>
                    <Text style={styles.topTabItem}>Reviews</Text>
                    <Text style={styles.topTabItem}>Favourites</Text>
                    <Text style={styles.topTabItem}>Media</Text>
                </View>
                <View style={styles.scroll}>
                    <ScrollView>
                    
                    </ScrollView>
                </View>
                <Image style={styles.profileImg}  source= {require ('../../assets/profilebg.png')} resizeMode='stretch'/> 

            </View>
        );
    }
}

const styles = {
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header: {
        height: 170,
        width: '100%',
         justifyContent: 'flex-start',
    },
    profileImg: {
        position: 'absolute',
        width: 100,
        height: 100,
        marginTop: 120,
        marginLeft: 15,
        borderColor: '#ffffff',
        borderWidth: 5,
        borderRadius: 50,
        justifyContent: 'center',
    }, 
    nameView: {
        marginLeft: 120,
        marginTop: 130,
    },

    nameText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: 'bold',
    },
    locationText: {
        color: '#ffffff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    followDetails: {
        height: 50,
        width: '100%',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingLeft: 150,
        justifyContent: 'space-between',
        paddingRight: 25,
    },

    tabHeader: {
        height: 50,
        width: '100%',
        backgroundColor: '#ffffff',
        borderBottomWidth: 0.5,
        borderColor:'#999',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
    },

    scroll: {
        height:270,
        flex:1
    },
    value: {
        fontSize: 12,
        fontWeight: '600',
        alignSelf: 'center',
    },
    description: {
        fontSize: 10,
        fontWeight: '100',
    },
    followDetailsContent: {
       justifyContent: 'center',
       alignContent: 'center',
    },
    topTabItem: {
        fontSize: 11,
        fontWeight: '100',
    },
    topTabItemAlt: {
        fontSize: 11,
        fontWeight: '100',
        color: '#FD2B30',
        textDecorationLine: 'underline',
    },
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        allUsers: state.allUsers
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    //signup: (user) => dispatch({ type: 'CREATE_USER', user: user }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);