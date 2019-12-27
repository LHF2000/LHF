import React, { Component } from 'react'
import { Icon } from 'antd';
import axios from 'axios'
import {Switch,Route,Redirect,NavLink} from 'react-router-dom'
import { Carousel } from 'antd';



export default class index extends Component {
    state={
        data:[],
        data2:[]
    }
    componentDidMount(){
        axios.get('./data.json').then(res=>{
            // console.log(res.data)
            this.setState({
                data:res.data
            })
        })
        axios.get('./data2.json').then(res=>{
            // console.log(res.data)
            this.setState({
                data2:res.data
            })
        })
    }
    render() {
        let {data,data2}=this.state;
        // console.log(data,data2)
        return (
            <React.Fragment>
                <div className="top">
                    <div className="hle">北京<span><Icon type="down" /></span></div>
                    <div className="hc"><input type="text" placeholder="请输入商家名，品类或者商圈"/></div>
                    <div className="hri"><Icon type="user" /></div>
                </div>
                <div className="footer">
                    <div className="img">
                        <img src="./11.jpg" alt=""/>
                    </div>
                    <div className="jlt">
                        <Carousel autoplay>
                            <div>
                            { 
                                data.map((v,i)=><NavLink to="/ms" key={i}><dl>
                                    <dt><img src={v.img} alt=""/></dt>
                                    <dd>{v.name}</dd>
                                </dl></NavLink>)
                            }
                            </div>
                            <div>
                            { 
                                data.map((v,i)=><NavLink to="/ms" key={i}><dl>
                                    <dt><img src={v.img} alt=""/></dt>
                                    <dd>{v.name}</dd>
                                </dl></NavLink>)
                            }
                            </div>
                        </Carousel>

                    
                    </div>
                    <p>猜你喜欢</p>
                    <div className="xh">
                        
                        { 
                            data2.map((v,i)=><dl key={i}>
                                <dt><img src={v.img} alt=""/></dt>
                                <dd>
                                    <p>{v.name}</p>
                                    <h3>{v.title}</h3>
                                    <span>{v.price}</span>元 门市价：{v.price2}元<h2>已销售{v.xs}</h2>

                                </dd>
                            </dl>)
                        }
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
