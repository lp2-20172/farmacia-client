import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import { getList, del } from '../../actions/producto-action'
import { connect } from 'react-redux'

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import {
    Link
} from 'react-router-dom'


class List extends Component {
    componentWillMount() {
        this.props.getList("")
    }

    change = (e) => {
        const q = e.target.value
        console.log("q:" + q)
        this.props.getList(q)
    }

    handleClick = () => {
        this.props.history.push('/catalogo/productos/new');
    }

    render() {
        let { list, del } = this.props
        if (list) {
            
        } else{
            list =[]

        }

        return (

            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            P
                          </Avatar>
                    }
                    title="Lista de Productos"
                    subheader="Novieembre 8, del 2017"
                />

                <CardContent>
                    <Typography component="p">
                        q={this.props.q}
                    </Typography>

                    <TextField
                        id="search"
                        label="Search"
                        value={this.props.q}
                        onChange={this.change}
                        margin="normal"
                    />

                    <Button fab color="primary" aria-label="add" onClick={this.handleClick}>
                        <AddIcon />
                    </Button>

                    <Paper style={{
                        overflowX: 'auto',
                    }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell >codigo</TableCell>
                                    <TableCell >Nombre</TableCell>
                                    <TableCell >FechaVen</TableCell>
                                    <TableCell >UnidadMed</TableCell>
                                    <TableCell >PrecioVenta</TableCell>
                                    <TableCell >Almacen</TableCell>
                                    <TableCell >Categoria</TableCell>
                                    <TableCell >Edit</TableCell>
                                    <TableCell >Delete</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {list.map((d, index) =>
                                    <TableRow key={index}>
                                        <TableCell numeric>{index + 1}</TableCell>
                                        <TableCell >{d.codigo}</TableCell>
                                        <TableCell >{d.nombre}</TableCell>
                                        <TableCell >{d.fechaVen}</TableCell>
                                        <TableCell >{d.unidad_med}</TableCell>
                                        <TableCell >s/.{d.precio_venta}</TableCell>
                                        <TableCell >{d.almacen}</TableCell>
                                        <TableCell >{d.categoria}</TableCell>
                                        
                                        <TableCell >
                                            <Link to={`/catalogo/productos/edit/${d.id}`} className="ui basic button green">Edit</Link>
                                        </TableCell>
                                        <TableCell >
                                            <Button onClick={() => del(d.id, this.props.history)} >Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Paper>
                </CardContent>

            </Card>
        );
    }
}
List.propTypes = {
    list: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        list: state.producto.list
    }
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
        getList: (q) => { dispatch(getList(q)) },
        del: (id, h) => { dispatch(del(id, h)) }
    }
}
*/
export default connect(mapStateToProps, {
    getList,
    del
})(List)