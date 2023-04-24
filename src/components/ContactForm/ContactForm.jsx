import css from "./ContactForm.module.css";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid/non-secure';
import { useDispatch } from "react-redux";
import { addContact } from "redux/contactsReducer";

export const ContactForm = () => {
	const dispatch = useDispatch();

	const submitForm = event => {
		event.preventDefault();
		const form = event.currentTarget;

		const contact = {
			name: form.elements.name.value,
			number: form.elements.number.value,
			id: nanoid()
		}

		dispatch(addContact(contact));

		form.reset();
	}

	return (
	<form className={css.form} onSubmit={submitForm}>
		<label className={css.label} htmlFor="name-id">
			Name
			<input
				className={css.input}
				id="name-id"
				type="text"
				name="name"
				pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
				required
			/>
		</label>
		<label className={css.label} htmlFor="number-id">
			<input
				className={css.input}
				id="number-id"
				type="tel"
				name="number"
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
				required
			/>
		</label>
		<button className={css.btnSubmit} type="submit">Add contact</button>
	</form>
	)
}

ContactForm.propTypes = {
	name: PropTypes.string,
	number: PropTypes.string,
}