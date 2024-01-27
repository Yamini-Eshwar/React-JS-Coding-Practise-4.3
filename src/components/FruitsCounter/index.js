import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component{
    state = {count1:0, count2:0}
    onEatMango =() =>{
        this.setState(prevState =>{
            return {count1: prevState.count1 +1}
        })
    }
    onEatBanana = () =>{
            this.setState(prevState =>{
                return {count2: prevState.count2 +1}
            })
    }
    render(){
        const {count1,count2} = this.state;
        return(
           <div className='container'>
                <div className="fruit-container">
                    <h1>Bob ate <span className='count'>{count1}</span> mangoes <span className='count'>{count2}</span> bananas</h1>
                    <div>
                        <img className="img1" src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt ="" />
                        <img className="img2" src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="" />
                    </div>
                    <div className="btn-container">
                        <button onClick={this.onEatMango}>Eat Mango</button>
                        <button onClick={this.onEatBanana} className='btn2'>Eat Banana</button>
                    </div>
                </div>
           </div>
        )
    }
}

export default FruitsCounter