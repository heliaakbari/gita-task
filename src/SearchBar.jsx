import Accordion from 'react-bootstrap/Accordion';
import SearchForm from './SearchForm';
export default function SearchBar({setSearchInput}) {
  return (
    <>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>جستجو</Accordion.Header>
        <Accordion.Body>
          <SearchForm setSearchInput={setSearchInput}></SearchForm>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}