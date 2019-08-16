import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriterWrapper,WriterTitle,WriterSwitch,WriterItem,WriterInfo,WriterFollow,WriterAll} from '../style';
class Writer extends PureComponent{
    render() {
        const {list} = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>
                    Writers
                    <WriterSwitch>Change</WriterSwitch>
                </WriterTitle>
                {
                    list.map((item)=>{
                        return(
                            <WriterItem key={item.get('id')}>
                                <img className='pic' alt='' src={item.get('imgUrl')}/>
                                <WriterInfo>
                                    <a href="/" target='_blank' className='title'>{item.get('title')}</a>
                                    <p className='desc'>{item.get('desc')}</p>
                                </WriterInfo>
                                <WriterFollow>+关注</WriterFollow>
                            </WriterItem>
                        )
                    })
                }
                <WriterAll href="/" target='_blank'>查看全部</WriterAll>

            </WriterWrapper>
        );
    }
}
const mapState=(state)=>({
    list:state.getIn(['home','writerList'])
})
export default connect(mapState,null)(Writer);