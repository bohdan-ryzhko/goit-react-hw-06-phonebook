import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'services/getFilteredContactsByName';

export const Phonebook = () => {
	const contactsLists = useSelector(state => state.contacts.contactsList);
	const filteredValue = useSelector(state => state.filter);

	const filteredContacts = getFilteredContacts(filteredValue, contactsLists);

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm />
			{
				filteredContacts.length > 0
				&&
				<>
					<h2>Contacts</h2>
					<Filter />
					<ContactList filteredContacts={filteredContacts} />
				</>
			}
		</>
	)
}
