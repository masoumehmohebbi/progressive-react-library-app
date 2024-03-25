import { useSearchParams } from 'react-router-dom';
import Select from './Select';
interface OptionsType {
  id: string | number;
  name: string;
}
interface FilterDropDownProps {
  options: OptionsType[];
  filterField: string;
}
const FilterDropDown = ({ options, filterField }: FilterDropDownProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || '';

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);

    if (e.target.value === 'همه') {
      searchParams.delete(filterField);
      setSearchParams(searchParams);
    }
  }

  return <Select options={options} value={value} onChange={handleChange} />;
};

export default FilterDropDown;
