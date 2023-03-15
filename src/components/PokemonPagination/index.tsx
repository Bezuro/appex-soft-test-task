import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type PokemonPaginationProps = {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

function PokemonPagination(props: PokemonPaginationProps) {
  const { currentPage, pageCount, onPageChange } = props;

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  useEffect(() => {
    if (currentPage <= 0) {
      setIsPrevDisabled(true);
    } else {
      setIsPrevDisabled(false);
    }

    if (currentPage >= pageCount - 1) {
      setIsNextDisabled(true);
    } else {
      setIsNextDisabled(false);
    }
  }, [currentPage]);

  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Button
        variant="outlined"
        onClick={handlePrevClick}
        sx={{ width: '100px' }}
        disabled={isPrevDisabled}
      >
        Prev
      </Button>
      <Typography>
        {currentPage + 1}/{pageCount}
      </Typography>
      <Button
        variant="outlined"
        onClick={handleNextClick}
        sx={{ width: '100px' }}
        disabled={isNextDisabled}
      >
        Next
      </Button>
    </Box>
  );
}

export default PokemonPagination;
