import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux'
import * as actionCreators from 'actions/products'

import ProductTable from 'components/products/ProductTable'

class ProductsListCmp extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount(){
        this.props.loadAllProducts()
    }

    getProducts(){
        if(!this.props.products){
            return []
        }

        return this.props.products
    }

    render() {
        return <ProductTable products = {this.getProducts()} deleteProduct={this.props.deleteProduct}/>;
    }
}


function mapStateToProps(state) {
    return {
        needRefresh: state.product.needRefresh,
        products: state.product.products
    }
}

export const ProductsList = connect(mapStateToProps, actionCreators)(ProductsListCmp)