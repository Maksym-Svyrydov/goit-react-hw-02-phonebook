import { FilterContaner, FilterInput } from './Filter.styled';
const Filter = ({ handleFilterName }) => {
  return (
    <FilterContaner>
      <label htmlFor="filter">Find contacts by name:</label>
      <FilterInput
        id="filter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleFilterName}
      />
    </FilterContaner>
  );
};
export default Filter;
