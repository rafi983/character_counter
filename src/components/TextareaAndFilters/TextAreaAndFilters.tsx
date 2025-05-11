import CharacterLimitError from '../CharacterLimitError/CharacterLimitError';
import Filters from '../Filters/Filters';
import TextAreaInput from '../TextAreaInput/TextAreaInput';

const TextareaAndFilters = () => {
  return (
    <div className="my-12">
      <TextAreaInput />
      <CharacterLimitError />
      <Filters />
    </div>
  );
};

export default TextareaAndFilters;
