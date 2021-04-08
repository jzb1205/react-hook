import React, { Component } from 'react'
import Header from '@/components/header/header'
import PropTypes from 'prop-types'
import './forget.scss'

class Forget extends Component {
    // static propTypes = {
    //     modifyUserInfo: PropTypes.func.isRequired,
    //     userInfo: PropTypes.object.isRequired
    // }
    state = {
      hasAlert: false,
      alertText: '请在手机APP中打开',
      logout: false
    }
    componentDidMount(){
        console.log('this.props',this.props)
    }
    goBack = () => {
        this.props.history.push('/msite')
    }
    render() {
        return (
            <div className='foodlist-container'>
                <Header title={this.props.route._title} goBack={this.goBack} />
                65
                {/* <ShopList geohash={this.props.match.params.geohash.split(',')} /> */}
            </div>
        )
    }
}

export default Forget