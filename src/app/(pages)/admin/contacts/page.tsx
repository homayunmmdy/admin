"use client";
import { Spinner } from "@/components";
import { CONTACTS_API_URL } from "@/etc/config/apiConstants";
import { CONTACTS_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import { ContactsCashType } from "@/types/CashTypes";
import { DeleteBlock } from "../components/elements";

const ContactsPage = () => {
  const { data: contactData, loading } = useFetch(
    CONTACTS_QUERY_KEY,
    CONTACTS_API_URL
  );
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="p-5">
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>message</th>
                <th>delete</th>
              </tr>
            </thead>
            {contactData?.map((data: ContactsCashType) => (
              <tbody key={data._id}>
                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.message}</td>
                  <td>
                    <DeleteBlock path="contacts" id={data._id} />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
