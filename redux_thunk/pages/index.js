import Head from "next/head";
import Image from "next/image";
import UserList from "../components/UserList";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/getUsers";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return <UserList />;
}
