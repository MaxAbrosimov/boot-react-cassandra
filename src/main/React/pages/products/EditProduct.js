import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux'
import * as actionCreators from 'actions/products'


import ProductForm from 'components/products/ProductForm'

class EditProductCmp extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidUpdate(prevProps){
        if (prevProps.pid !== (this.props && this.props.pid)) {
            this.props.fetchProduct(this.props.pid);
        }
    }

    componentDidMount() {
        if (this.props.params && this.props.params.pid) {
            this.props.fetchProduct(this.props.params.pid);
        }
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <ProductForm
                                saveProduct = {this.props.saveProduct}
                                changeProduct = {this.props.changeProduct}
                                product = {this.props.currentProduct}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}


function mapStateToProps(state) {
    return {
        currentProduct: state.product.get('currentProduct')
    }
}

export const EditProduct = connect(mapStateToProps, actionCreators)(EditProductCmp)