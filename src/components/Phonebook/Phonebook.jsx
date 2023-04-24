import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';

export const Phonebook = () => {
	const contactsLists = useSelector(state => state.contacts.contactsList);

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm />
			{
				contactsLists.length > 0
				&&
				<>
					<h2>Contacts</h2>
					{/* <Filter value={filtered} handlerFilter={handlerFilter} /> */}
					<ContactList />
				</>
			}
		</>
	)
}
