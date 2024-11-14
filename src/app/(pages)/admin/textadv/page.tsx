"use client";
import { Button, Spinner } from "@/components";
import { TEXTADV_API_URL } from "@/etc/config/apiConstants";
import { ALL_TEXTADV_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { DeleteBlock } from "../components/elements";
import { TextAdvCashType } from "@/types/CashTypes";

const AdminTextAdvPage: React.FC = () => {
  const { data: sections, loading } = useFetch(
    ALL_TEXTADV_QUERY_KEY,
    TEXTADV_API_URL
  );
  if (loading) {
    return <Spinner />;
  }

  const sortedData = sections
    ? [...sections].sort((a, b) => a.textadvid - b.textadvid)
    : [];

  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex w-full justify-center">
          <Link href={`/admin/textadv/new`}>
            <Button
              color="btn-primary"
              style="btn-outline m-3"
            >New textadv</Button>
          </Link>
        </div>
        <table className="table table-zebra my-2">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th className="hidden lg:block">Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sortedData?.map((item: TextAdvCashType) => (
              <>
                <tr key={item._id}>
                  <td>{item.textadvid}</td>
                  <td>{item.advname}</td>
                  <td>{item.body}</td>
                  <td>
                    <Link href={`/admin/textadv/${item._id}`}>
                      <Button
                        color="btn-warning"
                        style="me-2 mb-2"
                      ><CiEdit size={25} /></Button>
                    </Link>
                  </td>
                  <td>
                    <DeleteBlock path="textadv" id={item._id} />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminTextAdvPage;
