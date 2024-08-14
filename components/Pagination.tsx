import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Text, Add, CaretLeft, CaretRight } from '../blocks';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let pageNumbers: number[] = [];
    let startPage, endPage;

    if (totalPages <= 5) {
        // less than 5 total pages so show all
        startPage = 1;
        endPage = totalPages;
    } else {
        // more than 5 total pages so calculate start and end pages
        if (currentPage <= 3) {
            startPage = 1;
            endPage = 5;
        } else if (currentPage + 2 >= totalPages) {
            startPage = totalPages - 4;
            endPage = totalPages;
        } else {
            startPage = currentPage - 2;
            endPage = currentPage + 2;
        }
    }

    // generate page numbers to be displayed
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const indexOfLastPageButton = currentPage + 3;
    const indexOfFirstPageButton = currentPage - 3;

    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            alignSelf="stretch"
            gap="spacing-xs"
        >
           
           <CaretLeft onClick={() => currentPage > 1 && paginate(currentPage - 1)} />
            {currentPage > 3 && totalPages > 5 && (
                <>
                    <Text css={{"margin-top": "3px"}} textAlign="center" variant='bes-semibold' color='text-tertiary' onClick={() => paginate(1)}>1</Text>
                    {currentPage > 4 && <Text css={{"margin-top": "3px"}} textAlign="center" variant='bes-semibold' color='text-tertiary'>...</Text>}
                </>
            )}

            {pageNumbers.map(number => (
                <Text css={{"margin-top": "3px"}} textAlign="center" variant='bes-semibold' color='text-tertiary' onClick={() => paginate(number)} key={number}>
                    {number}
                </Text>
            ))}

            {currentPage + 3 < totalPages && (
                <>
                    <Text css={{"margin-top": "3px"}} textAlign="center" variant='bes-semibold' color='text-tertiary'>...</Text>
                    <Text css={{"margin-top": "3px"}} textAlign="center" variant='bes-semibold' color='text-tertiary' onClick={() => paginate(totalPages)}>{totalPages}</Text>
                </>
            )}
            <CaretRight onClick={() => currentPage < totalPages && paginate(currentPage + 1)} />
        </Box>
    );
};

export default Pagination;
