import React, {useCallback, useEffect, useState} from "react";
import {Contacts} from "../../type";
import axiosApi from "../../axiosApi";
import Spinner from "../../components /Spinner/Spinner";

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contacts | null>(null);

  const fetchContacts = useCallback(async () => {
    const {data: response} = await axiosApi.get<Contacts | null>("/contacts.json");
    setContacts(response);
  }, []);

  useEffect(() => {
    void fetchContacts();
  }, [fetchContacts]);

  let myContacts = <Spinner/>;
  if (contacts) {
    myContacts = (
      <h3 className={"text-white"}>My contacts: {contacts.phone}</h3>
    );
  }

  return (
    <div className={"d-flex justify-content-center "}>
      {myContacts}
    </div>
  );
};

export default Contacts;