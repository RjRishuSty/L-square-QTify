import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Box } from "@mui/material";
import styles from "./SongPagination.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function SongPagination({ songs }) {
  console.log("Songs", songs);

  // const [currentPage, setCurrentPage] = useState(1);
  if (!songs) return; 

  return (
    <>
      <Stack spacing={2} className={styles.pagination}>
        <Pagination count={10} className={styles.number}/>
      </Stack>
      <TableContainer component={Paper} className={styles.table}>
        <Table>
          <TableHead >
            <TableRow className={styles.thead}>
              <TableCell className={styles.tableCell} >Title</TableCell>
              <TableCell className={styles.tableCell} align="start">Artist</TableCell>
              <TableCell className={styles.tableCell} align="start">Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((item) => {
              const minutes = Math.floor(item.durationInMs / 60000);
              const seconds = Math.floor(
                (item.durationInMs - minutes * 60000) / 1000
              );
              return (
                <TableRow >
                  <TableCell align="left" className={styles.tr}>
                    <Box
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                      sx={{width:'55%'}}
                    >
                      <img src={item.image} className={styles.image} />
                      <p className={styles.tableContent}>{item.title}</p>
                    </Box>
                  </TableCell>
                  <TableCell align="start" display="flex" className={styles.tr} >
                    <Box sx={{width:'105%',display:'flex'}}>
                    {item.artists.map((artist) => {
                      return <p className={styles.tableContent}>{artist}</p>;
                    })}
                    </Box>
                  </TableCell>
                  <TableCell align="start"className={styles.tr} ><p className={styles.tableContent}>{`${minutes}:${seconds}`}</p></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
