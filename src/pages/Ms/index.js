import React, { Component } from 'react'
import axios from 'axios'
import { Icon } from 'antd';
import { array } from 'prop-types';
export default class index extends Component {
    state={
        data:[],
        data2:[],
        bool:true
    }
    componentDidMount(){
        axios.get('./data3.json').then((res)=>{
            // console.log(res.data)
            this.setState({
                data:res.data
            })
        })
        axios.get('./data4.json').then((res)=>{
            // console.log(res.data)
            this.setState({
                data2:res.data
            })
        })
    }
    px(){
        let {data2,bool}=this.state;
        // console.log(data2)
        if(bool==true){
            function sortDate(a,b){
                return b.jl-a.jl
            }
            data2.sort(sortDate);
            this.setState({
                data2:data2,
                bool:false
            })
        }
        if(bool==false){
            function sortDate(a,b){
                return a.jl-b.jl
            }
            data2.sort(sortDate);
            this.setState({
                data2:data2,
                bool:true
            })
        }
       
        
    }


    render() {
        let {data,data2}=this.state;

        return (
            <React.Fragment>
                <div className="mtp">
                    <input type="text" placeholder="输入商家名、品类或商圈"/>
                </div>
                <div className="ms">
                    <div className="mt">
                        <div className="le">
                            <button>打开美团APP</button>
                        </div>
                        <div className="ri">
                            <button>下载APP优惠大</button>
                        </div>
                    </div>
                    <div className="jlt">
                    {
                        data.map((v,i)=><dl key={i}>
                            <dt><img src={v.img} alt=""/></dt>
                            <dd>{v.name}</dd>
                        </dl>)
                    }    
                    </div>
                    <div className="sp">
                        <ul>
                            <li><span>全部类目</span><Icon type="caret-down" /></li>
                            <li><span>附近商家</span><Icon type="caret-down" /></li>
                            <li onClick={()=>this.px()}><span>智能排序</span><Icon type="caret-down" /></li>
                            <li><span>筛选</span><Icon type="caret-down" /></li>
                        </ul>
                        <div className="wp">
                        {
                            data2.map((v,i)=><dl key={i}>
                                <dt><img src={v.img} alt=""/></dt>
                                <dd>
                                    <p>{v.name}</p>
                                    <span>￥{v.sum}/人</span><h3>上地{v.jl}m</h3><br/>
                                    <span>{v.lx}</span>
                                    <h1>支持外卖</h1>
                                </dd>
                            </dl>)
                        }
                            

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
