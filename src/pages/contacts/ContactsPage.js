import React from 'react';
import { Contacts } from '../../components/Contacts/Contacts';
import { v4 as uuid4 } from "uuid";

const ContactsPage = () => {
  const contacts = [{
    id: uuid4(),
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  }, {
    id: uuid4(),
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  }, {
    id: uuid4(),
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    gender: "unknown"
  }, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  }, {
    id: uuid4(),
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  }, {
    id: uuid4(),
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
    }];
  
  return (
    <div className="container">
      <Contacts contacts={contacts} />
    </div>
  );
};

export default ContactsPage;
