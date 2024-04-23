import Accordion from 'react-bootstrap/Accordion';
import SearchForm from './SearchForm';
export default function SearchBar() {
  return (
    <>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>جستجو</Accordion.Header>
        <Accordion.Body>
          <SearchForm></SearchForm>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}
