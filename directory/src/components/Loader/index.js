import React from "react";
import "./style.css";

class Loader extends React.Component {

    render() {
        return (
            <div className="main">
                <div className="loader">
                    <div classNAme="c0 c1 c2 c3 c4 c5 c6 c7 c8 c9">
                        {this.props.loadBar >= 0 ? <div className="block1"></div> : <div className="block2"></div>}
                    </div>
                    <div classNAme="c1 c2 c3 c4 c5 c6 c7 c8 c9">
                        {this.props.loadBar >= 0 ? <div className="block1"></div> : <div className="block2"></div>}
                    </div>
                    <div classNAme="c2 c3 c4 c5 c6 c7 c8 c9">
                        {this.props.loadBar >= 0 ? <div className="block1"></div> : <div className="block2"></div>}
                    </div>
                    <div classNAme="c3 c4 c5 c6 c7 c8 c9">
                        {this.props.loadBar >= 0 ? <div className="block1"></div> : <div className="block2"></div>}
                    </div>
                    <div classNAme="c4 c5 c6 c7 c8 c9">
                        {this.props.loadBar >= 0 ? <div className="block1"></div> : <div className="block2"></div>}
                    </div>
                    <div classNAme="c5 c6 c7 c8 c9">
                        {this.props.loadBar >= 0 ? <div className="block1"></div> : <div className="block2"></div>}
                    </div>
                    <div classNAme="c6 c7 c8 c9">
                        {this.props.loadBar >= 0 ? <div className="block1"></div> : <div className="block2"></div>}
                    </div>
                    <div classNAme="c7 c8 c9">
                        {this.props.loadBar >= 0 ? <div className="block1"></div> : <div className="block2"></div>}
                    </div>
                    <div classNAme="c8 c9">
                        {this.props.loadBar >= 0 ? <div className="block1"></div> : <div className="block2"></div>}
                    </div>
                    <div classNAme="c9">
                        {this.props.loadBar >= 0 ? <div className="block1"></div> : <div className="block2"></div>}
                    </div>
                </div>
            </div>
        );
    }
};

export default Loader;