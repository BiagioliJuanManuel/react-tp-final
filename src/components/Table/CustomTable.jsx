import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react"

export const CustomTable = ({data})=>{

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setLoading(false);
        }, 1000);
        return ()=> clearTimeout(timeout);
    }, [])

    if(loading){
        return <CircularProgress />
    }

    if (!data || data.length === 0) {
        return (
            <Typography>
                No data available
            </Typography>
        );
    }

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {data.map((d)=>(
                            <TableCell key={d.id}>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    {d.title}
                                </Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {data.map((d)=>(
                            <TableCell key={d.id}>
                                <Typography>
                                    {'relleno'}
                                </Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}