import React,{Component} from 'react';
import {connect} from "react-redux";
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import { CSSTransition } from 'react-transition-group';
import {Link} from "react-router-dom";

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
}from './style';


class Header extends Component{
     getListArea(){
         const {focused,list,page,mouseIn,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage}=this.props;
         const pageList=[];
         const newList=list.toJS();
         if(newList.length) {
             for (let i = (page - 1) * 6; i < page * 6; i++) {
                 pageList.push(
                     <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                 )
             }
         };
        if(focused||mouseIn){
            return(
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        Top Search
                        <SearchInfoSwitch
                            onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
                        >
                            <i ref={(icon)=>{this.spinIcon=icon}}className="iconfont spin">&#xe851;</i>
                            Change
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}

                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){
        const {focused,handleInputFocus,handleInputBlur,list,login,logout}=this.props;

        return(
            <HeaderWrapper>
                <Link to='/'>
                <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>HOME</NavItem>
                    <NavItem className='left'>Download</NavItem>
                    {
                        login?
                            <NavItem onClick={logout} className='right'>Log Out</NavItem>:
                            <Link to='/login'><NavItem className='right'>Log In</NavItem></Link>


                    }
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>

                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused?'focused':''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}

                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused?'focused iconfont zoom':'iconfont zoom'}
                        >&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writing'>
                            <i className="iconfont">&#xe615;</i>
                            Writing</Button>
                    </Link>
                    <Button className='reg'>Sign Up</Button>


                </Addition>


            </HeaderWrapper>
        )
    }

}
const mapStateToProps=(state)=>{
    return{
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','login'])
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleInputFocus(list){
            (list.size===0)&&dispatch(actionCreators.getList());

            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){

            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else{
                    originAngle=0;
                }

            spin.style.transform='rotate('+(originAngle+360)+'deg)';
           if(page<totalPage){
               dispatch(actionCreators.changePage(page+1));
           }else{
               dispatch(actionCreators.changePage(1));
           }

        },
        logout(){
            dispatch(loginActionCreators.logout())
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);