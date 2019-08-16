import styled from 'styled-components';

export const HomeWrapper =styled.div`
    width:960px;
    overflow:hidden;
    margin:0 auto;
`;

export const HomeLeft =styled.div`
    float:left;
    width:625px;
    margin-left:15px;
    padding-top:30px;
    .banner-img{
    width:625px;
    height:270px;
    }
`;
export const HomeRight =styled.div`
    float:right;
    width:280px;
    
`;
export const TopicWrapper=styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
    
`;
export const TopicItem=styled.div`
    float:left;
    margin-left:18px;
    margin-bottom:18px;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    .topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
    }
`;
export const ListItem=styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
        }


`;
export const ImgInfo=styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
    font-size:13px;
    line-height:24px;
    color:#999;

`;
export const RecommendWrapper=styled.div`
    margin:26px 0;
    width:280px;


`;
export const RecommendItem=styled.div`
    width:280px;
    height:50px;
    background:url(${props=>props.imgUrl});
    background-size:contain;
    margin-bottom:6px;
`;
export const WriterWrapper=styled.div`
    width:280px;
    height:300px;
    margin:0 0 20px;
    position:relative;

`;
export const WriterTitle=styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;

`;
export const WriterSwitch=styled.span`
    float:right;
    font-size:14px;
    cursor:pointer;

`;
export const WriterItem=styled.div`
    overflow:hidden;
    margin:0 0 15px;
    .pic{
        display:block;
        float:left;
        width:48px;
        height:48px;
        
    }

`;

export const WriterInfo=styled.div`
    float:left;
    margin-left:15px;
    .title{
        display:block;
        font-size:14px;
        padding-top:10px;
        color:#333;
        cursor:pointer;
        text-decoration:none;
    }
    .desc{
        margin-top:5px;
        font-size:12px;
        color:#969696;

`;
export const WriterFollow=styled.a`
    display:block;
    float:right;
    color:#42c02e;
    font-size:14px;
    margin-top:5px;
    cursor:pointer;

`;
export const WriterAll=styled.a`
    position:absolute;
    left:0;
    width:278px;
    height:34px;
    font-size:13px;
    padding:7px 7px 7px 12px;
    color:#787878;
    background:#f7f7f7;
    border:1px solid #dcdcdc;
    border-radius:4px;
    text-align:center;
    box-sizing:border-box;
    cursor:pointer;
    text-decoration:none;
    
`;

export const LoadMore=styled.div`
    width:100%;
    height:40px;
    margin:30px 0;
    line-height:40px;
    text-align:center;
    background:#a5a5a5;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
    

`;
export const BackTop=styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height;60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
    
`;