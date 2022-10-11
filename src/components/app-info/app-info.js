import { Component } from "react/cjs/react.production.min";
import "./app-info.css";

class AppInfo extends Component{

    render () {
        const {onemployess, onIncreased} = this.props;
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников:{` ${onemployess}`} </h2>
                <h2>Премию получат:{`${onIncreased}`}</h2>
            </div>
        )
    }
}

export default AppInfo;