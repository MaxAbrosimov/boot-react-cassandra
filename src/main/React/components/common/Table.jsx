import React from 'react'
import { Link } from 'react-router'
import RemoveIcon from 'material-ui/svg-icons/navigation/cancel'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


const ProductTable = ({headers, rows, deleteFunction}) => (
    <Table  style={{width: 800}}>
        <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
        >
            <TableRow>
                {headers.map(header => <TableHeaderColumn key={header}>{header}</TableHeaderColumn>)}
                {deleteFunction && <TableHeaderColumn style={{width: 20}}/>}
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} stripedRows={true}>
            {
                rows && rows.map((row, i) =>
                    <TableRow key={i}>
                        {
                            row.map(column =>
                                <TableRowColumn>
                                    {column}
                                </TableRowColumn>
                            )
                        }
                        {deleteFunction &&
                            <TableRowColumn style={{width: 75, paddingTop: 10}}>
                                {<RemoveIcon onClick={() => deleteFunction(p.id)}/>}
                            </TableRowColumn>
                        }
                    </TableRow>
                )
            }
        </TableBody>
    </Table>
);

export default ProductTable;