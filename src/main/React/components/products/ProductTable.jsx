import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

export default class ProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return <table className="table table-stripped table-bordered">
            <thead>
            <tr>
                <th>Product name</th>
            </tr>
            </thead>
            <tbody>
            {this.props.products.map(product => <tr key={product.id}>
                <td>
                    <Link to={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                </td>
            </tr>)}

            </tbody>
        </table>

    }
}
