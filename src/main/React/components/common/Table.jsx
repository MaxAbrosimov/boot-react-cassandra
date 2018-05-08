import React from 'react'
import RemoveIcon from 'material-ui/svg-icons/navigation/cancel'
import ButtonWithDialog from './ButtonWithDialog'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const styles = {
    deleteButton: {
        width: 75,
        paddingTop: 10,
        cursor: 'pointer'
    }
};

const TableComp = ({headers, rows, deleteAction}) => (
    <Table  style={{width: 800}}>
        <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
        >
            <TableRow>
                {headers.map(header => <TableHeaderColumn key={header}>{header}</TableHeaderColumn>)}
                {deleteAction && <TableHeaderColumn style={{width: 20}}/>}
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} stripedRows={true}>
            {
                rows && rows.map((row, i) =>
                    <TableRow key={i}>
                        {
                            row.columns.map(column =>
                                <TableRowColumn>
                                    {column}
                                </TableRowColumn>
                            )
                        }
                        {deleteAction &&
                            <TableRowColumn style={styles.deleteButton}>
                                <ButtonWithDialog deleteAction={() => deleteAction(row.id)}>
                                    <RemoveIcon />
                                </ButtonWithDialog>
                            </TableRowColumn>
                        }
                    </TableRow>
                )
            }
        </TableBody>
    </Table>
);

export default TableComp;