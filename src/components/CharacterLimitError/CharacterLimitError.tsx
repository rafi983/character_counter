import { useAnalyzeText } from '@/hooks/useAnalyzeText';
import { Fragment } from 'react';
import iconInfo from '/assets/icon-info.svg';

const CharacterLimitError = () => {
  const { error } = useAnalyzeText();
  return (
    <Fragment>
      {error && (
        <span className="flex items-center gap-2 text-Regular-16 text-counter-orange-500">
          <img src={iconInfo} alt="icon info" />
          {error}
        </span>
      )}
    </Fragment>
  );
};

export default CharacterLimitError;