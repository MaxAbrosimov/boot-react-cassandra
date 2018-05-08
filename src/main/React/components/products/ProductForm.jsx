import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {TextField} from 'material-ui'

export default class ProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    onSubmit(e){
        e.preventDefault()
        this.props.saveProduct(this.props.product)
    }

    render() {
        const {product} = this.props;
        return <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
                <label style={{paddingRight: 10}}>Product name</label>
                <TextField id="name" value={(product && product.name) || ''} onChange={(e, val) => this.props.changeProduct({name: val})} />
            </div>
            <button type="submit" className="btn btn-fill btn-primary">Save</button>
        </form>
    }
}
