import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Stack, Switch, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';

export default function Tablelist(props) {

    const TblHead = styled(TableCell)(({ theme }) => ({
        fontSize: '15px',
        fontWeight: 'bolder',
        color: 'Black',
        align: 'left',
        textWrap: 'nowrap',
    }));

    const Tblline = styled(TableCell)(({ theme }) => ({
        fontSize: '15px',
        fontWeight: 'bold',
        borderBottom: 'none',
    }));

    const Cell = styled(TableCell)(({ theme }) => ({
        borderBottom: 'none',
        align: "left",
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
        overflow: 'scroll',
        overflowY: 'hidden',
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

    const BBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        width: '130px',
        alignItems: 'center',
        justifyContent: 'space-between'
    }));

    const StatusText = styled(Typography)(({ theme, isOnline }) => ({
        color: isOnline ? 'green' : 'red',
        fontWeight: '500',
        marginLeft: '8px',
    }));

    const initialMembers = [
        {
            memImg: "src/assets/Images/pp/George_Fernandes.jpg",
            name: 'George Fernandes',
            Designation: 'Visual Designer',
            Dept: 'Design',
            signal: true,
            op: true,
            rptimg: "src/assets/Images/pp/Steven.jpg",
            rpname: "Steven",
            sum: true,
            role: "Employee",
            email: "georgefernandes@gmail.com",
            exp: "3 Yrs 4 Mon",
            online: false,
        },
        {
            memImg: "src/assets/Images/pp/Emilie.jpg",
            name: 'Emilie Clarke',
            Designation: 'Visual Designer',
            Dept: 'Design',
            signal: true,
            op: true,
            rptimg: "src/assets/Images/pp/Steven.jpg",
            rpname: "Steven",
            sum: true,
            role: "Employee",
            email: "emilie145@gmail.com",
            exp: "3 Yrs 4 Mon",
            online: false,
        },
        {
            memImg: "src/assets/Images/pp/Jason.jpg",
            name: 'Jason Dominic',
            Designation: 'Full Stack Developer',
            Dept: 'Engineering',
            signal: true,
            op: true,
            rptimg: "src/assets/Images/pp/Bruce.jpg",
            rpname: "Alica Dsouza",
            sum: 0,
            role: "Employee",
            email: "dominicjason22@gmail.com",
            exp: "3 Yrs 4 Mon",
            online: true,
        },
        {
            memImg: "src/assets/Images/pp/Bruce_banner.jpg",
            name: 'Bruce Banner',
            Designation: 'Front End Developer',
            Dept: 'Engineering',
            signal: true,
            op: true,
            rptimg: "src/assets/Images/pp/Steven.jpg",
            rpname: "Steven",
            sum: true,
            role: "Employee",
            email: "bruce.banner@gmail.com",
            exp: "3 Yrs 4 Mon",
            online: false,
        },
    ];

    const [members, setMembers] = useState(initialMembers);

    const title = "Excellent Last Update 23 Jan 2023";

    const toggleOnlineStatus = (index) => {
        const updatedMembers = [...members];
        updatedMembers[index].online = !updatedMembers[index].online;
        setMembers(updatedMembers);
    };

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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members.map((member, index) => (
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
                            <Cell>{member.signal ?
                                <Sig arrow title={title} placement='bottom-start'>
                                    <SigC backgroundColor='#7DDA58' color='black' >C</SigC>
                                    <SigC backgroundColor='green' color='white'>E</SigC>
                                    <SigC backgroundColor='orange' color='black' >T</SigC>
                                    <SigC backgroundColor='yellow' color='black' >D</SigC>
                                    <SigC backgroundColor='red' color='white' >U</SigC>
                                </Sig>
                                : "No"}</Cell>
                            <Cell>
                                <Per src='src/assets/Images/Performance.png'></Per>
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
                                        onChange={() => toggleOnlineStatus(index)}
                                    />
                                    <StatusText isOnline={member.online}>
                                        {member.online ? "Active" : "Deactive"}
                                    </StatusText>
                                </Box>
                            </Cell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TblCon>
    );
}
