import React from 'react';
import TablePagination from '@mui/material/TablePagination';

const Paginaiton = ({ count, rowsPerPage, page, onPageChange, onRowsPerPageChange }) => {
    return (
        <TablePagination
            rowsPerPageOptions={[4, 8, 12]}
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
        />
    );
};

export default Paginaiton;
