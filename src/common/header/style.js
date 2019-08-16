import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
export const HeaderWrapper=styled.div`
    z-index:1;
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;

`;
export const Logo=styled.div`
    position:absolute;
    top:0;
    left:0;
    display:inline-block;
    width:100px;
    height:56px;
    margin-left:50px;
    background:url(${logoPic});
    background-size:contain;
    
`;
export const Nav=styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    
    
    
`;
export const NavItem=styled.div`
    line-height:56px;
    font-size:17px;
    padding:0 15px;
    color:#333;
    &.left{
    float:left;
    }
    &.right{
    float:right;
    color:#969696;
    }
    &.active{
    color:#ea6f5a;     
    
`;
export const NavSearch=styled.input.attrs({
    placeholder:'search'
})`
    width:160px;
    height:38px;
    font-size:14px;
    margin-top:9px;
    padding:0 40px 0 20px;
    border:1px solid #eee;
    outline:none;
    border-radius:19px;
    background:#eee;
    color:#666;
    &::placeholder{
    color:#999;
    }
    &.focused{
    width:240px
    }
     &.slide-enter{
        transition:all .2s ease-out;
     }
     &.slide-enter-active{
        width:240px;
     }
     &.slide-exit{
        transition:all .2s ease-out;
     }
     &.slide-exit-active{
        width:160px;
     }
    
    
`;
export const SearchInfo=styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#fff;
    border-radius:4px;
`;
export const SearchInfoTitle=styled.div`
     margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;

`;
export const SearchInfoList=styled.div`
    overflow:hidden;
    padding:0 15px 20px 15px;

`;
export const SearchInfoSwitch=styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-in;
        transform-origin:center center;
    }

`;
export const SearchInfoItem=styled.a`
     display:inline-block;
    margin-right:10px;
    margin-bottom:10px;
    float:left;
    font-size:13px;
    font-family:'arial';
    color:#787878;
    line-height:20px;
    padding:0 5px;
    border: 1px solid #ddd;
    border-radius:3px;

`;
export const Addition=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
    margin-right:100px;

    
    
`;
export const Button=styled.div`
   float:right;
    line-height:38px;
    margin-top:9px;
    margin-right:20px;
    border:1px solid #ea6f5a;
    border-radius:19px;
    padding:0 20px;
    font-size:15px;
    &.reg{
    color:#ea6f5a;
    }
    &.writing{
    background:#ea6f5a;
    color:#fff;
    }
    
    
`;
export const SearchWrapper=styled.div`
    float:left;
     position:relative;
    
    .zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    &.focused{
        background:#777;
        color:#fff;
    }
    }
    
    
    
`;