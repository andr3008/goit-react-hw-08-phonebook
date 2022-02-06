import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";
import { fetchContacts } from "../../redux/phonebook/phonebook-operations";
import { Wrapper, Title, TitleContacts, P } from "./ContactView.styled";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

export default function ContactView() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Wrapper>
      <Toaster />

      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>

      <Filter />
      {contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <P>Your phonebook is empty.</P>
      )}
    </Wrapper>
  );
}
