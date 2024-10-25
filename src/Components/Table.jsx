// Tablelist.js
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Stack, Switch, Tooltip, Typography, Button } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Paginaiton from './Pagination';
import initialMembers from './MembersList';

const TblHead = styled(TableCell)(({ theme }) => ({
    fontSize: '15px',
    fontWeight: 'bolder',
    color: 'Black',
    align: 'left',
    textWrap: 'nowrap',
}));

const Pencil = styled(CreateOutlinedIcon)(() => ({}));

const Tblline = styled(TableCell)(({ theme }) => ({
    fontSize: '15px',
    fontWeight: 'bold',
    borderBottom: 'none',
}));

const Cell = styled(TableCell)(({ theme }) => ({
    borderBottom: 'none',
    align: 'left',
}));

const CellAction = styled(TableCell)(({ theme }) => ({
    borderBottom: 'none',
    align: 'left',
    backgroundColor: '#F5F7FA',
    height: 'fit-content',
    width: '160px',
    position: 'absolute',
    right: 0,
    zIndex: 1,
}));

const FBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '160px',
    alignItems: 'center',
    justifyContent: "space-between",
}));

const SigC = styled(Typography)(({ theme }) => ({
    fontSize: '12px',
    padding: '2px',
    height: '17px',
    width: '17px',
    textAlign: 'center',
    borderRadius: '25px',
    fontWeight: '800',
}));

const TblCon = styled(TableContainer)(({ theme }) => ({
    backgroundColor: '#F5F7FA',
    borderRadius: '10px',
    overflowY: 'scroll',
    scrollbarWidth: 'none',
}));

const Name = styled(Stack)(({ theme }) => ({
    display: 'flex',
    width: '11.5vw',
    alignItems: 'center',
}));

const MemName = styled(Typography)(({ theme }) => ({
    fontSize: '15px',
    width: 'fit-content',
    align: 'left',
}));

const MemDes = styled(Typography)(({ theme }) => ({
    fontSize: '15px',
    textAlign: 'left',
    width: '150px',
    alignItems: 'center',
}));

const ProPic = styled(Avatar)(({ theme }) => ({
    width: '25px',
    height: '25px',
}));

const Sig = styled(Tooltip)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '150px',
}));

const Score = styled(Typography)(({ theme }) => ({
    color: '#14BE05',
    fontWeight: '400',
    fontSize: '12px'
}));

const Per = styled(Avatar)(({ theme }) => ({
    height: '50px',
    width: '50px',
    placeSelf: 'center',
}));

const FeedBtn = styled(Button)(({ theme }) => ({
    backgroundColor: '#49C792',
    color: 'white',
    height: '25px',
    width: 'fit-content',
    textWrap: 'nowrap',
}));

const BBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '130px',
    alignItems: 'center',
    position: 'sticky',
    right: 0,
    zIndex: 1,
    justifyContent: 'space-between'
}));

const StatusText = styled(Typography)(({ theme, isOnline }) => ({
    color: isOnline ? 'green' : 'red',
    fontWeight: '300',
    marginLeft: '8px',
}));

export default function Tablelist() {
    const [members, setMembers] = useState(initialMembers);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const toggleActive = (index) => {
        const updatedMembers = [...members];
        updatedMembers[index].online = !updatedMembers[index].online;
        setMembers(updatedMembers);
    };

    const paginatedMembers = members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <TblCon>
            <Table>
                <TableHead>
                    <TableRow>
                        <TblHead>Name</TblHead>
                        <TblHead>Designation</TblHead>
                        <TblHead>Department</TblHead>
                        <TblHead>Signals</TblHead>
                        <TblHead>Overall Performance</TblHead>
                        <TblHead>Reporting To</TblHead>
                        <TblHead>Role</TblHead>
                        <TblHead>Email</TblHead>
                        <TblHead>Experience</TblHead>
                        <TblHead>Status</TblHead>
                        <TblHead>Action</TblHead>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedMembers.map((member, index) => (
                        <TableRow key={index} sx={{ borderBottom: 'none' }}>
                            <Tblline>
                                <Name direction="row" spacing={2}>
                                    <ProPic src={member.memImg} />
                                    <MemName>{member.name}</MemName>
                                </Name>
                            </Tblline>
                            <Cell>
                                <MemDes>{member.Designation}</MemDes>
                            </Cell>
                            <Cell>{member.Dept}</Cell>
                            <Cell>
                                {member.signal ? (
                                    <Sig arrow title="Excellent Last Update 23 Jan 2023" placement='bottom-start'>
                                        <SigC backgroundColor='#7DDA58' color='black'>C</SigC>
                                        <SigC backgroundColor='green' color='white'>E</SigC>
                                        <SigC backgroundColor='orange' color='black'>T</SigC>
                                        <SigC backgroundColor='yellow' color='black'>D</SigC>
                                        <SigC backgroundColor='red' color='white'>U</SigC>
                                    </Sig>
                                ) : "No"}
                            </Cell>
                            <Cell>
                                <Per src='src/assets/Images/Performance.png' />
                            </Cell>
                            <Cell>
                                <Name direction="row" spacing={2}>
                                    <Tooltip>
                                        <BBox display='flex'>
                                            <ProPic src={member.rptimg} />
                                            <MemName>{member.rpname}</MemName>
                                            <Score>{member.sum ? "+ 3 More" : ""}</Score>
                                        </BBox>
                                    </Tooltip>
                                </Name>
                            </Cell>
                            <Cell>{member.role}</Cell>
                            <Cell>{member.email}</Cell>
                            <Cell>{member.exp}</Cell>
                            <Cell>
                                <Box display='flex' alignItems='center'>
                                    <Switch
                                        checked={member.online}
                                        onChange={() => toggleActive(index)}
                                    />
                                    <StatusText isOnline={member.online}>
                                        {member.online ? "Active" : "Deactive"}
                                    </StatusText>
                                </Box>
                            </Cell>
                            <CellAction>
                                <FBox>
                                    <FeedBtn>Add feedback</FeedBtn>
                                    <Pencil sx={{ color: '#49C792' }} />
                                </FBox>
                            </CellAction>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Paginaiton
                count={members.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TblCon>
    );
}
