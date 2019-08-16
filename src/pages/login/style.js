import styled from 'styled-components';

export const LoginWrapper=styled.div`
    z-index:0;
    position:absolute;
    top:56px;
    left:0;
    right:0;
    bottom:0;
    background:#eee;
`;
export const LoginBox=styled.div`
    width:400px;
    height:220px;
    margin:80px auto;
    background:#fff;
    padding:40px 50px 30px;
    background:#fff;
    border-radius:4px;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    vertical-align:middle;
    box-sizing:border-box;    
    
`;
export const Input=styled.input`
    display:block;
    width:200px;
    height:30px;
    line-height:30px;
    padding:0 10px;
    margin:10px auto;
    color:#777;
`;

export const Button=styled.div`
    width:220px;
    height:30px;
    line-height:30px;
    color:#fff;
    border-radius:15px;
    background:#3194d0;
    margin:10px auto;
    text-align:center;
    cursor:pointer;
`;