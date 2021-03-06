import { Box, Slide } from '@material-ui/core';
import React from 'react';
import { VIEW_TRANSITION_TIME } from '../../constants';
import { AppState } from '../../types';
import { CloseButton } from './TitleBanner/CloseButton';
import { Title } from './TitleBanner/Title';

interface Props {
  state: AppState;
  onClick(e: React.MouseEvent<HTMLAnchorElement>): void;
}

export const TitleBanner: React.FC<Props> = ({ state, onClick }) => {
  return (
    <Slide
      in={state.cardViewOn}
      direction={'right'}
      timeout={VIEW_TRANSITION_TIME}
      unmountOnExit={true}
    >
      <Box style={styles} boxShadow={3} borderRadius={1.5}>
        <Title state={state} />
        <CloseButton onClick={onClick} />
      </Box>
    </Slide>
  );
};

const styles = {
  backgroundColor: 'var(--color-red)',
  height: 'var(--overview-height)',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '45%',
};
