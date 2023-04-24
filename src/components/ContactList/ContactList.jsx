import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "redux/contactsReducer";

export const ContactList = () => {
	const dispatch = useDispatch();
	const contactsList = useSelector(state => state.contacts.contactsList);

	return (
		<ul className={css.contacts__list}>
			{contactsList.map(({ name, id, number }) =>
				<li className={css.contact} key={id}>
					<span>{name}: {number}</span>
					<button
						id={id}
						onClick={() => dispatch(removeContact(id))}
						className={css.removeBtn}
						type="button">
						Delete
					</button>
				</li>
			)}
		</ul>
	)
}
