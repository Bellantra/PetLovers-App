/* eslint-disable react/prop-types */
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Paginations = ({ count, page, setPage, color }) => {
    const handleChange = (e, p) => {
        setPage(p)
    }
    return (
        <Stack spacing={2} fontSize={'20px'} marginBottom={10}>
            <Pagination
                count={count}
                page={page}
                shape="rounded"
                color={color}
                onChange={handleChange}
            />
        </Stack>
    )
}

export default Paginations
