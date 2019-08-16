import React,{PureComponent} from 'react';
import {connect} from "react-redux";
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import {actionCreators} from './store';
import {HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
class Home extends PureComponent{
    handleCrollTop(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className='banner-img'
                        src="//upload.jianshu.io/admin_banners/web_images/4688/b566e8cd6e7c0b15b1cc510fdc596ac501e97a96.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt=''
                    />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll?<BackTop onClick={this.handleCrollTop}>Top</BackTop>:null}

            </HomeWrapper>
        );
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)

    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState=(state)=>({
    showScroll: state.getIn(['home','showScroll'])
})
const mapDispatch=(dispatch)=>({
    changeHomeData(){

        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>100){
            dispatch(actionCreators.toggleTopShow(true));

        }else{
            dispatch(actionCreators.toggleTopShow(false));

        }
    }
});
export default connect(mapState,mapDispatch)(Home);